import React from 'react';
import { JobOffer } from '../types';

interface FilterBarProps {
  jobs: JobOffer[];
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ jobs, selectedTags, setSelectedTags }) => {
  // Extract all unique tags from jobs
  const allTags = Array.from(
    new Set(jobs.flatMap(job => job.tags))
  ).sort();
  
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  return (
    <div className="bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <h2 className="text-lg font-medium text-gray-700 mb-2 sm:mb-0">Filter by tags:</h2>
          
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tag}
              </button>
            ))}
            
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;