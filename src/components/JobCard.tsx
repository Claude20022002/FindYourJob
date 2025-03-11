import React from 'react';
import { JobOffer } from '../types';
import { Calendar, MapPin, DollarSign, ExternalLink } from 'lucide-react';

interface JobCardProps {
  job: JobOffer;
  onClick: (job: JobOffer) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
      onClick={() => onClick(job)}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          {job.companyLogo ? (
            <img 
              src={job.companyLogo} 
              alt={`${job.company} logo`} 
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
              <span className="text-gray-500 font-bold">{job.company.charAt(0)}</span>
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
          </div>
        </div>
        
        <div className="mb-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <MapPin size={18} className="mr-2" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <DollarSign size={18} className="mr-2" />
            <span>{job.salary}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar size={18} className="mr-2" />
            <span>Posted: {formatDate(job.postedDate)}</span>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4 line-clamp-3">{job.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {job.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-end">
          <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            View Details <ExternalLink size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;