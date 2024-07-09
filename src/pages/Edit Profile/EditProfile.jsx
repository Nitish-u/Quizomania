import React, { memo } from "react";
import InputComp from "../../components/Toggleable input component/ToggleAbleInputComp";
import CustomTextArea from "../../components/Custom textarea/CustomTextArea";
import SkillsComp from "../../components/Interests Comp/InterestsComp";
import ProfileSettings from "../../components/Profile settings/ProfileSettings";
import SecuritySettings from "../../components/Security Settings/SecuritySettings";

const EditProfile = memo(() => {
  return (
    <div className="overflow-y-auto md:px-20 p-2">
      <h1 className="sm:text-5xl text-3xl font-bold sm:leading-[72px] my-4 select-none">
        Profile Settings:
      </h1>
      <ProfileSettings />
      <div className="flex flex-wrap gap-10 gap-y-0">
        <div className="securitySettings max-w-full">
          <h1 className="sm:text-5xl text-3xl font-bold sm:leading-[72px] my-4 select-none">
            Privacy & Security Settings:
          </h1>
          <h2 className="font-bold text-xl w-fit">Change password:</h2>
          <SecuritySettings />
        </div>
        <div className="notificationSettings max-w-full">
          <h1 className="sm:text-5xl text-3xl font-bold sm:leading-[72px] my-4 select-none">
            Notification Settings:
          </h1>
        </div>
      </div>
    </div>
  );
});
export default EditProfile;
