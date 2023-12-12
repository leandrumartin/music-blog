const CommentForm = ({ blogPostId }) => {
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
        onClick={handleClick}
      >
        Post
      </button>
    </div>
  );
};

export default CommentForm;
