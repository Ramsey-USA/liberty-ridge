import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BulletHero from '@/components/BulletHero';
import { StatsCard } from '@/components/cards';
import { teamMembers, getActiveTeamMembers, teamRoles, organizationStats } from '@/data/team';
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
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8">
            <StatsCard 
              stat={{
                title: 'Active Operator',
                value: getActiveTeamMembers().length,
                icon: '👨‍💼'
              }}
              variant="compact"
              className="text-center"
            />
            <div className="w-1 h-12 bg-tactical-gray/30"></div>
            <StatsCard 
              stat={{
                title: 'Positions Open',
                value: 3,
                icon: '🔍'
              }}
              variant="compact"
              className="text-center"
            />
            <div className="w-1 h-12 bg-tactical-gray/30"></div>
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
      <section className="py-24 bg-gradient-to-br from-tactical-dark via-black to-patriot-blue relative overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-bl from-patriot-red/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-patriot-blue/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Warrior Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 backdrop-blur-sm px-8 py-4 rounded-full border border-yellow-400/50 mb-8 shadow-2xl">
              <span className="text-3xl animate-pulse">⚔️</span>
              <span className="text-yellow-400 font-bold text-lg tracking-wider">ELITE OPERATORS</span>
              <span className="text-3xl animate-pulse">⚔️</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
                TEAM
              </span>
              <br />
              <span className="text-white">SHOWCASE</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Meet our elite operators and discover available positions
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
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
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-yellow-400/30 to-transparent star-bg-top-right"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-red-500/30 to-transparent star-bg-bottom-left"></div>
                
                <div className="relative z-10 p-8 pt-12">
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-xs font-bold shadow-lg ${
                    member.status === 'active' 
                      ? 'bg-gradient-to-r from-green-600 to-green-800 text-white border border-green-400' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-800 text-white border border-blue-400'
                  }`}>
                    {member.status === 'active' ? '🟢 ACTIVE OPERATOR' : '🔍 RECRUITING'}
                  </div>
                  
                  {/* Profile Section */}
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="relative inline-block">
                      <div className={`w-24 h-24 mx-auto tactical-star flex items-center justify-center text-4xl shadow-2xl border-4 border-yellow-300 group-hover:scale-110 transition-transform duration-500 ${
                        member.status === 'active' 
                          ? 'bg-gradient-to-br from-yellow-600 via-red-600 to-orange-600' 
                          : 'bg-gradient-to-br from-blue-600 via-purple-600 to-green-600'
                      }`}>
                        <span className="filter drop-shadow-lg">{member.status === 'active' ? '👨‍💼' : '❓'}</span>
                        <div className="absolute -inset-2 tactical-star border-2 border-yellow-400/50 animate-ping"></div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">{member.name}</h3>
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-white font-bold text-sm shadow-lg border border-red-400 mb-4">
                        <span className="mr-2">🏆</span>
                        {member.rank}
                      </div>
                      <div className="text-sm text-gray-300 mb-2">{member.branch}</div>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                        member.status === 'active' ? 'bg-yellow-400/20 text-yellow-400' : 'bg-blue-400/20 text-blue-400'
                      }`}>
                        🏆 {member.achievement}
                      </div>
                    </div>
                  </div>
                  
                  {/* Bio */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {member.bio}
                  </p>
                  
                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-yellow-400">🎯 Specialties:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {member.specialties.map((specialty, specIndex) => (
                        <div key={specIndex} className="bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg text-sm text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Certifications */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-yellow-400">📜 Certifications:</h4>
                    <div className="space-y-2">
                      {member.certifications?.map((cert: string, certIndex: number) => (
                        <div key={certIndex} className="flex items-center">
                          <span className="text-green-400 mr-2">✓</span>
                          <span className="text-sm text-gray-300">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  {member.status === 'recruiting' && (
                    <div className="pt-4 border-t border-white/20">
                      <Link href="/join" className="w-full group/btn relative overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-orange-500 hover:to-red-500 font-bold py-3 px-6 rounded-2xl text-center block transition-all transform hover:scale-105 shadow-2xl border-2 border-yellow-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        <span className="mr-2 text-lg">⚔️</span>
                        <span className="relative z-10">Apply for This Position</span>
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
      <section className="py-20 bg-gradient-to-br from-tactical-dark via-black to-patriot-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Building an Elite Unit
              </span>
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-gray-300">
              Our vision is to assemble a diverse team of military veterans, each bringing 
              unique specializations to create the most comprehensive tactical training program 
              in the Pacific Northwest.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-yellow-600 to-red-600 tactical-star flex items-center justify-center text-3xl shadow-2xl border-4 border-yellow-300 group-hover:scale-110 transition-transform duration-500">
                <span className="filter drop-shadow-lg">🎖️</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Diverse Expertise</h3>
              <p className="text-gray-300">
                Combat medics, precision shooters, tactical specialists, and fitness experts 
                working together as one unit.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-green-600 tactical-star flex items-center justify-center text-3xl shadow-2xl border-4 border-yellow-300 group-hover:scale-110 transition-transform duration-500">
                <span className="filter drop-shadow-lg">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Veteran Brotherhood</h3>
              <p className="text-gray-300">
                Creating a supportive environment where veterans can continue serving 
                their community through education and training.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-red-600 to-orange-600 tactical-star flex items-center justify-center text-3xl shadow-2xl border-4 border-yellow-300 group-hover:scale-110 transition-transform duration-500">
                <span className="filter drop-shadow-lg">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Mission Excellence</h3>
              <p className="text-gray-300">
                Maintaining the highest standards of tactical training while adapting 
                military precision for civilian applications.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/join" className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-orange-500 hover:to-red-500 font-bold py-4 px-8 rounded-2xl text-lg transition-all transform hover:scale-110 shadow-2xl border-2 border-yellow-300">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="mr-3 text-xl">⚔️</span>
              <span className="relative z-10">Join Our Elite Team</span>
              <span className="ml-3 text-xl">⚔️</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}