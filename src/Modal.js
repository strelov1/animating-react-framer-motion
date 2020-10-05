import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Modal = ({ isToggled, setToggled, children }) => {
    return (
        <AnimatePresence>
            {isToggled && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: "fixed",
                        top: "30px",
                        left: "50%",
                        transform: "translate3d(-50%, 0, 0)",
                        zIndex: 1,
                    }}
                >
                    <motion.div
                        initial={{ y: 50 }}
                        animate={{ y: 1 }}
                        exit={{ y: 30 }}
                    >
                        <button
                            onClick={() => setToggled(false)}
                        >Close</button>
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}