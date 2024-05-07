export default function Button({
  className = "",
  style = {},
  children = "",
  disabled = false,
  variant = "",
  onClick = () => {},
  onMouseOut = () => {},
  type = "button",
  form = false,
  title = null,
}) {
  const base = "rounded-md border border-slate-50 transition py-px text-base px-3 border-2 ";
  const getVariant = () => {
    switch (variant) {
      case "solid":
        return "bg-slate-50 text-[#002e3f] " + (disabled ? "" : "hover:text-slate-50 hover:bg-transparent ");
      case "transparent":        
        return "bg-transparent " + (disabled ? "" : "hover:bg-slate-50 hover:text-[#002e3f] ");
      case "dark":        
        return "bg-black/50 text-slate-50 border-transparent " + (disabled ? "" : "hover:bg-slate-50 hover:text-[#001820] ");
      default:
        return "bg-transparent " + (disabled ? "" : "hover:bg-slate-50 hover:text-[#002e3f] ");
    }
  }

  return (
    <button
      disabled={disabled}
      onMouseOut={onMouseOut}
      className={
        base +
        getVariant() +
        (disabled ? "opacity-60 cursor-default " : "") +
        className
      }
      style={style}
      onClick={onClick}
      type={type}
      form={form ? form : undefined}
      title={title}
    >
      {children}
    </button>
  );
}
