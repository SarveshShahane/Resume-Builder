import React from 'react';

export const formatDescription = (text) => {
  if (!text) return [];
  
  const lines = text.split('\n').filter(line => line.trim());
  
  return lines.map((line, index) => {
    const isHeading = line.trim().endsWith(':');
    
    const highlightedText = line.split(/\*\*([^*]+)\*\*/g).map((part, i) => 
      i % 2 === 0 ? 
        part : 
        <span key={i} className="font-bold text-blue-700">{part}</span>
    );
    
    if (isHeading) {
      return (
        <div 
          key={index} 
          className="mt-3 mb-1.5 font-semibold"
        >
          {highlightedText}
        </div>
      );
    } else {
      return (
        <div 
          key={index} 
          className="flex items-start mb-1.5 ml-4"
        >
          <span className="mr-2 text-gray-800">•</span>
          <span>
            {highlightedText}
          </span>
        </div>
      );
    }
  });
};