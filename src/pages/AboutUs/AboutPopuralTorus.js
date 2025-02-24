import React from "react";
import Trending from "../Shered/Trending/Trending";
import AboutUs3 from '../../images/aboutUs3.webp'

const AboutPopuralTorus = () => {
  return (
    <div className="container aboutPoruralTours">
      <div className="row aboutPoruralToursRow g-4">
        <div className="col-lg-6">
          <img
            src={AboutUs3}
            className="w-100 h-100 img me-lg-4"
            alt=""
          />
        </div>
        <div className="col-lg-6">
          <div className="ms-lg-3">
            <Trending title={"Popular Tours"} subtitle={"Our Most"} />
            <h4>
              Si elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam
              invenire iracundia vim.
            </h4>
            <div className="mt-4 mb-4">
              <h5>Countryside</h5>
              <div class="progress">
                <div
                  class="progress-bar about-progress"
                  role="progressbar"
                  aria-valuenow="88"
                  style={{ width: "88%" }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  88%
                </div>
              </div>
            </div>
            <div className="mt-4 mb-4">
              <h5>Vineyard</h5>
              <div class="progress">
                <div
                  class="progress-bar about-progress"
                  role="progressbar"
                  aria-valuenow="93"
                  style={{ width: "93%" }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  93%
                </div>
              </div>
            </div>
            <div className="mt-4 mb-4">
              <h5>Wine Tasting</h5>
              <div class="progress">
                <div
                  class="progress-bar about-progress"
                  role="progressbar"
                  aria-valuenow="79"
                  style={{ width: "79%" }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  79%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPopuralTorus;
