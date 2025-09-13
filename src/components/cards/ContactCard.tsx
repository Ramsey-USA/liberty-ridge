import Link from 'next/link';
import { ContactMethod } from '@/data/contact';

interface ContactCardProps {
  method: ContactMethod;
}

export default function ContactCard({ method }: ContactCardProps) {
  const content = (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-yellow-400/50 rounded-xl p-8 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl group">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-patriot-red to-red-700 rounded-xl flex items-center justify-center text-white text-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
          {method.icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">{method.title}</h3>
          <p className="text-gray-300">{method.description}</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-patriot-red to-red-600 text-white p-4 rounded-lg shadow-lg">
          <p className={`font-bold ${method.title === 'Email Support' ? 'break-all' : 'text-2xl'}`}>
            {method.primary}
          </p>
          <p className="text-sm opacity-90">{method.secondary}</p>
        </div>
        <div className="text-sm text-gray-300 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
          <p className="mb-2 text-white"><strong>Best for:</strong> {method.bestFor}</p>
          <p className="text-gray-300"><strong>Response time:</strong> {method.responseTime}</p>
        </div>
      </div>
    </div>
  );

  if (method.href) {
    return (
      <Link href={method.href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}