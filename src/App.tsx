import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import World from "./components/World";
import { Perf } from "r3f-perf";

function App() {
  return (
    <div className="container">
      <Canvas shadows camera={{ position: [1, 0.5, 1] }}>
        <Perf position="top-left" />
        <Suspense fallback={null}>
          <World />
        </Suspense>
        <color attach="background" args={["#101010"]} />
      </Canvas>
      <Loader />
    </div>
  );
}

export default App;
