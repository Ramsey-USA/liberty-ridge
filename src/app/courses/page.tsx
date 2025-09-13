import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: 'Firearm Safety Fundamentals',
      duration: '4 hours',
      price: '$199',
      level: 'Beginner',
      description: 'Comprehensive classroom training covering the essential principles of firearm safety, handling, storage, and basic maintenance. Perfect for first-time gun owners.',
      includes: [
        'Safe handling procedures',
        'Firearm storage and security',
        'Basic maintenance and cleaning',
        'Legal responsibilities',
        'Emergency protocols',
        'Certificate of completion'
      ]
    },
    {
      id: 2,
      title: 'Personal Firearm Training',
      duration: '6 hours',
      price: '$299',
      level: 'Intermediate',
      description: 'Personalized training focused on your specific firearm and individual skill development needs. Includes one-on-one instruction and customized curriculum.',
      includes: [
        'Weapon-specific training',
        'Personalized skill assessment',
        'Customized training plan',
        'Advanced safety protocols',
        'Tactical fundamentals',
        'Follow-up consultation'
      ]
    },
    {
      id: 3,
      title: 'Advanced Safety Protocols',
      duration: '8 hours',
      price: '$399',
      level: 'Advanced',
      description: 'Advanced classroom instruction on tactical safety protocols, emergency response procedures, and crisis management techniques.',
      includes: [
        'Crisis situation management',
        'Advanced tactical protocols',
        'Emergency response planning',
        'Threat assessment',
        'De-escalation techniques',
        'Scenario-based training'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tactical-dark to-patriot-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Training Courses</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Professional firearm safety and tactical training courses designed 
            for all skill levels, from beginners to advanced practitioners.
          </p>
        </div>
      </section>

      {/* Course Listing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {courses.map((course) => (
              <div key={course.id} className="tactical-card">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Course Image */}
                  <div className="lg:col-span-1">
                    <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-tactical-gray">Course Image</span>
                    </div>
                  </div>
                  
                  {/* Course Details */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-col h-full">
                      <div className="flex-grow">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-2xl font-bold text-tactical-dark">{course.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                            course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {course.level}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-6 mb-6 text-tactical-gray">
                          <div className="flex items-center">
                            <span className="mr-2">⏱️</span>
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-2">💰</span>
                            <span className="text-2xl font-bold text-patriot-red">{course.price}</span>
                          </div>
                        </div>
                        
                        <p className="text-tactical-gray mb-6 leading-relaxed">
                          {course.description}
                        </p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-tactical-dark mb-3">Course Includes:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {course.includes.map((item, index) => (
                              <div key={index} className="flex items-center">
                                <span className="text-green-500 mr-2">✓</span>
                                <span className="text-tactical-gray">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link 
                          href="/signup" 
                          className="btn-primary flex-1 text-center"
                        >
                          Enroll Now
                        </Link>
                        <Link 
                          href="/contact" 
                          className="btn-outline flex-1 text-center"
                        >
                          Ask Questions
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase Information */}
      <section className="py-20 bg-tactical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-tactical-dark">Training Phases</h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto">
              Our training program is designed with a phased approach to ensure 
              comprehensive skill development and safety.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="tactical-card text-center">
              <div className="w-16 h-16 bg-patriot-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-tactical-dark">
                Phase One (Current)
              </h3>
              <p className="text-tactical-gray">
                Classroom-only courses covering firearm safety and personal 
                firearm training fundamentals.
              </p>
            </div>
            
            <div className="tactical-card text-center">
              <div className="w-16 h-16 bg-patriot-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-tactical-dark">
                Phase Two (Upcoming)
              </h3>
              <p className="text-tactical-gray">
                Integration of e-commerce functionality for tactical gear 
                and accessories from premium brands.
              </p>
            </div>
            
            <div className="tactical-card text-center">
              <div className="w-16 h-16 bg-tactical-gray rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-tactical-dark">
                Phase Three (Future)
              </h3>
              <p className="text-tactical-gray">
                Live firearm training sessions once land acquisition 
                is completed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-patriot-red text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Training Journey?
          </h2>
          <p className="text-xl mb-8">
            Choose the course that best fits your skill level and goals. 
            All courses include certificate of completion.
          </p>
          <Link href="/signup" className="bg-white text-patriot-red hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-colors">
            Enroll Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}