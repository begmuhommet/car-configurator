import { OrbitControls, Stage } from "@react-three/drei";
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
      options: [CarModel.Lambargini, CarModel.Datsun, CarModel.Porsche],
    },
    color: "#9a9a9a",
    autoRotate: true,
  });

  return (
    <>
      <Stage
        intensity={1}
        environment="city"
        shadows={{ type: "accumulative", color, colorBlend: 2, opacity: 2 }}
      >
        {model === CarModel.Lambargini && <Lambargini color={color} />}
        {model === CarModel.Datsun && <Datsun color={color} />}
        {model === CarModel.Porsche && <Porsche color={color} />}
      </Stage>
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
