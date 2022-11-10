import{ useState, forwardRef, useImperativeHandle, useEffect} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Menu = forwardRef ((props, ref) => {
    const [Open, setOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', ()=>{
            const wid = window.innerWidth;
            if(wid>=1200) setOpen(false);
        })
    }, [])

    useImperativeHandle (ref, () => {
        return {
            toggle: () => setOpen(!Open)
        }
    })

    return (
        <AnimatePresence>
        {Open && (
            <motion.nav id='mobileMenu'
            initial={{opacity:0}}
            animate={{opacity:1,  transition:{duration:.5}}}
            exit={{opacity:1, transition:{duration:.5}}}
            onClick={()=>setOpen(false)}
            >
                <h1>
                    <Link to='/'>
                        A-YOGA
                    </Link>
                </h1>
                <ul id="gnb">
                    <li>
                        <NavLink to='/department'>Department</NavLink>  
                    </li>
                    <li>
                        <NavLink to='/community' >Community</NavLink>
                    </li>
                    <li><NavLink to='/gallery'>Gallery</NavLink></li>
                    <li><NavLink to='/youtube'>Youtube</NavLink></li>
                    <li><NavLink to='/location'>Location</NavLink></li>
                    <li><NavLink to='/Member'>Member</NavLink></li>
                </ul>
                <FontAwesomeIcon icon={faXmark} />
            </motion.nav>
        )}
        </AnimatePresence>
    );
})

export default Menu;
