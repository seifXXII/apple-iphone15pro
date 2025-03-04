import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lights from "./Lights";
import Iphone from "./Iphone";
import * as THREE from "three";
import { Suspense } from "react";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
}) => {
  return (
    <Canvas className={`w-full h-full ${index === 2 ? "right-[-100%]" : ""}`}>
      <View index={index} id={gsapType} className={`w-full h-full ${index === 2 ? "right-[-100%]" : ""}`}>
        <ambientLight intensity={0.3} />
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <Lights />
        <OrbitControls
          makeDefault
          ref={controlRef}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          target={new THREE.Vector3(0, 0, 0)}
          onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
        />
        <group
          ref={groupRef}
          name={index === 1 ? "small" : "large"}
          position={[0, 0, 0]}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Iphone scale={index === 1 ? [15, 15, 15] : [17, 17, 17]} />
          </Suspense>
        </group>
      </View>
    </Canvas>
  );
};

export default ModelView;
