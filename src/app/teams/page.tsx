import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamsPage from '../components/teams';
import Image from 'next/image';

const Team = () => {
  return (
    <div>

      <Header />

      <main className='bg-stone-700'>
        <div className='min-w-full justify-self-center'>
          <Image src="/images/team.png" alt="team" width={1500} height={400} />
          
        </div>
        
        
      </main>

      <TeamsPage>

      </TeamsPage>

    <Footer/>
    </div>
  );
};

export default Team;
