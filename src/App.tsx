import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import World from "./components/World";

function App() {
  return (
    <div className="container">
      <Canvas shadows camera={{ position: [1, 0.5, 1] }}>
        {/*<Perf position="top-left" />*/}
        <Suspense fallback={null}>
          <World />
        </Suspense>
        <color attach="background" args={["#101010"]} />
      </Canvas>
      <Loader />
      <a
        href="https://github.com/begmuhommet/car-configurator"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          left: "10px",
          bottom: "10px",
          color: "white",
          textDecoration: "none",
        }}
      >
        Source code
      </a>
    </div>
  );
}

export default App;
