import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bg from "../assets/background.jpg";

export default function EventChat() {
  return (
    <div
      style={{ backgroundColor: "#001f2b" }}
      className="rounded-xl shadow-xl flex flex-col overflow-hidden h-full "
    >
      <div
        className="p-3 shadow-xl flex justify-between items-center leading-none"
        style={{ background: "#0b2b37" }}
      >
        <div className="text-xl font-bold text-slate-200">Nama Event</div>
        <div className="flex text-slate-300">
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
      <div className="flex flex-col h-full p-5 shadow-inset ">
        <div className="h-full text-slate-200">
          <div className="flex mb-2 pt-2">
            <div>
              <img
                className="w-11 h-11 object-cover rounded-full mr-2"
                src={bg}
              />
            </div>
            <div>
              <div className="leading-none ">
                Kani <span className="text-xs text-slate-400">12/12/2005</span>
              </div>
              <div>Nanti aku dateng agak siang</div>
            </div>
          </div>
          <div className="flex mb-2 pt-2">
            <div>
              <img
                className="w-11 h-11 object-cover rounded-full mr-2"
                src={bg}
              />
            </div>
            <div>
              <div className="leading-none ">
                Meeno <span className="text-xs text-slate-400">12/12/2005</span>
              </div>
              <div>Kfn yh</div>
            </div>
          </div>
          <div className="flex mb-2 pt-2">
            <div>
              <img
                className="w-11 h-11 object-cover rounded-full mr-2"
                src={bg}
              />
            </div>
            <div>
              <div className="leading-none ">
                Kerol <span className="text-xs text-slate-400">12/12/2005</span>
              </div>
              <div>siapa aja yang dateng hari ini?</div>
            </div>
          </div>
          <div className="flex mb-2 pt-2">
            <div>
              <img
                className="w-11 h-11 object-cover rounded-full mr-2"
                src={bg}
              />
            </div>
            <div>
              <div className="leading-none ">
                Akarui{" "}
                <span className="text-xs text-slate-400">12/12/2005</span>
              </div>
              <div>Nanti ngumpul di depan dulu ya sebelum masuk</div>
            </div>
          </div>
          <div className="mb-2 pt-2">
            <div className="pl-14 text-xs pb-0.5 flex items-center">
              <div>
                <img
                  src={bg}
                  className="w-3 h-3 rounded-full object-cover mr-2"
                />
              </div>
              <span className="mr-1">Meeno</span>
              <span>Kfn yh</span>
            </div>
            <div className="flex">
              <div>
                <img
                  className="w-11 h-11 object-cover rounded-full mr-2"
                  src={bg}
                />
              </div>
              <div>
                <div className="leading-none ">
                  Kerol{" "}
                  <span className="text-xs text-slate-400">12/12/2005</span>
                </div>
                <div>Kfn kfn</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="py-1.5 px-4 text-slate-400 flex items-center"
          style={{ background: "#0b2b37" }}
        >
          <FontAwesomeIcon icon="file-image" className="w-5 h-5 mr-2" />
          <div>Message in Nama chat event</div>
        </div>
      </div>
    </div>
  );
}
