import React from "react";
import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="wrapper">
        <div className="search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
          />
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icons"/>
            English
            </div>
            <div className="item">
            <LanguageIcon className="icons"/>
          
            </div>
            <div className="item">
            <Brightness4Icon className="icons"/>
          
            </div>
            <div className="item">
            <FullscreenExitIcon className="icons"/>
          
            </div>
            <div className="item">
            <NotificationsNoneIcon className="icons"/>
          <span>1</span>
            </div>
            <div className="item">
            <ChatBubbleOutlineIcon className="icons"/>
            <span>2</span>
            </div>
            <div className="item">
            <ListIcon className="icons"/>
            </div>
            <div className="item">
           <img src="https://media.istockphoto.com/photos/beautiful-african-american-female-model-picture-id910871704?k=20&m=910871704&s=612x612&w=0&h=oAmjofYg1rN-gTf2vIwnJct8TZMkhYuuKQFOP4YG0S4=" alt="new" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
