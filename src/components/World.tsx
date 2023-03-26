import { OrbitControls, Stage } from "@react-three/drei";
import { useControls } from "leva";
import Lambargini from "./Lambargini";
import Datsun from "./Datsun";

enum CarModel {
  Lambargini = "Lambargini",
  Datsun = "Datsun",
}

const World = () => {
  const { color, model } = useControls({
    model: { options: [CarModel.Lambargini, CarModel.Datsun] },
    color: "#b78135",
  });

  return (
    <>
      <Stage
        intensity={1}
        environment="city"
        shadows={{ type: "accumulative", color, colorBlend: 2, opacity: 2 }}
        adjustCamera={0.9}
      >
        {model === CarModel.Lambargini && (
          <Lambargini color={color} castShadow />
        )}
        {model === CarModel.Datsun && <Datsun color={color} castShadow />}
      </Stage>
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};

export default World;
