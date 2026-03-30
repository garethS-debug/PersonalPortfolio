import React from 'react';
import { Supabase } from '../icons';

const SupabaseJob = {
  company: 'Supabase',
  title: 'Developer Advocate',
  logo: <Supabase className="w-10 h-10" />,
  job_description: 'Create content and speak at events...',
  salary: '$90k - $130k',
  location: 'Remote',
  remote: 'Yes',
  job_time: 'Full-time',
  photos: [
    {
      name: 'Docs',
      icon: <Supabase className="w-6 h-6" />,
      image: 'https://via.placeholder.com/800x500?text=Supabase+Docs',
    },
  ],
};

export default SupabaseJob;
