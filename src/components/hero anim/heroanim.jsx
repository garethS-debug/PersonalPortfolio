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
  // base (background) customization
  baseClassName = '',
  baseStyle = {},
  baseScale = 1,
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

  // Ensure the container is responsive by default
  // do not override explicit width/height if provided
  if (!layoutStyle.width) layoutStyle.width = '100%';
  if (!layoutStyle.height) layoutStyle.height = layoutStyle.height || 'auto';
  // prefer an aspect ratio so the hero scales nicely; only set if no height provided
  if (!height && !layoutStyle.aspectRatio) layoutStyle.aspectRatio = '16/9';
  layoutStyle.maxWidth = layoutStyle.maxWidth || '100%';
  layoutStyle.display = layoutStyle.display || 'block';
  layoutStyle.position = layoutStyle.position || 'relative';

  return (
    <div className={`${className} overflow-hidden`} style={layoutStyle}>
      {baseImage && (
        <img
          src={baseImage}
          alt="base"
          className={`absolute inset-0 w-full h-full object-cover ${baseClassName}`}
          style={{
            ...(baseScale && baseScale !== 1 ? { transform: `scale(${baseScale})`, transformOrigin: 'center center' } : {}),
            ...baseStyle,
          }}
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
