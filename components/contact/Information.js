import Image from "next/image";


const Information = () => {
  return (
    <section className="w-full h-auto my-16">
        <div className="max-w-[400px] md:max-w-[1000px] mx-auto">
            <Image src='/assets/images/map-2.png' alt="/" width={1500} height={1000} />
            <div className="flex justify-around">
                <div className='border border-l-4 border-l-[#d2153d] text-[#00215B] bg-white shadow-2xl p-2 h-28 w-56 md:w-2/6 space-y-4'>
                    <h3 className='text-xs md:text-base'>COMPANY ADDRESS</h3>
                    <h2 className='text-sm md:text-lg font-semibold'>Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA</h2>
                </div>
                <div className='flex flex-col md:flex-row space-y-2 md:space-x-4 md:space-y-0'>
                    <div className='flex space-x-1'>
                        <Image src='/assets/images/iconcall.svg' alt='/' width={37} height={90} />
                        <div className='text-[#00215B] w-full'>
                            <h2 className='text-xs md:text-base'>COMPANY PHONES</h2>
                            <p className='text-sm md:text-lg font-semibold'>+ 1 234 5678 098</p>
                            <p className='text-sm md:text-lg font-semibold'>+ 1 634 7638 654</p>
                        </div>
                    </div>
                    <div className='flex space-x-1'>
                        <Image src='/assets/images/iconemail.svg' alt='/' width={37} height={80} />
                        <div className='text-[#00215B]'>
                            <h2 className='text-xs md:text-base'>DUSTRO EMAILS</h2>
                            <p className='text-xs md:text-lg font-semibold'>dustro@gmail.com</p>
                            <p className='text-xs md:text-lg font-semibold'>dustro.info@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Information;