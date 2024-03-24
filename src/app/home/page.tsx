import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const Home = () => {
  return (
    <div>
      <Header />
      <main className='bg-gray-700 pb-5'>
         <section>
          <div className='flex justify-center h-28 bg-white '>
          <Image src="/images/specialis.jpeg" alt="banner" width={300} height={300}/>
          </div>
          <div className='bg-gray-700 p-4 rounded-lg shadow-md bottom-10'>
            <div className='flex justify-center'>
        <video controls autoPlay className='w-full h-80 object-cover rounded-lg' style={{aspectRatio: "13/9"}}>
          <source src='NDTVID.mp4' type='video/mp4'/>
        </video>
        </div>
        </div>
        </section>
          <h1 className='text-white text-3xl min-w-full'>🛠️ We Are NDT Specialis</h1>
    
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8'>
          <div data-aos="fade-right">
          <div className='bg-slate-600 p-4 rounded-lg shadow-md justify-center'>
        <p className=' p-1 text-3xl text-stone-950'>WE OFFER NDT SERVICE INDUSTRY :</p>
        <p className='py-3 px-4 max-w-7xl flex-auto p-2 text-2xl flex text-white'>
          INDUSTRY Non Destructive Inspection for Industrial Ball Mill, Pipe, Turbine, Machine, and Corrosion Program. Use UT, PT, MT. Capability
        </p>
        </div>
        </div>
        <div data-aos="fade-left">
        <div className='bg-slate-600 p-4 rounded-lg shadow-md '>
        <p className=' p-1 text-3xl text-stone-950'>INSPECTION SERVICE :</p>
        <p className='text-white text-2xl'>- Ultrasonic Testing</p>
        <p className='text-white text-2xl'>- Magnetic Particle Testing</p>
        <p className='text-white text-2xl'>- Liquid Penetran Testing</p>
        </div>
        </div>
      </section>
      <div>
        <h2 className='text-white'>Client :</h2>
        <div className="py-3 px-4 max-w-7xl bg-white flex justify-between">
        <Image src="/images/aman1.png" alt="client" width={150} height={150} />
        <Image src="/images/taka1.png" alt="our client" width={150} height={150} />
        </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
