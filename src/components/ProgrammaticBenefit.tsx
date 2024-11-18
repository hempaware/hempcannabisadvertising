import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProgrammaticBenefitProps {
  icon: LucideIcon;
  title: string;
  description: string;
  metrics?: string[];
}

export default function ProgrammaticBenefit({ icon: Icon, title, description, metrics }: ProgrammaticBenefitProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-start">
        <div className="bg-primary-blue/10 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-primary-blue" />
        </div>
      </div>
      <h3 className="text-lg font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {metrics && (
        <div className="border-t pt-4">
          <ul className="space-y-2">
            {metrics.map((metric, index) => (
              <li key={index} className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-primary-blue rounded-full mr-2"></span>
                {metric}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}