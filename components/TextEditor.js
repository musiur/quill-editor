import axios from "axios";
import dynamic from "next/dynamic";
import { useState } from "react";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
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

  const handleSubmit = async () => {
    console.log(value)
    if(value !== ""){
      try {
        const response = await axios.post(
          "https://helpful-dove-beret.cyclic.app/create",
          {body: value, title: "title", description: "description"}
        );
  
        console.log(response);
        
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div>
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "1rem auto",
        }}
      >
        <button
          className="px-5 py-1 rounded-md bg-[#159895] text-white"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div className="py-10">
        {
          value ? <h1 className="font-bold text-2xl text-center">Preview</h1> : null
        }
        {value ? (
          <div dangerouslySetInnerHTML={{ __html: value }} id="htmlPluggedIn" />
        ) : null}
      </div>
    </div>
  );
}
