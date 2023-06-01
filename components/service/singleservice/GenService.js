import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Service = ({ title, content }) => {
  return (
    <section className="relative md:top-36 w-full h-auto my-20">
      <div className="flex flex-col sm:flex-row md:flex-row max-w-[400px] sm:max-w-[600px] md:max-w-[1000px] mx-auto space-y-5 md:space-x-4">
        <div className="sm:max-w-[350px] md:max-w-[600px] space-y-5 sm:space-y-2 md:space-y-3">
          <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
          {content.map((paragraph, index) => (
            <p className="text-sm md:text-base" key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="h-full w-full sm:pt-28">
          <div className="sm:max-h-[350px] md:max-h-[600px] bg-[#D2153D] border border-[#D2153D] p-2 sm:py-10 md:p-5 space-y-4 sm:space-y-10 md:space-y-7 text-white">
            <h1 className="text-xl sm:text-2xl md:text-4xl">Get an appointment with our Expert</h1>
            <p className="text-sm md:text-base">Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur accumsan. Vivamus viverra ante turpis.</p>
            <button className="p-1 md:p-2 bg-white text-[#D2153D] mt-24">
              <HiOutlineArrowNarrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;