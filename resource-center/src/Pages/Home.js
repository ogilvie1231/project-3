import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

function home() {
  return (
    <div>
      <div >
        <div className="jumbotron container">
          <h1 class="display-4 text-align-center">Hello, world!</h1>
          <p class="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr class="my-4"></hr>
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default home;
