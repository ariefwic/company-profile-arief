import React from 'react';
import Image from 'next/image';

interface UserData {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
  };
}

const TeamsPage = () => {
  const teamMembers: UserData[] = [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Joko",
        last: "Sumbarto"
      },
      location: {
        city: "Bandung",
        state: "Antapani",
        country: "Indonesia"
      },
      email: "joko.sumbarto@gmail.com",
      phone: "(123) 456-7890",
      picture: {
        large: "https://randomuser.me/api/portraits/men/75.jpg"
      }
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Nurhadi",
        last: "Wasisto"
      },
      location: {
        city: "Bandung",
        state: "Antapani",
        country: "Indonesia"
      },
      email: "nurhadi.was@gmail.com",
      phone: "(111) 222-3333",
      picture: {
        large: "https://randomuser.me/api/portraits/men/76.jpg"
      }
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Jennie",
        last: "Nichols"
      },
      location: {
        city: "Bandung",
        state: "Antapani",
        country: "Indonesia"
      },
      email: "jennie.nic@gmail.com",
      phone: "(272) 790-0888",
      picture: {
        large: "https://randomuser.me/api/portraits/women/75.jpg"
      }
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Salma",
        last: "Smith"
      },
      location: {
        city: "Bandung",
        state: "Antapani",
        country: "Indonesia"
      },
      email: "salma.smith@gmail.com",
      phone: "(987) 654-3210",
      picture: {
        large: "https://randomuser.me/api/portraits/women/76.jpg"
      }
    },
  ];

  return (
    <div className="container mx-auto mb-10 mt-6 px-6 bg-sky-500 py-6">
      <div className="flex justify-center mb-6">
        <Image src="/team.png" alt="team-banner" width={1500} height={80} />
      </div>
      <h1 className="text-3xl font-bold mb-4 text-center text-white">Team Inspector</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full">
              <div className='relative h-40 w-40 overflow-hidden rounded-full mb-4 flex justify-center'>
                <Image 
                  src={member.picture.large} 
                  alt={`${member.name.title} ${member.name.first} ${member.name.last}`}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center center' />
              </div>
              <p className="text-cyan-400 mb-2 text-center">Email: {member.email}</p>
              <p className="text-cyan-600 mb-2 text-center">Phone: {member.phone}</p>
              <p className="text-cyan-600 mb-2 text-center">Location: {member.location.city}, {member.location.state}, {member.location.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );  
};

export default TeamsPage;
