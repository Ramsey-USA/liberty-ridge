import BulletHero from '@/components/BulletHero';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {
    rankingsHero,
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
      />      {/* Elite Team Rankings & Warrior Showcase */}
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
              <span className="font-bold text-yellow-400 text-lg tracking-wider">ELITE WARRIORS</span>
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
              Meet our elite team and discover your path to greatness
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 mb-20">
            {teamMembers.map((member, index) => (
              <div key={member.id} className={`group relative overflow-hidden bg-gradient-to-br ${member.gradient}/20 backdrop-blur-sm rounded-3xl border-2 border-yellow-400/50 shadow-2xl transition-all duration-700 hover:shadow-yellow-400/20 hover:shadow-[0_0_50px_rgba(250,204,21,0.3)] hover:-translate-y-2 hover:scale-[1.02] ${index === 0 ? 'lg:col-span-2' : ''}`}>
                {/* Epic Background Effects */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                <div className="top-0 right-0 absolute bg-gradient-to-bl from-yellow-400/30 to-transparent star-bg-top-right w-64 h-64"></div>
                <div className="bottom-0 left-0 absolute bg-gradient-to-tr from-red-500/30 to-transparent star-bg-bottom-left w-48 h-48"></div>
                
                <div className={`relative z-10 ${index === 0 ? 'p-12 pt-16' : 'p-8 pt-12'}`}>
                  <div className={`grid grid-cols-1 ${index === 0 ? 'lg:grid-cols-3' : 'lg:grid-cols-1'} gap-8 items-center`}>
                    {/* Warrior Profile */}
                    <div className="text-center">
                      <div className="inline-block relative mb-6">
                        <div className={`${index === 0 ? 'w-32 h-32' : 'w-24 h-24'} mx-auto bg-gradient-to-br ${member.gradient} tactical-star flex items-center justify-center ${index === 0 ? 'text-6xl' : 'text-4xl'} shadow-2xl border-4 border-yellow-300 group-hover:scale-110 transition-transform duration-500`}>
                          <span className="drop-shadow-lg filter">{member.avatar}</span>
                          <div className="absolute -inset-2 border-2 border-yellow-400/50 animate-ping tactical-star"></div>
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
                        <div className="group/stat relative bg-white/10 hover:bg-white/15 backdrop-blur-sm p-4 border border-white/30 hover:border-yellow-400/50 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 duration-500">
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
                          <div className="z-10 relative text-center">
                            <div className="mb-1 font-bold text-yellow-400 text-3xl group-hover/stat:scale-110 transition-transform duration-300">#{member.rank}</div>
                            <div className="font-semibold text-gray-300 text-xs tracking-wider">REGIONAL RANK</div>
                            <div className="bg-gradient-to-r from-yellow-400 to-red-500 mt-2 rounded-full w-full h-1"></div>
                          </div>
                        </div>

                        <div className="group/stat relative bg-white/10 hover:bg-white/15 backdrop-blur-sm p-4 border border-white/30 hover:border-red-400/50 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 duration-500">
                          <div className="absolute inset-0 bg-gradient-to-br from-red-400/10 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
                          <div className="z-10 relative text-center">
                            <div className="mb-1 font-bold text-red-400 text-3xl group-hover/stat:scale-110 transition-transform duration-300">{member.stats.accuracy}%</div>
                            <div className="font-semibold text-gray-300 text-xs tracking-wider">PRECISION</div>
                            <div className="bg-gradient-to-r from-red-400 to-orange-500 mt-2 rounded-full w-full h-1"></div>
                          </div>
                        </div>

                        <div className="group/stat relative bg-white/10 hover:bg-white/15 backdrop-blur-sm p-4 border border-white/30 hover:border-blue-400/50 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 duration-500">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
                          <div className="z-10 relative text-center">
                            <div className="mb-1 font-bold text-blue-400 text-3xl group-hover/stat:scale-110 transition-transform duration-300">{member.stats.maxDistance}</div>
                            <div className="font-semibold text-gray-300 text-xs tracking-wider">MAX YARDS</div>
                            <div className="bg-gradient-to-r from-blue-400 to-purple-500 mt-2 rounded-full w-full h-1"></div>
                          </div>
                        </div>

                        {index === 0 && (
                          <div className="group/stat relative col-span-2 md:col-span-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm p-4 border border-white/30 hover:border-green-400/50 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
                            <div className="z-10 relative text-center">
                              <div className="mb-1 font-bold text-green-400 text-2xl group-hover/stat:scale-105 transition-transform duration-300">
                                TOP {member.stats.topPercentage}% REGIONALLY
                              </div>
                              <div className="font-semibold text-gray-300 text-xs tracking-wider">ELITE COMPETITOR STATUS</div>
                              <div className="bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 shadow-lg mt-3 rounded-full w-full h-2"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Warrior Achievements Banner */}
                  <div className="mt-8 pt-6 border-white/20 border-t">
                    <div className="gap-4 grid grid-cols-3">
                      {member.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="group/achievement bg-white/5 hover:bg-white/10 p-4 border border-white/20 hover:border-yellow-400/30 rounded-2xl text-center transition-all duration-500">
                          <div className="mb-2 text-2xl group-hover/achievement:scale-110 transition-transform duration-300">
                            {achIndex === 0 ? '🏆' : achIndex === 1 ? '⚔️' : '🎯'}
                          </div>
                          <div className="mb-1 font-bold text-yellow-400 text-sm">{achievement}</div>
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
            <div className="relative bg-gradient-to-r from-patriot-red via-patriot-blue to-patriot-red p-12 rounded-3xl overflow-hidden text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-white/10"></div>
              <div className="z-10 relative">
                <h3 className="mb-6 font-bold text-4xl">🎖️ EARN YOUR PLACE AMONG CHAMPIONS 🎖️</h3>
                <p className="opacity-95 mx-auto mb-8 max-w-4xl text-xl leading-relaxed">
                  Ready to join the elite? Train with the best, compete at the highest level, 
                  and become the warrior you were meant to be.
                </p>
                <div className="flex sm:flex-row flex-col justify-center items-center gap-6">
                  <a 
                    href="/join" 
                    className="group relative bg-gradient-to-r from-yellow-400 hover:from-orange-500 to-orange-500 hover:to-red-500 shadow-2xl px-10 py-5 border-2 border-yellow-300 rounded-2xl overflow-hidden font-bold text-black text-lg hover:scale-110 transition-all transform"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="mr-3 text-xl">⚔️</span>
                    <span className="z-10 relative">JOIN THE ELITE</span>
                    <span className="ml-3 text-xl">⚔️</span>
                  </a>
                  <a 
                    href="/courses" 
                    className="hover:bg-white shadow-xl px-10 py-5 border-2 border-white rounded-2xl font-bold text-white hover:text-patriot-blue text-lg hover:scale-105 transition-all transform"
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