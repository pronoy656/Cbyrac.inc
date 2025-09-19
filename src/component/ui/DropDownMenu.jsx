import * as React from "react";

const DropdownContext = React.createContext(null);

export function DropdownMenu({ children }) {
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef(null);

  return (
    <DropdownContext.Provider value={{ open, setOpen, triggerRef }}>
      <div className="relative inline-block">{children}</div>
    </DropdownContext.Provider>
  );
}

export function DropdownMenuTrigger({ children }) {
  const { open, setOpen, triggerRef } = React.useContext(DropdownContext);

  const toggleMenu = () => setOpen(!open);

  return (
    <button
      ref={triggerRef}
      onClick={toggleMenu}
      className="px-3 py-2 text-sm font-medium text-slate-700 bg-white border rounded-md shadow-sm hover:bg-slate-50"
    >
      {children}
    </button>
  );
}

export function DropdownMenuContent({ className = "", children }) {
  const { open, setOpen, triggerRef } = React.useContext(DropdownContext);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (triggerRef.current && !triggerRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen, triggerRef]);

  if (!open) return null;

  return (
    <div
      className={`absolute right-0 mt-2 w-48 rounded-md border bg-white shadow-lg z-50 ${className}`}
    >
      <div className="py-1">{children}</div>
    </div>
  );
}

export function DropdownMenuItem({ className = "", children, onClick }) {
  const { setOpen } = React.useContext(DropdownContext);

  const handleClick = (e) => {
    if (onClick) onClick(e);
    setOpen(false); // auto close
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 ${className}`}
    >
      {children}
    </button>
  );
}
