import dynamic from 'next/dynamic';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

// Dynamic import for MediaGallery to reduce initial bundle size
const MediaGallery = dynamic(() => import('@/components/MediaGallery'), {
  loading: () => (
    <div className="flex justify-center items-center bg-gray-200 dark:bg-gray-700 rounded-lg h-96 animate-pulse">
      <div className="text-gray-500 dark:text-gray-400">Loading gallery...</div>
    </div>
  )
});

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Gallery Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-text-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <div className="inline-flex items-center space-x-2 bg-background/10 backdrop-blur-sm mb-8 px-6 py-3 border border-background/30 rounded-lg">
            <span className="material-icons-outlined text-background" style={{fontSize: '1.25rem'}}>photo_library</span>
            <span className="font-bold text-background text-sm uppercase tracking-wide">Media Gallery</span>
          </div>
          
          <h1 className="mb-6 font-black text-background text-5xl md:text-6xl lg:text-7xl leading-tight">
            Training &
            <br />
            <span className="text-background">
              Competition Gallery
            </span>
          </h1>
          
          <p className="mx-auto mb-8 max-w-4xl text-background/90 text-xl lg:text-2xl leading-relaxed">
            Explore photos and videos from consultation sessions, competition achievements, 
            and professional firearms training with <strong className="text-background">Zach Gaudette</strong>.
          </p>
          
          <div className="flex sm:flex-row flex-col justify-center gap-4">
            <a 
              href="#gallery" 
              className="flex justify-center items-center space-x-2 bg-patriot-red hover:bg-patriot-red/90 px-8 py-4 border-2 border-patriot-red rounded-none font-bold text-white hover:scale-102 transition-all duration-300"
            >
              <span className="material-icons-outlined" style={{fontSize: '1.25rem'}}>visibility</span>
              <span>View Gallery</span>
            </a>
            <a 
              href="/consultation" 
              className="flex justify-center items-center space-x-2 bg-transparent hover:bg-background px-8 py-4 border-2 border-background rounded-none font-bold text-background hover:text-text-primary hover:scale-102 transition-all duration-300"
            >
              <span className="material-icons-outlined" style={{fontSize: '1.25rem'}}>schedule</span>
              <span>Book Consultation</span>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="bg-surface py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="gap-8 grid grid-cols-2 md:grid-cols-4">
            <div className="text-center">
              <div className="flex justify-center items-center bg-patriot-red/10 mx-auto mb-4 border border-patriot-red/30 rounded-lg w-16 h-16">
                <span className="material-icons-outlined text-patriot-red" style={{fontSize: '2rem'}}>photo_camera</span>
              </div>
              <h3 className="mb-2 font-bold text-text-primary text-2xl">Photos</h3>
              <p className="text-text-secondary text-sm">Professional captures</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-patriot-blue/10 mx-auto mb-4 border border-patriot-blue/30 rounded-lg w-16 h-16">
                <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '2rem'}}>videocam</span>
              </div>
              <h3 className="mb-2 font-bold text-text-primary text-2xl">Videos</h3>
              <p className="text-text-secondary text-sm">Training content</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-patriot-red/10 mx-auto mb-4 border border-patriot-red/30 rounded-lg w-16 h-16">
                <span className="material-icons-outlined text-patriot-red" style={{fontSize: '2rem'}}>emoji_events</span>
              </div>
              <h3 className="mb-2 font-bold text-text-primary text-2xl">Competition</h3>
              <p className="text-text-secondary text-sm">Achievement highlights</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-patriot-blue/10 mx-auto mb-4 border border-patriot-blue/30 rounded-lg w-16 h-16">
                <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '2rem'}}>business_center</span>
              </div>
              <h3 className="mb-2 font-bold text-text-primary text-2xl">Consultation</h3>
              <p className="text-text-secondary text-sm">Session highlights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section id="gallery" className="bg-background py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-surface mb-6 px-4 py-2 border border-border rounded-lg">
              <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1rem'}}>collections</span>
              <span className="font-medium text-text-secondary text-sm uppercase tracking-wide">Browse Gallery</span>
            </div>
            <h2 className="mb-6 font-black text-text-primary text-4xl md:text-5xl">
              Professional Media Gallery
            </h2>
            <p className="mx-auto max-w-3xl text-text-secondary text-xl leading-relaxed">
              Browse through photos and videos showcasing Zach's consultation sessions, 
              competitive achievements, and professional expertise in action.
            </p>
          </div>

          <MediaGallery showFilters={true} />
        </div>
      </section>

      {/* Gallery Categories Explanation */}
      <section className="bg-surface py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-black text-text-primary text-4xl md:text-5xl">
              Gallery Categories
            </h2>
            <p className="mx-auto max-w-3xl text-text-secondary text-xl leading-relaxed">
              Our media is organized into specific categories to help you find exactly what you're looking for.
            </p>
          </div>
          
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-background p-6 border border-border rounded-lg text-center">
              <div className="flex justify-center items-center bg-patriot-red/10 mx-auto mb-4 border border-patriot-red/30 rounded-lg w-16 h-16">
                <span className="material-icons-outlined text-patriot-red" style={{fontSize: '2rem'}}>record_voice_over</span>
              </div>
              <h3 className="mb-3 font-bold text-text-primary text-xl">Consultation Sessions</h3>
              <p className="text-text-secondary">
                Behind-the-scenes looks at one-on-one consultation sessions, technique demonstrations, and personalized training approaches.
              </p>
            </div>
            
            <div className="bg-background p-6 border border-border rounded-lg text-center">
              <div className="flex justify-center items-center bg-patriot-blue/10 mx-auto mb-4 border border-patriot-blue/30 rounded-lg w-16 h-16">
                <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '2rem'}}>emoji_events</span>
              </div>
              <h3 className="mb-3 font-bold text-text-primary text-xl">Competition Highlights</h3>
              <p className="text-text-secondary">
                Photos and videos from competitive shooting events, including Zach's journey to Regional #12 ranking and ongoing competition participation.
              </p>
            </div>

            <div className="bg-background p-6 border border-border rounded-lg text-center">
              <div className="flex justify-center items-center bg-patriot-red/10 mx-auto mb-4 border border-patriot-red/30 rounded-lg w-16 h-16">
                <span className="material-icons-outlined text-patriot-red" style={{fontSize: '2rem'}}>school</span>
              </div>
              <h3 className="mb-3 font-bold text-text-primary text-xl">Training Materials</h3>
              <p className="text-text-secondary">
                Educational content, technique tutorials, and training resources that complement consultation sessions and ongoing skill development.
              </p>
            </div>

            <div className="bg-background p-6 border border-border rounded-lg text-center">
              <div className="flex justify-center items-center bg-patriot-blue/10 mx-auto mb-4 border border-patriot-blue/30 rounded-lg w-16 h-16">
                <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '2rem'}}>build</span>
              </div>
              <h3 className="mb-3 font-bold text-text-primary text-xl">Equipment Reviews</h3>
              <p className="text-text-secondary">
                Detailed looks at firearms, accessories, and gear recommendations based on practical experience and professional expertise.
              </p>
            </div>

            <div className="bg-background p-6 border border-border rounded-lg text-center">
              <div className="flex justify-center items-center bg-patriot-red/10 mx-auto mb-4 border border-patriot-red/30 rounded-lg w-16 h-16">
                <span className="material-icons-outlined text-patriot-red" style={{fontSize: '2rem'}}>location_city</span>
              </div>
              <h3 className="mb-3 font-bold text-text-primary text-xl">Facility Tours</h3>
              <p className="text-text-secondary">
                Virtual tours of consultation spaces, equipment setups, and the professional environment where training sessions take place.
              </p>
            </div>

            <div className="bg-background p-6 border border-border rounded-lg text-center">
              <div className="flex justify-center items-center bg-patriot-blue/10 mx-auto mb-4 border border-patriot-blue/30 rounded-lg w-16 h-16">
                <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '2rem'}}>military_tech</span>
              </div>
              <h3 className="mb-3 font-bold text-text-primary text-xl">Military Heritage</h3>
              <p className="text-text-secondary">
                Content highlighting Zach's Army background, military training influence, and how service experience enhances consultation quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-text-primary">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="mb-6 font-black text-background text-4xl md:text-5xl">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="mb-8 text-background/80 text-xl leading-relaxed">
            See yourself in our gallery. Book a consultation with Zach and start your journey 
            toward improved firearms skills and confidence.
          </p>
          
          <div className="flex sm:flex-row flex-col justify-center gap-4 mb-8">
            <a 
              href="/consultation" 
              className="flex justify-center items-center space-x-2 bg-background hover:bg-background/90 px-8 py-4 border-2 border-background rounded-none font-bold text-text-primary hover:scale-102 transition-all duration-300"
            >
              <span className="material-icons-outlined" style={{fontSize: '1.25rem'}}>schedule</span>
              <span>Book Consultation</span>
            </a>
            <a 
              href="/about" 
              className="flex justify-center items-center space-x-2 bg-transparent hover:bg-background px-8 py-4 border-2 border-background rounded-none font-bold text-background hover:text-text-primary hover:scale-102 transition-all duration-300"
            >
              <span className="material-icons-outlined" style={{fontSize: '1.25rem'}}>person</span>
              <span>Learn About Zach</span>
            </a>
          </div>

          <div className="flex justify-center items-center space-x-6 text-background/60 text-sm">
            <div className="flex items-center space-x-2">
              <span className="material-icons-outlined" style={{fontSize: '1rem'}}>military_tech</span>
              <span>Army Veteran</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-icons-outlined" style={{fontSize: '1rem'}}>emoji_events</span>
              <span>Regional #12</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-icons-outlined" style={{fontSize: '1rem'}}>verified</span>
              <span>Professional Results</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}