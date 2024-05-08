import bg from "../assets/background.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("user", "true");
    dispatch({ type: "SET_USER", payload: true });
    navigate("/");
  }

  return (
    <div style={{width:720, height:580, zIndex: 1}} className="flex md:w-720 flex-wrap rounded-xl overflow-hidden">
      <div className="h-full hidden md:block relative w-2/5" >
        <img src={bg} className="h-full w-full object-cover" />
        <div className="absolute top-0 left-0 bg-black/25 p-8 w-full h-full">
        </div>
      </div>
      <div className="h-full w-full md:w-3/5 bg-[#002e3f] text-slate-100 p-8 shadow-lg flex flex-col" >
        <div className="flex justify-between font-bold pb-8 border-b-2 border-slate-700 py-4 text-4xl">
          <span>Log in</span>
          <Link to="/" className="p-2 h-9 w-9 hover:bg-black/25 transition-all" style={{lineHeight:0}}><FontAwesomeIcon className="w-5 h-5" icon="xmark" /></Link>
        </div>
        <div className="flex flex-1 items-center">
          <div className="w-full" style={{marginTop: -25}}>
            <label className="block pb-2">
              <div className="font-bold pl-2 pb-0.5 text-slate-200">Email</div>
              <input type="text" className="focus-visible:outline-none border border-slate-800 focus-visible:bg-[#13202c] py-1 px-2 bg-[#00202b] rounded w-full" />
            </label>
            <label className="block py-2">
              <div className="font-bold pl-2 pb-0.5 text-slate-200">Password</div>
              <input type="text" className="focus-visible:outline-none border border-slate-800 focus-visible:bg-[#13202c] py-1 px-2 bg-[#00202b] rounded w-full" />
            </label>
            <Link to="#" className="underline text-right block">Forgot Password</Link>
            <button onClick={login} className="login-btn relative w-full py-1 my-4 text-xl bg-slate-100 text-[#002e3f] font-bold">
              <div className="slide-down absolute top-0 left-0 bg-slate-300 transition-all w-full"></div>
              <span style={{zIndex:3}} className="relative">Sign in</span>
            </button>
            <div>Doesn't have an account? <Link to="/auth/register" className="underline">Join now</Link></div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}