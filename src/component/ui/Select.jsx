import * as React from "react";
import { ChevronDown } from "lucide-react";

const SelectContext = React.createContext();

export function Select({ value, onValueChange, children }) {
  const [open, setOpen] = React.useState(false);

  return (
    <SelectContext.Provider value={{ value, onValueChange, open, setOpen }}>
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger({ children, className = "" }) {
  const { open, setOpen } = React.useContext(SelectContext);
  return (
    <div className="p-[1px] rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between rounded-md bg-slate-900 px-3 py-2 text-sm text-white focus:outline-none ${className}`}
      >
        {children}
        <ChevronDown className="ml-2 h-4 w-4" />
      </button>
    </div>
  );
}

export function SelectValue({ placeholder }) {
  const { value } = React.useContext(SelectContext);
  return <span>{value || placeholder}</span>;
}

export function SelectContent({ children, className = "" }) {
  const { open } = React.useContext(SelectContext);
  if (!open) return null;
  return (
    <div
      className={`absolute z-50 mt-1 w-full rounded-md border border-gray-600 bg-slate-800 shadow-lg ${className}`}
    >
      <ul className="max-h-60 overflow-auto">{children}</ul>
    </div>
  );
}

export function SelectItem({ value, children, className = "" }) {
  const { onValueChange, setOpen } = React.useContext(SelectContext);
  return (
    <li
      onClick={() => {
        onValueChange(value);
        setOpen(false);
      }}
      className={`cursor-pointer px-3 py-2 text-sm text-white hover:bg-slate-700 ${className}`}
    >
      {children}
    </li>
  );
}
