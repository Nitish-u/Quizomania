import { MdFormatBold, MdFormatItalic } from "react-icons/md";
import { MdFormatUnderlined } from "react-icons/md";
import { LuListOrdered } from "react-icons/lu";
import { GoListUnordered } from "react-icons/go";
import { TbSubscript, TbSuperscript } from "react-icons/tb";
import { MdOutlineImage } from "react-icons/md";
import { CiCircleMinus } from "react-icons/ci";
import { MdFormatAlignCenter, MdFormatAlignLeft, MdFormatAlignRight } from "react-icons/md";

export const fontVarients = [
    { size: 3, sizeName: "Normal text" },
    { size: 5, sizeName: "Sub-title" },
    { size: 6, sizeName: "Title" },
    { size: 7, sizeName: "Header" },
  ];

export const alignments = [
    { type: "justifyLeft", icon: <MdFormatAlignLeft /> },
    { type: "justifyCenter", icon: <MdFormatAlignCenter /> },
    { type: "justifyRight", icon: <MdFormatAlignRight /> },
  ];

export const functions = [
    {
      function: "bold",
      icon: <MdFormatBold />,
    },
    {
      function: "italic",
      icon: <MdFormatItalic />,
    },
    {
      function: "underline",
      icon: <MdFormatUnderlined />,
    },
    {
      function: "insertUnorderdList",
      icon: <GoListUnordered />,
    },
    {
      function: "insertOrderedList",
      icon: <LuListOrdered />,
    },
    {
      function: "subscript",
      icon: <TbSubscript />,
    },
    {
      function: "superscript",
      icon: <TbSuperscript />,
    },
    {
      function: "insertImage",
      icon: <MdOutlineImage />,
    },
    {
      function: "removeFormat",
      icon: <CiCircleMinus />,
    },
  ];