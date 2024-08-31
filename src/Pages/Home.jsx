import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Sky from '../Models/Sky';
import Earth from '../Models/Earth';
import HomeInfo from '../Components/HomeInfo';
import Loader from '../Components/Loader';


const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(5);
    





    const adjustEarthForScreenSize = () => {
        let screenScale, screenPosition;
    
        if (window.innerWidth <= 768) {
            screenScale = [8,8,7];
            screenPosition = [2.2,-0.5,0];
        } else {
          screenScale = [17,20,17];
          screenPosition = [5,0,-3];
        }
    
        return [screenScale, screenPosition];
      };
    
      const [earthScale, earthPosition] = adjustEarthForScreenSize();


    const handRef = useRef();

    useEffect(() => {
      // GSAP animation for sliding and transforming hand emoji
      gsap.fromTo(
        handRef.current,
        { x: 20, scale: 1 },
        {
          x: 0, // Move right
          scale: 1.2, // Scale up slightly
          duration: 1,
          repeat:-1,
          yoyo: false,
          ease: 'power1.inOut',
        }
      );
    }, []);


  return (
    <section className='relative md:mt-8 lg:mt-10 w-full mt-20 flex flex-col md:h-screen h-[80vh] hide-scrollbar justify-center bg-black'>
                <div className={`absolute xl:top-20 lg:top-16 md:top-12 top-10 w-full flex flex-col items-center justify-center ${currentStage !==5 && "hidden"}`}>
                    <div ref={handRef} className="xl:text-2xl md:text-lg lg:text-xl  text-base text-white">
                        <span role="img" aria-label="hand" className="transition-transform duration-1 ease-in-out">
                            🤚 
                        </span>
                    </div>
                    <p className="mt-2 xl:text-xl lg-text-lg md:text-base text-sm font-semibold text-gray-50">
                        Grab and Rotate
                    </p>
                </div>
        <div className={`absolute z-10 left-54 title flex flex-col items-center justify-center md:w-[50%] w-[60%] sm:mt-16 md:mt-0  mt-24 md:px-8 pl-4 ${currentStage !==5 && "cursor-pointer"}}`}>
        {currentStage && <HomeInfo currentStage={currentStage} />}
    </div>
    <Canvas  className={`bg-transparent w-full h-full ${
      isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
      camera={{ near: 0.1, far: 1000 }}
    >

        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1} />
          <ambientLight intensity={2} />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1.5}
          />
            {/* <ImageCube isRotating={isRotating} setCurrentStage={setCurrentStage} currenStage={currentStage} /> */}


          <Sky isRotating={isRotating} />
          
            <Earth 
            scale={earthScale}
            position={earthPosition}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            currentStage={currentStage}
            
            />



        </Suspense>

    </Canvas>



       
    
</section>
                    
    
  )
}

export default Home
