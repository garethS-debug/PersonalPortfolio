import React from 'react';
import { Turso } from '../icons';

const TursoJob = {
  company: 'Turso',
  title: 'Backend Developer',
  logo: <Turso className="w-10 h-10" />,
  job_description: 'Work on edge DB systems...',
  salary: '$100k - $150k',
  location: 'Remote',
  remote: 'Yes',
  job_time: 'Full-time',
  photos: [
    {
      name: 'Console',
      icon: <Turso className="w-6 h-6" />,
      image: 'https://via.placeholder.com/800x500?text=Turso+Console',
    },
  ],
};

export default TursoJob;
