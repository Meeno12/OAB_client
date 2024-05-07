export default function NotFound() {
  return (
    <div className="bg-[#001820] h-screen">
      <div className="mx-auto text-slate-50 pt-20 h-full flex justify-center items-center flex-col leading-none koulen" style={{maxWidth: 1150}}>
        <div>
          <div style={{fontSize: "13rem"}}>404</div>
          <div className="text-center text-2xl">Not Found</div>
          <div className="text-center text-sm text-slate-300 arial">Mau kemana?</div>
        </div>
      </div>
    </div>
  )
}