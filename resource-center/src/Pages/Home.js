import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

const Home = () => {
    
        return (
          <div className="container">
            <div>
              <div classname="introduction">
                <div classname="containter">
                  <div classname="row">
                    <div classname="col-8">
                      <p style={{fontSize: '48px', fontFamily: '"Archivo Black", sans-serif'}}>FSWDR, THE PLACE WHERE YOU CAN
                        FIND MANY RESOURCES TO HELP YOU BECOME A FULL-STACK WEB DEVELOPER </p>
                      <br />
                      <h4 style={{color: 'gray', wordWrap: 'break-word'}}>Browse through the page to find videos and additional resources from all over the Web.</h4>
                      <br />
                      <a id="button" href="#topicards" classname="btn btn-primary btn-lg active" role="button" aria-pressed="true">Documentation</a>
                    </div>
                    <div classname="col-4">
                      <img src="logos.JPG" alt="all logos" />
                    </div>
                  </div>
                </div>
              </div>
              <div classname="spacesection" />
              {/*Cards Section*/}
              <div id="topicards" classname="spacesection" />
              <div classname="cardsec">
                <p style={{fontSize: '48px', fontFamily: '"Archivo Black", sans-serif'}}>Resource Center</p>
                <p>Find tutorials and answers quicker with FSWDR.</p>
                <br />
                <div id="logocards" classname="container">
                  <div classname="row">
                    <div classname="col-sm">
                      <div classname="card mb-3" style={{maxWidth: '440px'}}>
                        <div classname="row no-gutters" id="cardshadow">
                          <div classname="col-md-4">
                            <img id="logoimg" src="./images/VSLogo.png" classname="card-img" alt="html logo" style={{width: '80px'}} />
                          </div>
                          <div classname="col-md-8">
                            <div classname="card-body">
                              <h5 classname="card-title"><a href="#section1">Visual Studio Code</a></h5>
                              <p classname="card-text">VSC Tutorials.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div classname="col-sm">
                      <div classname="card mb-3" style={{maxWidth: '440px'}}>
                        <div classname="row no-gutters" id="cardshadow">
                          <div classname="col-md-4">
                            <img id="logoimg" src="./images/git logo.png" classname="card-img" alt="html logo" style={{width: '80px'}} />
                          </div>
                          <div classname="col-md-8">
                            <div classname="card-body">
                              <h5 classname="card-title"><a href="#section2">GitBash</a></h5>
                              <p classname="card-text">GitBash Tutorials.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div classname="col-sm">
                      <div classname="card mb-3" style={{maxWidth: '440px'}}>
                        <div classname="row no-gutters" id="cardshadow">
                          <div classname="col-md-4">
                            <img id="logoimg" src="./images/html logo.png" classname="card-img" alt="html logo" style={{width: '80px'}} />
                          </div>
                          <div classname="col-md-8">
                            <div classname="card-body">
                              <h5 classname="card-title"><a href="#section3">HTML</a></h5>
                              <p classname="card-text">HTML Tutorials.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div id="logocards" classname="container">
                <div classname="row">
                  <div classname="col-sm">
                    <div classname="card mb-3" style={{maxWidth: '440px'}}>
                      <div classname="row no-gutters" id="cardshadow">
                        <div classname="col-md-4">
                          <img id="logoimg" src="./images/csslogo.png" classname="card-img" alt="html logo" style={{width: '80px'}} />
                        </div>
                        <div classname="col-md-8">
                          <div classname="card-body">
                            <h5 classname="card-title"><a href="#section4">CSS</a></h5>
                            <p classname="card-text">CSS Tutorials.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div classname="col-sm">
                    <div classname="card mb-3" style={{maxWidth: '440px'}}>
                      <div classname="row no-gutters" id="cardshadow">
                        <div classname="col-md-4">
                          <img id="logoimg" src="./images/bootstrap-logo.png" classname="card-img" alt="html logo" style={{width: '80px'}} />
                        </div>
                        <div classname="col-md-8">
                          <div classname="card-body">
                            <h5 classname="card-title"><a href="#section5">Bootstrap</a></h5>
                            <p classname="card-text">Bootstrap Tutorials.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div classname="col-sm">
                    <div classname="card mb-3" style={{maxWidth: '440px'}}>
                      <div classname="row no-gutters" id="cardshadow">
                        <div classname="col-md-4">
                          <img id="logoimg" src="./images/jslogo.png" classname="card-img" alt="html logo" style={{width: '80px'}} />
                        </div>
                        <div classname="col-md-8">
                          <div classname="card-body">
                            <h5 classname="card-title"><a href="#section6">JavaScript</a></h5>
                            <p classname="card-text">JavaScript Tutorials.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div id="logocards" classname="container">
              <div classname="row">
                <div classname="col-sm">
                  <div classname="card mb-3" style={{maxWidth: '440px'}}>
                    <div classname="row no-gutters" id="cardshadow">
                      <div classname="col-md-4">
                        <img id="logoimg" src="./images/jquery logo.jpg" classname="card-img" alt="html logo" style={{width: '80px'}} />
                      </div>
                      <div classname="col-md-8">
                        <div classname="card-body">
                          <h5 classname="card-title"><a href="#section7">jQuery</a></h5>
                          <p classname="card-text">jQuery Tutorials.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div classname="col-sm">
                  <div classname="card mb-3" style={{maxWidth: '440px'}}>
                    <div classname="row no-gutters" id="cardshadow">
                      <div classname="col-md-4">
                        <img id="logoimg" src="./images/firebase logo.jpg" classname="card-img" alt="html logo" style={{width: '80px'}} />
                      </div>
                      <div classname="col-md-8">
                        <div classname="card-body">
                          <h5 classname="card-title"><a href="#section8">Firebase</a></h5>
                          <p classname="card-text">Firebase Tutorials.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div classname="col-sm">
                  <div classname="card mb-3" style={{maxWidth: '440px'}}>
                    <div classname="row no-gutters" id="cardshadow">
                      <div classname="col-md-4">
                        <img id="logoimg" src="./images/node logo.jpg" classname="card-img" alt="html logo" style={{width: '80px'}} />
                      </div>
                      <div classname="col-md-8">
                        <div classname="card-body">
                          <h5 classname="card-title"><a href="#section9">Node</a></h5>
                          <p classname="card-text">Node Tutorials.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div id="logocards" classname="container">
              <div classname="row">
                <div classname="col-sm">
                  <div classname="card mb-3" style={{maxWidth: '440px'}}>
                    <div classname="row no-gutters" id="cardshadow">
                      <div classname="col-md-4">
                        <img id="logoimg" src="./images/mysql logo.jpg" classname="card-img" alt="html logo" style={{width: '80px'}} />
                      </div>
                      <div classname="col-md-8">
                        <div classname="card-body">
                          <h5 classname="card-title"><a href="#section10">MySQL</a></h5>
                          <p classname="card-text">MySQL Tutorials.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div classname="col-sm">
                  <div classname="card mb-3" style={{maxWidth: '440px'}}>
                    <div classname="row no-gutters" id="cardshadow">
                      <div classname="col-md-4">
                        <img id="logoimg" src="./images/Sequelize.png" classname="card-img" alt="html logo" style={{width: '80px'}} />
                      </div>
                      <div classname="col-md-8">
                        <div classname="card-body">
                          <h5 classname="card-title"><a href="#section11">Sequelize</a></h5>
                          <p classname="card-text">Sequelize Tutorials.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div classname="col-sm">
                  <div classname="card mb-3" style={{maxWidth: '440px'}}>
                    <div classname="row no-gutters" id="cardshadow">
                      <div classname="col-md-4">
                        <img id="logoimg" src="./images/MongoDB1.png" classname="card-img" alt="html logo" style={{width: '80px'}} />
                      </div>
                      <div classname="col-md-8">
                        <div classname="card-body">
                          <h5 classname="card-title"><a href="#section12">MongoDB</a></h5>
                          <p classname="card-text">MongoDB Tutorials.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div id="logocards" classname="container">
              <div classname="row">
                <div classname="col-sm">
                </div>
                <div classname="col-sm">
                  <div classname="card mb-3" style={{maxWidth: '440px'}}>
                    <div classname="row no-gutters" id="cardshadow">
                      <div classname="col-md-4">
                        <img id="logoimg" src="./images/React.png" classname="card-img" alt="html logo" style={{width: '80px'}} />
                      </div>
                      <div classname="col-md-8">
                        <div classname="card-body">
                          <h5 classname="card-title"><a href="#section13">React</a></h5>
                          <p classname="card-text">React Tutorials.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div classname="col-sm">
                </div>
              </div>
            </div>
            <br />
          </div>
        );
      }
    
export default Home;
