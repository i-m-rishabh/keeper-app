import React, { useState } from "react";

function CreateArea(props) {
  const [data, setData] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function handleSubmit(event) {
    props.addTodo(data);
    setData({ title: "", content: "" });
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={data.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={data.content}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
