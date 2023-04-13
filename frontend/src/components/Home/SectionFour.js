import { useSelector } from 'react-redux';
import React, { useState, useEffect, useRef } from "react";
import OpenModalButton from '../OpenModalButton';
import SignupFormModal from '../SignupFormModal';


function SectionFour() {
    const sessionUser = useSelector(state => state.session.user);
    console.log(`🖥 ~ file: SectionFour.js:9 ~ SectionFour ~ sessionUser:`, sessionUser)
    const [showMenu, setShowMenu] = useState(false);
    const ulRef = useRef();

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = (e) => {
          if (!ulRef.current.contains(e.target)) {
            setShowMenu(false);
          }
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
      }, [showMenu]);

      const closeMenu = () => setShowMenu(false);

    return (
        <div className="section-four-container">
            {
                sessionUser
                    ? <button>Join Gather</button>
                    : <OpenModalButton
                        buttonText="Join Gather"
                        onButtonClick={closeMenu}
                        modalComponent={<SignupFormModal />}/>
            }
        </div>
    )
}

export default SectionFour;
