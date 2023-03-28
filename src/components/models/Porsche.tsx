import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Color, MeshStandardMaterial } from "three";

interface IProps {
  color: string;
}

const Porsche: React.FC<IProps> = (props) => {
  const { color } = props;

  // @ts-ignore
  const { nodes, materials } = useGLTF("/models/porsche.glb");

  useEffect(() => {
    Object.entries(materials).forEach(([key, value]) => {
      if (key.includes("paint") || key.includes("930_rim")) {
        (value as MeshStandardMaterial).color = new Color(color);
      }
    });
  }, [color]);

  return (
    <group {...props} dispose={null}>
      <group scale={1}>
        <mesh geometry={nodes.Mesh_0_1.geometry} material={materials.paint} />
        <mesh
          geometry={nodes.Mesh_0_2.geometry}
          material={materials["930_chromes"]}
        />
        <mesh geometry={nodes.Mesh_0_3.geometry} material={materials.black} />
        <mesh
          geometry={nodes.Mesh_0_4.geometry}
          material={materials["930_lights"]}
        />
        <mesh geometry={nodes.Mesh_0_5.geometry} material={materials.glass} />
        <mesh
          geometry={nodes.Mesh_0_6.geometry}
          material={materials["930_stickers"]}
        />
        <mesh
          geometry={nodes.Mesh_0_7.geometry}
          material={materials["930_plastics"]}
        />
        <mesh
          geometry={nodes.Mesh_0_8.geometry}
          material={materials["930_lights_refraction"]}
        />
        <mesh
          geometry={nodes.Mesh_0_9.geometry}
          material={materials["930_rim"]}
        />
        <mesh
          geometry={nodes.Mesh_0_10.geometry}
          material={materials["930_tire"]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/porsche.glb");

export default Porsche;
