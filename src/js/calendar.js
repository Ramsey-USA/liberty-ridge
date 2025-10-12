/**
 * Calendar functionality for consultation booking
 * Integrates with Firebase Firestore for appointment storage
 */

class CalendarManager {
  constructor () {
    this.currentDate = new Date();
    this.selectedDate = null;
    this.availableSlots = [];
    this.bookedSlots = [];
    this.calendarContainer = null;
  }

  /**
   * Initialize the calendar
   */
  init () {
    this.calendarContainer = document.getElementById('calendar');
    if (!this.calendarContainer) {
      console.error('Calendar container not found');
      return;
    }

    this.render();
    this.loadAvailableSlots();
  }

  /**
   * Render the calendar UI
   */
  render () {
    const calendarHTML = `
      <div class="calendar-header">
        <button class="calendar-nav" id="prevMonth">
          <span class="material-icons">chevron_left</span>
        </button>
        <h3 class="calendar-title" id="calendarTitle">
          ${this.getMonthYearString()}
        </h3>
        <button class="calendar-nav" id="nextMonth">
          <span class="material-icons">chevron_right</span>
        </button>
      </div>
      <div class="calendar-weekdays">
        <div class="weekday">Sun</div>
        <div class="weekday">Mon</div>
        <div class="weekday">Tue</div>
        <div class="weekday">Wed</div>
        <div class="weekday">Thu</div>
        <div class="weekday">Fri</div>
        <div class="weekday">Sat</div>
      </div>
      <div class="calendar-days" id="calendarDays">
        ${this.generateCalendarDays()}
      </div>
      <div class="time-slots" id="timeSlots" style="display: none;">
        <h4>Available Times</h4>
        <div class="time-slot-grid" id="timeSlotGrid">
          <!-- Time slots will be populated here -->
        </div>
      </div>
    `;

    this.calendarContainer.innerHTML = calendarHTML;
    this.attachEventListeners();
  }

  /**
   * Generate calendar days HTML
   */
  generateCalendarDays () {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    let daysHTML = '';

    // Previous month's trailing days
    const prevMonth = new Date(year, month - 1, 0);
    const prevMonthDays = prevMonth.getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const day = prevMonthDays - i;
      daysHTML += `<div class="calendar-day other-month">${day}</div>`;
    }

    // Current month days
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDay = new Date(year, month, day);
      const isToday = this.isSameDay(currentDay, today);
      const isPast = currentDay < today && !isToday;
      const isSelected = this.selectedDate && this.isSameDay(currentDay, this.selectedDate);
      const hasAvailability = this.hasAvailableSlots(currentDay);

      let classes = 'calendar-day';
      if (isToday) classes += ' today';
      if (isPast) classes += ' past';
      if (isSelected) classes += ' selected';
      if (hasAvailability && !isPast) classes += ' available';

      daysHTML += `
        <div class="${classes}" 
             data-date="${year}-${month}-${day}"
             ${!isPast && hasAvailability ? 'data-clickable="true"' : ''}>
          ${day}
        </div>
      `;
    }

    // Next month's leading days
    const totalCells = Math.ceil((startingDayOfWeek + daysInMonth) / 7) * 7;
    const remainingCells = totalCells - (startingDayOfWeek + daysInMonth);
    for (let day = 1; day <= remainingCells; day++) {
      daysHTML += `<div class="calendar-day other-month">${day}</div>`;
    }

    return daysHTML;
  }

  /**
   * Attach event listeners
   */
  attachEventListeners () {
    // Navigation buttons
    document.getElementById('prevMonth')?.addEventListener('click', () => {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
      this.render();
    });

    document.getElementById('nextMonth')?.addEventListener('click', () => {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
      this.render();
    });

    // Day selection
    const dayElements = document.querySelectorAll('.calendar-day[data-clickable="true"]');
    dayElements.forEach(dayElement => {
      dayElement.addEventListener('click', (e) => {
        const dateStr = e.target.getAttribute('data-date');
        if (dateStr) {
          const [year, month, day] = dateStr.split('-').map(Number);
          this.selectDate(new Date(year, month, day));
        }
      });
    });
  }

  /**
   * Select a date and show available time slots
   */
  selectDate (date) {
    this.selectedDate = date;

    // Update visual selection
    document.querySelectorAll('.calendar-day').forEach(day => {
      day.classList.remove('selected');
    });

    const selectedElement = document.querySelector(`[data-date="${date.getFullYear()}-${date.getMonth()}-${date.getDate()}"]`);
    if (selectedElement) {
      selectedElement.classList.add('selected');
    }

    // Show time slots
    this.showTimeSlots(date);
  }

  /**
   * Show available time slots for selected date
   */
  showTimeSlots (date) {
    const timeSlotsContainer = document.getElementById('timeSlots');
    const timeSlotGrid = document.getElementById('timeSlotGrid');

    if (!timeSlotsContainer || !timeSlotGrid) return;

    const availableSlots = this.getAvailableSlotsForDate(date);

    timeSlotGrid.innerHTML = '';

    if (availableSlots.length === 0) {
      timeSlotGrid.innerHTML = '<p class="no-slots">No available time slots for this date.</p>';
    } else {
      availableSlots.forEach(slot => {
        const slotElement = document.createElement('button');
        slotElement.className = 'time-slot';
        slotElement.textContent = slot;
        slotElement.addEventListener('click', () => {
          this.selectTimeSlot(date, slot);
        });
        timeSlotGrid.appendChild(slotElement);
      });
    }

    timeSlotsContainer.style.display = 'block';
  }

  /**
   * Select a time slot
   */
  selectTimeSlot (date, time) {
    // Update visual selection
    document.querySelectorAll('.time-slot').forEach(slot => {
      slot.classList.remove('selected');
    });

    event.target.classList.add('selected');

    // Store the selected appointment time
    this.selectedAppointment = {
      date,
      time,
      timestamp: this.combineDateAndTime(date, time)
    };

    // Trigger custom event
    const appointmentEvent = new CustomEvent('appointmentSelected', {
      detail: this.selectedAppointment
    });
    document.dispatchEvent(appointmentEvent);

    console.log('Selected appointment:', this.selectedAppointment);
  }

  /**
   * Get available time slots for a specific date
   */
  getAvailableSlotsForDate (date) {
    // Default available time slots (9 AM to 5 PM, hourly)
    const defaultSlots = [
      '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
      '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
    ];

    // Filter out booked slots for this date
    const dateString = this.formatDateForComparison(date);
    const bookedSlotsForDate = this.bookedSlots
      .filter(booking => booking.date === dateString)
      .map(booking => booking.time);

    return defaultSlots.filter(slot => !bookedSlotsForDate.includes(slot));
  }

  /**
   * Check if a date has available slots
   */
  hasAvailableSlots (date) {
    const availableSlots = this.getAvailableSlotsForDate(date);
    return availableSlots.length > 0;
  }

  /**
   * Load available slots from Firebase (placeholder)
   */
  async loadAvailableSlots () {
    try {
      // TODO: Integrate with Firebase Firestore
      // For now, using mock data
      this.bookedSlots = [
        { date: '2024-10-15', time: '10:00 AM' },
        { date: '2024-10-15', time: '02:00 PM' },
        { date: '2024-10-16', time: '09:00 AM' }
      ];

      // Re-render calendar with updated availability
      this.render();
    } catch (error) {
      console.error('Error loading available slots:', error);
    }
  }

  /**
   * Book an appointment (placeholder for Firebase integration)
   */
  async bookAppointment (appointmentData) {
    try {
      // TODO: Save to Firebase Firestore
      console.log('Booking appointment:', appointmentData);

      // Add to booked slots
      this.bookedSlots.push({
        date: this.formatDateForComparison(appointmentData.date),
        time: appointmentData.time,
        ...appointmentData
      });

      return { success: true, id: 'mock-appointment-id' };
    } catch (error) {
      console.error('Error booking appointment:', error);
      throw error;
    }
  }

  /**
   * Utility methods
   */
  getMonthYearString () {
    const options = { year: 'numeric', month: 'long' };
    return this.currentDate.toLocaleDateString('en-US', options);
  }

  isSameDay (date1, date2) {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  }

  formatDateForComparison (date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }

  combineDateAndTime (date, timeString) {
    const [time, period] = timeString.split(' ');
    const [hours, minutes] = time.split(':').map(Number);

    let adjustedHours = hours;
    if (period === 'PM' && hours !== 12) {
      adjustedHours += 12;
    } else if (period === 'AM' && hours === 12) {
      adjustedHours = 0;
    }

    const combinedDateTime = new Date(date);
    combinedDateTime.setHours(adjustedHours, minutes, 0, 0);

    return combinedDateTime;
  }
}

// Calendar styles
const calendarStyles = `
  .calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--spacing-lg);
    padding: 0 var(--spacing-sm);
  }

  .calendar-nav {
    background: none;
    border: none;
    color: var(--color-text-primary);
    cursor: pointer;
    padding: var(--spacing-sm);
    border-radius: var(--border-radius-md);
    transition: background-color var(--transition-fast);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .calendar-nav:hover {
    background-color: var(--color-background-secondary);
  }

  .calendar-title {
    margin: 0;
    font-size: var(--font-size-xl);
    color: var(--color-text-primary);
  }

  .calendar-weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1px;
    margin-bottom: var(--spacing-sm);
  }

  .weekday {
    padding: var(--spacing-sm);
    text-align: center;
    font-weight: var(--font-weight-medium);
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
  }

  .calendar-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1px;
    margin-bottom: var(--spacing-xl);
  }

  .calendar-day {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius-sm);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    transition: all var(--transition-fast);
    position: relative;
  }

  .calendar-day.other-month {
    color: var(--color-text-muted);
  }

  .calendar-day.past {
    color: var(--color-text-muted);
    cursor: not-allowed;
  }

  .calendar-day.today {
    background-color: var(--color-primary);
    color: var(--color-background);
  }

  .calendar-day.available {
    cursor: pointer;
    border: 1px solid var(--color-border);
  }

  .calendar-day.available:hover {
    background-color: var(--color-background-secondary);
    transform: scale(1.05);
  }

  .calendar-day.selected {
    background-color: var(--color-primary);
    color: var(--color-background);
  }

  .time-slots {
    border-top: 1px solid var(--color-border);
    padding-top: var(--spacing-lg);
  }

  .time-slots h4 {
    margin-bottom: var(--spacing-md);
    color: var(--color-text-primary);
  }

  .time-slot-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: var(--spacing-sm);
  }

  .time-slot {
    padding: var(--spacing-md);
    border: 2px solid var(--color-border);
    background: var(--color-background);
    color: var(--color-text-primary);
    border-radius: var(--border-radius-md);
    cursor: pointer;
    transition: all var(--transition-fast);
    font-family: var(--font-family);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
  }

  .time-slot:hover {
    border-color: var(--color-primary);
    background-color: var(--color-background-secondary);
  }

  .time-slot.selected {
    background-color: var(--color-primary);
    color: var(--color-background);
    border-color: var(--color-primary);
  }

  .no-slots {
    text-align: center;
    color: var(--color-text-muted);
    font-style: italic;
    padding: var(--spacing-lg);
  }
`;

// Add calendar styles to document
const calendarStyleSheet = document.createElement('style');
calendarStyleSheet.textContent = calendarStyles;
document.head.appendChild(calendarStyleSheet);

// Initialize calendar when DOM is loaded
let calendarManager;

function initCalendar () {
  calendarManager = new CalendarManager();
  calendarManager.init();
}

// Auto-initialize if calendar container exists
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initCalendar, 100); // Small delay to ensure main.js is loaded
  });
} else {
  setTimeout(initCalendar, 100);
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CalendarManager;
}
