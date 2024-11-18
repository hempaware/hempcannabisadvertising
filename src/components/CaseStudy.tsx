import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  industry: string;
  image: string;
}

export default function CaseStudy({ title, challenge, solution, results, industry, image }: CaseStudyProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="text-sm text-primary-green font-semibold mb-2">{industry}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900">Challenge:</h4>
            <p className="text-gray-600">{challenge}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Solution:</h4>
            <p className="text-gray-600">{solution}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Results:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        </div>
        <button className="mt-4 text-primary-green font-semibold inline-flex items-center hover:text-primary-darkgreen">
          Read Full Case Study
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}