import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-patriot-blue to-patriot-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to start your tactical training journey? Get in touch with us today. 
            We&apos;re here to answer your questions and help you choose the right course.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="tactical-card text-center">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-xl font-semibold mb-4 text-tactical-dark">Call Us</h3>
                <p className="text-tactical-gray mb-4">Ready to talk? Give us a call during business hours.</p>
                <p className="text-2xl font-bold text-patriot-red">(555) 123-4567</p>
                <p className="text-sm text-tactical-gray mt-2">Mon-Fri: 9AM-6PM PST</p>
              </div>
              
              <div className="tactical-card text-center">
                <div className="text-5xl mb-4">📧</div>
                <h3 className="text-xl font-semibold mb-4 text-tactical-dark">Email Us</h3>
                <p className="text-tactical-gray mb-4">Send us a message and we&apos;ll respond within 24 hours.</p>
                <p className="text-lg font-bold text-patriot-red break-all">info@libertyridegetraininggrounds.com</p>
              </div>
              
              <div className="tactical-card text-center">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-xl font-semibold mb-4 text-tactical-dark">Visit Us</h3>
                <p className="text-tactical-gray mb-4">Located in the heart of Eastern Washington.</p>
                <p className="text-lg font-bold text-patriot-red">Pasco, WA</p>
                <p className="text-sm text-tactical-gray mt-2">Specific address provided upon enrollment</p>
              </div>
              
              <div className="tactical-card text-center">
                <div className="text-5xl mb-4">🕐</div>
                <h3 className="text-xl font-semibold mb-4 text-tactical-dark">Office Hours</h3>
                <div className="text-tactical-gray space-y-1">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: By appointment only</p>
                </div>
              </div>
            </div>
            
            {/* Quick Action */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-patriot-blue to-patriot-red text-white p-8 rounded-lg h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6 text-center">Ready to Get Started?</h3>
                <p className="text-lg mb-8 text-center">
                  The fastest way to begin your training is to register for one of our courses directly.
                </p>
                <Link 
                  href="/signup" 
                  className="bg-white text-patriot-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-colors text-center block"
                >
                  Register for Course
                </Link>
                <div className="text-center mt-4">
                  <Link href="/courses" className="text-white hover:text-yellow-300 underline">
                    View All Courses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-tactical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-tactical-dark">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto">
              Have questions? Here are some of the most common questions we receive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="tactical-card">
              <h3 className="text-lg font-semibold mb-3 text-tactical-dark">
                Do I need prior experience?
              </h3>
              <p className="text-tactical-gray">
                No prior experience is required. Our courses are designed for all skill levels, 
                from complete beginners to advanced practitioners.
              </p>
            </div>
            
            <div className="tactical-card">
              <h3 className="text-lg font-semibold mb-3 text-tactical-dark">
                What should I bring to class?
              </h3>
              <p className="text-tactical-gray">
                Just bring yourself and a willingness to learn. All materials and equipment 
                are provided for classroom-based training.
              </p>
            </div>
            
            <div className="tactical-card">
              <h3 className="text-lg font-semibold mb-3 text-tactical-dark">
                Are certificates provided?
              </h3>
              <p className="text-tactical-gray">
                Yes, all students receive a certificate of completion upon successfully 
                finishing their chosen course.
              </p>
            </div>
            
            <div className="tactical-card">
              <h3 className="text-lg font-semibold mb-3 text-tactical-dark">
                When will live-fire training be available?
              </h3>
              <p className="text-tactical-gray">
                Phase Three will include live-fire training once we acquire dedicated 
                training grounds. Sign up for updates to be notified.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/faq" className="btn-secondary">
              View All FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-tactical-dark text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Emergency Contact</h2>
          <p className="text-xl text-gray-300 mb-8">
            For urgent matters related to ongoing training or safety concerns, 
            please use our emergency contact line.
          </p>
          <div className="bg-patriot-red p-6 rounded-lg inline-block">
            <p className="text-sm mb-2">Emergency Line (Training Students Only)</p>
            <p className="text-2xl font-bold">(555) TACTICAL</p>
            <p className="text-sm mt-2">Available 24/7 for enrolled students</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}