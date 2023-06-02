'use client'



import { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';
import { useRouter } from 'next/navigation';

const Otherservices = () => {
  const services = [
    { name: 'Mechanical Engineering', route: '/services/mechanical' },
    { name: 'Chemical Engineering', route: '/services/chemical' },
    { name: 'Civil Engineering', route: '/services/civil' },
    { name: 'Computer Engineering', route: '/services/computer' },
    { name: 'Petroleum Engineering', route: '/services/petroleum' }
  ];

  const router = useRouter();
  const currentRoute = router.route;

  const [hiddenServices, setHiddenServices] = useState([]);

  // Update hidden services when the current route changes
  useEffect(() => {
    const updatedHiddenServices = services.filter(service => service.route === currentRoute);
    setHiddenServices(updatedHiddenServices);
  }, [currentRoute]);

  const filteredServices = services.filter(service => !hiddenServices.includes(service));

  return (
    <section className="relative md:top-32 w-full h-auto my-20 sm:my-20 md:mb-10 md:my-0">
      <div className="max-w-[400px] sm:max-w-[600px] md:max-w-[1000px] mx-auto">
        <h1 className='text-2xl md:text-4xl font-extrabold mb-10'>Other Services</h1>
        <div className='grid grid-cols-2 grid-rows-2 gap-2 sm:grid-cols-3 md:grid-cols-4'>
          {filteredServices.map((service, index) => (
            <ServiceItem key={index} serviceName={service.name} route={service.route} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Otherservices;


// import ServiceItem from './ServiceItem';
// import { useRouter } from 'next/navigation';

// const Otherservices = () => {
//   const services = [
//     { name: 'Mechanical Engineering', route: '/services/mechanical' },
//     { name: 'Chemical Engineering', route: '/services/chemical' },
//     { name: 'Civil Engineering', route: '/services/civil' },
//     { name: 'Computer Engineering', route: '/services/computer' },
//     { name: 'Petroleum Engineering', route: '/services/petroleum' }
//   ];

//   const router = useRouter();
//   const currentRoute = router.route;

//   const filteredServices = services.filter(service => service.route !== currentRoute);

//   return (
//     <section className="relative md:top-32 w-full h-auto my-20 sm:my-20 md:mb-10 md:my-0">
//       <div className="max-w-[400px] sm:max-w-[600px] md:max-w-[1000px] mx-auto">
//         <h1 className='text-2xl md:text-4xl font-extrabold mb-10'>Other Services</h1>
//         <div className='grid grid-cols-2 grid-rows-2 gap-2 sm:grid-cols-3 md:grid-cols-4'>
//           {filteredServices.map((service, index) => (
//             <ServiceItem key={index} serviceName={service.name} route={service.route} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Otherservices;
