import Link from 'next/link';
import { ContactMethod } from '@/data/contact';

interface ContactCardProps {
  method: ContactMethod;
}

export default function ContactCard({ method }: ContactCardProps) {
  const content = (
    <div className="enhanced-course-card">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-patriot-red to-red-700 rounded-xl flex items-center justify-center text-white text-2xl mr-4">
          {method.icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-tactical-dark">{method.title}</h3>
          <p className="text-tactical-gray">{method.description}</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-patriot-red to-red-600 text-white p-4 rounded-lg">
          <p className={`font-bold ${method.title === 'Email Support' ? 'break-all' : 'text-2xl'}`}>
            {method.primary}
          </p>
          <p className="text-sm opacity-90">{method.secondary}</p>
        </div>
        <div className="text-sm text-tactical-dark">
          <p className="mb-2"><strong>Best for:</strong> {method.bestFor}</p>
          <p><strong>Response time:</strong> {method.responseTime}</p>
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