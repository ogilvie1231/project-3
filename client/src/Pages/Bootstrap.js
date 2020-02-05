import React from "react";
import Sidebar from "../components/Sidebar";
import CardHeader from "../components/Header/index";

function BootStrap(props) {
    return (
        <div>
            <br></br>
        <Sidebar/>
        <div style="margin-left:18%;margin-right:2%;padding:1px 16px;height:1000px;">
            <div class="card">
                <div class="card-header">
                    <h1 style={{textAlign: "center"}}>Bootstrap</h1>
                    <img src="assets/bootstrap-logo.png" class="titleimg">
                    </img>
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
        </div>
        <br>
        </br>
        <hr>
        </hr>
        <h3>Try to scroll this area, and see how the sidenav sticks to the page</h3>
        <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25%
            width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
        <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too long
            (for example if it has over 50 links inside of it).</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZfRn9VJzdGA" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br></br>
        <hr></hr>
        <br></br>
        <h3>Videos</h3>
        <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25%
            width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
        <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too
            long (for example if it has over 50 links inside of it).</p>
        <br></br>
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
                        <hr>
                            <a class="btn btn-success" href="https://youtu.be/9cKsq14Kfsw" role="button"
                                target="_blank">Watch video Here</a>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </hr>
                    </div>
                </div>
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
                <hr>
                    <a class="btn btn-success"
                        href="https://www.youtube.com/watch?v=QAgrHLtG1Yk&list=PL4cUxeGkcC9jE_cGvLLC60C_PeF_24pvv"
                        role="button" target="_blank">Watch Video Here</a>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </hr>
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
                    <hr>
                        <a class="btn btn-success" href="https://www.youtube.com/watch?v=tLANGA8f6qI" role="button"
                            target="_blank">Watch Video Here</a>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </hr>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <div class="additional">
            <h3>More Videos</h3>
            <p>Build A Responsive Bootstrap Website A Full Screen Image Slider using Bootstrap 4, HTML5 & CSS3</p><a
                href="https://www.youtube.com/watch?v=Thw33qJ5DXo">Watch Here</a>
        </div>
        <br></br>
        </div>
                            );
};

export default BootStrap;