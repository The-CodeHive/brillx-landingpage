import React from 'react';
import { Lightbulb, Rocket, BookOpen } from 'lucide-react'; // optional icons

const Why = () => {
  return (
    <section className='why-section noto'>
      <div className="floating-blobs"></div>
      <h1>Why BrillX?</h1>
      <div className="why-highlights">
        <div className="why-card">
          <Lightbulb size={40} strokeWidth={1.5} />
          <p>BrillX turns complex topics into clear, fun stories anyone can follow.</p>
        </div>
        <div className="why-card">
          <Rocket size={40} strokeWidth={1.5} />
          <p>Whether it’s dinosaurs, space, or puzzles—BrillX makes learning feel like an adventure.</p>
        </div>
        <div className="why-card">
          <BookOpen size={40} strokeWidth={1.5} />
          <p>Backed by simplicity, BrillX helps kids build knowledge in ways that stick.</p>
        </div>
      </div>
    </section>
  );
};

export default Why;
