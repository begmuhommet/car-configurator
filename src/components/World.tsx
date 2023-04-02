import { MeshReflectorMaterial, OrbitControls, Stage } from "@react-three/drei";
import { useControls } from "leva";
import Lambargini from "./models/Lambargini";
import Datsun from "./models/Datsun";
import Porsche from "./models/Porsche";

enum CarModel {
  Lambargini = "Lambargini",
  Datsun = "Datsun",
  Porsche = "Porsche",
}

const World = () => {
  const { color, model, autoRotate } = useControls({
    model: {
      options: [CarModel.Datsun, CarModel.Lambargini, CarModel.Porsche],
    },
    color: "#9a9a9a",
    autoRotate: true,
  });

  return (
    <>
      <Stage environment="studio" intensity={1}>
        {model === CarModel.Datsun && <Datsun color={color} />}
        {model === CarModel.Lambargini && <Lambargini color={color} />}
        {model === CarModel.Porsche && <Porsche color={color} />}
      </Stage>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.7, 0]}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048 / 2}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={1}
          mirror={1}
        />
      </mesh>
      <OrbitControls
        makeDefault
        enableZoom={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        autoRotate={autoRotate}
        autoRotateSpeed={0.3}
      />
    </>
  );
};

export default World;
