import { MdInfoOutline } from "react-icons/md";

export default function EditableComp({
  heading,
  onFocusHandler,
  title,
  editorText,
  setEditorText,
  handleChange,
  id,
}) {
  return (
    <div className="parent">
      <p className="mx-2 font-bold flex items-center justify-between">
        {heading}{" "}
        <span title={title}>
          <MdInfoOutline color="Grey" size="1.2rem" />
        </span>
      </p>
      <div className="border-2 border-black rounded-xl p-1">
        <div
          id={id}
          className="editableDiv w-full max-w-full p-2 overflow-y-auto outline-none"
          contentEditable
          style={{ height: "8rem" }}
          onInput={handleChange}
          // onChange={handleChange}
          onFocusCapture={() => {
            onFocusHandler();
          }}
          dangerouslySetInnerHTML={{ __html: editorText }}
        />
      </div>
    </div>
  );
}
