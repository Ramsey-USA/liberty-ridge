import BulletHero from '@/components/BulletHero';
import { StatsCard } from '@/components/cards';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getActiveTeamMembers } from '@/data/team';
import Link from 'next/link';

export default function TeamPage() {
  // Create recruiting positions based on current team structure
  const recruitingPositions = [
    {
      id: 2,
      name: 'Marcus "Doc" Rodriguez',
      rank: 'Combat Medic Instructor',
      branch: 'U.S. Army (Seeking)',
      specialties: ['Combat Medicine', 'Trauma Care', 'TCCC Protocols'],
      achievement: 'Iraq/Afghanistan Veteran',
      status: 'recruiting',
      bio: 'Seeking experienced combat medic to lead our medical training programs. Ideal candidate has deployment experience and passion for teaching life-saving skills to civilians.',
      certifications: ['Combat Medic', 'TCCC Instructor', 'EMT-P Preferred']
    },
    {
      id: 3,
      name: 'Sarah "Havoc" Mitchell',
      rank: 'Tactical Movement Specialist',
      branch: 'U.S. Marine Corps (Seeking)',
      specialties: ['Close Quarters Combat', 'Team Tactics', 'Physical Conditioning'],
      achievement: 'Female Combat Veteran',
      status: 'recruiting',
      bio: 'Looking for experienced female Marine to provide specialized training in tactical movement and close quarters combat. Strong leadership and communication skills essential.',
      certifications: ['Infantry Training', 'CQC Instructor', 'Physical Fitness Specialist']
    },
    {
      id: 4,
      name: 'David "Eagle Eye" Thompson',
      rank: 'Advanced Marksmanship Instructor',
      branch: 'U.S. Navy (Seeking)',
      specialties: ['Precision Shooting', 'Optics Systems', 'Ballistics'],
      achievement: 'Navy SEAL Background',
      status: 'recruiting',
      bio: 'Seeking elite marksman with SEAL or similar special operations background to teach advanced precision shooting and optics systems to serious students.',
      certifications: ['Special Operations', 'Advanced Marksmanship', 'Optics Specialist']
    }
  ];

  const allTeamDisplay = [...getActiveTeamMembers(), ...recruitingPositions];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Elite Team Hero Section */}
            <BulletHero
        title="OUR ELITE TEAM"
        subtitle="Veteran Leadership & Tactical Excellence"
        description="Meet our dedicated team of military veterans and tactical experts committed to providing world-class training and education."
      />

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-center items-center space-x-8">
            <StatsCard 
              stat={{
                title: 'Active Operator',
                value: getActiveTeamMembers().length,
                icon: '🎖️'
              }}
              variant="compact"
              className="text-center"
            />
            <div className="bg-tactical-gray/30 w-1 h-12"></div>
            <StatsCard 
              stat={{
                title: 'Positions Open',
                value: 3,
                icon: '⚔️'
              }}
              variant="compact"
              className="text-center"
            />
            <div className="bg-tactical-gray/30 w-1 h-12"></div>
            <StatsCard 
              stat={{
                title: 'Potential Impact',
                value: '∞',
                icon: '🎯'
              }}
              variant="compact"
              className="text-center"
            />
          </div>
        </div>
      </section>

      {/* Elite Team Showcase */}
      <section className="relative bg-gradient-to-br from-tactical-dark via-black to-patriot-blue py-24 overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="top-10 right-10 absolute bg-gradient-to-bl from-patriot-red/20 to-transparent blur-3xl rounded-full w-96 h-96"></div>
        <div className="bottom-10 left-10 absolute bg-gradient-to-tr from-patriot-blue/20 to-transparent blur-3xl rounded-full w-80 h-80"></div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Warrior Header */}
          <div className="mb-20 text-center">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 shadow-2xl backdrop-blur-sm mb-8 px-8 py-4 border border-yellow-400/50 rounded-full">
              <span className="text-3xl animate-pulse">⚔️</span>
              <span className="font-bold text-yellow-400 text-lg tracking-wider">ELITE OPERATORS</span>
              <span className="text-3xl animate-pulse">⚔️</span>
            </div>
            <h2 className="mb-8 font-bold text-white text-5xl md:text-7xl">
              <span className="bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 text-transparent">
                TEAM
              </span>
              <br />
              <span className="text-white">SHOWCASE</span>
            </h2>
            <p className="mx-auto max-w-4xl text-gray-300 text-2xl leading-relaxed">
              Meet our elite operators and discover available positions
            </p>
          </div>

          {/* Team Grid */}
          <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 mb-20">
            {allTeamDisplay.map((member, index) => (
              <div key={member.id} className={`group relative overflow-hidden backdrop-blur-sm rounded-3xl border-2 shadow-2xl transition-all duration-700 hover:shadow-yellow-400/20 hover:shadow-[0_0_50px_rgba(250,204,21,0.3)] hover:-translate-y-2 hover:scale-[1.02] ${
                member.status === 'active' 
                  ? 'bg-gradient-to-br from-yellow-600/20 via-red-600/20 to-orange-600/20 border-yellow-400/50' 
                  : 'bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-green-600/20 border-blue-400/50'
              }`}>
                
                {/* Epic Background Effects */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                  member.status === 'active'
                    ? 'bg-gradient-to-br from-yellow-500/10 via-red-500/10 to-orange-500/10'
                    : 'bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-green-500/10'
                }`}></div>
                <div className="top-0 right-0 absolute bg-gradient-to-bl from-yellow-400/30 to-transparent star-bg-top-right w-64 h-64"></div>
                <div className="bottom-0 left-0 absolute bg-gradient-to-tr from-red-500/30 to-transparent star-bg-bottom-left w-48 h-48"></div>
                
                <div className="z-10 relative p-8 pt-12">
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-xs font-bold shadow-lg ${
                    member.status === 'active' 
                      ? 'bg-gradient-to-r from-green-600 to-green-800 text-white border border-green-400' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-800 text-white border border-blue-400'
                  }`}>
                    {member.status === 'active' ? '🎖️ ACTIVE OPERATOR' : '⚔️ RECRUITING'}
                  </div>
                  
                  {/* Profile Section */}
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="inline-block relative">
                      <div className={`w-24 h-24 mx-auto tactical-star flex items-center justify-center text-4xl shadow-2xl border-4 border-yellow-300 group-hover:scale-110 transition-transform duration-500 ${
                        member.status === 'active' 
                          ? 'bg-gradient-to-br from-yellow-600 via-red-600 to-orange-600' 
                          : 'bg-gradient-to-br from-blue-600 via-purple-600 to-green-600'
                      }`}>
                        <span className="drop-shadow-lg filter">{member.status === 'active' ? '🎖️' : '⚔️'}</span>
                        <div className="absolute -inset-2 border-2 border-yellow-400/50 animate-ping tactical-star"></div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="mb-2 font-bold text-white group-hover:text-yellow-300 text-2xl transition-colors duration-300">{member.name}</h3>
                      <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-800 shadow-lg mb-4 px-4 py-2 border border-red-400 rounded-full font-bold text-white text-sm">
                        <span className="mr-2">🏆</span>
                        {member.rank}
                      </div>
                      <div className="mb-2 text-gray-300 text-sm">{member.branch}</div>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                        member.status === 'active' ? 'bg-yellow-400/20 text-yellow-400' : 'bg-blue-400/20 text-blue-400'
                      }`}>
                        🏆 {member.achievement}
                      </div>
                    </div>
                  </div>
                  
                  {/* Bio */}
                  <p className="mb-6 text-gray-300 group-hover:text-gray-200 text-sm leading-relaxed transition-colors duration-300">
                    {member.bio}
                  </p>
                  
                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="mb-3 font-semibold text-yellow-400 text-lg">🎯 Specialties:</h4>
                    <div className="gap-2 grid grid-cols-1 sm:grid-cols-3">
                      {member.specialties.map((specialty, specIndex) => (
                        <div key={specIndex} className="bg-white/10 hover:bg-white/15 backdrop-blur-sm px-3 py-2 border border-white/20 rounded-lg text-sm text-center transition-all duration-300">
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Certifications */}
                  <div className="mb-6">
                    <h4 className="mb-3 font-semibold text-yellow-400 text-lg">📜 Certifications:</h4>
                    <div className="space-y-2">
                      {member.certifications?.map((cert: string, certIndex: number) => (
                        <div key={certIndex} className="flex items-center">
                          <span className="mr-2 text-green-400">✓</span>
                          <span className="text-gray-300 text-sm">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  {member.status === 'recruiting' && (
                    <div className="pt-4 border-white/20 border-t">
                      <Link href="/join" className="group/btn block relative bg-gradient-to-r from-yellow-400 hover:from-orange-500 to-orange-500 hover:to-red-500 shadow-2xl px-6 py-3 border-2 border-yellow-300 rounded-2xl w-full overflow-hidden font-bold text-black text-center hover:scale-105 transition-all transform">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        <span className="mr-2 text-lg">⚔️</span>
                        <span className="z-10 relative">Apply for This Position</span>
                        <span className="ml-2 text-lg">⚔️</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Vision */}
      <section className="relative bg-gradient-to-br from-tactical-dark via-black to-patriot-blue py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-6 font-bold text-white text-4xl md:text-5xl">
              <span className="bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 text-transparent">
                Building an Elite Unit
              </span>
            </h2>
            <p className="mx-auto max-w-4xl text-gray-300 text-xl md:text-2xl leading-relaxed">
              Our vision is to assemble a diverse team of military veterans, each bringing 
              unique specializations to create the most comprehensive tactical training program 
              in the Pacific Northwest.
            </p>
          </div>
          
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mb-12">
            <div className="group text-center">
              <div className="flex justify-center items-center bg-gradient-to-br from-yellow-600 to-red-600 shadow-2xl mx-auto mb-4 border-4 border-yellow-300 w-20 h-20 text-3xl group-hover:scale-110 transition-transform duration-500 tactical-star">
                <span className="drop-shadow-lg filter">🎖️</span>
              </div>
              <h3 className="mb-3 font-bold text-white text-xl">Diverse Expertise</h3>
              <p className="text-gray-300">
                Combat medics, precision shooters, tactical specialists, and fitness experts 
                working together as one unit.
              </p>
            </div>
            
            <div className="group text-center">
              <div className="flex justify-center items-center bg-gradient-to-br from-blue-600 to-green-600 shadow-2xl mx-auto mb-4 border-4 border-yellow-300 w-20 h-20 text-3xl group-hover:scale-110 transition-transform duration-500 tactical-star">
                <span className="drop-shadow-lg filter">🛡️</span>
              </div>
              <h3 className="mb-3 font-bold text-white text-xl">Veteran Brotherhood</h3>
              <p className="text-gray-300">
                Creating a supportive environment where veterans can continue serving 
                their community through education and training.
              </p>
            </div>
            
            <div className="group text-center">
              <div className="flex justify-center items-center bg-gradient-to-br from-red-600 to-orange-600 shadow-2xl mx-auto mb-4 border-4 border-yellow-300 w-20 h-20 text-3xl group-hover:scale-110 transition-transform duration-500 tactical-star">
                <span className="drop-shadow-lg filter">🎯</span>
              </div>
              <h3 className="mb-3 font-bold text-white text-xl">Mission Excellence</h3>
              <p className="text-gray-300">
                Maintaining the highest standards of tactical training while adapting 
                military precision for civilian applications.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/join" className="group relative bg-gradient-to-r from-yellow-400 hover:from-orange-500 to-orange-500 hover:to-red-500 shadow-2xl px-8 py-4 border-2 border-yellow-300 rounded-2xl overflow-hidden font-bold text-black text-lg hover:scale-110 transition-all transform">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="mr-3 text-xl">⚔️</span>
              <span className="z-10 relative">Join Our Elite Team</span>
              <span className="ml-3 text-xl">⚔️</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}