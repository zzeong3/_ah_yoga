import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const Popup =forwardRef ((props, ref) => {

    const [Open, setOpen] = useState(false);
    useImperativeHandle(ref, ()=>{
        return {
            open : () => setOpen(true),
        };
    });

    useEffect (()=>{
        Open ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = 'auto')
    }, [Open]);

    return (
    <AnimatePresence>
        {Open && (
            <motion.aside className="pop" 
            initial={{opacity:0, scale:0}} 
            animate={{opacity:1, scale:1, transition: {duration:.5}}}
            exit={{opacity:0, scale:0, transition: {duration:.5, delay:.5}}}>
                <motion.div className="con"
                initial={{opacity:0}}
                animate={{opacity:1, transition:{duration:.5, delay:1}}}
                exit={{opacity:0, transition:{delay:0}}}
                >{props.children}</motion.div> 

                <motion.span 
                initial={{x:50, opacity:0}} 
                animate={{x:0, opacity:1, transition:{delay:1}}}
                className="close" onClick={() => { setOpen(false) }}>close</motion.span>
            </motion.aside>
        )}
    </AnimatePresence> 
    );
});
export default Popup;


