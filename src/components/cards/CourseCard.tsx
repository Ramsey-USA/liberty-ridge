import { Course } from '@/data/courses';
import Link from 'next/link';

interface CourseCardProps {
  course: Course;
  featured?: boolean;
  className?: string;
}

export default function CourseCard({ course, featured = false, className = '' }: CourseCardProps) {
  return (
    <div className={`enhanced-course-card group ${className}`}>
      <div className="relative">
        {/* Course Icon/Image Section */}
        <div className={`h-56 bg-gradient-to-br ${
          course.category === 'safety' 
            ? 'from-patriot-blue to-patriot-red' 
            : course.category === 'tactical'
            ? 'from-tactical-dark to-patriot-blue'
            : 'from-patriot-red to-tactical-dark'
        } rounded-xl mb-6 flex items-center justify-center relative overflow-hidden`}>
          <div className="opacity-90 text-white text-6xl">{course.icon}</div>
          
          {/* Badge */}
          {course.popular && (
            <div className="top-4 right-4 absolute bg-white px-3 py-1 rounded-full font-bold text-patriot-blue text-sm">
              Popular
            </div>
          )}
          {featured && !course.popular && (
            <div className="top-4 right-4 absolute bg-patriot-red px-3 py-1 rounded-full font-bold text-white text-sm">
              Featured
            </div>
          )}
          {course.level === 'Advanced' && (
            <div className="top-4 left-4 absolute bg-yellow-400 px-3 py-1 rounded-full font-bold text-dark text-sm">
              {course.level}
            </div>
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        
        <div className="space-y-4">
          {/* Title and Subtitle */}
          <div>
            <h3 className="font-bold text-dark group-hover:text-patriot-blue text-2xl transition-colors duration-300">
              {course.title}
            </h3>
            {course.subtitle && (
              <p className="mt-2 text-tactical-gray text-lg">{course.subtitle}</p>
            )}
          </div>
          
          {/* Description */}
          <p className="text-tactical-gray leading-relaxed">
            {course.description}
          </p>
          
          {/* Course Highlights/Features */}
          {course.highlights && (
            <div className="space-y-2 text-tactical-gray text-sm">
              {course.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          )}
          
          {/* Course Details */}
          <div className="flex justify-between items-center text-tactical-gray text-sm">
            <div className="flex items-center space-x-4">
              <span>⏱️ {course.duration}</span>
              <span>⚔️ {course.level}</span>
              {course.maxStudents && (
                <span>🎯 Max {course.maxStudents}</span>
              )}
            </div>
          </div>
          
          {/* Pricing and CTA */}
          <div className="flex justify-between items-center pt-4">
            <div>
              <span className="course-price">{course.price}</span>
              <span className="ml-2 text-tactical-gray text-sm">
                {course.maxStudents === 1 ? 'per session' : 'per person'}
              </span>
              {course.originalPrice && (
                <span className="ml-2 text-red-500 text-sm line-through">
                  {course.originalPrice}
                </span>
              )}
            </div>
            <Link 
              href="/signup" 
              className="px-6 py-3 font-semibold text-sm group-hover:scale-105 transition-transform duration-200 btn-primary transform"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}