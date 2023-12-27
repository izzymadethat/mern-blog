import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");

  return (
    <form action="">
      <input type="title" 
        placeholder="Title" 
        value={title} 
        onChange={e => setTitle(e.target.value)}
      />
      <input type="summary"
        placeholder="Summary"
        value={summary}
        onChange={e => setSummary(e.target.value)}
      />
      <input type="file" />
      <ReactQuill
        value={content}
        onChange={newValue => setContent(newValue)}
      />
      <button style={{ marginTop: "5px" }}>Create Post</button>
    </form>
  );
};

export default CreatePostPage;
