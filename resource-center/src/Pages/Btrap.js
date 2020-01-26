import React from "react";

function Header (props) {
     return (
         <div>

      <div>
        {/*LINKS*/}
        {/*Bootstrap CSS*/}
        {/*MY CSS*/}
        <ul>
            <li style="text-align: center; font: bolder; background: #039be5; color: white; height: 50px; font-size: 24px; padding-top: 3px;">
            FullStackDev</li>
            <li><a href="intro.html">Introduction</a></li>
            <li><a href="vsc.html">Visual Studio Code</a></li>
            <li><a href="gitbash.html">GitBash</a></li>
            <li><a href="index.html">HTML</a></li>
            <li><a href="css.html">CSS</a></li>
            <li><a href="bootstrap.html">Bootstrap</a></li>
            <li><a href="javascript.html">Javascript</a></li>
            <li><a href="jQuery.html">jQuery</a></li>
            <li><a href="react.html">Timers</a></li>
            <li><a href="ajax.html">Ajax</a></li>
            <li><a href="firebase.html">Firebase</a></li>
            <li><a href="Node.js.html">Node.js</a></li>
            <li><a href="jsconst.html">js-constructors</a></li>
            <li><a href="mysql.html">MySQL</a></li>
            <li><a href="express.html">Express</a></li>
            <li><a href="handelbars.html">Handlebars</a></li>
            <li><a href="sequelize.html">Sequelize</a></li>
            <li><a href="Mongo.html">Mongo-Mongoose</a></li>
            <li><a href="react.html">React</a></li>
    </ul>
    </div>

    <div style="margin-left:18%;margin-right:2%;padding:1px 16px;height:1000px;">
        <div class="card">
            <div class="card-header">
                <h1>Bootstrap</h1>
                <img src="assets/bootstrap-logo.png" class="titleimg"/>
            </div>
            <div class="card-body">
                <h5 class="card-title">Quick Links</h5>
                <p class="card-text">You can find more info, documents and very detailed videos in the buttons below.
                </p>
                <a href="https://getbootstrap.com/" class="btn btn-primary" target="_blank">Go to Bootstrap</a>
                <a href="" class="btn btn-success" target="_blank">Bootstrap Documents</a>
                <a href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg/search?query=bootstrap"
                    class="btn btn-info" target="_blank">Bootstrap Videos</a>
                <a href="https://www.w3schools.com/bootstrap/bootstrap_ver.asp" class="btn btn-secondary"
                    target="_blank">Bootstrap W3Schools</a>
            </div>
        </div>
    </div>
        <br/>
        <hr/>
        <h3>Try to scroll this area, and see how the sidenav sticks to the page</h3>
        <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25%
            width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
        <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too long
            (for example if it has over 50 links inside of it).</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZfRn9VJzdGA" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>
        <hr/>
        <br/>
        <h3>Videos</h3>
        <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25%
            width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
        <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too
            long (for example if it has over 50 links inside of it).</p>
        <br/>
        <div class="container">
            <div class="card-deck">
                <div class="card">
                    <div class="card-body">
                        <div class="embed-responsive embed-responsive-16by9">
          
                        <iframe width="320" height="215" src="https://www.youtube.com/embed/9cKsq14Kfsw"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                        <h5 class="card-title">Bootstrap Website</h5>
                        <p class="card-text">Responsive Bootstrap Website Start To Finish with Bootstrap 4, HTML5 &
                            CSS3.</p>
                        <hr/>
                        <a class="btn btn-success" href="https://youtu.be/9cKsq14Kfsw" role="button"
                            target="_blank">Watch video Here</a>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe width="320" height="215" src="https://www.youtube.com/embed/QAgrHLtG1Yk"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                        <h5 class="card-title">Bootstrap Tutorial</h5>
                        <p class="card-text">Bootstrap 4 Tutorial #1.
                        </p>
                        <hr/>
                        <a class="btn btn-success"
                            href="https://www.youtube.com/watch?v=QAgrHLtG1Yk&list=PL4cUxeGkcC9jE_cGvLLC60C_PeF_24pvv"
                            role="button" target="_blank">Watch Video Here</a>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe width="320" height="215" src="https://www.youtube.com/embed/tLANGA8f6qI"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                        <h5 class="card-title">Free Template Examples</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional
                            content.</p>
                        <hr/>
                        <a class="btn btn-success" href="https://www.youtube.com/watch?v=tLANGA8f6qI" role="button"
                            target="_blank">Watch Video Here</a>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <div class="additional">
            <h3>More Videos</h3>
            <p>Build A Responsive Bootstrap Website A Full Screen Image Slider using Bootstrap 4, HTML5 & CSS3</p><a
                href="https://www.youtube.com/watch?v=Thw33qJ5DXo">Watch Here</a>
        </div>
        <br/>
        </div>
        
    );
};

export default Header;