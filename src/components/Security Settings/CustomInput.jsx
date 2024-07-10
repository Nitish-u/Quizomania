// import React, { memo, useCallback, useEffect, useState } from "react";
// import { LuEye, LuEyeOff } from "react-icons/lu";

// const CustomInput = memo(({ placeholder, type, className, willBePassword }) => {
//   // will be password tell if we want to show to password -> text toggle icon A.K.A eye icon
//   const [inputValue, setInputValue] = useState("");
//   const [inputType, setInputType] = useState("text");
//   const changeHandler = useCallback((e) => {
//     setInputValue(e.target.value);
//   }, []);

//   const typeToggle = useCallback(() => {
//     setInputType((prevState) => {
//       if (prevState == "text") {
//         return "password";
//       } else {
//         return "text";
//       }
//     });
//   }, []);

//   useEffect(() => {
//     setInputType(type);
//   }, []);
//   return (
//     <div className="relative">
//       <input
//         type={type}
//         placeholder={placeholder}
//         className={`shadow-[inset_0_0_4px_gray] p-4 rounded-xl max-w-full w-96 ${className}`}
//         value={inputValue}
//         onChange={changeHandler}
//       />
//       <div
//         className={`absolute right-4 top-1/2 -translate-y-1/2 ${
//           willBePassword ? "block" : "hidden"
//         }`}
//       >
//         <LuEye
//           size="1.5rem"
//           className={`${inputType == "text" ? "block" : "hidden"} cursor-pointer active:scale-75 transition-transform duration-300`}
//           onClick={typeToggle}
//         />
//         <LuEyeOff
//           size="1.5rem"
//           className={`${inputType == "text" ? "hidden" : "block"} cursor-pointer active:scale-75 transition-transform duration-300`}
//           onClick={typeToggle}
//         />
//       </div>
//     </div>
//   );
// });
// export default CustomInput;

import React, { memo, useCallback, useEffect, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

const CustomInput = memo(({ placeholder, type, className, willBePassword }) => {
  // willBePassword tell if we want to show to password -> text toggle icon A.K.A eye icon
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState(type);

  const changeHandler = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const typeToggle = useCallback(() => {
    setInputType((prevState) => (prevState === "text" ? "password" : "text"));
  }, []);

  useEffect(() => {
    setInputType(type);
  }, [type]);

  return (
    <div className="relative max-w-full">
      <input
        type={inputType}
        placeholder={placeholder}
        className={`shadow-[inset_0_0_4px_gray] p-4 rounded-xl max-w-full w-96 ${className}`}
        value={inputValue}
        onChange={changeHandler}
      />
      <div
        className={`absolute right-4 top-1/2 -translate-y-1/2 ${
          willBePassword ? "block" : "hidden"
        }`}
      >
        <LuEye
          size="1.5rem"
          className={`${
            inputType === "text" ? "block" : "hidden"
          } cursor-pointer active:scale-75 transition-transform duration-300`}
          onClick={typeToggle}
        />
        <LuEyeOff
          size="1.5rem"
          className={`${
            inputType === "text" ? "hidden" : "block"
          } cursor-pointer active:scale-75 transition-transform duration-300`}
          onClick={typeToggle}
        />
      </div>
    </div>
  );
});

export default CustomInput;

