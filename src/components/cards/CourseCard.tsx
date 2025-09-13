import Link from 'next/link';
import { Course } from '@/data/courses';

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
          <div className="text-6xl text-white opacity-90">{course.icon}</div>
          
          {/* Badge */}
          {course.popular && (
            <div className="absolute top-4 right-4 bg-white text-patriot-blue px-3 py-1 rounded-full text-sm font-bold">
              Popular
            </div>
          )}
          {featured && !course.popular && (
            <div className="absolute top-4 right-4 bg-patriot-red text-white px-3 py-1 rounded-full text-sm font-bold">
              Featured
            </div>
          )}
          {course.level === 'Advanced' && (
            <div className="absolute top-4 left-4 bg-yellow-400 text-tactical-dark px-3 py-1 rounded-full text-sm font-bold">
              {course.level}
            </div>
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        
        <div className="space-y-4">
          {/* Title and Subtitle */}
          <div>
            <h3 className="text-2xl font-bold text-tactical-dark group-hover:text-patriot-blue transition-colors duration-300">
              {course.title}
            </h3>
            {course.subtitle && (
              <p className="text-lg text-tactical-gray mt-2">{course.subtitle}</p>
            )}
          </div>
          
          {/* Description */}
          <p className="text-tactical-gray leading-relaxed">
            {course.description}
          </p>
          
          {/* Course Highlights/Features */}
          {course.highlights && (
            <div className="space-y-2 text-sm text-tactical-gray">
              {course.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          )}
          
          {/* Course Details */}
          <div className="flex items-center justify-between text-sm text-tactical-gray">
            <div className="flex items-center space-x-4">
              <span>⏱️ {course.duration}</span>
              <span>👥 {course.level}</span>
              {course.maxStudents && (
                <span>📊 Max {course.maxStudents}</span>
              )}
            </div>
          </div>
          
          {/* Pricing and CTA */}
          <div className="flex justify-between items-center pt-4">
            <div>
              <span className="course-price">{course.price}</span>
              <span className="text-sm text-tactical-gray ml-2">
                {course.maxStudents === 1 ? 'per session' : 'per person'}
              </span>
              {course.originalPrice && (
                <span className="text-sm text-red-500 line-through ml-2">
                  {course.originalPrice}
                </span>
              )}
            </div>
            <Link 
              href="/signup" 
              className="btn-primary px-6 py-3 text-sm font-semibold transform group-hover:scale-105 transition-transform duration-200"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}