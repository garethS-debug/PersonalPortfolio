import React from 'react';
import { SpatialAudio } from '../icons';
import excompIcon from '../resources/excomp/ExcompLogo.png';
import excompImg from '../resources/excomp/ExperienceComposer.PNG';
// import spatialImg2 from '../resources/spatialAudio/Yolo2.png';
// import spatialImg3 from '../resources/spatialAudio/Yolo3.png';

const SpatialAudioJob = {
  company: 'ExComp',
  title: 'Experience Composer — interactive experience builder and preview tool',
  logo: <img src={excompIcon} alt="ExComp" className="w-10 h-10" />,
  job_description:
      'In this project I was tasked with creating a low cost way to implement spatialised audio in interior cabbings, using existing hardware. I started prototyping with single camera video and using Yolo to track the positon of points of interest (cars, trees, buildings ect.) then using those to build primitives in a Unity scene that would emmit their own sounds, generating a soundscape that emulates an outside experience. '
   ,
  salary: '',
  location: 'Bentley Motors',
  remote: 'Yes',
  job_time: 'Unity, C#, Yolo, Wwise',
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

export default SpatialAudioJob;
