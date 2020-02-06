import React from "react"
import "./style.css"

const Post = (props) => {

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
                    <input type="text" className="form-control" id="input" value={props.title}></input>
                </div>
                <div class="form-group">
                   <h3> <label htmlFor="Link" id="title">Link</label> </h3>
                    <input type="text" className="form-control" id= "input" value={props.link}></input>
                </div>
                <h3> <label htmlFor="Link" id="title1">Category</label> </h3>
                <select id="category" value={props.category}>
                <option value="Visual Studio Code">Visual Studio Code</option>
                <option value="GitBash">GitBash</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="Bootstrap">Bootstrap</option>
                <option value="Javascript">Javascript</option>
                <option value="jQuery">jQuery</option>
                <option value="Firebase">Firebase</option>
                <option value="Node.js">Node.js</option>
                <option value="MySQL">MySQL</option>
                <option value="Sequelize">Sequelize</option>

                </select>
                <div class="form-group">
                   <h3> <label htmlFor="Summary" id="title1">Summary</label> </h3>
                    <input type="text" className="form-control" id= "summary" value={props.summary}></input>
                </div>
                <div class="form-group form-check"></div>
                <button type="submit" className="btn btn-primary" id="button" onClick={props.HandleFormSumbit}>Submit</button>
            </form>
        </div>

    )
}

export default Post