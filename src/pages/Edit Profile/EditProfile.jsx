import React, { memo } from "react";
import InputComp from "../../components/Input component/InputComp";
import CustomTextArea from "../../components/Custom textarea/CustomTextArea";
import SkillsComp from "../../components/Interests Comp/InterestsComp";
import ProfileSettings from "../../components/Profile settings/ProfileSettings";

const EditProfile = memo(() => {
  return (
    <div className="overflow-y-auto md:px-20 p-2">
      <h1 className="sm:text-5xl text-3xl font-bold sm:leading-[72px] my-4 select-none">
        Profile Settings:
      </h1>
      <ProfileSettings />
      <h1 className="sm:text-5xl text-3xl font-bold sm:leading-[72px] my-4 select-none">
        Privacy & Security Settings:
      </h1>
      <h2 className="font-bold text-xl">Change password:</h2>
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </div>
  );
});
export default EditProfile;
