import React from "react";
import PrimaryBtn from "../Primary Btn/PrimaryBtn"

export default function SecuritySettings() {
  return (
    <div className="flex gap-4 flex-wrap py-4 w-fit max-w-full items-center">
      <input
        type="text"
        placeholder="Old password"
        className="shadow-[inset_0_0_4px_gray] p-4 rounded-xl max-w-full w-96"
      />
      <input
        type="text"
        placeholder="New password"
        className="shadow-[inset_0_0_4px_gray] p-4 rounded-xl max-w-full w-96"
      />
      <input
        type="text"
        placeholder="Confirm new password"
        className="shadow-[inset_0_0_4px_gray] p-4 rounded-xl max-w-full w-96"
      />
      <PrimaryBtn className="py-2 w-fit max-w-full mx-auto" onClick="" placeholder="Change Password"/>
    </div>
  );
}
