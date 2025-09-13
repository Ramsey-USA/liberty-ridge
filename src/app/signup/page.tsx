'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BulletHero from '@/components/BulletHero';
import { useState } from 'react';
// import { enrollStudent } from '@/lib/firestore'; // Uncomment when Firebase is configured

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
      // Option 1: Firebase integration (uncomment when Firebase is configured)
      // const enrollmentId = await enrollStudent(formData);
      // console.log('Enrollment submitted with ID:', enrollmentId);
      
      // Option 2: High Level CRM integration (implement when API keys are available)
      // await submitToHighLevel(formData);
      
      // For now, just log the data
      console.log('Form submitted:', formData);
      
      alert('Thank you for your interest! We will contact you within 24 hours to confirm your enrollment.');
      
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
      console.error('Error submitting form:', error);
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
        backgroundGradient="from-white via-gray-50 to-slate-100"
      />

      {/* Registration Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
            <div className="px-8 py-12">
              <h2 className="text-3xl font-bold text-center mb-8 text-tactical-dark">
                Register for Training
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-tactical-dark mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-tactical-dark mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-tactical-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-tactical-dark mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Course Selection */}
                <div>
                  <label className="block text-sm font-medium text-tactical-dark mb-2">
                    Select Course *
                  </label>
                  <select
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-patriot-red focus:border-transparent"
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
                  <label className="block text-sm font-medium text-tactical-dark mb-2">
                    Experience Level *
                  </label>
                  <select
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-patriot-red focus:border-transparent"
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
                  <label className="block text-sm font-medium text-tactical-dark mb-2">
                    Additional Information or Questions
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your goals, any specific concerns, or questions you may have..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-patriot-red focus:border-transparent resize-none"
                  />
                </div>

                {/* Terms and Submit */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start mb-4">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 mr-3 h-4 w-4 text-patriot-red focus:ring-patriot-red border-gray-300 rounded"
                    />
                    <label className="text-sm text-tactical-gray">
                      I acknowledge that I have read and understand the safety requirements 
                      and waiver policies. I agree to the terms and conditions of training. *
                    </label>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <input
                      type="checkbox"
                      className="mt-1 mr-3 h-4 w-4 text-patriot-red focus:ring-patriot-red border-gray-300 rounded"
                    />
                    <label className="text-sm text-tactical-gray">
                      I would like to receive updates about new courses and training opportunities.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
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
      <section className="py-20 bg-tactical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-tactical-dark">
            Need Assistance?
          </h2>
          <p className="text-xl text-tactical-gray mb-8 max-w-3xl mx-auto">
            Have questions about our courses or need help with registration? 
            Our team is here to help.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="tactical-card text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-semibold text-tactical-dark mb-2">Call Us</h3>
              <p className="text-tactical-gray">(555) 123-4567</p>
            </div>
            
            <div className="tactical-card text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-semibold text-tactical-dark mb-2">Email</h3>
              <p className="text-tactical-gray">info@libertyridegetraininggrounds.com</p>
            </div>
            
            <div className="tactical-card text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-semibold text-tactical-dark mb-2">Location</h3>
              <p className="text-tactical-gray">Pasco, WA</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}