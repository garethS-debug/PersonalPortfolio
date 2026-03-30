import React from 'react';
import { SpatialAudio } from '../icons';
import excompIcon from '../resources/excomp/ExcompLogo.png';
import excompImg from '../resources/excomp/ExperienceComposer.PNG';
// import spatialImg2 from '../resources/spatialAudio/Yolo2.png';
// import spatialImg3 from '../resources/spatialAudio/Yolo3.png';

const ExCompJob = {
  company: 'Experience Composer',
  title: 'Experience Composer — interactive experience builder tool',
  logo: <img src={excompIcon} alt="Experience Composer" className="w-10 h-10" />,
  job_description:
      'In this project I was responsible for building an interactive orchestration builder for non-technical users to create interactive experiences. I built a React web app that allowed users to create and connect nodes representing different states within a wider FSM. The tool featured a drag-and-drop interface for building experience graphs, real-time preview of interactions, and integration with a physical simulator.'
   ,
  salary: '',
  location: 'Bentley Motors',
  remote: 'Yes',
  job_time: 'React, Node.js, HTML, CSS',
  photos: [
    {
      name: 'Console',
      caption: 'Interactive mixing console used in demos',
      icon: <img src={excompIcon} alt="ExComp" className="w-6 h-6" />,
      image: excompImg,
    }
    // {
    //   name: 'Visualization',
    //   caption: 'Spatialization heatmap visualization',
    //   icon: <img src={spatialAudioIcon} alt="Spatial Audio" className="w-6 h-6" />,
    //   image: spatialImg2,
    // },
    // {
    //   name: 'Integration',
    //   caption: 'Unity integration with real-time audio',
    //   icon: <img src={spatialAudioIcon} alt="Spatial Audio" className="w-6 h-6" />,
    //   image: spatialImg3,
    // },
  ],
};

export default ExCompJob;
