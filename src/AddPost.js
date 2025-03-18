import React, { useRef, useState } from "react";
import "./index.css";

function AddPost({ addNewPost }) {
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState("");

  const fileInputRef = useRef(null);

  const handleAddPost = () => {
    if (content.trim() !== "" || photo.trim() !== "") {
      addNewPost({ content, photo, replies: [] });
      setContent("");
      setPhoto("");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (evt) => setPhoto(evt.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleChooseFileClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="add-post">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="photo-container" style={{ position: "relative" }}>
          <input
            className="photo-url-input"
            type="text"
            placeholder="Add Photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            style={{
              backgroundColor: "transparent",
              height: "auto",
              position: "relative",
              zIndex: 2,
            }}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          {photo && (
            <img
              src={photo}
              alt="Preview"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                zIndex: 1,
              }}
            />
          )}
        </div>

        <button className="choose-file-button" onClick={handleChooseFileClick}>
          Choose a file
        </button>
      </div>

      <div className="post-content-container">
        <h3>Create a New Post</h3>
        <textarea
          placeholder="Write a caption"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="3"
        />
        <button className="add-post-button" onClick={handleAddPost}>
          Post
        </button>
      </div>
    </div>
  );
}

export default AddPost;
