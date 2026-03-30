import React from 'react';
import { SpatialAudio } from '../icons';
import excompIcon from '../resources/HMI/HMILogo.png';
import excompImg from '../resources/HMI/Render1.png';
import excompImg2 from '../resources/HMI/Render2.png';
import excompImg3 from '../resources/HMI/Render3.png';
// import spatialImg2 from '../resources/spatialAudio/Yolo2.png';
// import spatialImg3 from '../resources/spatialAudio/Yolo3.png';

const HMIJob = {
  company: 'HMI Experements',
  title: 'HMI Experements with Unity and real time data',
  logo: <img src={excompIcon} alt="HMI Experements" className="w-10 h-10" />,
  job_description: `For this project I was tasked with building a Unity application that could visualize real time data from a car and utilise that in a HMI experience on the interior screens. I built a Unity app that connected to the car via UDP, visualized the data in real time, and had a modular architecture for easily adding new experiments.

The images for this project are not available for public consumption yet.`,
    
  salary: '',
  location: 'Bentley Motors',
  remote: 'Yes',
  job_time: 'Unity, C#, UDP, Node Red, Blender3D',
  photos: [
    {
      name: 'Console',
      caption: 'Interactive mixing console used in demos',
      icon: <img src={excompIcon} alt="HMI Experements" className="w-6 h-6" />,
      image: excompImg,
    },
    {
      name: 'Visualization',
      caption: 'Spatialization heatmap visualization',
      icon: <img src={excompImg2} alt="Spatial Audio" className="w-6 h-6" />,
      image: excompImg2,
    },
    {
      name: 'Integration',
      caption: 'Unity integration with real-time audio',
      icon: <img src={excompImg3} alt="Spatial Audio" className="w-6 h-6" />,
      image:  excompImg3,
    },
  ],
};

export default HMIJob;
