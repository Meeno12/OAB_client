import { Link, useNavigate } from 'react-router-dom'
import icon from '../assets/icon.png'
import Button from './Button'
import {useLocation} from "react-router-dom"
import bg from "../assets/background.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(0);
  const navMenu = location.pathname.split('/')[1];
  const user = useSelector((state) => state.user);

  const mouseLeave = () => {
    setDropdown(0);
  }

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "SET_USER", payload: null });
    navigate("/")
  }

  return (
    <div id="navbar" className="bg-[#002e3f] shadow-lg text-slate-50 fixed transition-all" style={{zIndex: 50}}>
      <div className="px-20 py-1.5 flex justify-between w-screen relative">
        <Link to="/" className="no-underline flex koulen leading-none items-center" style={{fontSize: 28}}>
          <img src={icon} style={{height: 54}} />
          <div className='ml-1'>
            <div>"old adam"</div>
            <div className='ml-2'>bar</div>
          </div>
        </Link>
        <div className='flex items-center arial font-bold leading-1 text-lg absolute left-1/2 h-full top-0' style={{transform:"translateX(-50%)"}}>
          <Link className={'px-2 mx-3 transition-all border-t-2 border-b-2 ' + (navMenu === "fanart" ? "border-slate-50": "border-transparent")} to="/fanart">Fanart</Link>
          <Link className={'px-2 mx-3 transition-all border-t-2 border-b-2 ' + (navMenu === "music" ? "border-slate-50": "border-transparent")} to="/music">Music</Link>
          <Link className={'px-2 mx-3 transition-all border-t-2 border-b-2 ' + (navMenu === "article" ? "border-slate-50": "border-transparent")} to="/article">Article</Link>
          <Link className={'px-2 mx-3 transition-all border-t-2 border-b-2 ' + (navMenu === "info" ? "border-slate-50": "border-transparent")} to="/info">Info</Link>
        </div>
        <div className='flex items-center'>
          {user ? 
            <div className='flex'>
              <div onMouseLeave={mouseLeave} className='mr-5 flex relative items-center'>
                <Button onClick={() => setDropdown(1)} variant="solid"><FontAwesomeIcon icon="plus" /> Submit</Button>
                { dropdown===1&& (
                  <div className='absolute w-full pt-2 top-full'>
                    <div style={{backgroundColor: "#1c4856"}} className='border cursor-pointer border-slate-600'>
                      <Link to="/upload/fanart" className='px-4 block py-1.5 border-b border-slate-400 hover:bg-[#173e4b]'>
                        Fanart
                      </Link>
                      <Link to="/upload/music" className='px-4 block py-1.5 border-b border-slate-400 hover:bg-[#173e4b]'>
                        Music
                      </Link>
                      <div className='px-4 py-1.5 hover:bg-[#173e4b]'>
                        News
                      </div>
                    </div>
                  </div>
                )} 
              </div>
              <div onMouseLeave={mouseLeave} className='relative'>
                <img onClick={() => setDropdown(2)} src={bg} className='h-10 rounded-full object-cover aspect-square' />
                {dropdown===2 && (
                  <div style={{transform: "translateX(-50%)"}} className='absolute left-1/2 pt-2'>
                    <div style={{backgroundColor: "#1c4856"}} className='border cursor-pointer border-slate-700'>
                      <Link to="user/artist/fanart" className='block leading-0 px-4 py-2 border-b border-slate-600 hover:bg-[#173e4b]'>
                        <div>
                          Username
                        </div>
                        <div className='text-sm text-slate-200'>
                          Profile
                        </div>
                      </Link>
                      <div onClick={logout} className='px-4 py-2 hover:bg-[#173e4b]'>Logout</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            : 
            <Link to="/auth/login">
              <Button>Login</Button>
            </Link>
          }
        </div>
      </div>
    </div>
  )
}