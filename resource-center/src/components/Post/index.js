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
                   <h3> <label htmlFor="Title" id="title">Title</label> </h3>
                    <input type="text" className="form-control" id="input"></input>
                </div>
                <div class="form-group">
                   <h3> <label htmlFor="Link" id="title">Link</label> </h3>
                    <input type="text" className="form-control" id= "input"></input>
                </div>
                <div class="form-group">
                   <h3> <label htmlFor="Summary" id="title">Summary</label> </h3>
                    <input type="text" className="form-control" id= "summary"></input>
                </div>
                <div class="form-group form-check"></div>
                <button type="submit" className="btn btn-primary" id="button">Submit</button>
            </form>
        </div>

    )
}

export default Post