import React from 'react';
import { LaptopTurntable } from './LaptopTurntable';
import { INITIAL_PROJECTS } from '../../data/seedData';

export const SelectedWorkSection = () => {
  return (
    <section className="work py-16 sm:py-24 border-b border-[rgba(180,170,255,0.14)]" id="work">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        
        {/* Section Head (BYLDR Style) */}
        <div className="sec-head">
          <div>
            <h2>
              Things I've <span className="grad">built</span>
            </h2>
          </div>
        </div>

        {/* 3D Turntable Component with 3 Laptops */}
        <LaptopTurntable projects={INITIAL_PROJECTS} />

      </div>
    </section>
  );
};

export default SelectedWorkSection;
