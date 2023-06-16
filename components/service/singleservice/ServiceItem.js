'use client'

import { useRouter } from 'next/navigation';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const ServiceItem = ({ serviceName, path }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };

  return (
    <div className="border border-t-8 border-t-[#D2153D] shadow-2xl px-2 py-5 space-y-4 bg-white">
      <h2 className="text-lg font-light">Explore Service</h2>
      <h1 className="text-2xl font-semibold">{serviceName}</h1>
      <div>
        <button
          className="flex items-center justify-between w-16 font-semibold"
          onClick={handleClick}
        >
          Read <HiOutlineArrowNarrowRight className="text-[#D2153D]" />
        </button>
      </div>
    </div>
  );
};

export default ServiceItem;








// 'use client'

// import { useRouter } from 'next/navigation';
// import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

// const ServiceItem = ({ serviceName, path }) => {
//   const router = useRouter();

//   const handleClick = () => {
//     router.push(path);
//   };

//   return (
//     <div className='border border-t-8 border-t-[#D2153D] shadow-2xl px-2 py-5 space-y-4 bg-white'>
//       <h2 className='text-lg font-light'>Explore Service</h2>
//       <h1 className='text-2xl font-semibold'>{serviceName}</h1>
//       <div>
//         <button className='flex items-center justify-between w-16 font-semibold' onClick={handleClick}>
//           Read <HiOutlineArrowNarrowRight className='text-[#D2153D]' />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ServiceItem;





// // import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

// // const ServiceItem = ({ serviceName }) => {

// //   return (
// //     <div className='border border-t-8 border-t-[#D2153D] shadow-2xl px-2 py-5 space-y-4 bg-white'>
// //       <h2 className='text-lg font-light'>Explore Service</h2>
// //       <h1 className='text-2xl font-semibold'>{serviceName}</h1>
// //       <div>
// //         <button className='flex items-center justify-between w-16 font-semibold'>
// //           Read <HiOutlineArrowNarrowRight className='text-[#D2153D]' />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ServiceItem;
