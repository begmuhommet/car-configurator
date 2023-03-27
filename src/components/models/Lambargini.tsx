import React from "react";
import { useGLTF } from "@react-three/drei";

const Lambargini = (props: any) => {
  // @ts-ignore
  const { nodes, materials } = useGLTF("/models/lambargini.glb");

  return (
    <group {...props} dispose={null}>
      <group position={[0, 2.7, -119]}>
        <group
          position={[-88.64, -40.87, -16.14]}
          rotation={[-Math.PI, 0, Math.PI]}
          scale={[1.6, 1.51, 1.51]}
        >
          <mesh
            geometry={nodes.RR_TiresGum_0.geometry}
            material={materials.TiresGum}
          />
          <mesh
            geometry={nodes.Whl_HD_FL_004_3_Universal_Wheel_0.geometry}
            material={materials.Universal_Wheel}
            scale={0.65}
          />
          <mesh
            geometry={nodes.Universal_Caliper_3_Universal_Wheel_0.geometry}
            material={materials.Universal_Wheel}
            position={[0.15, 0, 11.18]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={0.65}
          />
          <mesh
            geometry={nodes.wheel003_020_3_Chrome_0.geometry}
            material={materials.Chrome}
            position={[2.14, 0, 0]}
          />
          <mesh
            geometry={nodes.wheel003_019_3_Chrome_0.geometry}
            material={materials.Chrome}
            position={[5.39, 0, 0]}
          />
          <mesh
            geometry={nodes.wheel003_018_3_RimsChrome_0.geometry}
            material={materials.RimsChrome}
            position={[2.19, -0.31, -0.37]}
          />
          <mesh
            geometry={nodes.wheel003_015_3_BreakDiscs_0.geometry}
            material={materials.BreakDiscs}
            position={[2, 0, 0]}
          />
        </group>
        <group position={[88.64, -40.87, -16.14]} scale={[1.6, 1.51, 1.51]}>
          <mesh
            geometry={nodes.RL_TiresGum_0.geometry}
            material={materials.TiresGum}
          />
          <mesh
            geometry={nodes.Whl_HD_FL_004_2_Universal_Wheel_0.geometry}
            material={materials.Universal_Wheel}
            scale={0.65}
          />
          <mesh
            geometry={nodes.Universal_Caliper_2_Universal_Wheel_0.geometry}
            material={materials.Universal_Wheel}
            position={[-0.15, 0, -11.18]}
            scale={0.65}
          />
          <mesh
            geometry={nodes.wheel003_020_2_Chrome_0.geometry}
            material={materials.Chrome}
            position={[2.14, 0, 0]}
          />
          <mesh
            geometry={nodes.wheel003_019_2_Chrome_0.geometry}
            material={materials.Chrome}
            position={[5.39, 0, 0]}
          />
          <mesh
            geometry={nodes.wheel003_018_2_RimsChrome_0.geometry}
            material={materials.RimsChrome}
            position={[2.19, -0.31, -0.37]}
          />
          <mesh
            geometry={nodes.wheel003_015_2_BreakDiscs_0.geometry}
            material={materials.BreakDiscs}
            position={[2, 0, 0]}
          />
        </group>
        <group
          position={[-88.64, -40.87, 274.96]}
          rotation={[-Math.PI, 0, Math.PI]}
          scale={1.51}
        >
          <mesh
            geometry={nodes.FR_TiresGum_0.geometry}
            material={materials.TiresGum}
          />
          <mesh
            geometry={nodes.Whl_HD_FL_004_1_Universal_Wheel_0.geometry}
            material={materials.Universal_Wheel}
            scale={0.65}
          />
          <mesh
            geometry={nodes.Universal_Caliper_1_Universal_Wheel_0.geometry}
            material={materials.Universal_Wheel}
            position={[-0.15, 0, -11.18]}
            scale={0.65}
          />
          <mesh
            geometry={nodes.wheel003_020_1_Chrome_0.geometry}
            material={materials.Chrome}
            position={[2.14, 0, 0]}
          />
          <mesh
            geometry={nodes.wheel003_019_1_Chrome_0.geometry}
            material={materials.Chrome}
            position={[5.39, 0, 0]}
          />
          <mesh
            geometry={nodes.wheel003_018_1_RimsChrome_0.geometry}
            material={materials.RimsChrome}
            position={[2.19, -0.31, -0.36]}
          />
          <mesh
            geometry={nodes.wheel003_015_1_BreakDiscs_0.geometry}
            material={materials.BreakDiscs}
            position={[2, 0, 0]}
          />
        </group>
        <group position={[88.64, -40.87, 274.96]} scale={1.51}>
          <mesh
            geometry={nodes.FL_TiresGum_0.geometry}
            material={materials.TiresGum}
          />
          <mesh
            geometry={nodes.Whl_HD_FL_004_Universal_Wheel_0.geometry}
            material={materials.Universal_Wheel}
            scale={0.65}
          />
          <mesh
            geometry={nodes.Universal_Caliper_Universal_Wheel_0.geometry}
            material={materials.Universal_Wheel}
            position={[0.15, 0, 11.18]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={0.65}
          />
          <mesh
            geometry={nodes.wheel003_020_Chrome_0.geometry}
            material={materials.Chrome}
            position={[2.14, 0, 0]}
          />
          <mesh
            geometry={nodes.wheel003_019_Chrome_0.geometry}
            material={materials.Chrome}
            position={[5.39, 0, 0]}
          />
          <mesh
            geometry={nodes.wheel003_018_RimsChrome_0.geometry}
            material={materials.RimsChrome}
            position={[2.19, -0.31, -0.37]}
          />
          <mesh
            geometry={nodes.wheel003_015_BreakDiscs_0.geometry}
            material={materials.BreakDiscs}
            position={[2, 0, 0]}
          />
        </group>
      </group>
      <group position={[0, 0, -119]}>
        <group
          position={[0, -44.01, 65.81]}
          rotation={[Math.PI, 0, -Math.PI]}
          scale={0.55}
        >
          <group
            position={[0.18, 97.71, -156.93]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          >
            <mesh
              geometry={nodes.yellow_WhiteCar_0.geometry}
              material={materials.WhiteCar}
            />
            <mesh
              geometry={nodes.yellow_Logo_0.geometry}
              material={materials.Logo}
            />
          </group>
          <group
            position={[0.12, 152.9, -194.05]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          >
            <mesh
              geometry={nodes.gloss_black_008_RimsChrome_0.geometry}
              material={materials.RimsChrome}
            />
            <mesh
              geometry={nodes.gloss_black_008_Mirror_0.geometry}
              material={materials.Mirror}
            />
          </group>
          <mesh
            geometry={nodes.silver_003_BreaksRedPaint_0.geometry}
            material={materials.BreaksRedPaint}
            position={[0, 38.86, 280.29]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.silver_002_ChromeBLurred_0.geometry}
            material={materials.ChromeBLurred}
            position={[0, 10.16, -116.09]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.silver_001_BreakDiscs_0.geometry}
            material={materials.BreakDiscs}
            position={[0.35, 130.35, 305.24]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.silver_ChromeBLurred_0.geometry}
            material={materials.ChromeBLurred}
            position={[0, 11.97, 292.63]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.matt_black_001_GreyElements_0.geometry}
            material={materials.GreyElements}
            position={[0.08, 36.83, 314.59]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.matt_black_FrameBlack_0.geometry}
            material={materials.FrameBlack}
            position={[0, 129.06, 29.08]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.lights_050_BlackPaint_0.geometry}
            material={materials.BlackPaint}
            position={[97.38, 136.81, 284.93]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.lights_049_BreakDiscs_1_0.geometry}
            material={materials.BreakDiscs_1}
            position={[0, 134.12, 287.4]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.lights_046_BreakDiscs_1_0.geometry}
            material={materials.BreakDiscs_1}
            position={[0, 125.88, 254.5]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.lights_045_BlackPaint_0.geometry}
            material={materials.BlackPaint}
            position={[134.45, 125.03, 267.18]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.lights_044_BlackPaint_0.geometry}
            material={materials.BlackPaint}
            position={[144.59, 127.24, 255.25]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.lights_043_BreakDiscs_1_0.geometry}
            material={materials.BreakDiscs_1}
            position={[0, 133.37, 271.34]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.lights_042_BreakDiscs_1_0.geometry}
            material={materials.BreakDiscs_1}
            position={[0, 121.02, 262.47]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.lights_040_Chrome_0.geometry}
            material={materials.Chrome}
            position={[0, 93.18, -497.13]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.lights_033_Default_Material_0.geometry}
            material={materials.Default_Material}
            position={[141.97, 96.69, -474.55]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.lights_027_BreakDiscs_1_0.geometry}
            material={materials.BreakDiscs_1}
            position={[0, 92.78, -496.75]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.lights_024_BlackPaint_0.geometry}
            material={materials.BlackPaint}
            position={[-97.38, 136.81, 284.93]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.lights_022_BreakDiscs_0.geometry}
            material={materials.BreakDiscs}
            position={[0, 126.69, 241.4]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.lights_021_emitbrake_0.geometry}
            material={materials.emitbrake}
            position={[0, 128.6, 274.47]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.lights_019_BlackPaint_0.geometry}
            material={materials.BlackPaint}
            position={[-134.45, 125.03, 267.18]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.lights_018_BlackPaint_0.geometry}
            material={materials.BlackPaint}
            position={[-144.59, 127.24, 255.25]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.lights_015_Hub_0.geometry}
            material={materials.material}
            position={[0, 95.3, -469.6]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.lights_009_LightsFrontLed_0.geometry}
            material={materials.LightsFrontLed}
            position={[0, 90.94, -495.03]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.lights_008_BreakDiscs_1_0.geometry}
            material={materials.BreakDiscs_1}
            position={[0, 86.08, -497.19]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.lights_007_Default_Material_0.geometry}
            material={materials.Default_Material}
            position={[-141.97, 96.69, -474.55]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.lights_002_BreakDiscs_0.geometry}
            material={materials.BreakDiscs}
            position={[0, 92.4, -499.12]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.lights_Hub_0.geometry}
            material={materials.material}
            position={[0, 150.59, -214.79]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.gloss_black_007_GreyElements_0.geometry}
            material={materials.GreyElements}
            position={[0, 179.62, -67.84]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.gloss_black_006_GreyElements_0.geometry}
            material={materials.GreyElements}
            position={[0, 54.49, -543.45]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.gloss_black_005_GreyElements_0.geometry}
            material={materials.GreyElements}
            position={[0, 30.25, 277.48]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.gloss_black_004_GreyElements_0.geometry}
            material={materials.GreyElements}
            position={[0, -6.84, -145.25]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.gloss_black_003_GreyElements_0.geometry}
            material={materials.GreyElements}
            position={[0, 109.5, -313.38]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.gloss_black_002_GreyElements_0.geometry}
            material={materials.GreyElements}
            position={[0, 64.21, -137.57]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.gloss_black_001_BlackPaint_0.geometry}
            material={materials.BlackPaint}
            position={[0, 130.71, 297.04]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.gloss_black_GreyElements_0.geometry}
            material={materials.GreyElements}
            position={[0, 6.46, -516.94]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.glass_005_LightsGlassBack_0.geometry}
            material={materials.LightsGlassBack}
            position={[0, 38.84, 281.62]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.glass_004_LightsGlassFront_0.geometry}
            material={materials.LightsGlassFront}
            position={[1.48, 129.7, 274.37]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.glass_003_Glass_0.geometry}
            material={materials.BlackPaint}
            position={[-0.41, 174.33, -27.92]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.glass_002_LightsGlassFront_0.geometry}
            material={materials.LightsGlassFront}
            position={[0, 150.59, -214.8]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
          <mesh
            geometry={nodes.glass_001_LightsGlassFront_0.geometry}
            material={materials.LightsGlassFront}
            position={[-2.21, 92.71, -497.84]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.75}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/lambargini.glb");

export default Lambargini;
