import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import blue from "./images/blue.png";
import purp from "./images/purp.png";
import black from "./images/black.png";
import green from "./images/green.png";

function App() {
  const [ value, setValue ] = useState(0);
  const [ isToggled, setToggle ] = useState(1);

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
        <AnimatePresence>
          {isToggled && (
              <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    x: value + "px"
                  }}
                  exit={{ opacity: 0 }}
              >
                Super Cool
              </motion.h2>
          )}
        </AnimatePresence>
        <input type="range" min="-100" max="100" value={value}
           onChange={(e) => {
             setValue(e.target.value)
           }}
        />
        <button
          onClick={() => {
              setToggle((prevState => {
                return prevState ? 0 : 1
              }))
          }}
        >Toogle</button>
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
