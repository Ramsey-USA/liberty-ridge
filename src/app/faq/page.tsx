import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BulletHero from '@/components/BulletHero';
import Link from 'next/link';
import {
  faqCategories,
  contactMethods,
  faqHero,
  quickNavigation,
  stillHaveQuestions,
  faqCallToAction,
  generateAnchorId
} from '@/data/faq';

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Bullet Hero Section */}
      <BulletHero 
        title={faqHero.title}
        subtitle={faqHero.subtitle}
        description={faqHero.description}
        backgroundGradient={faqHero.backgroundGradient}
      />

      {/* Quick Navigation */}
      <section className="py-12 bg-tactical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-tactical-dark mb-4">{quickNavigation.title}</h2>
            <p className="text-tactical-dark">{quickNavigation.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {faqCategories.map((category, index) => (
              <a 
                key={index}
                href={`#${generateAnchorId(category.title)}`}
                className="enhanced-course-card text-center group hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-tactical-dark text-sm">{category.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} id={generateAnchorId(category.title)} className="mb-16">
              <div className="text-center mb-12">
                <div className="text-6xl mb-4">{category.icon}</div>
                <h2 className="text-4xl font-bold text-tactical-dark mb-4">{category.title}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-patriot-red to-patriot-blue mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="enhanced-course-card group hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold mb-4 text-tactical-dark group-hover:text-patriot-red transition-colors duration-300">
                      {faq.q}
                    </h3>
                    <p className="text-tactical-dark leading-relaxed font-medium">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-r from-patriot-blue to-patriot-red text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="text-6xl mb-6">{stillHaveQuestions.icon}</div>
          <h2 className="text-4xl font-bold mb-6">{stillHaveQuestions.title}</h2>
          <p className="text-xl mb-8 opacity-95">
            {stillHaveQuestions.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">{method.icon}</div>
                <h3 className="font-bold mb-2">{method.title}</h3>
                <p className="text-sm opacity-90 mb-3">{method.description}</p>
                {method.action ? (
                  <Link href={method.action.href} className="font-bold hover:text-yellow-300 underline">
                    {method.action.text}
                  </Link>
                ) : (
                  <p className={`font-bold ${method.title === 'Email Us' ? 'text-xs break-all' : ''}`}>
                    {method.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {faqCallToAction.map((action, index) => (
              <Link
                key={index}
                href={action.href}
                className={`font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg ${
                  action.style === 'primary'
                    ? 'bg-white text-patriot-blue hover:bg-gray-100'
                    : 'border-2 border-white text-white hover:bg-white hover:text-patriot-blue'
                }`}
              >
                {action.text}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}