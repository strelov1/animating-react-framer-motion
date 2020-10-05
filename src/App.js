import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import blue from "./images/blue.png";
import purp from "./images/purp.png";
import black from "./images/black.png";
import green from "./images/green.png";
import {Modal} from "./Modal";

function App() {
  const [ value, setValue ] = useState(0);
  const [ isToggled, setToggle ] = useState(false);

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
    >
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
      <Container>
        <h2>Super Cool</h2>
        {/*<input type="range" min="-100" max="100" value={value}*/}
        {/*   onChange={(e) => {*/}
        {/*     setValue(e.target.value)*/}
        {/*   }}*/}
        {/*/>*/}

        <button
          onClick={() => setToggle(true)}
        >
          Toggle
        </button>


        <Modal isToggled={isToggled} setToggled={setToggle} >
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
        </Modal>

        <CardGrid>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          >
            <Card style={{ background: "var(--purp)" }}>
              <h3>Some card</h3>
              <img src={purp} />
            </Card>
          </motion.div>
          <Card style={{ background: "var(--blue)" }}>
            <h3>Some card</h3>
            <img src={blue} />
          </Card>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  );
}

export default App;
