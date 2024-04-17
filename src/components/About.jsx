import React, { useEffect, useRef, useState } from 'react';
import { useIntersection } from 'react-use';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  const intersection = useIntersection(aboutRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0.5) {
      setIsVisible(true);
    }
  }, [intersection]);

  return (
    <div id='about' className="flex  px-14 mt-16 lg:mt-20 min-h-[60vh] w-screen bg-white lg:px-20 ">
      <div
        ref={aboutRef}
        className={`${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } transition duration-1000 ease-in-out transform w-screen   bg-white rounded-lg `}
      >
    
        <div>
  <p className="lg:text-lg text-[15px] leading-relaxed">
    Welcome to our maritime sanctuary! At the core of our pursuits lies an unwavering passion for the art of sailing and the science of engineering. We specialize in the intricate crafts of ship and bridge construction engineering, meticulously crafting vessels that boldly traverse the vast expanse of the oceans and erecting awe-inspiring bridges that unite distant shores and cultures.
  </p>
  <p className="lg:text-lg text-[15px] leading-relaxed mt-2">
    With an unwavering commitment to excellence and safety, we set sail on each new endeavor, tirelessly shaping the future of marine engineering one project at a time. From the blueprint to the final construction, we imbue each undertaking with our dedication, expertise, and a profound respect for the seas and the communities we serve.
  </p>
  <p className="hidden lg:block lg:text-lg text-[15px] leading-relaxed mt-2">
    Our journey in marine engineering is defined by innovation and collaboration. We thrive on challenges, turning ideas into reality through creative problem-solving and cutting-edge technology. With a deep-seated understanding of the ocean's complexities and a vision for sustainable development, we navigate towards a future where marine engineering harmonizes with nature, enriching lives and preserving the treasures of the seas for generations to come.
  </p>
</div>

      </div>
    </div>
  );
};

export default About;
