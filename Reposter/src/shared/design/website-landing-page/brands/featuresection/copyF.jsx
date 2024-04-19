import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import './css/bootstrap.min.css';
import './css/bootstrap-icons.css';
import './css/templatemo-topic-listing.css';

import "./js/jquery.min.js"
import "./js/bootstrap.bundle.min.js"
import "./js/jquery.sticky.js"
import "./js/click-scroll.js"
import "./js/custom.js"

import img1 from './images/topics/undraw_Remote_design_team_re_urdx.png'
import img2 from './images/topics/undraw_Redesign_feedback_re_jvm0.png'
import img3 from './images/topics/colleagues-working-cozy-office-medium-shot.png'
export default function Features() {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="description" content />
        <meta name="author" content />

        

        
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Open+Sans&display=swap"
            rel="stylesheet"/>

        <link href="./css/bootstrap.min.css" rel="stylesheet"/>

        <link href="./css/bootstrap-icons.css" rel="stylesheet"/>

        <link href="./css/templatemo-topic-listing.css" rel="stylesheet"/>
      </Helmet>
      <div class="container-fluid">
        <div class="row">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="design-tab"
                data-bs-toggle="tab"
                data-bs-target="#design-tab-pane"
                type="button"
                role="tab"
                aria-controls="design-tab-pane"
                aria-selected="true"
              >
                Revenue & ROI
              </button>
            </li>

            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="marketing-tab"
                data-bs-toggle="tab"
                data-bs-target="#marketing-tab-pane"
                type="button"
                role="tab"
                aria-controls="marketing-tab-pane"
                aria-selected="false"
              >
                Marketing
              </button>
            </li>

            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="finance-tab"
                data-bs-toggle="tab"
                data-bs-target="#finance-tab-pane"
                type="button"
                role="tab"
                aria-controls="finance-tab-pane"
                aria-selected="false"
              >
                Finance
              </button>
            </li>

            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="music-tab"
                data-bs-toggle="tab"
                data-bs-target="#music-tab-pane"
                type="button"
                role="tab"
                aria-controls="music-tab-pane"
                aria-selected="false"
              >
                Automation
              </button>
            </li>

            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="education-tab"
                data-bs-toggle="tab"
                data-bs-target="#education-tab-pane"
                type="button"
                role="tab"
                aria-controls="education-tab-pane"
                aria-selected="false"
              >
                Sales
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="design-tab-pane"
                role="tabpanel"
                aria-labelledby="design-tab"
                tabindex="0"
              >
                <div class="row">
                  <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                    <div class="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div class="d-flex">
                          <div>
                            <h5 class="mb-2">Real Time Analysis</h5>

                            <p class="mb-0">
                              Analyse your brand growth with our interative dashboard
                            </p>
                          </div>

                          <span class="badge bg-design rounded-pill ms-auto">
                            <></>
                          </span>
                        </div>

                        <img
                        src={img1}
                          // src="./images/topics/undraw_Remote_design_team_re_urdx.png"
                          class="custom-block-image img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                    <div class="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div class="d-flex">
                          <div>
                            <h5 class="mb-2">Interaction Leaderboard</h5>

                            <p class="mb-0">
                              Our dashboard large number of Stats to track sales using UTMs
                            </p>
                          </div>

                          <span class="badge bg-design rounded-pill ms-auto">
                            
                          </span>
                        </div>

                        <img
                          src={img2}
                          class="custom-block-image img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 col-12">
                    <div class="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div class="d-flex">
                          <div>
                            <h5 class="mb-2">Customizable Report</h5>

                            <p class="mb-0">
                              Grow by anaylsing report of budget and sales
                            </p>
                          </div>

                          <span class="badge bg-design rounded-pill ms-auto">
                            
                          </span>
                        </div>

                        <img
                          src={img3}
                          class="custom-block-image img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="marketing-tab-pane"
                role="tabpanel"
                aria-labelledby="marketing-tab"
                tabindex="0"
              >
                <div class="row">
                  <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div class="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div class="d-flex">
                          <div>
                            <h5 class="mb-2">Advertising</h5>

                            <p class="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span class="badge bg-advertising rounded-pill ms-auto">
                            30
                          </span>
                        </div>

                        <img
                          src="images/topics/undraw_online_ad_re_ol62.png"
                          class="custom-block-image img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div class="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div class="d-flex">
                          <div>
                            <h5 class="mb-2">Video Content</h5>

                            <p class="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span class="badge bg-advertising rounded-pill ms-auto">
                            65
                          </span>
                        </div>

                        <img
                          src="images/topics/undraw_Group_video_re_btu7.png"
                          class="custom-block-image img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 col-12">
                    <div class="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div class="d-flex">
                          <div>
                            <h5 class="mb-2">Viral Tweet</h5>

                            <p class="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span class="badge bg-advertising rounded-pill ms-auto">
                            50
                          </span>
                        </div>

                        <img
                          src="images/topics/undraw_viral_tweet_gndb.png"
                          class="custom-block-image img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="finance-tab-pane"
                role="tabpanel"
                aria-labelledby="finance-tab"
                tabindex="0"
              >
                {" "}
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12 mb-4 mb-lg-0">
                    <div class="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div class="d-flex">
                          <div>
                            <h5 class="mb-2">Investment</h5>

                            <p class="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span class="badge bg-finance rounded-pill ms-auto">
                            30
                          </span>
                        </div>

                        <img
                          src="images/topics/undraw_Finance_re_gnv2.png"
                          class="custom-block-image img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="custom-block custom-block-overlay">
                      <div class="d-flex flex-column h-100">
                        <img
                          src="images/businesswoman-using-tablet-analysis-graph-company-finance-strategy-statistics-success-concept-planning-future-office-room.jpg"
                          class="custom-block-image img-fluid"
                          alt
                        />

                        <div class="custom-block-overlay-text d-flex">
                          <div>
                            <h5 class="text-white mb-2">Finance</h5>

                            <p class="text-white">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Sint animi necessitatibus
                              aperiam repudiandae nam omnis
                            </p>

                            <a
                              href="topics-detail.html"
                              class="btn custom-btn mt-2 mt-lg-3"
                            >
                              Learn More
                            </a>
                          </div>

                          <span class="badge bg-finance rounded-pill ms-auto">
                            25
                          </span>
                        </div>

                        <div class="social-share d-flex">
                          <p class="text-white me-4">Share:</p>

                          <ul class="social-icon">
                            <li class="social-icon-item">
                              <a
                                href="#"
                                class="social-icon-link bi-twitter"
                              ></a>
                            </li>

                            <li class="social-icon-item">
                              <a
                                href="#"
                                class="social-icon-link bi-facebook"
                              ></a>
                            </li>

                            <li class="social-icon-item">
                              <a
                                href="#"
                                class="social-icon-link bi-pinterest"
                              ></a>
                            </li>
                          </ul>

                          <a
                            href="#"
                            class="custom-icon bi-bookmark ms-auto"
                          ></a>
                        </div>

                        <div class="section-overlay"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="music-tab-pane"
                role="tabpanel"
                aria-labelledby="music-tab"
                tabindex="0"
              >
                <div class="row">
                  <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div class="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div class="d-flex">
                          <div>
                            <h5 class="mb-2">Composing Song</h5>

                            <p class="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span class="badge bg-music rounded-pill ms-auto">
                            45
                          </span>
                        </div>

                        <img
                          src="images/topics/undraw_Compose_music_re_wpiw.png"
                          class="custom-block-image img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div class="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div class="d-flex">
                          <div>
                            <h5 class="mb-2">Online Music</h5>

                            <p class="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span class="badge bg-music rounded-pill ms-auto">
                            45
                          </span>
                        </div>

                        <img
                          src="images/topics/undraw_happy_music_g6wc.png"
                          class="custom-block-image img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 col-12">
                    <div class="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div class="d-flex">
                          <div>
                            <h5 class="mb-2">Podcast</h5>

                            <p class="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span class="badge bg-music rounded-pill ms-auto">
                            20
                          </span>
                        </div>

                        <img
                          src="images/topics/undraw_Podcast_audience_re_4i5q.png"
                          class="custom-block-image img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="education-tab-pane"
                role="tabpanel"
                aria-labelledby="education-tab"
                tabindex="0"
              >
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12 mb-4 mb-lg-3">
                    <div class="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div class="d-flex">
                          <div>
                            <h5 class="mb-2">Graduation</h5>

                            <p class="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span class="badge bg-education rounded-pill ms-auto">
                            80
                          </span>
                        </div>

                        <img
                          src="images/topics/undraw_Graduation_re_gthn.png"
                          class="custom-block-image img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div class="d-flex">
                          <div>
                            <h5 class="mb-2">Educator</h5>

                            <p class="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span class="badge bg-education rounded-pill ms-auto">
                            75
                          </span>
                        </div>

                        <img
                          src="images/topics/undraw_Educator_re_ju47.png"
                          class="custom-block-image img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
