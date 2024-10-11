import { Float, useGLTF } from '@react-three/drei'
import { useEffect, useState } from 'react'

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/react.glb')

  // State to determine the position based on screen size
  const [position, setPosition] = useState([14, 8, 0]) // Default position for desktop

  useEffect(() => {
    const handleResize = () => {
      // Update position for mobile view
      if (window.innerWidth <= 768) { // Adjust the width threshold as needed
        setPosition([7, 7, 0]) // Position for mobile
      } else {
        setPosition([14, 8, 0]) // Position for desktop
      }
    }

    // Set initial position based on screen size
    handleResize()
    
    // Add event listener for window resize
    window.addEventListener('resize', handleResize)
    
    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Float floatIntensity={1}>
      <group {...props} position={position} rotation={[-Math.PI / 2, 0, 0]} scale={3}>
        <group rotation={[Math.PI / 2, 4, 0]} scale={0.01} dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Finam_Material_0.geometry}
            material={materials.Material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb')

export default ReactLogo