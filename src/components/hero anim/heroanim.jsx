import React from 'react';

const HeroAnim = ({
  baseImage,
  videoSrc,
  overlayImage,
  videoProps = {},
  className = '',
  style = {},
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {baseImage && (
        <img
          src={baseImage}
          alt="base"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {videoSrc && (
        <video
          src={videoSrc}
          className="absolute inset-0 w-full h-full object-cover"
          playsInline
          autoPlay
          muted
          loop
          {...videoProps}
        />
      )}

      {overlayImage && (
        <img
          src={overlayImage}
          alt="overlay"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      )}
    </div>
  );
};

export default HeroAnim;
