import React from "react";

function Sequel () {
    return (
    
    <div>
      
      <div style={{marginLeft: '5%', marginRight: '5%', padding: '1px 16px', height: '1000px', marginTop: '2%'}}>
        <div className="card">
          <div className="card-header">
            <h1>Sequelize</h1>
            <img src="./images/Sequelize.png" className="titleimg" alt="sequelize logo"/>
          </div>
          <div className="card-body">
            <h5 className="card-title">Quick Links</h5>
            <p className="card-text">You can find more info, documents and very detailed videos in the buttons below.
            </p>
            <a href="https://sequelize.org/master/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Go to Sequelize</a>
            <a href className="btn btn-success" target="_blank" rel="noopener noreferrer">Sequelize Documents</a>
            <a href className="btn btn-info" target="_blank" rel="noopener noreferrer">Sequelize Videos</a>
          </div>
        </div>
        <br />
        <h3>What is Sequelize?</h3>
        <p>Sequelize is a promise-based ORM for Node. js. Sequelize is easy to learn and has dozens of cool features like synchronization, association, validation, etc. It also has support for PostgreSQL, MySQL, MariaDB, SQLite, and MSSQL. I am assuming you have some form of SQL database service started on your machine.</p>

        <iframe width={560} height={315} src="https://www.youtube.com/embed/qsDvJrGMSUY" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        <br></br>
        <h3>Additional Resources</h3>
        <p>Some text..</p>
      </div>
    </div>
  );
};

export default Sequel;
