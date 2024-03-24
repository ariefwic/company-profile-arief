import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';



const About = () => {
  return (
    <div>
      <Header />
      <main className='bg-slate-600 pt-10 '>
        <div className='justify-between min-w-full flex-1 '>
          <div className='flex justify-center h-40'>
          <Image src="/images/probe.png" alt="ndt" width={400} height={400}/>
          </div>
        </div>
        <div className='justify-self-center bg-white'>
        <section className='grid grid-cols-1 gap-6 my-8 bg-slate-600 p-11'>
          <div data-aos="fade-right">
          <div className='bg-slate-600'>
          <p className='flex bg-slate-600 min-w-full shadow '>Non-destructive testing (NDT) is the process of inspecting,
             testing, or evaluating materials, components, or assemblies
              without causing damage. This technique has been used in various
               industries for many years, and its development can be traced back to the
                1800s.
                </p>
                </div>
                </div>
                <div data-aos="fade-left">
                <div className='bg-slate-600'>
              <p className='flex bg-slate-600 min-w-full shadow '>The history of NDT dates back to the early 1800s when visual
             inspection was used to detect surface cracks on metal parts.
              The first non-destructive testing method used was the magnetic
               particle inspection (MPI), which was developed in the 1860s. MPI
                involves placing a magnetic field around the object being inspected,
                 and then applying iron oxide particles to the surface. The particles
                  collect at the site of any cracks or defects, making them easily visible.
              </p>     
              </div>
              </div>
              <div data-aos="fade-right">
              <p className='flex bg-slate-600 min-w-full shadow '>In the early 1900s, the ultrasonic testing (UT) 
              technique was developed, which uses high-frequency sound waves to inspect materials.
               The first practical application of UT was for detecting defects in armor plates used
                on naval vessels during World War I. UT quickly became a widely used method for non-destructive 
                testing, and it is still used today in a variety of industries, including aerospace, automotive,
                 and manufacturing.
              </p>
              </div>
          

            </section>

        </div>
    

      </main>

      <Footer/>  
    </div>
    
  );
};


export default About;
