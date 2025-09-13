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
      />      {/* Quick Navigation */}
      <section className="py-24 bg-gradient-to-br from-tactical-dark via-black to-patriot-blue relative overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-bl from-patriot-red/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 backdrop-blur-sm px-8 py-4 rounded-full border border-yellow-400/50 mb-8 shadow-2xl">
              <span className="text-3xl animate-pulse">❓</span>
              <span className="text-yellow-400 font-bold text-lg tracking-wider">QUICK NAVIGATION</span>
              <span className="text-3xl animate-pulse">❓</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
                {quickNavigation.title}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{quickNavigation.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {faqCategories.map((category, index) => (
              <a 
                key={index}
                href={`#${generateAnchorId(category.title)}`}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-1 shadow-2xl text-center cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center text-3xl shadow-2xl border-4 border-yellow-300 group-hover:scale-110 transition-transform duration-500 mb-4">
                  {category.icon}
                </div>
                <h3 className="font-bold text-white text-sm group-hover:text-yellow-400 transition-colors">{category.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-24 bg-gradient-to-br from-tactical-dark via-black to-patriot-blue relative overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-patriot-blue/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-patriot-red/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} id={generateAnchorId(category.title)} className="mb-20">
              <div className="text-center mb-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center text-5xl shadow-2xl border-4 border-yellow-300 group-hover:scale-110 transition-transform duration-500">
                  {category.icon}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
                    {category.title}
                  </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 mx-auto rounded-full shadow-lg"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-1 shadow-2xl">
                    <h3 className="text-xl md:text-2xl font-bold mb-6 text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {faq.q}
                    </h3>
                    <p className="text-gray-300 leading-relaxed font-medium text-lg">
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
      <section className="py-24 bg-gradient-to-br from-tactical-dark via-black to-patriot-blue relative overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-patriot-red/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 backdrop-blur-sm px-8 py-4 rounded-full border border-yellow-400/50 mb-8 shadow-2xl">
            <span className="text-3xl animate-pulse">💬</span>
            <span className="text-yellow-400 font-bold text-lg tracking-wider">NEED MORE HELP?</span>
            <span className="text-3xl animate-pulse">💬</span>
          </div>
          
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center text-4xl shadow-2xl border-4 border-yellow-300">
            {stillHaveQuestions.icon}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
              {stillHaveQuestions.title}
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed">
            {stillHaveQuestions.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-500 shadow-2xl group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-patriot-red to-red-700 rounded-lg flex items-center justify-center text-3xl shadow-2xl border-4 border-yellow-300 group-hover:scale-110 transition-transform duration-500">
                  {method.icon}
                </div>
                <h3 className="font-bold mb-3 text-white text-lg group-hover:text-yellow-400 transition-colors">{method.title}</h3>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">{method.description}</p>
                {method.action ? (
                  <Link href={method.action.href} className="font-bold text-yellow-400 hover:text-yellow-300 underline transition-colors">
                    {method.action.text}
                  </Link>
                ) : (
                  <p className={`font-bold text-white ${method.title === 'Email Us' ? 'text-xs break-all' : ''}`}>
                    {method.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {faqCallToAction.map((action, index) => (
              <Link
                key={index}
                href={action.href}
                className={`font-bold py-5 px-10 rounded-2xl text-lg transition-all transform hover:scale-105 shadow-2xl border-2 ${
                  action.style === 'primary'
                    ? 'bg-gradient-to-r from-patriot-red to-red-600 text-white border-yellow-400/30 hover:border-yellow-400/70 hover:shadow-yellow-400/20'
                    : 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-tactical-dark'
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