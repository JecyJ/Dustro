'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ServiceItem from './ServiceItem';

const services = [
  { name: 'Mechanical Engineering', path: '/services/mechanical' },
  { name: 'Chemical Engineering', path: '/services/chemical' },
  { name: 'Civil Engineering', path: '/services/civil' },
  { name: 'Computer Engineering', path: '/services/computer' },
  { name: 'Petroleum Engineering', path: '/services/petroleum' },
];

const Otherservices = () => {
  const [visibleServices, setVisibleServices] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const currentPath = router.asPath;
    const filteredServices = services.filter((service) => service.path !== currentPath);
    setVisibleServices(filteredServices);
  }, [router.asPath]);

  const handleServiceClick = (path) => {
    router.push(path);
  };

  return (
    <section className="relative md:top-32 w-full h-auto my-20 sm:my-20 md:mb-10 md:my-0">
      <div className="max-w-[400px] sm:max-w-[600px] md:max-w-[1000px] mx-auto">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-10">Other Services</h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
          {visibleServices.map((service, index) => (
            <ServiceItem
              key={index}
              serviceName={service.name}
              path={service.path}
              onClick={() => handleServiceClick(service.path)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Otherservices;












// 'use client'

// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import ServiceItem from './ServiceItem';

// const Otherservices = () => {
//   const [visibleServices, setVisibleServices] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     const currentPath = router.asPath;
//     const services = [
//       { name: 'Mechanical Engineering', path: '/services/mechanical' },
//       { name: 'Chemical Engineering', path: '/services/chemical' },
//       { name: 'Civil Engineering', path: '/services/civil' },
//       { name: 'Computer Engineering', path: '/services/computer' },
//       { name: 'Petroleum Engineering', path: '/services/petroleum' },
//     ];

//     const visibleServices = services.filter(service => service.path !== currentPath);
//     setVisibleServices(visibleServices);
//   }, [router.asPath]);

//   return (
//     <section className="relative md:top-32 w-full h-auto my-20 sm:my-20 md:mb-10 md:my-0">
//       <div className="max-w-[400px] sm:max-w-[600px] md:max-w-[1000px] mx-auto">
//         <h1 className='text-2xl md:text-4xl font-extrabold mb-10'>Other Services</h1>
//         <div className='grid grid-cols-2 grid-rows-2 gap-2 sm:grid-cols-3 md:grid-cols-4'>
//           {visibleServices.map((service, index) => (
//             <ServiceItem key={index} serviceName={service.name} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Otherservices;





// // import ServiceItem from './ServiceItem';

// // const Otherservices = () => {
// //   const services = [
// //     { name: 'Mechanical Engineering', route: '/services/mechanical' },
// //     { name: 'Chemical Engineering', route: '/services/chemical' },
// //     { name: 'Civil Engineering', route: '/services/civil' },
// //     { name: 'Computer Engineering', route: '/services/computer' },
// //     { name: 'Petroleum Engineering', route: '/services/petroleum' }
// //   ];

// //   return (
// //     <section className="relative md:top-32 w-full h-auto my-20 sm:my-20 md:mb-10 md:my-0">
// //       <div className="max-w-[400px] sm:max-w-[600px] md:max-w-[1000px] mx-auto">
// //         <h1 className='text-2xl md:text-4xl font-extrabold mb-10'>Other Services</h1>
// //         <div className='grid grid-cols-2 grid-rows-2 gap-2 sm:grid-cols-3 md:grid-cols-4'>
// //           {services.map((service, index) => (
// //             <ServiceItem key={index} serviceName={service.name} route={service.route} />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Otherservices;




// // import ServiceItem from './ServiceItem';

// // const Otherservices = () => {
// //   const services = [
// //     { name: 'Mechanical Engineering' },
// //     { name: 'Chemical Engineering' },
// //     { name: 'Civil Engineering' },
// //     { name: 'Computer Engineering' },
// //     { name: 'Petroleum Engineering' }
// //   ];

// //   return (
// //     <section className="relative md:top-32 w-full h-auto my-20 sm:my-20 md:mb-10 md:my-0">
// //       <div className="max-w-[400px] sm:max-w-[600px] md:max-w-[1000px] mx-auto">
// //         <h1 className='text-2xl md:text-4xl font-extrabold mb-10'>Other Services</h1>
// //         <div className='grid grid-cols-2 grid-rows-2 gap-2 sm:grid-cols-3 md:grid-cols-4'>
// //           {services.map((service, index) => (
// //             <ServiceItem key={index} serviceName={service.name} />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Otherservices;
