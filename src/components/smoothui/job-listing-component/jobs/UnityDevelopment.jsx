import React from 'react';
import { SpatialAudio } from '../icons';
import unityLogo from '../resources/unityDev/UnityDev_1.PNG';
import img1 from '../resources/unityDev/gareth-swarte-villa-render-1-3.jpg';
import img2 from '../resources/unityDev/greypoint2.PNG';
import img3 from '../resources/unityDev/greypoint3.PNG';
import imgBottom from '../resources/unityDev/gareth-swarte-bottom.jpg';
import imgPirate from '../resources/unityDev/gareth-swarte-pirate-throne-4-1.jpg';
import terrainBreakdown from '../resources/unityDev/TerrainBreakdown-GarethSwarte.png';
import lobby1 from '../resources/unityDev/lobbypt1-gareth-swarte.mp4';
import lobby1b from '../resources/unityDev/lobbypt1-gareth-swarte (1).mp4';
import lobby2 from '../resources/unityDev/Lobbypt2- Gareth Swarte.mp4';
import menu from '../resources/unityDev/MenuScreen-GarethSwarte.mp4';
import puzzle from '../resources/unityDev/PUZZLELvl1-GarethSwarte.mp4';
// import spatialImg2 from '../resources/spatialAudio/Yolo2.png';
// import spatialImg3 from '../resources/spatialAudio/Yolo3.png';

const UnityDevJob = {
  company: 'Unity Development',
  title: 'Interactive Game & Networked Systems (Portfolio)',
  logo: <img src={unityLogo} alt="Unity Dev" className="w-10 h-10" />,
  job_description: `This portfolio piece showcases game design, systems design, and multiplayer networking work built in Unity. I focused on gameplay systems, scene composition, and UX for interactive menus and puzzles.

The project explores networking patterns, authoritative vs client prediction, and integration with Photon (PUN/Fusion) for matchmaking and real-time sync. Videos demonstrate in-engine prototypes and hosted builds.`,
  
  salary: '',
  location: '',
  remote: '',
  job_time: 'Unity, Blender, C#, Photon PUN/Fusion, Networking',
  photos: [
    {
      name: 'Villa Render',
      caption: 'Environment render / level mock',
      icon: <img src={img1} alt="Villa" className="w-6 h-6" />,
      image: img1,
    },
    {
      name: 'Grey Point A',
      caption: 'Level concept art',
      icon: <img src={img2} alt="Greypoint2" className="w-6 h-6" />,
      image: img2,
    },
    {
      name: 'Grey Point B',
      caption: 'Alternate lighting pass',
      icon: <img src={img3} alt="Greypoint3" className="w-6 h-6" />,
      image: img3,
    },
    {
      name: 'Terrain Breakdown',
      caption: 'Terrain and procedural detail',
      icon: <img src={terrainBreakdown} alt="Terrain" className="w-6 h-6" />,
      image: terrainBreakdown,
    },
    {
      name: 'Villa Bottom View',
      caption: 'Alternate composition / bottom view',
      icon: <img src={imgBottom} alt="Bottom" className="w-6 h-6" />,
      image: imgBottom,
    },
    {
      name: 'Pirate Throne',
      caption: 'Concept sculpt / throne render',
      icon: <img src={imgPirate} alt="Pirate Throne" className="w-6 h-6" />,
      image: imgPirate,
    },
  ],
  videos: [
    { name: 'Lobby Demo A', file: lobby1 },
    { name: 'Lobby Demo B', file: lobby1b },
    { name: 'Lobby Demo 2', file: lobby2 },
    { name: 'Menu Screen', file: menu },
    { name: 'Puzzle Level 1', file: puzzle },
  ],
};

export default UnityDevJob;
