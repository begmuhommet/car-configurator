import React from "react";
import { useGLTF } from "@react-three/drei";

const Porsche = (props: any) => {
  // @ts-ignore
  const { nodes, materials } = useGLTF("/models/porsche.glb");

  return (
    <group {...props} dispose={null}>
      <group
        position={[0, -0.1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.81}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.68, -2.62]} scale={[1, 0.96, 1]}>
            <mesh
              geometry={nodes.mesh_1_instance_0.geometry}
              material={materials["930_plastics"]}
              position={[-7.97, -0.1, -7.97]}
              scale={0}
            />
          </group>
          <group
            position={[0, 0.47, 3.12]}
            rotation={[-2.83, 0, Math.PI]}
            scale={[1, 0.96, 1]}
          >
            <mesh
              geometry={nodes.mesh_1_instance_1.geometry}
              material={materials["930_plastics"]}
              position={[-7.97, -0.1, -7.97]}
              scale={0}
            />
          </group>
        </group>
      </group>
      <group position={[-7.97, -0.1, -7.97]} scale={0}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials.paint} />
        <mesh
          geometry={nodes.mesh_0_1.geometry}
          material={materials["930_chromes"]}
        />
        <mesh geometry={nodes.mesh_0_2.geometry} material={materials.black} />
        <mesh
          geometry={nodes.mesh_0_3.geometry}
          material={materials["930_lights"]}
        />
        <mesh geometry={nodes.mesh_0_4.geometry} material={materials.glass} />
        <mesh
          geometry={nodes.mesh_0_5.geometry}
          material={materials["930_stickers"]}
        />
        <mesh
          geometry={nodes.mesh_0_6.geometry}
          material={materials["930_plastics"]}
        />
        <mesh
          geometry={nodes.mesh_0_7.geometry}
          material={materials["930_lights_refraction"]}
        />
        <mesh
          geometry={nodes.mesh_0_8.geometry}
          material={materials["930_rim"]}
        />
        <mesh
          geometry={nodes.mesh_0_9.geometry}
          material={materials["930_tire"]}
        />
      </group>
      <group position={[-7.97, -0.1, -7.97]} scale={0}>
        <mesh geometry={nodes.mesh_2.geometry} material={materials.plate} />
        <mesh
          geometry={nodes.mesh_2_1.geometry}
          material={materials.DefaultMaterial}
        />
        <mesh
          geometry={nodes.mesh_2_2.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/porsche.glb");

export default Porsche;
