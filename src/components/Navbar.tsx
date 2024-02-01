/** @jsxRuntime classic */
/** @jsx jsx */
import { Link } from 'react-router-dom';
import { css, jsx } from '@emotion/react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { BsFlower1 } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { GoGoal } from 'react-icons/go';
import { CiStickyNote } from 'react-icons/ci';

const Navbar = () => {
  const navStyle = css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '1.5rem',
    borderBottom: '2px solid #ccc',  
    backgroundColor: 'white',
    margin: '0',  
     
  });

  const navItemContainer = css({
    display: 'flex',
    listStyle: 'none',
  });

  const navItem = css({
    color: '#0000008c',
    cursor: 'pointer',
    marginRight: '1rem',
    textDecoration: 'none',  
    fontWeight: 'bold', 
    fontSize: '20px' 
   
  });

  const logoContainer = css({
    display: 'flex',
    alignItems: 'center',
  });

  const logoName = css({
    color: '#dc3545',
    marginLeft: '0.5rem',
    fontSize: '24px',  
    fontWeight:'bold'
  });

  const toggleIcon = css({
    display: 'none',
 
  
});

  const mobileView = css({
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      
    },
    

  });

  return (
    <nav css={[navStyle, mobileView]}>
      <div css={logoContainer}>
        <BsFlower1 fontSize="24px" color='#dc3545'/> {/* Adjust icon size */}
        <span css={logoName}>Save Up</span>
      </div>
      <HiOutlineMenuAlt2 css={toggleIcon} />
      <ul css={navItemContainer}>
        <li>
          <Link to="/" css={navItem}>
            <AiFillHome   />
            Home
          </Link>
        </li>
        <li>
          <Link to="savings" css={navItem}>
            <GoGoal />
            Goals
          </Link>
        </li>
       
        <li>
          <Link to="/Summary" css={navItem}>
            <CiStickyNote   />
            Summary
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
