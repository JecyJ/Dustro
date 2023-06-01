import Gallery from "@components/service/singleservice/Gallery";
import Hero from "@components/service/singleservice/Hero";
import Otherservices from "@components/service/singleservice/Otherservices";
import Service from "@components/service/singleservice/GenService";


const page = () => {
    //gallery
    const images = [
        { src: "/assets/images/service1.png", width: 500, height: 500 },
        { src: "/assets/images/service2.png", width: 500, height: 500 },
        { src: "/assets/images/service3.png", width: 500, height: 500 }
    ];

    //petroleumservice
    const title = 'Petroleum & Gas Refinery';
    const content = [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    ];
    
  return (
    <section>
        <Hero />
        <Gallery images={images} />
        <Service title={title} content={content} />
        <Otherservices />       
    </section>
  )
}

export default page;