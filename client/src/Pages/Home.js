import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

const Home = () => {
    
        return (
          <div className="container">
            <div>
              <div className="introduction">
                <div className="containter">
                  <div className="row">
                    <div className="col-8">
                      <p style={{fontSize: '48px', fontFamily: '"Archivo Black", sans-serif'}}>THE PLACE WHERE YOU CAN
                        FIND MANY RESOURCES TO HELP YOU BECOME A FULL-STACK WEB DEVELOPER </p>
                      <br />
                      <h4 style={{color: 'gray', wordWrap: 'break-word'}}>Browse through the page to find videos and additional resources from all over the Web.</h4>
                      <br />
                      <a id="button" href="#topicards" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Documentation</a>
                    </div>
                    <div className="col-4">
                      <img src="./images/logos.JPG" alt="all logos" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="spacesection" />
              
              
              {/*Cards Section*/}
              <div id="topicards" className="spacesection" />
              <div className="cardsec">
                <p style={{fontSize: '48px', fontFamily: '"Archivo Black", sans-serif'}}>Resource Center</p>
                <p>Finding videos, tutorials, and documentation faster!</p>
                <br />
                <div id="logocards" className="container">
                  <div className="row">
                    <div className="col-sm">
                      <div className="card mb-3" style={{maxWidth: '440px'}}>
                        <div className="row no-gutters" id="cardshadow">
                          <div className="col-md-4">
                            <img id="logoimg" src="./images/VSLogo.png" className="card-img" alt="html logo" style={{width: '80px'}} />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title"><a href="../GitBash">Visual Studio Code</a></h5>
                              <p className="card-text">VSC Tutorials.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm">
                      <div className="card mb-3" style={{maxWidth: '440px'}}>
                        <div className="row no-gutters" id="cardshadow">
                          <div className="col-md-4">
                            <img id="logoimg" src="./images/gitLogo.png" className="card-img" alt="html logo" style={{width: '80px'}} />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title"><a href="#section2">GitBash</a></h5>
                              <p className="card-text">GitBash Tutorials.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm">
                      <div className="card mb-3" style={{maxWidth: '440px'}}>
                        <div className="row no-gutters" id="cardshadow">
                          <div className="col-md-4">
                            <img id="logoimg" src="./images/htmlLogo.png" className="card-img" alt="html logo" style={{width: '80px'}} />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title"><a href="#section3">HTML</a></h5>
                              <p className="card-text">HTML Tutorials.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div id="logocards" className="container">
                <div className="row">
                  <div className="col-sm">
                    <div className="card mb-3" style={{maxWidth: '440px'}}>
                      <div className="row no-gutters" id="cardshadow">
                        <div className="col-md-4">
                          <img id="logoimg" src="./images/csslogo.png" className="card-img" alt="html logo" style={{width: '80px'}} />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title"><a href="#section4">CSS</a></h5>
                            <p className="card-text">CSS Tutorials.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="card mb-3" style={{maxWidth: '440px'}}>
                      <div className="row no-gutters" id="cardshadow">
                        <div className="col-md-4">
                          <img id="logoimg" src="./images/bootstrapLogo.png" className="card-img" alt="html logo" style={{width: '80px'}} />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title"><a href="#section5">Bootstrap</a></h5>
                            <p className="card-text">Bootstrap Tutorials.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="card mb-3" style={{maxWidth: '440px'}}>
                      <div className="row no-gutters" id="cardshadow">
                        <div className="col-md-4">
                          <img id="logoimg" src="./images/jslogo.png" className="card-img" alt="html logo" style={{width: '80px'}} />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title"><a href="#section6">JavaScript</a></h5>
                            <p className="card-text">JavaScript Tutorials.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div id="logocards" className="container">
              <div className="row">
                <div className="col-sm">
                  <div className="card mb-3" style={{maxWidth: '440px'}}>
                    <div className="row no-gutters" id="cardshadow">
                      <div className="col-md-4">
                        <img id="logoimg" src="./images/jquerylogo.jpg" className="card-img" alt="html logo" style={{width: '80px'}} />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title"><a href="#section7">jQuery</a></h5>
                          <p className="card-text">jQuery Tutorials.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="card mb-3" style={{maxWidth: '440px'}}>
                    <div className="row no-gutters" id="cardshadow">
                      <div className="col-md-4">
                        <img id="logoimg" src="./images/firebaseLogo.jpg" className="card-img" alt="html logo" style={{width: '80px'}} />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title"><a href="#section8">Firebase</a></h5>
                          <p className="card-text">Firebase Tutorials.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="card mb-3" style={{maxWidth: '440px'}}>
                    <div className="row no-gutters" id="cardshadow">
                      <div className="col-md-4">
                        <img id="logoimg" src="./images/nodeLogo.jpg" className="card-img" alt="html logo" style={{width: '80px'}} />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title"><a href="#section9">Node</a></h5>
                          <p className="card-text">Node Tutorials.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div id="logocards" className="container">
              <div className="row">
                <div className="col-sm">
                  <div className="card mb-3" style={{maxWidth: '440px'}}>
                    <div className="row no-gutters" id="cardshadow">
                      <div className="col-md-4">
                        <img id="logoimg" src="./images/mysqlLogo.jpg" className="card-img" alt="html logo" style={{width: '80px'}} />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title"><a href="#section10">MySQL</a></h5>
                          <p className="card-text">MySQL Tutorials.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="card mb-3" style={{maxWidth: '440px'}}>
                    <div className="row no-gutters" id="cardshadow">
                      <div className="col-md-4">
                        <img id="logoimg" src="./images/Sequelize.png" className="card-img" alt="html logo" style={{width: '80px'}} />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title"><a href="#section11">Sequelize</a></h5>
                          <p className="card-text">Sequelize Tutorials.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="card mb-3" style={{maxWidth: '440px'}}>
                    <div className="row no-gutters" id="cardshadow">
                      <div className="col-md-4">
                        <img id="logoimg" src="./images/MongoDB1.png" className="card-img" alt="html logo" style={{width: '80px'}} />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title"><a href="#section12">MongoDB</a></h5>
                          <p className="card-text">MongoDB Tutorials.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div id="logocards" className="container">
              <div className="row">
                <div className="col-sm">
                </div>
                <div className="col-sm">
                  <div className="card mb-3" style={{maxWidth: '440px'}}>
                    <div className="row no-gutters" id="cardshadow">
                      <div className="col-md-4">
                        <img id="logoimg" src="./images/React.png" className="card-img" alt="html logo" style={{width: '80px'}} />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title"><a href="#section13">React</a></h5>
                          <p className="card-text">React Tutorials.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                </div>
              </div>
            </div>
            <br />
          </div>
        );
      }
    
export default Home;