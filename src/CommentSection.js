import React, { useState } from "react";

const CommentSection = ({ blogPostId }) => {
  const [nameInput, setNameInput] = useState();
  const [commentInput, setCommentInput] = useState();

  const handleClick = () => {
    let retVal = new DocumentFragment();

    let listItem = document.createElement("li");
    listItem.className = "list-group-item";

    let pName = document.createElement("p");
    pName.className = "fw-bold";
    // pName.innerText = document.querySelector("#nameInput-" + blogPostId).value;
    pName.innerText = "examplename";
    listItem.appendChild(pName);

    let pMessage = document.createElement("p");
    pMessage.innerText = "hello";
    // document.querySelector(
    //   "#messageInput-" + blogPostId
    // ).value;
    listItem.appendChild(pMessage);

    retVal.append(listItem);

    document.querySelector("#blog-comments-" + blogPostId).appendChild(retVal);
  };

  return (
    <div>
      <h3 className="mt-3">Comments</h3>
      <ul className="list-group text-start" id={"messageList-" + blogPostId}>
        <li className="list-group-item">
          <p className="fw-bold">Jeffrey</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            corrupti ab nesciunt, at illo quam.
          </p>
        </li>
        <li className="list-group-item">
          <p className="fw-bold">Amanda</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis nam
            totam obcaecati excepturi assumenda inventore aperiam laudantium?
          </p>
        </li>
        <li className="list-group-item">
          <p className="fw-bold">Jeffrey</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
      </ul>

      <div>
        <input
          className="form-control m-2"
          type="text"
          placeholder="Name"
          id={"nameInput-" + blogPostId}
        />
        <input
          className="form-control m-2"
          type="text"
          placeholder="Message"
          id={"messageInput-" + blogPostId}
        />

        <button
          className="btn btn-primary m-2"
          type="button"
          onClick={() => {
            setNameInput(
              document.querySelector("nameInput-" + blogPostId).value
            );
            setCommentInput(
              document.querySelector("messageInput-" + blogPostId).value
            );
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
