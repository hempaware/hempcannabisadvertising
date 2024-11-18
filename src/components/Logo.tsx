import React from 'react';
import { Leaf } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="relative">
        <div className="absolute -inset-1 rounded-full border-2 border-primary-blue opacity-20"></div>
        <Leaf className="h-8 w-8 text-primary-green" />
      </div>
      <div className="ml-2 flex flex-col leading-none">
        <span className="text-xl font-bold">
          <span className="text-primary-green">Hemp</span>
          <span className="text-primary-blue">Aware</span>
        </span>
        <span className="text-xs text-gray-600 tracking-wider">MARKETING</span>
      </div>
    </div>
  );
}