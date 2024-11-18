import React from 'react';
import { XCircle } from 'lucide-react';

interface MistakeCardProps {
  title: string;
  description: string;
  solution: string;
}

export default function MistakeCard({ title, description, solution }: MistakeCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
      <div className="flex items-start">
        <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="text-primary-green font-semibold mb-2">Solution:</h4>
            <p className="text-gray-700">{solution}</p>
          </div>
        </div>
      </div>
    </div>
  );
}