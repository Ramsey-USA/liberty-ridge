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
    <div className="min-h-screen relative">
      {/* Desert Camo Theme Background */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e7d3b0] via-[#cbb994] to-[#bfae82]"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(135deg, #e7d3b0 0 20px, #cbb994 20px 40px, #bfae82 40px 60px, #e7d3b0 60px 80px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="relative z-10">
        <Header />
        
        {/* Desert-Themed Hero Section with BulletHero */}
        <BulletHero
          title="OUR OPERATORS"
          subtitle="Veterans Leading Veterans"
          description="Meet the elite team of military veterans bringing decades of combat experience and tactical expertise to civilian training operations."
          backgroundGradient="from-[#e7d3b0] via-[#cbb994] to-[#bfae82]"
        />

        {/* Stats Section */}
        <section className="py-12 bg-[#f5e7c6]">
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
              <div className="w-1 h-12 bg-[#8b4513]/30"></div>
              <StatsCard 
                stat={{
                  title: 'Positions Open',
                  value: 3,
                  icon: '🔍'
                }}
                variant="compact"
                className="text-center"
              />
              <div className="w-1 h-12 bg-[#8b4513]/30"></div>
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

        {/* Team Grid */}
        <section className="py-20 bg-gradient-to-b from-[#f5e7c6] to-[#e7d3b0] relative">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `repeating-linear-gradient(135deg, #e7d3b0 0 20px, #cbb994 20px 40px, #bfae82 40px 60px, #e7d3b0 60px 80px)`,
            backgroundSize: '80px 80px'
          }}></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {allTeamDisplay.map((member) => (
                <div key={member.id} className={`relative group ${
                  member.status === 'active' 
                    ? 'bg-gradient-to-br from-[#d2b48c] to-[#8b7355]' 
                    : 'bg-gradient-to-br from-[#c8aa7e] to-[#a0886b]'
                } text-white rounded-2xl p-8 shadow-2xl border-2 ${
                  member.status === 'active' ? 'border-[#b8860b]' : 'border-[#daa520]'
                } hover:shadow-3xl transition-all duration-500 transform hover:scale-105`}>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                    member.status === 'active' 
                      ? 'bg-[#8b4513] text-white' 
                      : 'bg-[#daa520] text-[#3d2c13]'
                  }`}>
                    {member.status === 'active' ? '🟢 ACTIVE' : '🔍 RECRUITING'}
                  </div>
                  
                  {/* Profile Section */}
                  <div className="flex items-start space-x-6 mb-6">
                    <div className={`w-24 h-24 rounded-xl flex items-center justify-center text-4xl ${
                      member.status === 'active' 
                        ? 'bg-[#8b4513]/50' 
                        : 'bg-[#a0886b]/50 border-2 border-dashed border-[#daa520]'
                    }`}>
                      {member.status === 'active' ? '👨‍💼' : '❓'}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                      <div className="text-lg font-semibold text-[#daa520] mb-1">{member.rank}</div>
                      <div className="text-sm text-gray-300 mb-2">{member.branch}</div>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                        member.status === 'active' ? 'bg-[#8b4513]/30' : 'bg-[#daa520]/30'
                      }`}>
                        🏆 {member.achievement}
                      </div>
                    </div>
                  </div>
                  
                  {/* Bio */}
                  <p className="text-gray-200 leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-[#daa520]">🎯 Specialties:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {member.specialties.map((specialty, index) => (
                        <div key={index} className="bg-black/30 px-3 py-2 rounded-lg text-sm text-center">
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Certifications */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-[#daa520]">📜 Certifications:</h4>
                    <div className="space-y-2">
                      {member.certifications?.map((cert: string, index: number) => (
                        <div key={index} className="flex items-center">
                          <span className="text-[#daa520] mr-2">✓</span>
                          <span className="text-sm">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  {member.status === 'recruiting' && (
                    <div className="pt-4 border-t border-white/20">
                      <Link href="/join" className="w-full bg-[#daa520] hover:bg-[#b8860b] text-[#3d2c13] font-bold py-3 px-6 rounded-lg text-center block transition-colors duration-300">
                        🎖️ Apply for This Position
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Vision */}
        <section className="py-20 bg-gradient-to-br from-[#d2b48c] via-[#c8aa7e] to-[#bfae82] text-[#3d2c13] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `repeating-linear-gradient(135deg, #e7d3b0 0 20px, #cbb994 20px 40px, #bfae82 40px 60px, #e7d3b0 60px 80px)`,
            backgroundSize: '80px 80px'
          }}></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Building an Elite Unit
              </h2>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-[#654321]">
                Our vision is to assemble a diverse team of military veterans, each bringing 
                unique specializations to create the most comprehensive tactical training program 
                in the Pacific Northwest.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-[#8b4513] rounded-full flex items-center justify-center text-3xl">
                  🎖️
                </div>
                <h3 className="text-xl font-bold mb-3">Diverse Expertise</h3>
                <p className="text-[#654321]">
                  Combat medics, precision shooters, tactical specialists, and fitness experts 
                  working together as one unit.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-[#d2691e] rounded-full flex items-center justify-center text-3xl">
                  🤝
                </div>
                <h3 className="text-xl font-bold mb-3">Veteran Brotherhood</h3>
                <p className="text-[#654321]">
                  Creating a supportive environment where veterans can continue serving 
                  their community through education and training.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-[#8b4513] rounded-full flex items-center justify-center text-3xl">
                  🎯
                </div>
                <h3 className="text-xl font-bold mb-3">Mission Excellence</h3>
                <p className="text-[#654321]">
                  Maintaining the highest standards of tactical training while adapting 
                  military precision for civilian applications.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="/join" className="bg-[#8b4513] hover:bg-[#654321] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                🚀 Join Our Team
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}