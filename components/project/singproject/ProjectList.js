import Image from 'next/image';
import {BiLeftArrow, BiRightArrow} from 'react-icons/bi'
import {AiFillInstagram} from 'react-icons/ai'
import {ImFacebook2, ImLinkedin} from 'react-icons/im'


const ProjectList = () => {
  return (
    <section className='relative w-full h-auto my-20 sm:my-36 md:my-60 lg:my-72'>
        <div className='grid grid-cols-2 max-w-[400px] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1100px] m-auto'>
            <div className='space-y-5'>
                <Image src='/assets/images/site-pics.png' alt='/' width={700} height={700} />
                <p className='text-sm sm:text-base'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                <p className='text-sm sm:text-base'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                <div className='grid grid-cols-2 gap-2 sm:gap-4'>
                    <Image src='/assets/images/site-pics1.jpg' alt='/' width={300} height={300} />
                    <Image src='/assets/images/site-pics2.jpg' alt='/' width={300} height={300} />
                    <Image src='/assets/images/site-pics3.jpg' alt='/' width={300} height={300} />
                    <Image src='/assets/images/site-pics4.jpg' alt='/' width={300} height={300} />
                </div>
                <div className='flex justify-between text-sm sm:text-base'>
                    <p className='flex items-center'><BiLeftArrow size={20} />Prev <span className='hidden sm:block pl-1'>Project</span></p>
                    <p className='flex items-center'>Next <span className='hidden sm:block pl-1'>Project</span> <BiRightArrow size={20} /></p>
                </div>
            </div>
            <div className='space-y-3 sm:space-y-5 md:space-y-7 pl-1 sm:pl-2 md:pl-4'>
                <h1 className='font-bold text-xl sm:text-2xl'>London Palace</h1>
                <p className='text-sm sm:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <div className='space-y-3 sm:space-y-5'>
                    <h1 className='font-semibold text-lg sm:text-xl'>Project Info</h1>
                    <p className='flex text-sm sm:text-base items-center'><h1 className='font-semibold text-base sm:text-lg pr-2'>Client:</h1> John Doe</p>
                    <p className='flex text-sm sm:text-base items-center'><h1 className='font-semibold text-base sm:text-lg pr-2'>Category:</h1> Construction Business</p>
                    <p className='flex text-sm sm:text-base items-center'><h1 className='font-semibold text-base sm:text-lg pr-2'>Completed on:</h1> 20 January 2022</p>
                    <div className='flex items-center space-x-2 text-[#D2153D]'>
                        <ImFacebook2 size={28} />
                        <AiFillInstagram size={35} />
                        <ImLinkedin size={28} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectList;