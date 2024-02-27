import { OrbitControls } from "@react-three/drei";
import { Office } from "./Office";
import { motion } from "framer-motion-3d"; 
import { Avatar } from "./Avatar";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";


export const Experience = (props) => {
  const {section, menuOpened} = props
  const {viewport} = useThree();

  const isMobile = window.innerWidth < 1000;
  const responsiveRatio = viewport.width / 12;
  const officeScaleRatio = Math.max(0.5, Math.min(0.6 * responsiveRatio, 0.75));

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -2.3 : 0, {
        duration: 0.55,
        type: "spring",
        mass: 5, 
        stiffness: 400,
        damping: 50,
        restDelta: 0.0001,
      
    });
    animate(cameraLookAtX, menuOpened ? 2.3 : 0, { 
      duration: 0.55,
      type: "spring",
      mass: 5, 
      stiffness: 400,
      damping: 50,
      restDelta: 0.0001,
    });
  }, [menuOpened]);

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  
  return (
    <>
     <ambientLight intensity={1}></ambientLight>
    <motion.group
        position={[
          isMobile ? 0 : 2.6 * officeScaleRatio,
          isMobile ? -viewport.height / 6 : 2,
          3,
        ]}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: isMobile ? -viewport.height / 6.6 : 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <Office />
      </motion.group>
      {/* <ambientLight intensity={1} />
      <motion.group
        position={[2, 2, 3]}
        scale={[0.75, 0.75, 0.75]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: 0,
        }}
      >
      <Office />
      </motion.group> */}

      {/* {section ===1 && (<motion.group
        position={[0, -1.5, -10]}
        animate={{
          x: 3,
          z: 0,
          y: -viewport.height 
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <group scale={[2, 2, 2]} position-y={-1.5}>
          <Avatar section = {section}/>
        </group>
        </motion.group>)} */}
        {/* <motion.group
        position={[0, -1.5, -100]}
        animate={{
          x: section === 1 ? 3 : 0,
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <group scale={[2, 2, 2]} position-y={-1.5}>
          <Avatar section = {section}/>
        </group>
        </motion.group> */}
    </>
  );
};
