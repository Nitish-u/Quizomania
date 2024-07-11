import React, { memo, useMemo } from "react";
import PrimaryBtn from "../Primary Btn/PrimaryBtn";
import CustomInput from "./CustomInput";

const SecuritySettings = memo(() => {
  const inputs = useMemo(
    () => [
      {
        type: "password",
        willBePassword: true,
        placeholder: "Old password",
      },
      {
        type: "password",
        willBePassword: true,
        placeholder: "New password",
      },
      {
        type: "text",
        willBePassword: false,
        placeholder: "Confirm new password",
      },
    ],
    []
  );
  return (
    <div className="flex gap-4 flex-wrap py-4 w-fit max-w-full items-center">
      {inputs.map((elem) => (
        <CustomInput
          key={elem.placeholder}
          placeholder={elem.placeholder}
          willBePassword={elem.willBePassword}
          type={elem.type}
        />
      ))}
      <PrimaryBtn
        className="py-3.5 w-fit max-w-full mx-auto rounded-xl h-full px-4"
        placeholder="Change Password"
      />
    </div>
  );
});

export default SecuritySettings;
