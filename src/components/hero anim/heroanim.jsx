import React from 'react';

const HeroAnim = ({
  baseImage,
  videoSrc,
  overlayImage,
  videoProps = {},
  className = '',
  style = {},
  // optional layout props to control placement and scale (only applied when provided)
  position,
  top,
  left,
  right,
  bottom,
  width,
  height,
  scale = 1,
  zIndex,
  // overlay customization
  overlayClassName = '',
  overlayStyle = {},
  overlayScale = 1,
}) => {
  const layoutStyle = { ...style };
  if (position) layoutStyle.position = position;
  if (top) layoutStyle.top = top;
  if (left) layoutStyle.left = left;
  if (right) layoutStyle.right = right;
  if (bottom) layoutStyle.bottom = bottom;
  if (width) layoutStyle.width = width;
  if (height) layoutStyle.height = height;
  if (zIndex !== undefined) layoutStyle.zIndex = zIndex;
  // apply scale without translating so className-based centering isn't disturbed
  if (scale && scale !== 1) layoutStyle.transform = `scale(${scale})`;

  return (
    <div className={`${className} overflow-hidden`} style={layoutStyle}>
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
          className="absolute inset-0 w-full h-full object-contain object-center"
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
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none ${overlayClassName}`}
          style={{
            ...(overlayScale && overlayScale !== 1 ? { transform: `scale(${overlayScale})`, transformOrigin: 'center center' } : {}),
            ...overlayStyle,
          }}
        />
      )}
    </div>
  );
};

export default HeroAnim;
