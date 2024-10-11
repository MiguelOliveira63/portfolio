import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {

  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("migueloliveira6333@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }
  return (
    <section className="c-scpace my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-rows-3 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
              <div>
                <p className="grid-headtext">Hi, I'am Miguel</p>
                <p className="grid-subtext">Im a colege student at Instituto Politecnico de Viana do Castelo who loves to develop Frontend and Backend services.</p>
              </div>
            </div>
          </div>
        
          <div className="col-span-1 xl:row-span-3">
            <div className="grid-container">
              <img src="/assets/grid2.png " alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">I specialize in Web Development with a focus on React and Next.js ecosystems</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
            <Globe
              height={326}
              width={326}
              backgroundColor="rgba(0, 0, 0, 0)" // Background transparente
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg" // URL válida para a imagem do globo
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" // URL para o bump map
              showAtmosphere={true}
              showGraticules={true}
              labelsData={[{ lat: 40, lng: -100, text: "I'm here" }]} // Etiqueta com localização
            />
            </div>
            <div>
              <p className="grid-headtext">I work remotely across most timezones.</p>
              <p className="grid-subtext">I'm based in Portugal, with remote work available.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">I love solving prblems and building things through code. Coding isn't just my profession - it is my passion.</p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-contain sm:object-top"/>
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg' } alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">migueloliveira6333@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;