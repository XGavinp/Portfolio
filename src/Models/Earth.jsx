import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import EarthScene from "../assets/3d/earth.glb";
import { useFrame, useThree } from '@react-three/fiber';

const Earth = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const earthRef = useRef();
  const { nodes, materials, animations } = useGLTF(EarthScene);
  const { actions } = useAnimations(animations, earthRef);

  // Get access to the Three.js renderer and viewport
  const { gl, viewport } = useThree();
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  // Handle pointer (mouse or touch) down event
  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    lastX.current = clientX;
  };

  // Handle pointer (mouse or touch) up event
  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  // Handle pointer (mouse or touch) move event
  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      earthRef.current.rotation.y += delta * 0.05 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.05 * Math.PI;
    }
  };

  // Handle keydown events
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      earthRef.current.rotation.y += 0.005 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      earthRef.current.rotation.y -= 0.005 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };

  // Handle keyup events
  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  // Touch events for mobile devices
  const handleTouchStart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handleTouchEnd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handleTouchMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      earthRef.current.rotation.y += delta * 0.05 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.05 * Math.PI;
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("touchmove", handleTouchMove);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      earthRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = earthRef.current.rotation.y;
      const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      // Update currentStage based on normalizedRotation
      console.log(normalizedRotation);
      
      if (normalizedRotation >= 0.2 && normalizedRotation <= 1.5) {
        setCurrentStage(4);
      } else if (normalizedRotation >= 1.51 && normalizedRotation <= 3.0) {
        setCurrentStage(3);
      } else if (normalizedRotation >= 3.01 && normalizedRotation <= 4.50) {
        setCurrentStage(2);
      } else if (normalizedRotation >=4.51 && normalizedRotation <= 6.0) {
        setCurrentStage(1);
      } else  if(normalizedRotation <= 0.2 || normalizedRotation >= 6.0) {
        setCurrentStage(5);
      }
    }
  });

  useEffect(() => {
    const earthAction = actions['Earth|EarthAction'];
    if (earthAction && !isRotating) {
      earthAction.play();
      earthAction.timeScale = 0.5;
    } else {
      earthAction && earthAction.stop();
    }
  }, [actions, isRotating]);

  return (
    <group ref={earthRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.002}>
          <group name="fc09fa6deb6c45f687e724438fed81adfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Earth" rotation={[-Math.PI / 2, 0, 0]} scale={57.393}>
                  <mesh
                    name="Earth_Earth_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Earth_Earth_0.geometry}
                    material={materials.Earth}
                  />
                  <mesh
                    name="Earth_Earth_0_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Earth_Earth_0_1.geometry}
                    material={materials.Earth}
                  />
                  <mesh
                    name="Earth_Earth_0_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Earth_Earth_0_2.geometry}
                    material={materials.Earth}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Earth;
