import React from 'react';
import Image from 'next/image';


const ServicesPage = () => {
  return (
    <div data-aos="fade-right">
      <main className='bg-black'>
        <div className='flex justify-center'>
          <div className='max-w-full h-auto'>
            <Image src="/ut.png" alt="service" width={1400} height={300} />
          </div>
        </div>

        <section className='bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8'>
          <div className='bg-neutral-600 p-4 rounded-lg shadow-md'>
            <div className="flex justify-center space-x-4">
              <Image src="/NDT.jpeg" alt="NDT" width={400} height={400} />
              <Image src="/ultrasonic.png" alt="ultrasonic" width={400} height={400} />
            </div>
            <p className='p-1 text-2x0.1 text-white'>Ultrasonic Testing</p>
            <p className='p-1 text-2x0.1 text-white'>Ultrasonic testing (UT) is a family of non-destructive testing techniques based on the propagation of ultrasonic waves in the object or material tested. In most common UT applications, very short ultrasonic pulse waves with center frequencies ranging from 0.1-15 MHz and occasionally up to 50 MHz are transmitted into materials to detect internal flaws or to characterize materials. A common example is ultrasonic thickness measurement, which tests the thickness of the test object, for example, to monitor pipework corrosion and erosion. Ultrasonic testing is extensively used to detect flaws in welds.</p>
          </div>
          <div className='bg-zinc-600 p-4 rounded-lg shadow-md'>
            <div className="flex justify-center">
              <Image src="/magnetic.png" alt="magnetic" width={400} height={400} />
            </div>
            <p className='p-1 text-2x0.l text-white'>Magnetic Testing</p>
            <p className='p-1 text-2x0.l text-white'>Magnetic particle inspection (MPI) is a nondestructive testing process where a magnetic field is used for detecting surface and shallow subsurface discontinuities in ferromagnetic materials. Examples of ferromagnetic materials include iron, nickel, cobalt, and some of their alloys. The process puts a magnetic field into the part. The piece can be magnetized by direct or indirect magnetization. Direct magnetization occurs when the electric current is passed through the test object and a magnetic field is formed in the material. Indirect magnetization occurs when no electric current is passed through the test object, but a magnetic field is applied from an outside source. The magnetic lines of force are perpendicular to the direction of the electric current, which may be either alternating current (AC) or some form of direct current (DC) (rectified AC).</p>
          </div>
          <div className='bg-stone-600 p-4 rounded-lg shadow-md'>
            <div className="flex justify-center">
              <Image src="/penetran.png" alt="penetrant" width={400} height={400} />
            </div>
            <p className='p-1 text-2x0.l text-white'>Penetrant Testing</p>
            <p className='p-1 text-2x0.l text-white'>Penetrant inspection (FPI) is a type of dye penetrant inspection in which a fluorescent dye is applied to the surface of a non-porous material to detect defects that may compromise the integrity or quality of the part in question. FPI is noted for its low cost and simple process and is used widely in a variety of industries.</p>
            
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;
