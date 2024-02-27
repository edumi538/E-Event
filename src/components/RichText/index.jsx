import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";

const editorConfiguration = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "|",
    "outdent",
    "indent",
    "|",
    "imageUpload",
    "blockQuote",
    "insertTable",
    "mediaEmbed",
    "undo",
    "redo",
  ],
};

function RichTextCustom({ setEditorContent, editorContent }) {
  function handleChange(event, editor) {
    const data = editor.getData();
    setEditorContent(data);
  }

  return (
    <CKEditor
      onBeforeLoad={(CKEDITOR) => (CKEDITOR.disableAutoInline = true)}
      editor={Editor}
      config={editorConfiguration}
      data={editorContent}
      onChange={handleChange}
    />
  );
}
export default RichTextCustom;
