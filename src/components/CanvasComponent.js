import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { softShadows, MeshWobbleMaterial } from "drei";
import { useInView } from "react-intersection-observer";

softShadows();

// The box component
const SpinningMesh = ({ position, args, color, movement, speed }) => {
  const mesh = useRef();
  // useFrame usato per la rotazione. Si può usare solo all'interno di un component che verrà poi richiamato all'interno del canvas del componente genitore
  useFrame(
    () => (mesh.current.rotation.x = mesh.current.rotation.y += movement)
  );

  return (
    <mesh position={position} ref={mesh} castShadow>
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        transparent
        color={color}
        speed={speed}
        factor={0.6}
      />
    </mesh>
  );
};

// Position with three parameters is always {(x - y - z)}

const App = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <div ref={ref} id="cvs">
      {inView && (
        <Canvas
          colorManagement
          shadowMap
          camera={{ position: [5, 6, 10], fov: 65 }}
        >
          {/* Crea la luce all'interno del canvas. valore 1 è il massimo = tutti gli oggetti saranno super luminosi. It affects also the color: no ambient light means no color able to show */}
          <ambientLight intensity={0.3} />
          {/* directionalLight creates shadow from the object. It's like a sun */}
          <directionalLight
            castShadow
            position={[0, 10, 0]}
            intensity={1.6}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight position={[-10, 0, -20]} intensity={0.5} />
          <pointLight position={[0, -10, 0]} intensity={1.5} />

          {/* In questo gruppo ci mettiamo il pavimento su cui fare l'ombra */}
          <group>
            <mesh
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -8, 0]}
              color="blue"
            >
              <planeBufferGeometry attach="geometry" args={[100, 100]} />
              <shadowMaterial attach="material" opacity={0.3} />
            </mesh>
          </group>

          <SpinningMesh
            position={[3, -1, -3]}
            args={[2, 2, 2]}
            color="#f7a400"
            movement={0.008}
            speed={1}
          />
          <SpinningMesh
            position={[-2, -2, -7]}
            args={[3, 5, 2]}
            color="#3a9efd"
            movement={-0.006}
            speed={0.8}
          />
          <SpinningMesh
            position={[7, -2, -2]}
            args={[3, 5, 3]}
            color="#3a9efd"
            movement={-0.01}
            speed={1}
          />
          {/* <OrbitControls /> */}
        </Canvas>
      )}
    </div>
  );
};

export default App;
