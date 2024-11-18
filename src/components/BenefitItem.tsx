import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface BenefitItemProps {
  text: string;
}

export default function BenefitItem({ text }: BenefitItemProps) {
  return (
    <div className="flex items-center space-x-3">
      <CheckCircle2 className="h-6 w-6 text-primary-green flex-shrink-0" />
      <span className="text-gray-700">{text}</span>
    </div>
  );
}