import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls, PresentationControls } from "@react-three/drei";
import World from "./components/World";

function App() {
  return (
    <div className="container">
      <Canvas>
        <Suspense fallback={null}>
          <PresentationControls
            speed={1.5}
            global
            zoom={0.7}
            polar={[-0.1, Math.PI / 4]}
          >
            {/*<Environment*/}
            {/*  background={true}*/}
            {/*  blur={0}*/}
            {/*  files={["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]}*/}
            {/*  path="/environment/"*/}
            {/*  // preset="night"*/}
            {/*  scene={undefined}*/}
            {/*  encoding={undefined}*/}
            {/*/>*/}
            <World />
          </PresentationControls>
        </Suspense>
        {/*<color attach="background" args={["#101010"]} />*/}
        {/*<fog attach="fog" args={["#101010", 10, 20]} />*/}
        <OrbitControls />
      </Canvas>
      <Loader />
    </div>
  );
}

export default App;
