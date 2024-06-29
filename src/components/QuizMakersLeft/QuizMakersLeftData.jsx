import { MdOutlineCheckBox, MdOutlineRadioButtonChecked } from "react-icons/md";
import { ImParagraphJustify } from "react-icons/im";
import { BsTextParagraph } from "react-icons/bs";

export const questionTypes = [
    {
      funcType: "checkbox",
      icon: <MdOutlineCheckBox />,
      placeHolder: "Multiple correct type",
    },
    {
      funcType: "radio",
      icon: <MdOutlineRadioButtonChecked />,
      placeHolder: "Single correct type",
    },
    {
      funcType: "Short answer type",
      icon: <BsTextParagraph />,
      placeHolder: "Short answer type",
    },
    {
      funcType: "Long answer type",
      icon: <ImParagraphJustify />,
      placeHolder: "Long answer type",
    },
    {
      funcType: "radio",
      icon: <MdOutlineRadioButtonChecked />,
      placeHolder: "Choose question type",
    },
  ];