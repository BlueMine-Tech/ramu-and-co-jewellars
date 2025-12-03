import React from 'react'
import heroimg from '../assets/herosection.png'
const Herosection = () => {
 return (
 <section className="relative w-full">
      <div className="relative w-full">
        {/* Hero Image Container */}
        <div className="relative w-full overflow-hidden">
          <img 
            src={heroimg} 
            alt="Ramu & Co Jewellers" 
            className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}

export default Herosection