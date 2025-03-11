import React from 'react';
import { JobOffer } from '../types';
import { Calendar, MapPin, DollarSign, ExternalLink, X } from 'lucide-react';

interface JobDetailProps {
  job: JobOffer;
  onClose: () => void;
}

const JobDetail: React.FC<JobDetailProps> = ({ job, onClose }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-6">
            {job.companyLogo ? (
              <img 
                src={job.companyLogo} 
                alt={`${job.company} logo`} 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                <span className="text-gray-500 text-xl font-bold">{job.company.charAt(0)}</span>
              </div>
            )}
            <div>
              <h3 className="text-xl font-bold text-gray-800">{job.company}</h3>
              <div className="flex items-center text-gray-600 mt-1">
                <Calendar size={18} className="mr-2" />
                <span>Posted: {formatDate(job.postedDate)}</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-lg">
              <MapPin size={20} className="mr-2 text-blue-600" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-lg">
              <DollarSign size={20} className="mr-2 text-green-600" />
              <span>{job.salary}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Description</h4>
            <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Requirements</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {job.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex justify-center">
            <a 
              href={job.applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Apply Now <ExternalLink size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;