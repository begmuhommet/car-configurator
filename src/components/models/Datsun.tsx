import React, { useEffect, useLayoutEffect } from "react";

import { useGLTF } from "@react-three/drei";
import { Color, MeshStandardMaterial } from "three";

// alloy            -
// black_matte      -
// black_paint      -
// chrome           +
// glass            -
// headlights       -
// license          -
// orange_glass     -
// paint            +
// red_glass        -
// stickers         -

interface IProps {
  color: string;
}

const Datsun: React.FC<IProps> = (props) => {
  const { color, ...rest } = props;

  // @ts-ignore
  const { scene, nodes, materials } = useGLTF("/models/datsun.glb");

  useLayoutEffect(() => {
    scene.traverse((obj) => obj.type === "Mesh" && (obj.castShadow = true));
  }, [scene]);

  useEffect(() => {
    Object.entries(materials).forEach(([key, value]) => {
      if (key.includes("paint") || key.includes("alloy")) {
        (value as MeshStandardMaterial).color = new Color(color);
      }
    });
  }, [color]);

  return (
    <group {...rest} dispose={null}>
      <mesh
        geometry={nodes.Cylinder007_alloy_0_1.geometry}
        material={materials.alloy}
      />
      <mesh
        geometry={nodes.Cylinder007_alloy_0_2.geometry}
        material={materials.headlights}
      />
      <mesh
        geometry={nodes.Cylinder007_alloy_0_3.geometry}
        material={materials.black_paint}
      />
      <mesh
        geometry={nodes.Cylinder007_alloy_0_4.geometry}
        material={materials.tire}
      />
      <mesh
        geometry={nodes.Cylinder007_alloy_0_5.geometry}
        material={materials.black_matte}
      />
      <mesh
        geometry={nodes.Cylinder007_alloy_0_6.geometry}
        material={materials.chrome}
      />
      <mesh
        geometry={nodes.Cylinder007_alloy_0_7.geometry}
        material={materials.license}
      />
      <mesh
        geometry={nodes.Cylinder007_alloy_0_8.geometry}
        material={materials.orange_glass}
      />
      <mesh
        geometry={nodes.Cylinder007_alloy_0_9.geometry}
        material={materials.glass}
      />
      <mesh
        geometry={nodes.Cylinder007_alloy_0_10.geometry}
        material={materials.paint}
      />
      <mesh
        geometry={nodes.Cylinder007_alloy_0_11.geometry}
        material={materials.red_glass}
      />
      <mesh
        geometry={nodes.Cylinder007_alloy_0_12.geometry}
        material={materials.stickers}
      />
    </group>
  );
};

useGLTF.preload("/models/datsun.glb");

export default Datsun;
