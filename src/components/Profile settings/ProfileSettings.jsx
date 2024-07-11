import React, { useEffect, useState } from "react";
import ToggleAbleInputComp from "../Toggleable input component/ToggleAbleInputComp";
import CustomTextArea from "../Custom textarea/CustomTextArea";
import InterestsComp from "../Interests Comp/InterestsComp";

export default function ProfileSettings({
  fullName,
  userName,
  userEmail,
  description,
  usersInterests,
  profilePicUrl,
}) {
  const [interests, setInterests] = useState([]);
  useEffect(() => {
    setInterests((prevState) => [...prevState, ...usersInterests]);
  }, []);
  return (
    <div className="EditProfile flex flex-wrap w-full justify-evenly md:gap-20 gap-10 py-4">
      <div className="left flex flex-col items-center gap-4 flex-1 sm:max-w-[450px] w-full">
        <div className="profilePic w-52 max-w-full aspect-square rounded-full shadow-[0_0_4px_gray] overflow-hidden">
          <img
            src={profilePicUrl || ""}
            alt={fullName || ""}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-black cursor-pointer">View pic</div>
        <div className="text-black cursor-pointer">Change pic</div>
        <div className="p-1 flex flex-col gap-4 w-full">
          <ToggleAbleInputComp value={fullName || "Full name"} type={"text"} />
          <ToggleAbleInputComp value={userName || "User Name"} type={"text"} />
          <ToggleAbleInputComp value={userEmail || "Email"} type={"email"} />
        </div>
      </div>
      <div className="right flex flex-col flex-1 gap-4">
        <CustomTextArea userDescription={description} />
        <InterestsComp interests={interests} setInterests={setInterests} />
      </div>
    </div>
  );
}
