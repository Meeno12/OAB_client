import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bg from "../assets/bg-mobile.jpg";
import Calendar from "../components/Calendar";
import { Link, Outlet } from "react-router-dom";

export default function Event() {
  return (
    <div className="bg-[#001820] min-h-screen">
      <div className="mx-auto flex flex-wrap text-slate-50 flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-[65%] pt-24 px-6 pb-6">
          <Outlet />
        </div>
        <div className="w-full shadow-inner h-screen px-4 shadow-lg bg-[#020f16] lg:w-[35%] pt-20 flex flex-col">
          <div className="leading-none koulen text-2xl mb-4 mt-4">Events</div>
          <div className="pt-4 pb-4 h-full overflow-y-scroll">
            {new Array(10).fill(true).map((_x, i) => (
              <Link
                key={i}
                to={"/event/chat/" + i}
                className="mb-3 block p-2 border border-slate-900 bg-[#021b24] text-slate-300"
              >
                <div className="flex justify-between">
                  <div>
                    <div className="text-md leading-none font-bold ">
                      Nama Event
                    </div>
                    <div className="text-slate-400">12/12/2021 10:20</div>
                  </div>
                  <div className="flex">
                    {new Array(3).fill(true).map((_x, i) => (
                      <img
                        src={bg}
                        key={i}
                        alt="icon"
                        style={{ marginLeft: "-16px" }}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ))}
                    <div
                      style={{ marginLeft: "-16px" }}
                      className="w-8 h-8 rounded-full text-center flex justify-center items-center bg-stone-700"
                    >
                      <span>2+</span>
                    </div>
                  </div>
                </div>
                <a
                  className="truncate overflow-hidden block my-4"
                  href="https://www.facebook.com/groups/251875943835"
                  target="_blank"
                >
                  https://www.facebook.com/groups/251875943835
                </a>
                <div className="flex justify-between items-bottom">
                  <div className="text-slate flex flex-col justify-end">
                    <div>Semarang</div>
                  </div>
                  <div className="text-slate-400 max-w-3/5 overflow-hidden">
                    <a
                      className="block"
                      href="https://www.google.com/maps/search/Mal+Ciputra+Seraya,+Pekanbaru,+Riau"
                      target="_blank"
                    >
                      Mal Ciputra Seraya, Pekanbaru, Riau{" "}
                      <FontAwesomeIcon icon="up-right-from-square" />
                    </a>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
