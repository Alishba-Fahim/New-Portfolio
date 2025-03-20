import React from 'react';
// Import icons
import { BiClipboard, BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboard2Data, BsBriefcase, BsChatSquare, BsChatSquareText } from 'react-icons/bs';
// Import smooth scrolling link
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className="container mx-auto">
        {/* Nav inner */}
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
          <Link to='home' activeClass='active' smooth={true}
          offset={-200}
            spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiHomeAlt />
          </Link>
          <Link to='about' activeClass='active' smooth={true}
            spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiUser />
          </Link>
          <Link to='services' activeClass='active' smooth={true}
            spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsClipboard2Data />
          </Link>
          <Link to='work' activeClass='active' smooth={true}
            spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsBriefcase />
          </Link>
          <Link to='contact' activeClass='active' smooth={true}
            spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;



