// import React from "react";

// const PayrollCalender = () => {
//   return (
//     <div className="bg-[#0A0A1A] min-h-screen flex items-center justify-center">
//       <div className="space-y-4">
//         {/* Friday - Pay Day */}
//         <div className="flex items-center space-x-4">
//           <div className="w-20 h-10 bg-green-300"></div>
//           <span className="text-white text-xl font-semibold">
//             Friday - Pay Day
//           </span>
//         </div>

//         {/* Every Sunday Is Weekending */}
//         <div className="flex items-center space-x-4">
//           <div className="w-20 h-10 bg-red-500"></div>
//           <span className="text-white text-xl font-semibold">
//             Every Sunday Is Weekending
//           </span>
//         </div>

//         {/* Pay Period */}
//         <div className="flex items-center space-x-4">
//           <div className="w-20 h-10 bg-gray-400"></div>
//           <span className="text-white text-xl font-semibold">Pay Period</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PayrollCalender;

// import React, { useState } from "react";
// import { startOfMonth, endOfMonth, eachDayOfInterval, format } from "date-fns";

// const months = Array.from({ length: 12 }, (_, i) => i); // 0-11 months

// const PayrollCalender = () => {
//   const [dateStyles, setDateStyles] = useState({
//     // Predefined example styles if needed
//     // "2025-09-05": { bgColor: "#A9D08F", textColor: "#000000", type: "Pay Day" }
//   });
//   const [year, setYear] = useState(2025); // current year state

//   return (
//     <div className="">
//       <div className="flex space-x-[450px] mb-2 text-white">
//         <div className="text-sm">
//           <div className="font-bold text-lg mb-2">CBYRAC, INC</div>
//           <div>123 MAIN STREET SUITE 100</div>
//           <div>ANYTOWN, STATE 12345</div>
//           <div>PHONE: 555-555-5555</div>
//           <div>EMAIL: info@cbyrac.com</div>
//         </div>
//         <div className="w-24 h-24 bg-white rounded justify-center">
//           <img src="/cbyrac-logo.png" alt="" />
//         </div>
//       </div>

//       <p className="text-white text-3xl font-semibold text-center mb-14">
//         CBYRAC, Inc {year} Payroll Calendar
//       </p>

//       {/* Year Switching */}
//       <div className="flex justify-center items-center gap-4 mb-10">
//         <button
//           onClick={() => setYear((prev) => prev - 1)}
//           className="px-5 py-3 font-semibold text-white rounded-lg bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition"
//         >
//           ← Prev
//         </button>

//         <h1 className="text-3xl font-bold text-white">{year}</h1>

//         <button
//           onClick={() => setYear((prev) => prev + 1)}
//           className="px-5 py-3 font-semibold text-white rounded-lg bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition"
//         >
//           Next →
//         </button>
//       </div>

//       {/* Calendar */}
//       <div className="grid grid-cols-3 gap-6">
//         {months.map((month) => {
//           const start = startOfMonth(new Date(year, month));
//           const end = endOfMonth(new Date(year, month));
//           const days = eachDayOfInterval({ start, end });
//           const paddingDays = start.getDay();

//           return (
//             <div key={month} className="bg-white rounded-xl shadow p-4">
//               <h2 className="text-center font-bold text-lg mb-2">
//                 {format(start, "MMMM yyyy")}
//               </h2>

//               <div className="grid grid-cols-7 text-center font-semibold text-gray-600">
//                 {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
//                   <div key={d}>{d}</div>
//                 ))}
//               </div>

//               <div className="grid grid-cols-7 text-center">
//                 {Array.from({ length: paddingDays }).map((_, i) => (
//                   <div key={`pad-${i}`} />
//                 ))}

//                 {days.map((day) => {
//                   const key = format(day, "yyyy-MM-dd");
//                   const style = dateStyles[key];

//                   return (
//                     <div
//                       key={day}
//                       className="p-2 m-1 rounded-full transition w-10 h-10 flex items-center justify-center"
//                       style={{
//                         backgroundColor: style?.bgColor || "transparent",
//                         color: style?.textColor || "black",
//                       }}
//                     >
//                       {format(day, "d")}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Legend */}
//       <div className="mt-10 space-y-4">
//         <div className="flex items-center space-x-4">
//           <div className="w-20 h-10 bg-green-300"></div>
//           <span className="text-white text-xl font-semibold">
//             Friday - Pay Day
//           </span>
//         </div>

//         <div className="flex items-center space-x-4">
//           <div className="w-20 h-10 bg-red-500"></div>
//           <span className="text-white text-xl font-semibold">
//             Every Sunday Is Weekending
//           </span>
//         </div>

//         <div className="flex items-center space-x-4">
//           <div className="w-20 h-10 bg-gray-400"></div>
//           <span className="text-white text-xl font-semibold">Pay Period</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default AdminCalender;
// export default PayrollCalender;

import React, { useState } from "react";
import { startOfMonth, endOfMonth, eachDayOfInterval, format } from "date-fns";

const months = Array.from({ length: 12 }, (_, i) => i); // 0-11 months

const PayrollCalender = () => {
  const [dateStyles] = useState({});
  const [year, setYear] = useState(2025); // current year state

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
        CBYRAC, Inc {year} Payroll Calendar
      </p>

      {/* Year Switching */}
      <div className="flex justify-center items-center gap-4 mb-10">
        <button
          onClick={() => setYear((prev) => prev - 1)}
          className="px-5 py-3 font-semibold text-white rounded-lg bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition"
        >
          ← Prev
        </button>

        <h1 className="text-3xl font-bold text-white">{year}</h1>

        <button
          onClick={() => setYear((prev) => prev + 1)}
          className="px-5 py-3 font-semibold text-white rounded-lg bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition"
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
                    <div
                      key={day}
                      className="p-2 m-1 rounded-full transition w-10 h-10 flex items-center justify-center"
                      style={{
                        backgroundColor: style?.bgColor || "transparent",
                        color: style?.textColor || "black",
                      }}
                    >
                      {format(day, "d")}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-10 space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-10 bg-green-300"></div>
          <span className="text-white text-xl font-semibold">
            Friday - Pay Day
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-20 h-10 bg-red-500"></div>
          <span className="text-white text-xl font-semibold">
            Every Sunday Is Weekending
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-20 h-10 bg-gray-400"></div>
          <span className="text-white text-xl font-semibold">Pay Period</span>
        </div>
      </div>
    </div>
  );
};

export default PayrollCalender;
