import BulletHero from '@/components/BulletHero';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {
    contactMethods,
    faqCallToAction,
    faqCategories,
    faqHero,
    generateAnchorId,
    quickNavigation,
    stillHaveQuestions
} from '@/data/faq';
import Link from 'next/link';

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
      <section className="relative bg-gradient-to-br from-tactical-dark via-black to-patriot-blue py-24 overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="top-10 right-10 absolute bg-gradient-to-bl from-patriot-red/20 to-transparent blur-3xl rounded-full w-96 h-96"></div>
        <div className="bottom-10 left-10 absolute bg-gradient-to-tr from-yellow-400/20 to-transparent blur-3xl rounded-full w-80 h-80"></div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 shadow-2xl backdrop-blur-sm mb-8 px-8 py-4 border border-yellow-400/50 rounded-full">
              <span className="text-3xl animate-pulse">🎯</span>
              <span className="font-bold text-yellow-400 text-lg tracking-wider">QUICK NAVIGATION</span>
              <span className="text-3xl animate-pulse">🎯</span>
            </div>
            <h2 className="mb-6 font-bold text-white text-3xl md:text-4xl">
              <span className="bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 text-transparent">
                {quickNavigation.title}
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-gray-300 text-xl">{quickNavigation.description}</p>
          </div>
          
          <div className="gap-6 grid grid-cols-1 md:grid-cols-5">
            {faqCategories.map((category, index) => (
              <a 
                key={index}
                href={`#${generateAnchorId(category.title)}`}
                className="group bg-white/10 hover:bg-white/15 shadow-2xl backdrop-blur-sm p-6 border border-white/20 hover:border-yellow-400/50 rounded-2xl text-center transition-all hover:-translate-y-1 duration-500 cursor-pointer"
              >
                <div className="flex justify-center items-center bg-gradient-to-br from-yellow-500 to-orange-600 shadow-2xl mx-auto mb-4 border-4 border-yellow-300 rounded-lg w-16 h-16 text-3xl group-hover:scale-110 transition-transform duration-500">
                  {category.icon}
                </div>
                <h3 className="font-bold text-white group-hover:text-yellow-400 text-sm transition-colors">{category.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="relative bg-gradient-to-br from-tactical-dark via-black to-patriot-blue py-24 overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="top-10 left-10 absolute bg-gradient-to-br from-patriot-blue/20 to-transparent blur-3xl rounded-full w-96 h-96"></div>
        <div className="right-10 bottom-10 absolute bg-gradient-to-tl from-patriot-red/20 to-transparent blur-3xl rounded-full w-80 h-80"></div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} id={generateAnchorId(category.title)} className="mb-20">
              <div className="mb-16 text-center">
                <div className="flex justify-center items-center bg-gradient-to-br from-yellow-500 to-orange-600 shadow-2xl mx-auto mb-6 border-4 border-yellow-300 rounded-lg w-24 h-24 text-5xl group-hover:scale-110 transition-transform duration-500">
                  {category.icon}
                </div>
                <h2 className="mb-6 font-bold text-white text-4xl md:text-5xl">
                  <span className="bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 text-transparent">
                    {category.title}
                  </span>
                </h2>
                <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 shadow-lg mx-auto rounded-full w-24 h-1"></div>
              </div>
              
              <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="group bg-white/10 hover:bg-white/15 shadow-2xl backdrop-blur-sm p-8 border border-white/20 hover:border-yellow-400/50 rounded-2xl transition-all hover:-translate-y-1 duration-500">
                    <h3 className="mb-6 font-bold text-white group-hover:text-yellow-400 text-xl md:text-2xl transition-colors duration-300">
                      {faq.q}
                    </h3>
                    <p className="font-medium text-gray-300 text-lg leading-relaxed">
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
      <section className="relative bg-gradient-to-br from-tactical-dark via-black to-patriot-blue py-24 overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="top-0 right-0 absolute bg-gradient-to-bl from-patriot-red/30 to-transparent blur-3xl rounded-full w-96 h-96"></div>
        <div className="bottom-0 left-0 absolute bg-gradient-to-tr from-yellow-500/20 to-transparent blur-3xl rounded-full w-80 h-80"></div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 shadow-2xl backdrop-blur-sm mb-8 px-8 py-4 border border-yellow-400/50 rounded-full">
            <span className="text-3xl animate-pulse">⚔️</span>
            <span className="font-bold text-yellow-400 text-lg tracking-wider">NEED MORE HELP?</span>
            <span className="text-3xl animate-pulse">⚔️</span>
          </div>
          
          <div className="flex justify-center items-center bg-gradient-to-br from-yellow-500 to-orange-600 shadow-2xl mx-auto mb-6 border-4 border-yellow-300 rounded-lg w-20 h-20 text-4xl">
            {stillHaveQuestions.icon}
          </div>
          <h2 className="mb-6 font-bold text-white text-4xl md:text-5xl">
            <span className="bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 text-transparent">
              {stillHaveQuestions.title}
            </span>
          </h2>
          <p className="mb-12 text-gray-300 text-xl md:text-2xl leading-relaxed">
            {stillHaveQuestions.description}
          </p>
          
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mb-12">
            {contactMethods.map((method, index) => (
              <div key={index} className="group bg-white/10 hover:bg-white/15 shadow-2xl backdrop-blur-sm p-8 border border-white/20 hover:border-yellow-400/50 rounded-2xl transition-all duration-500">
                <div className="flex justify-center items-center bg-gradient-to-br from-patriot-red to-red-700 shadow-2xl mx-auto mb-4 border-4 border-yellow-300 rounded-lg w-16 h-16 text-3xl group-hover:scale-110 transition-transform duration-500">
                  {method.icon}
                </div>
                <h3 className="mb-3 font-bold text-white group-hover:text-yellow-400 text-lg transition-colors">{method.title}</h3>
                <p className="mb-4 text-gray-300 text-sm leading-relaxed">{method.description}</p>
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
          
          <div className="flex sm:flex-row flex-col justify-center gap-6">
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