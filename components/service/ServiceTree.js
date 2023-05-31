import Button2 from "@components/reusable files/Button2";
import Image from "next/image";


const ServiceTree = () => {
  return (
    <section className="w-full h-auto my-20 md:mt-64">
        <div className="grid grid-rows-4 max-w-[400px] md:max-w-[1000px] mx-auto">
            <div className="grid gird-rows-2 md:grid-cols-2">
                <Image src='/assets/images/nightlife.jpg' alt="/" width={500} height={500} />
                <div className="text-white bg-[#D2153D] p-3 md:p-9 space-y-3 md:space-y-10">
                    <h1 className="text-xl md:text-3xl font-semibold">Service One</h1>
                    <p className="text-xs md:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <Button2>Learn More</Button2>
                </div>
            </div>
            <div className="grid gird-rows-2 md:grid-cols-2">
                <Image className="md:order-2" src='/assets/images/penthouse.jpg' alt="/" width={500} height={500} />
                <div className="text-white bg-[#D2153D] p-3 md:p-9 space-y-3 md:space-y-10">
                    <h1 className="text-xl md:text-3xl font-semibold">Service Two</h1>
                    <p className="text-xs md:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <Button2>Learn More</Button2>
                </div>
            </div>
            <div className="grid gird-rows-2 md:grid-cols-2">
                <Image src='/assets/images/bungalow.jpg' alt="/" width={500} height={500} />
                <div className="text-white bg-[#D2153D] p-3 md:p-9 space-y-3 md:space-y-10">
                    <h1 className="text-xl md:text-3xl font-semibold">Service Three</h1>
                    <p className="text-xs md:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <Button2>Learn More</Button2>
                </div>
            </div>
            <div className="grid gird-rows-2 md:grid-cols-2">
                <Image className="md:order-2" src='/assets/images/museum.jpg' alt="/" width={500} height={500} />
                <div className="text-white bg-[#D2153D] p-3 md:p-9 space-y-3 md:space-y-10">
                    <h1 className="text-xl md:text-3xl font-semibold">Service Four</h1>
                    <p className="text-xs md:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <Button2>Learn More</Button2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServiceTree;