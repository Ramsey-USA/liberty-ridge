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
  competitionNavLinks
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

      {/* Current Ranking */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-patriot-red to-patriot-blue text-white rounded-lg p-12 mb-12">
            <div className="text-8xl font-bold mb-4">#{currentRanking.position}</div>
            <h2 className="text-3xl font-semibold mb-4">{pageContent.currentRanking.title}</h2>
            <p className="text-xl">{currentRanking.competition}</p>
            <p className="text-lg mt-4 opacity-90">Last Updated: {pageContent.currentRanking.lastUpdated}</p>
          </div>
          
          <p className="text-xl text-tactical-gray max-w-4xl mx-auto">
            {currentRanking.description}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <StatsCard 
              stat={{
                title: "Top %",
                value: `${currentRanking.stats.topPercentage}%`,
                description: "National Ranking"
              }}
            />
            <StatsCard 
              stat={{
                title: "Competitors",
                value: currentRanking.stats.totalCompetitors,
                description: "Total Field"
              }}
            />
            <StatsCard 
              stat={{
                title: "Max Distance",
                value: `${currentRanking.stats.maxDistance}`,
                description: "Yards"
              }}
            />
            <StatsCard 
              stat={{
                title: "Accuracy",
                value: `${currentRanking.stats.averageAccuracy}%`,
                description: "Average"
              }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}