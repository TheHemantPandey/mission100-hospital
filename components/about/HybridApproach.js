import React, { memo } from 'react';

const HybridApproach = () => {
  return (
    <section className="w-full bg-white py-8 md:py-12 px-4 flex justify-center items-center">
      <div className="max-w-7xl w-full">
        <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="/200image.png" 
            alt="Mission 200" 
            className="w-full h-auto object-contain block mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default memo(HybridApproach);