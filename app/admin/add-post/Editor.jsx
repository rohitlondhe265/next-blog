"use client";

import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function App({ setDesc }) {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      setDesc(editorRef.current.getContent());
    }
  };
  return (
    <section>
      <div className="editor h-1/2 overflow-scroll bg-white">
      <Editor
        apiKey="idw7xyxfre7k97232m8itu8o6z8mtog3ehj5vk8qax5gn33t"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue=""
        init={{
          height: 500,
          menubar: false,
          plugins:
            "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tableofcontents footnotes mergetags autocorrect typography inlinecss",
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      </div>

      <button onClick={log} className="btn mt-2 btn-info items-center">Set Description</button>
    </section>
  );
}
