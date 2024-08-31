import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import XWingScene from "../assets/3d/x-wing.glb"

const Xwing = ({typing,...props})=> {
  const planeRef = useRef()
  const { nodes, materials, animations } = useGLTF(XWingScene)
  const { actions } = useAnimations(animations, planeRef)

  useEffect(() => {

    
    const animatedAction = actions['Take 01'];
    if (animatedAction && typing) {
        animatedAction.play();
      animatedAction.timeScale = 1;
    }else{
        animatedAction.stop();
    }
  }, [actions, typing]);

  return (
    <group ref={planeRef} {...props}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.699}>
          <group name="Root">
            <group name="Plane" position={[0.312, -2.145, 0.464]}>
              <mesh
                name="Plane_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane_0.geometry}
                material={materials['Material.001']}
              />
            </group>
            <group name="Plane001" position={[0.312, -2.145, 0.464]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh
                name="Plane001_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane001_0.geometry}
                material={materials['Material.001']}
              />
            </group>
            <group
              name="Circle001"
              position={[0.312, -2.145, 0.464]}
              rotation={[Math.PI / 2, 0, 0.127]}
              scale={[0.159, 0.15, 0.15]}>
              <mesh
                name="Circle001_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle001_0.geometry}
                material={materials['Material.001']}
              />
            </group>
            <group
              name="Circle"
              position={[0.312, -2.145, 0.464]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.072}>
              <mesh
                name="Circle_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle_0.geometry}
                material={materials['Material.001']}
              />
            </group>
            <group
              name="Circle002"
              position={[0.589, -2.157, 0.688]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.012}>
              <mesh
                name="Circle002_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle002_0.geometry}
                material={materials.BakedCycles}
              />
            </group>
            <group name="Cube" position={[0, -0.935, 0.461]} scale={0.274}>
              <mesh
                name="Cube_0"
                castShadow
                receiveShadow
                geometry={nodes.Cube_0.geometry}
                material={materials['Material.001']}
              />
              <mesh
                name="Cube_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube_1.geometry}
                material={materials.GLASS}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/x_-wing.glb')
 export default Xwing
