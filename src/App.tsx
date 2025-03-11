import React, { useState, useEffect } from 'react';
import { JobOffer } from './types';
import { jobs as initialJobs } from './data/jobs';
import JobCard from './components/JobCard';
import JobDetail from './components/JobDetail';
import JobForm from './components/JobForm';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import { Briefcase as BriefcaseBusiness } from 'lucide-react';

function App() {
  const [jobs, setJobs] = useState<JobOffer[]>(initialJobs);
  const [selectedJob, setSelectedJob] = useState<JobOffer | null>(null);
  const [showJobForm, setShowJobForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleJobClick = (job: JobOffer) => {
    setSelectedJob(job);
  };

  const handleCloseJobDetail = () => {
    setSelectedJob(null);
  };

  const handleAddJob = (newJob: Omit<JobOffer, 'id'>) => {
    const jobWithId: JobOffer = {
      ...newJob,
      id: (jobs.length + 1).toString()
    };
    
    setJobs([jobWithId, ...jobs]);
  };

  // Filter jobs based on search term and selected tags
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = 
      searchTerm === '' || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTags = 
      selectedTags.length === 0 || 
      selectedTags.every(tag => job.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <BriefcaseBusiness size={64} className="text-blue-600 animate-pulse mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">JobShare</h1>
        <p className="text-gray-600">Loading job opportunities...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onAddJobClick={() => setShowJobForm(true)} 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      
      <FilterBar 
        jobs={jobs}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredJobs.length > 0 ? (
          <>
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {filteredJobs.length} Job{filteredJobs.length !== 1 ? 's' : ''} Available
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map(job => (
                <JobCard 
                  key={job.id} 
                  job={job} 
                  onClick={handleJobClick} 
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
              <BriefcaseBusiness size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || selectedTags.length > 0 
                ? "Try adjusting your search or filters to find more opportunities."
                : "There are no job listings available at the moment."}
            </p>
            <button
              onClick={() => setShowJobForm(true)}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Post a New Job
            </button>
          </div>
        )}
      </main>
      
      {selectedJob && (
        <JobDetail job={selectedJob} onClose={handleCloseJobDetail} />
      )}
      
      {showJobForm && (
        <JobForm 
          onSubmit={handleAddJob} 
          onClose={() => setShowJobForm(false)} 
        />
      )}
    </div>
  );
}

export default App;