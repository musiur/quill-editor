import dynamic from "next/dynamic";
import { useState } from "react";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default function TextEditor() {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div style={{maxWidth: "100%"}}>
      <div>
        <QuillNoSSRWrapper
          placeholder="Compose here"
          modules={modules}
          formats={formats}
          theme="snow"
          value={value}
          onChange={setValue}
        />
      </div>
      <div style={{maxWidth: "800px", marginInline: "auto"}}>
        <h1 style={{textAlign: "center", margin: "1rem"}}>Preview</h1>
        {value ? (
          <div dangerouslySetInnerHTML={{ __html: value }} id="htmlPluggedIn" />
        ) : null}
      </div>
    </div>
  );
}
