import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import Trending from "../../../pages/Shered/Trending/Trending";
import "./BookingTourPlan.css";

const BookngTourPlan = () => {
  return (
    <div className="container mt-5 mb-5 bookingTour-plan">
      <div className="d-flex align-items-center mb-4">
        <span className="me-4 bookingTour-plan-icon-bus">
          <FontAwesomeIcon icon={faBus} />
        </span>
        <Trending title={"Tour Plan"} />
      </div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Day 1: Departure
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                Morbi ut nisl at metus molestie mollis semper a magna. Ut
                pellentesque tempus risus, ut dignissim arcu dictum ut. Etiam
                quis turpis sodales, tempor ex quis, facilisis purus. Nullam
                tempus turpis vel tortor varius lacinia. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Donec risus ex, semper sed rhoncus ut, bibendum a
                ligula. Morbi at enim vel ipsum euismod suscipit eget sed
                ligula. Quisque id aliquet enim, quis tempus risus. Etiam
                hendrerit finibus elit eu vulputate. Phasellus faucibus metus
                sit amet blandit bibendum. Nulla facilisi. Suspendisse potenti.
                Nullam a ipsum iaculis, imperdiet mauris eu, malesuada dui.
                Vestibulum iaculis congue enim, ac sodales felis rhoncus vitae.
                Quisque molestie mi mi, vestibulum consequat mi ornare ut.
                Suspendisse faucibus nec odio eu blandit.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Day 2: Adventure Beggins
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                Donec facilisis nibh sed erat condimentum, id eleifend justo
                rutrum. Praesent vehicula lectus vitae metus scelerisque, id
                efficitur erat tincidunt. Suspendisse varius tortor nisi, vel
                mattis velit auctor ac. Duis sodales velit id dignissim auctor.
                Nunc lorem augue, sollicitudin vitae quam at, suscipit mattis
                lectus. Vestibulum vel consequat justo. Donec congue sagittis
                diam vitae aliquam. Maecenas egestas turpis nibh, sed pulvinar
                nunc vestibulum sed. Donec et odio quis magna aliquam lacinia.
                Nulla sapien diam, sagittis sit amet accumsan eu, convallis sed
                augue. Phasellus vitae sem eget nisl pretium malesuada.
                Curabitur et tincidunt nunc. Praesent porta, massa sit amet
                faucibus eleifend, justo mauris pulvinar justo, eget faucibus
                erat augue nec ex. Nullam suscipit libero elit, eu auctor elit
                viverra nec. Etiam tempor euismod blandit.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Day 3: Historical Tour
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                Cras non ligula aliquet, mattis velit nec, molestie nunc. Donec
                vulputate nisi eget leo suscipit, vitae gravida quam
                consectetur. Ut luctus imperdiet erat, vel volutpat nisl
                tristique suscipit. Aliquam ut condimentum justo, eu tristique
                enim. Donec accumsan in justo sed convallis. Vivamus luctus
                purus id erat euismod, at lobortis nibh commodo. Quisque
                ultrices erat eu nunc tristique pharetra. Fusce rhoncus, turpis
                vitae scelerisque sodales, nibh velit dignissim magna, sit amet
                luctus dui purus nec purus. Nullam semper rutrum lobortis.
                Vivamus ac urna nec quam facilisis ullamcorper a id quam.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Day 4: City Tour
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                Duis a varius erat. Aliquam gravida ac magna vitae cursus.
                Pellentesque et neque nulla. Cras nec leo convallis nisl
                pharetra lobortis. Aliquam interdum consequat dictum. Quisque
                iaculis lorem et fermentum efficitur. Ut et auctor est. Nam nec
                erat semper, elementum velit vitae, euismod nisi. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Donec sit amet tellus odio. Cras metus
                lacus, molestie id nisl vitae, blandit lobortis nisi. Proin sed
                ullamcorper est. Proin viverra augue massa, at consectetur ex
                euismod porttitor. Morbi at semper velit.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Day 5: Return
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                Nam accumsan ipsum ac aliquet cursus. In eget lobortis enim. In
                condimentum, odio sed mattis lacinia, erat tellus lacinia ipsum,
                eu lobortis lectus ipsum ac dolor. Aliquam tempus condimentum
                velit, eu auctor mi elementum id. Fusce dolor justo, feugiat et
                malesuada vel, pulvinar ut magna. Donec sed tellus quis turpis
                aliquet interdum. In hac habitasse platea dictumst. In nec
                tempor leo. Morbi a convallis nisi. Quisque porta ullamcorper mi
                vitae vestibulum. Aenean eget condimentum tellus. Mauris sit
                amet aliquet orci. Etiam quis sem laoreet tellus iaculis
                vulputate. Integer vitae sodales leo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookngTourPlan;
