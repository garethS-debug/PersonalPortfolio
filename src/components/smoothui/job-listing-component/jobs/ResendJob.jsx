import React from 'react';
import { Resend } from '../icons';

const ResendJob = {
  company: 'Resend',
  title: 'Senior Frontend Engineer',
  logo: <Resend className="w-10 h-10" />,
  job_description: 'Building a React dashboard that allows users to create UX experiences',
  salary: '$120k - $180k',
  location: 'San Francisco',
  remote: 'Hybrid',
  job_time: 'Full-time',
  photos: [
    {
      name: 'UI',
      icon: <Resend className="w-6 h-6" />,
      image: 'https://via.placeholder.com/800x500?text=Resend+UI+1',
    },
    {
      name: 'Dashboard',
      icon: <Resend className="w-6 h-6" />,
      image: 'https://via.placeholder.com/800x500?text=Resend+UI+2',
    },
  ],
};

export default ResendJob;
