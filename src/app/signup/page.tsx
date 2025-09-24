'use client';

import BulletHero from '@/components/BulletHero';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { enrollStudent } from '@/lib/firestore';
import { useState } from 'react';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    experience: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = [
    { id: 'firearm-safety', name: 'Firearm Safety Fundamentals - $199', price: 199 },
    { id: 'personal-training', name: 'Personal Firearm Training - $299', price: 299 },
    { id: 'advanced-safety', name: 'Advanced Safety Protocols - $399', price: 399 }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Firebase integration - Save to Firestore
      const enrollmentId = await enrollStudent(formData);
      console.log('Enrollment submitted with ID:', enrollmentId);
      
      alert('Thank you for your enrollment! Your registration has been saved. We will contact you within 24 hours to confirm your tactical training program.');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        course: '',
        experience: '',
        message: ''
      });
    } catch (error) {
      console.error('Enrollment submission error:', error);
      alert('There was an error submitting your enrollment. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Bullet Hero Section */}
      <BulletHero 
        title="COURSE REGISTRATION"
        subtitle="Begin Your Tactical Excellence Journey"
        description="Take the first step toward professional training and tactical mastery."
      />

      {/* Registration Form */}
      <section className="bg-white py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
            <div className="px-8 py-12">
              <h2 className="mb-8 font-bold text-tactical-dark text-3xl text-center">
                Register for Training
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 font-medium text-tactical-dark text-sm">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-patriot-red w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 font-medium text-tactical-dark text-sm">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-patriot-red w-full"
                    />
                  </div>
                </div>

                <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 font-medium text-tactical-dark text-sm">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-patriot-red w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 font-medium text-tactical-dark text-sm">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-patriot-red w-full"
                    />
                  </div>
                </div>

                {/* Course Selection */}
                <div>
                  <label className="block mb-2 font-medium text-tactical-dark text-sm">
                    Select Course *
                  </label>
                  <select
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-patriot-red w-full"
                  >
                    <option value="">Choose a course...</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Experience Level */}
                <div>
                  <label className="block mb-2 font-medium text-tactical-dark text-sm">
                    Experience Level *
                  </label>
                  <select
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-patriot-red w-full"
                  >
                    <option value="">Select your experience level...</option>
                    <option value="beginner">Beginner - No prior experience</option>
                    <option value="novice">Novice - Some basic experience</option>
                    <option value="intermediate">Intermediate - Regular practice</option>
                    <option value="advanced">Advanced - Extensive experience</option>
                  </select>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block mb-2 font-medium text-tactical-dark text-sm">
                    Additional Information or Questions
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your goals, any specific concerns, or questions you may have..."
                    className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-patriot-red w-full resize-none"
                  />
                </div>

                {/* Terms and Submit */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start mb-4">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 mr-3 border-gray-300 rounded focus:ring-patriot-red w-4 h-4 text-patriot-red"
                    />
                    <label className="text-tactical-gray text-sm">
                      I acknowledge that I have read and understand the safety requirements 
                      and waiver policies. I agree to the terms and conditions of training. *
                    </label>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <input
                      type="checkbox"
                      className="mt-1 mr-3 border-gray-300 rounded focus:ring-patriot-red w-4 h-4 text-patriot-red"
                    />
                    <label className="text-tactical-gray text-sm">
                      I would like to receive updates about new courses and training opportunities.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="disabled:opacity-50 py-4 w-full text-lg disabled:cursor-not-allowed btn-primary"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-tactical-light py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="mb-6 font-bold text-tactical-dark text-3xl">
            Need Assistance?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-tactical-gray text-xl">
            Have questions about our courses or need help with registration? 
            Our team is here to help.
          </p>
          
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
            <div className="text-center tactical-card">
              <div className="mb-4 text-4xl">🎖️</div>
              <h3 className="mb-2 font-semibold text-tactical-dark">Call Us</h3>
              <p className="text-tactical-gray">(555) 123-4567</p>
            </div>
            
            <div className="text-center tactical-card">
              <div className="mb-4 text-4xl">🎖️</div>
              <h3 className="mb-2 font-semibold text-tactical-dark">Email</h3>
              <p className="text-tactical-gray">info@libertyridegetraininggrounds.com</p>
            </div>
            
            <div className="text-center tactical-card">
              <div className="mb-4 text-4xl">🏛️</div>
              <h3 className="mb-2 font-semibold text-tactical-dark">Location</h3>
              <p className="text-tactical-gray">Pasco, WA</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}