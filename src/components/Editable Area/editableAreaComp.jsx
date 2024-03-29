import { useState } from "react";
import { MdInfoOutline } from "react-icons/md";


export default function ({ heading, placeHolder, height, maxHeight, onFocusHandler, title }) {
  const [editorText, setEditorText] = useState(placeHolder);
  function handleChange(e) {
    setEditorText(e.target.value);
  }
  return (
    <div className="parent">
      <p className="mx-2 font-bold flex items-center justify-between">{heading} <span title={title}><MdInfoOutline color="Grey" size="1.2rem" /></span></p>
      <div className="border-2 border-black rounded-xl p-1">
        <div
          className="w-full max-w-full p-2 overflow-y-auto outline-none"
          contentEditable
          style={{height:height, maxHeight: maxHeight, minHeight:'2.5rem'}}
          onChange={handleChange}
          onFocusCapture={() => {
            setEditorText("");
            onFocusHandler();
          }}
          dangerouslySetInnerHTML={{ __html: editorText }}
        />
      </div>
    </div>
  );
}
