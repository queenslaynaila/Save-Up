/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from "react";
import { Link } from "react-router-dom";
import { css, jsx } from "@emotion/react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BsFlower1 } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { GoGoal } from "react-icons/go";
import { CiStickyNote } from "react-icons/ci";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const navStyle = css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "1.5rem",
    borderBottom: "2px solid #ccc",
    backgroundColor: "white",
    margin: "0",

    ul: {
      listStyle: "none",
      display: showLinks ? "flex" : "none", // Toggle display based on showLinks state
      flexDirection: "column",

      li: {
        marginBottom: "4px",
        padding: "4px",
        marginTop: "4px",
      },
    },

    "@media (min-width: 768px)": {
      flexDirection: "row",
      ul: {
        listStyle: "none",
        display: "flex",
        flexDirection: "row",
        li: {
          marginBottom: "0px",
          padding: "0px",
        },
      },
    },
  });

  const logoContainer = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  });

  const logoName = css({
    color: "#dc3545",
    marginLeft: "0.5rem",
    fontSize: "24px",
    fontWeight: "bold",
  });

  const toggleIcon = css({
    display: "block",
    cursor: "pointer",
    fontSize: "24px",

    "@media (min-width: 768px)": {
      display: "none",
    },
  });

  const navItem = css({
    color: "#0000008c",
    cursor: "pointer",
    marginRight: "1rem",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "20px",
    display: "flex",
    alignItems: "center",

    "@media (min-width: 768px)": {
      fontSize: "18px",
      marginRight: "1.5rem",
    },
  });

  return (
    <nav css={navStyle}>
      <div css={logoContainer}>
        <div>
          <BsFlower1 fontSize="24px" color="#dc3545" />
          <span css={logoName}>Save Up</span>
        </div>
        <HiOutlineMenuAlt2
          css={toggleIcon}
          onClick={() => setShowLinks(!showLinks)}
        />
      </div>
      <ul>
        <li>
          <Link to="/" css={navItem}>
            <AiFillHome />
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
            <CiStickyNote />
            Summary
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
