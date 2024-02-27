import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { ScrollManager } from "./components/ScrollManager";
import { useState } from "react";
import {Menu} from "./components/Menu";
import { MotionConfig } from "framer-motion";
import { Cursor } from "./components/Cursor";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [nameSection, setNameSection] = useState("about");

  return (
    <>
    <MotionConfig transition={{ 
      duration: 0.55,
      type: "spring",
      mass: 5, 
      stiffness: 400,
      damping: 50,
      restDelta: 0.0001,
    }} >
    <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
      
      <ScrollControls pages={6} damping={0.1}>
        <Scroll>
      <Experience section = {section} menuOpened = {menuOpened} />
      </Scroll>
      <ScrollManager section={section} setSection={setSection} />
      <Scroll html>
      <Interface section = {setSection} nameSection = {setNameSection}/>
      </Scroll>
      </ScrollControls>
    </Canvas>
    <Cursor />
    <Menu onSectionChange = {setSection} menuOpened = {menuOpened} setMenuOpened = {setMenuOpened}/>
    </MotionConfig>
  </>
  );
}

export default App;
