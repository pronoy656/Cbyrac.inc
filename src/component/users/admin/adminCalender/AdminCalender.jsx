// import React, { useState } from "react";
// import { startOfMonth, endOfMonth, eachDayOfInterval, format } from "date-fns";
// import { Dialog } from "@headlessui/react";

// const months = Array.from({ length: 12 }, (_, i) => i); // 0-11 months

// const AdminCalender = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);

//   const [bgColor, setBgColor] = useState("#A9D08F");
//   const [redBgColor, setRedBgColor] = useState("#F04D23");
//   const [textColor, setTextColor] = useState("#919191");
//   const [type, setType] = useState("Pay Day");

//   const currentYear = 2025;

//   const openModal = (date) => {
//     setSelectedDate(date);
//     setIsOpen(true);
//   };
//   return (
//     <div className="p-6 grid grid-cols-3 gap-6">
//       {months.map((month) => {
//         const start = startOfMonth(new Date(currentYear, month));
//         const end = endOfMonth(new Date(currentYear, month));
//         const days = eachDayOfInterval({ start, end });

//         // For aligning the first day correctly
//         const paddingDays = start.getDay(); // Sunday=0, Monday=1, ...

//         return (
//           <div key={month} className="bg-white rounded-xl shadow p-4">
//             <h2 className="text-center font-bold text-lg mb-2">
//               {format(start, "MMMM yyyy")}
//             </h2>
//             <div className="grid grid-cols-7 text-center font-semibold text-gray-600">
//               {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
//                 <div key={d}>{d}</div>
//               ))}
//             </div>
//             <div className="grid grid-cols-7 text-center">
//               {Array.from({ length: paddingDays }).map((_, i) => (
//                 <div key={`pad-${i}`} />
//               ))}
//               {days.map((day) => (
//                 <button
//                   key={day}
//                   onClick={() => openModal(day)}
//                   className="p-2 m-1 rounded hover:bg-gray-200 transition"
//                 >
//                   {format(day, "d")}
//                 </button>
//               ))}
//             </div>
//           </div>
//         );
//       })}

//       {/* Modal */}
//       <Dialog
//         open={isOpen}
//         onClose={() => setIsOpen(false)}
//         className="relative z-50"
//       >
//         <div
//           className="fixed inset-0 bg-black/30 backdrop-blur-sm"
//           aria-hidden="true"
//         />

//         <div className="fixed inset-0 flex items-center justify-center p-4">
//           <Dialog.Panel className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow-lg">
//             <Dialog.Title className="text-lg font-bold mb-4">
//               Edit Date: {selectedDate ? format(selectedDate, "PPP") : ""}
//             </Dialog.Title>

//             {/* Background color picker */}
//             <div className="mb-3">
//               <label className="block mb-1 font-medium">Background Color</label>
//               <input
//                 type="color"
//                 value={bgColor}
//                 onChange={(e) => setBgColor(e.target.value)}
//                 className="w-16 h-16  rounded-full"
//               />
//               <input
//                 type="color"
//                 value={redBgColor}
//                 onChange={(e) => setRedBgColor(e.target.value)}
//                 className="w-16 h-16  rounded-full"
//               />
//             </div>

//             {/* Text color picker */}
//             <div className="mb-3">
//               <label className="block mb-1 font-medium">Text Color</label>
//               <input
//                 type="color"
//                 value={textColor}
//                 onChange={(e) => setTextColor(e.target.value)}
//                 className="w-16 h-10 border rounded"
//               />
//             </div>

//             {/* Dropdown */}
//             <div className="mb-3">
//               <label className="block mb-1 font-medium">Type</label>
//               <select
//                 value={type}
//                 onChange={(e) => setType(e.target.value)}
//                 className="border rounded p-2 w-full"
//               >
//                 <option>Pay Day</option>
//                 <option>Weekending</option>
//                 <option>Pay Period</option>
//               </select>
//             </div>

//             {/* Buttons */}
//             <div className="flex justify-end gap-2 mt-4">
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
//               >
//                 Close
//               </button>
//               <button
//                 onClick={() => {
//                   console.log({
//                     date: selectedDate,
//                     bgColor,
//                     textColor,
//                     type,
//                   });
//                   setIsOpen(false);
//                 }}
//                 className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
//               >
//                 Save
//               </button>
//             </div>
//           </Dialog.Panel>
//         </div>
//       </Dialog>
//     </div>
//   );
// };

// export default AdminCalender;
////////////////////////////////
// import React, { useState } from "react";
// import { startOfMonth, endOfMonth, eachDayOfInterval, format } from "date-fns";
// import { Dialog } from "@headlessui/react";

// const months = Array.from({ length: 12 }, (_, i) => i); // 0-11 months

// const AdminCalender = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);

//   const [bgColor, setBgColor] = useState("#A9D08F");
//   const [redBgColor, setRedBgColor] = useState("#F04D23");
//   const [textColor, setTextColor] = useState("#919191");
//   const [type, setType] = useState("Pay Day");

//   // এখানে আমরা সেভ করা তারিখের ডেটা রাখবো
//   const [dateStyles, setDateStyles] = useState({});

//   const currentYear = 2025;

//   const openModal = (date) => {
//     setSelectedDate(date);
//     setIsOpen(true);
//   };

//   const handleSave = () => {
//     if (selectedDate) {
//       const key = format(selectedDate, "yyyy-MM-dd"); // date key

//       setDateStyles((prev) => ({
//         ...prev,
//         [key]: { bgColor, textColor, type },
//       }));
//     }
//     setIsOpen(false);
//   };

//   return (
//     <div className="p-6 grid grid-cols-3 gap-6">
//       {months.map((month) => {
//         const start = startOfMonth(new Date(currentYear, month));
//         const end = endOfMonth(new Date(currentYear, month));
//         const days = eachDayOfInterval({ start, end });

//         // For aligning the first day correctly
//         const paddingDays = start.getDay(); // Sunday=0, Monday=1, ...

//         return (
//           <div key={month} className="bg-white rounded-xl shadow p-4">
//             <h2 className="text-center font-bold text-lg mb-2">
//               {format(start, "MMMM yyyy")}
//             </h2>
//             <div className="grid grid-cols-7 text-center font-semibold text-gray-600">
//               {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
//                 <div key={d}>{d}</div>
//               ))}
//             </div>
//             <div className="grid grid-cols-7 text-center">
//               {Array.from({ length: paddingDays }).map((_, i) => (
//                 <div key={`pad-${i}`} />
//               ))}
//               {days.map((day) => {
//                 const key = format(day, "yyyy-MM-dd");
//                 const style = dateStyles[key];

//                 return (
//                   <button
//                     key={day}
//                     onClick={() => openModal(day)}
//                     className="p-2 m-1 rounded-full transition w-10 h-10 flex items-center justify-center"
//                     style={{
//                       backgroundColor: style?.bgColor || "transparent",
//                       color: style?.textColor || "black",
//                     }}
//                   >
//                     {format(day, "d")}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         );
//       })}

//       {/* Modal */}
//       <Dialog
//         open={isOpen}
//         onClose={() => setIsOpen(false)}
//         className="relative z-50"
//       >
//         <div
//           className="fixed inset-0 bg-black/30 backdrop-blur-sm"
//           aria-hidden="true"
//         />

//         <div className="fixed inset-0 flex items-center justify-center p-6">
//           <Dialog.Panel className="mx-auto w-[450px] h-[500px] rounded-2xl bg-white p-8 shadow-lg">
//             <Dialog.Title className="text-xl font-bold mb-4">
//               Edit Date: {selectedDate ? format(selectedDate, "PPP") : ""}
//             </Dialog.Title>

//             {/* Background color picker */}
//             <div className="mb-6">
//               <label className="block mb-2 font-medium">Background Color</label>
//               <div className="flex gap-4">
//                 <input
//                   type="color"
//                   value={bgColor}
//                   onChange={(e) => setBgColor(e.target.value)}
//                   className="w-14 h-14 rounded-full cursor-pointer"
//                 />
//                 <input
//                   type="color"
//                   value={redBgColor}
//                   onChange={(e) => setRedBgColor(e.target.value)}
//                   className="w-14 h-14 rounded-full cursor-pointer"
//                 />
//               </div>
//             </div>

//             {/* Text color picker */}
//             <div className="mb-6">
//               <label className="block mb-2 font-medium">Text Color</label>
//               <input
//                 type="color"
//                 value={textColor}
//                 onChange={(e) => setTextColor(e.target.value)}
//                 className="w-16 h-10 border rounded cursor-pointer"
//               />
//             </div>

//             {/* Dropdown */}
//             <div className="mb-6">
//               <label className="block mb-2 font-medium">Type</label>
//               <select
//                 value={type}
//                 onChange={(e) => setType(e.target.value)}
//                 className="border rounded p-2 w-full"
//               >
//                 <option>Pay Day</option>
//                 <option>Weekending</option>
//                 <option>Pay Period</option>
//               </select>
//             </div>

//             {/* Buttons */}
//             <div className="flex justify-end gap-3 mt-6">
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
//               >
//                 Close
//               </button>
//               <button
//                 onClick={handleSave}
//                 className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
//               >
//                 Save
//               </button>
//             </div>
//           </Dialog.Panel>
//         </div>
//       </Dialog>
//     </div>
//   );
// };

// export default AdminCalender;

///////////////////////
import React, { useState } from "react";
import { startOfMonth, endOfMonth, eachDayOfInterval, format } from "date-fns";
import { Dialog } from "@headlessui/react";

const months = Array.from({ length: 12 }, (_, i) => i); // 0-11 months

const AdminCalender = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const [bgColor, setBgColor] = useState("#A9D08F"); // default green
  const [textColor, setTextColor] = useState("#919191");
  const [type, setType] = useState("Pay Day");

  const [dateStyles, setDateStyles] = useState({});
  const [year, setYear] = useState(2025); // current year state

  const openModal = (date) => {
    setSelectedDate(date);
    setIsOpen(true);
  };

  const handleSave = () => {
    if (selectedDate) {
      const key = format(selectedDate, "yyyy-MM-dd");

      setDateStyles((prev) => ({
        ...prev,
        [key]: { bgColor, textColor, type },
      }));
    }
    setIsOpen(false);
  };

  return (
    <div className="">
      <div className="flex space-x-[450px] mb-2 text-white">
        <div className="text-sm">
          <div className="font-bold text-lg mb-2">CBYRAC, INC</div>
          <div>123 MAIN STREET SUITE 100</div>
          <div>ANYTOWN, STATE 12345</div>
          <div>PHONE: 555-555-5555</div>
          <div>EMAIL: info@cbyrac.com</div>
        </div>
        <div className="w-24 h-24 bg-white rounded justify-center">
          <img src="/cbyrac-logo.png" alt="" />
        </div>
      </div>
      <p className="text-white text-3xl font-semibold text-center mb-14">
        CBYRAC, Inc 2025 Payroll Calendar
      </p>
      {/* Year Switching */}
      <div className="flex justify-center items-center gap-4 mb-10">
        <button
          onClick={() => setYear((prev) => prev - 1)}
          className="px-5 py-3 font-semibold text-white rounded-lg 
               bg-white/20 backdrop-blur-md border border-white/30 
               hover:bg-white/30 transition"
        >
          ← Prev
        </button>

        <h1 className="text-3xl font-bold text-white">{year}</h1>

        <button
          onClick={() => setYear((prev) => prev + 1)}
          className="px-5 py-3 font-semibold text-white rounded-lg 
               bg-white/20 backdrop-blur-md border border-white/30 
               hover:bg-white/30 transition"
        >
          Next →
        </button>
      </div>

      {/* Calendar */}
      <div className="grid grid-cols-3 gap-6">
        {months.map((month) => {
          const start = startOfMonth(new Date(year, month));
          const end = endOfMonth(new Date(year, month));
          const days = eachDayOfInterval({ start, end });
          const paddingDays = start.getDay();

          return (
            <div key={month} className="bg-white rounded-xl shadow p-4">
              <h2 className="text-center font-bold text-lg mb-2">
                {format(start, "MMMM yyyy")}
              </h2>
              <div className="grid grid-cols-7 text-center font-semibold text-gray-600">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                  <div key={d}>{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 text-center">
                {Array.from({ length: paddingDays }).map((_, i) => (
                  <div key={`pad-${i}`} />
                ))}
                {days.map((day) => {
                  const key = format(day, "yyyy-MM-dd");
                  const style = dateStyles[key];

                  return (
                    <button
                      key={day}
                      onClick={() => openModal(day)}
                      className="p-2 m-1 rounded-full transition w-10 h-10 flex items-center justify-center"
                      style={{
                        backgroundColor: style?.bgColor || "transparent",
                        color: style?.textColor || "black",
                      }}
                    >
                      {format(day, "d")}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm"
          aria-hidden="true"
        />

        <div className="fixed inset-0 flex items-center justify-center p-6">
          <Dialog.Panel
            className="mx-auto w-[450px] h-[500px] rounded-2xl 
                       bg-white/50 backdrop-blur-lg border border-white/30 
                       p-8 shadow-lg"
          >
            <Dialog.Title className="text-xl font-bold mb-4 text-black">
              Edit Date: {selectedDate ? format(selectedDate, "PPP") : ""}
            </Dialog.Title>

            {/* Background color picker (Only One Selectable) */}
            <div className="mb-6">
              <label className="block mb-2 font-medium text-black">
                Background Color
              </label>
              <div className="flex gap-6">
                {/* Green Option */}
                <div
                  className={`w-14 h-14 rounded-full cursor-pointer border-4 ${
                    bgColor === "#A9D08F"
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: "#A9D08F" }}
                  onClick={() => setBgColor("#A9D08F")}
                />
                {/* Red Option */}
                <div
                  className={`w-14 h-14 rounded-full cursor-pointer border-4 ${
                    bgColor === "#F04D23"
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: "#F04D23" }}
                  onClick={() => setBgColor("#F04D23")}
                />
              </div>
            </div>

            {/* Text color picker */}
            <div className="mb-6">
              <label className="block mb-2 font-medium text-black">
                Text Color
              </label>
              <div
                className={`w-14 h-14 rounded-full cursor-pointer border-4 ${
                  textColor === "#000000"
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: "#000000" }}
                onClick={() => setTextColor("#000000")}
              />
            </div>

            {/* Dropdown */}
            <div className="mb-6">
              <label className="block mb-2 font-medium text-black">Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="border-2 border-white rounded p-2 w-full bg-white/20 text-black backdrop-blur-md"
              >
                <option>Pay Day</option>
                <option>Weekending</option>
                <option>Pay Period</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded bg-white/20 text-black border border-white/30 
                 backdrop-blur-md hover:bg-white/30 transition"
              >
                Close
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Save
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default AdminCalender;
