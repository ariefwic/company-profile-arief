import React from 'react';
import Image from 'next/image';

const MainContent = () => {
  return (
    <div>
      <main className='bg-gray-700 pb-5'>
        <section>
          <div className='flex justify-center h-80 bg-white'>
            <Image src='/specialis.jpeg' alt="banner" width={300} height={300} />
          </div>
          <div className='bg-gray-700 p-4 rounded-lg shadow-md mt-5'>
            <div className='flex justify-center'>
              <video controls autoPlay className='w-full h-80 object-cover rounded-lg' style={{ aspectRatio: "16/9" }}>
                <source src='/NDTVID.mp4' type='video/mp4' />
              </video>
            </div>
          </div>
        </section>
        <h1 className='text-white text-3xl mt-5 mb-2'>🛠️ We Are NDT Specialists</h1>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8'>
          <div data-aos="fade-right">
            <div className='bg-slate-600 p-4 rounded-lg shadow-md'>
              <p className='p-1 text-3xl text-stone-950'>WE OFFER NDT SERVICES FOR INDUSTRY:</p>
              <p className='py-3 text-2xl text-white'>- Non Destructive Inspection for Industrial Ball Mill, Pipe, Turbine, Machine, and Corrosion Program. Using UT, PT, MT. Capability</p>
            </div>
          </div>
          <div data-aos="fade-left">
            <div className='bg-slate-600 p-4 rounded-lg shadow-md'>
              <p className='p-1 text-3xl text-stone-950'>INSPECTION SERVICES:</p>
              <p className='text-white text-2xl'>- Ultrasonic Testing</p>
              <p className='text-white text-2xl'>- Magnetic Particle Testing</p>
              <p className='text-white text-2xl'>- Liquid Penetrant Testing</p>
            </div>
          </div>
        </section>
        <div>
          <h2 className='text-white mt-8'>Clients:</h2>
          <div className="py-3 px-4 max-w-7xl bg-white flex justify-between">
            <Image src='/aman1.png' alt="client" width={150} height={150} />
            <Image src='/taka1.png' alt="our client" width={150} height={150} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainContent;
