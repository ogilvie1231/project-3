import React from "react"
import "./style.css"

const Post = () => {

    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4" id="header">Add New Content Here!</h1>
                </div>
            </div>
            <form>
                <div class="form-group">
                    <label for="Title">Title</label>
                    <input type="text" class="form-control" id="input"></input>
                </div>
                <div class="form-group">
                    <label for="Link">Link</label>
                    <input type="text" class="form-control" id= "input"></input>
                </div>
                <div class="form-group form-check">
                </div>
                <button type="submit" class="btn btn-primary" id="button">Submit</button>
            </form>
        </div>

    )
}

export default Post