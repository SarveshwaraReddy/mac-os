import React from 'react';

const DesktopBackground = React.memo(({ displayWall, fadeWall, isFading }) => {
  return (
    <>
      <div
        className="desktop-bg desktop-bg-base"
        style={{ 
          backgroundImage: `url("${displayWall}")`,
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
      />
      {fadeWall && (
        <div
          className={`desktop-bg desktop-bg-fade ${isFading ? "show" : ""}`}
          style={{ 
            backgroundImage: `url("${fadeWall}")`,
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
        />
      )}
    </>
  );
});

DesktopBackground.displayName = 'DesktopBackground';

export default DesktopBackground;

