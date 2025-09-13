import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BulletHero from '@/components/BulletHero';
import StatsCard from '@/components/cards/StatsCard';
import {
  currentRanking,
  rankingsHero,
  pageContent,
  competitionTimeline,
  competitionBenefits,
  competitionEquipment,
  studentBenefits,
  upcomingCompetition,
  competitionNavLinks,
  teamMembers
} from '@/data/rankings';

export default function RankingsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Bullet Hero Section */}
      <BulletHero 
        title={rankingsHero.title}
        subtitle={rankingsHero.subtitle}
        description={rankingsHero.description}
        backgroundGradient={rankingsHero.backgroundGradient}
      />

      {/* Elite Team Rankings & Warrior Showcase */}
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
              <span className="text-yellow-400 font-bold text-lg tracking-wider">ELITE WARRIORS</span>
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
              Meet our elite team and discover your path to greatness
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <div key={member.id} className={`group relative overflow-hidden bg-gradient-to-br ${member.gradient}/20 backdrop-blur-sm rounded-3xl border-2 border-yellow-400/50 shadow-2xl transition-all duration-700 hover:shadow-yellow-400/20 hover:shadow-[0_0_50px_rgba(250,204,21,0.3)] hover:-translate-y-2 hover:scale-[1.02] ${index === 0 ? 'lg:col-span-2' : ''}`}>
                {/* Epic Background Effects */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-yellow-400/30 to-transparent star-bg-top-right"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-red-500/30 to-transparent star-bg-bottom-left"></div>
                
                <div className={`relative z-10 ${index === 0 ? 'p-12 pt-16' : 'p-8 pt-12'}`}>
                  <div className={`grid grid-cols-1 ${index === 0 ? 'lg:grid-cols-3' : 'lg:grid-cols-1'} gap-8 items-center`}>
                    {/* Warrior Profile */}
                    <div className="text-center">
                      <div className="relative inline-block mb-6">
                        <div className={`${index === 0 ? 'w-32 h-32' : 'w-24 h-24'} mx-auto bg-gradient-to-br ${member.gradient} tactical-star flex items-center justify-center ${index === 0 ? 'text-6xl' : 'text-4xl'} shadow-2xl border-4 border-yellow-300 group-hover:scale-110 transition-transform duration-500`}>
                          <span className="filter drop-shadow-lg">{member.avatar}</span>
                          <div className="absolute -inset-2 tactical-star border-2 border-yellow-400/50 animate-ping"></div>
                        </div>
                      </div>
                      <h3 className={`${index === 0 ? 'text-4xl' : 'text-2xl'} font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300`}>
                        {member.name}
                      </h3>
                      <div className={`inline-flex items-center ${index === 0 ? 'px-6 py-3' : 'px-4 py-2'} bg-gradient-to-r from-red-600 to-red-800 rounded-full text-white font-bold ${index === 0 ? 'text-lg' : 'text-sm'} shadow-lg border border-red-400 mb-4`}>
                        <span className="mr-2">🏆</span>
                        {member.title}
                      </div>
                      <p className={`text-gray-300 ${index === 0 ? 'text-lg' : 'text-sm'} leading-relaxed group-hover:text-gray-200 transition-colors duration-300`}>
                        {member.specialty}
                      </p>
                    </div>

                    {/* Epic Achievement Stats */}
                    <div className={index === 0 ? "lg:col-span-2" : ""}>
                      <div className={`grid grid-cols-2 ${index === 0 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4`}>
                        <div className="group/stat relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/30 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-1">
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
                          <div className="relative z-10 text-center">
                            <div className="text-3xl font-bold text-yellow-400 mb-1 group-hover/stat:scale-110 transition-transform duration-300">#{member.rank}</div>
                            <div className="text-xs text-gray-300 font-semibold tracking-wider">REGIONAL RANK</div>
                            <div className="mt-2 w-full h-1 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"></div>
                          </div>
                        </div>

                        <div className="group/stat relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/30 hover:bg-white/15 hover:border-red-400/50 transition-all duration-500 hover:-translate-y-1">
                          <div className="absolute inset-0 bg-gradient-to-br from-red-400/10 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
                          <div className="relative z-10 text-center">
                            <div className="text-3xl font-bold text-red-400 mb-1 group-hover/stat:scale-110 transition-transform duration-300">{member.stats.accuracy}%</div>
                            <div className="text-xs text-gray-300 font-semibold tracking-wider">PRECISION</div>
                            <div className="mt-2 w-full h-1 bg-gradient-to-r from-red-400 to-orange-500 rounded-full"></div>
                          </div>
                        </div>

                        <div className="group/stat relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/30 hover:bg-white/15 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-1">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
                          <div className="relative z-10 text-center">
                            <div className="text-3xl font-bold text-blue-400 mb-1 group-hover/stat:scale-110 transition-transform duration-300">{member.stats.maxDistance}</div>
                            <div className="text-xs text-gray-300 font-semibold tracking-wider">MAX YARDS</div>
                            <div className="mt-2 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                          </div>
                        </div>

                        {index === 0 && (
                          <div className="group/stat relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/30 hover:bg-white/15 hover:border-green-400/50 transition-all duration-500 hover:-translate-y-1 col-span-2 md:col-span-3">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10 text-center">
                              <div className="text-2xl font-bold text-green-400 mb-1 group-hover/stat:scale-105 transition-transform duration-300">
                                TOP {member.stats.topPercentage}% REGIONALLY
                              </div>
                              <div className="text-xs text-gray-300 font-semibold tracking-wider">ELITE COMPETITOR STATUS</div>
                              <div className="mt-3 w-full h-2 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 rounded-full shadow-lg"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Warrior Achievements Banner */}
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="grid grid-cols-3 gap-4">
                      {member.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="group/achievement text-center p-4 bg-white/5 rounded-2xl border border-white/20 hover:bg-white/10 hover:border-yellow-400/30 transition-all duration-500">
                          <div className="text-2xl mb-2 group-hover/achievement:scale-110 transition-transform duration-300">
                            {achIndex === 0 ? '🏆' : achIndex === 1 ? '⚔️' : '🎯'}
                          </div>
                          <div className="text-sm font-bold text-yellow-400 mb-1">{achievement}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Path to Greatness CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-patriot-red via-patriot-blue to-patriot-red text-white rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-white/10"></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-6">🔥 EARN YOUR PLACE AMONG CHAMPIONS 🔥</h3>
                <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-95">
                  Ready to join the elite? Train with the best, compete at the highest level, 
                  and become the warrior you were meant to be.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a 
                    href="/join" 
                    className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-orange-500 hover:to-red-500 font-bold py-5 px-10 rounded-2xl text-lg transition-all transform hover:scale-110 shadow-2xl border-2 border-yellow-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="mr-3 text-xl">⚔️</span>
                    <span className="relative z-10">JOIN THE ELITE</span>
                    <span className="ml-3 text-xl">⚔️</span>
                  </a>
                  <a 
                    href="/courses" 
                    className="border-2 border-white text-white hover:bg-white hover:text-patriot-blue font-bold py-5 px-10 rounded-2xl text-lg transition-all transform hover:scale-105 shadow-xl"
                  >
                    🎯 START TRAINING
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}