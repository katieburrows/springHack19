import React from 'react';

function CreatePost() {
  return (
    <div className="container">
      <h1>Create a Post</h1>
      <form>
        <div className="form-group">
          <label for="enterTitle">Enter Title</label>
          <input className="form-control" type="text" id="enterTitle" />
        </div>
        <div className="form-group">
          <label for="enterSnippet">Enter code snippet</label>
          <textarea className="form-control" id="enterSnippet" rows="3" />
        </div>
        <div className="row align-items-center">
          <div className="form-group col-md-8">
            <label for="enterName">Enter Name</label>
            <input
              className="form-control"
              type="text"
              id="enterName"
              placeholder="developerName"
            />
          </div>
          <div className="col-md-4">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
