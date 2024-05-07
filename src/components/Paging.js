import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Paging() {
  return (
    <div className="w-full mt-2 flex justify-between text-slate-50 pb-10">
      <Link to="#" className="bg-black/50 hover:bg-slate-50 hover:text-[#001820] rounded-md transition py-1 px-2">
        <FontAwesomeIcon icon="angles-left" />
      </Link>
      <div className="flex">
        {new Array(5).fill(true).map((_x, i) => (
          <Link to="#" key={i} className={"mx-0.5 hover:bg-slate-50 hover:text-[#001820] rounded-md transition py-1 px-2 " + (i === 0 ? "bg-slate-50 text-[#001820]" : "bg-black/50") }>
            {i + 1}
          </Link>
        ))}
      </div>
      <Link to="#" className="bg-black/50 hover:bg-slate-50 hover:text-[#001820] rounded-md transition py-1 px-2">
        <FontAwesomeIcon icon="angles-right" />
      </Link>
    </div>
  )
}