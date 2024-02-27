import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { Avatar } from "./Avatar";
import { motion } from "framer-motion-3d"; 

const ContactAvatar = () => {
    const {viewport} = useThree();
    const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();
  const menuOpened = false;

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
    return (<motion.group
        position={[0, -1.5, -10]}
        animate={{
          x: 3,
          z: 0,
          y: -viewport.height 
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <group scale={[2, 2, 2]} position-y={-1.5}>
          <Avatar />
        </group>
        </motion.group>)
}

export default ContactAvatar;