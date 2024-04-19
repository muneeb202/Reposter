

import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import './css/bootstrap.min.css';
import './css/bootstrap-icons.css';
import './css/templatemo-topic-listing.css';

import img1 from './images/topics/undraw_Remote_design_team_re_urdx.png'
import img2 from './images/topics/undraw_Redesign_feedback_re_jvm0.png'
import img3 from './images/topics/colleagues-working-cozy-office-medium-shot.png'
import investment from './images/topics/undraw_Finance_re_gnv2.png';
import investment2 from './images/businesswoman-using-tablet-analysis.jpg';
import adv from './images/topics/undraw_online_ad_re_ol62.png';
import video from './images/topics/undraw_Group_video_re_btu7.png';
import auto from './images/topics/undraw_viral_tweet_gndb.png';
import find from './images/topics/undraw_Compose_music_re_wpiw.png';
import hire from './images/topics/undraw_happy_music_g6wc.png';
import analyse from './images/topics/undraw_Podcast_audience_re_4i5q.png';
import graduate from './images/topics/undraw_Graduation_re_gthn.png';
import Profit from './images/topics/undraw_Educator_re_ju47.png'
// images/businesswoman-using-tablet-analysis-graph-company-finance-strategy-statistics-success-concept-planning-future-office-room.jpg
export default function Features() {
  const [activeTab, setActiveTab] = useState("design-tab-pane");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link href="./css/bootstrap.min.css" rel="stylesheet" />
        <link href="./css/bootstrap-icons.css" rel="stylesheet" />
        <link href="./css/templatemo-topic-listing.css" rel="stylesheet" />
      </Helmet>
      <div className="container-fluid">
        <div className="row">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "design-tab-pane" ? "active" : ""}`}
                id="design-tab"
                onClick={() => handleTabClick("design-tab-pane")}
              >
                Revenue & ROI
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "marketing-tab-pane" ? "active" : ""}`}
                id="marketing-tab"
                onClick={() => handleTabClick("marketing-tab-pane")}
              >
                Marketing
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "finance-tab-pane" ? "active" : ""}`}
                id="finance-tab"
                onClick={() => handleTabClick("finance-tab-pane")}
              >
                Finance
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "music-tab-pane" ? "active" : ""}`}
                id="music-tab"
                onClick={() => handleTabClick("music-tab-pane")}
              >
                Automation
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "education-tab-pane" ? "active" : ""}`}
                id="education-tab"
                onClick={() => handleTabClick("education-tab-pane")}
              >
                Sales
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tab-content" id="myTabContent">
              <div
                className={`tab-pane fade ${activeTab === "design-tab-pane" ? "show active" : ""}`}
                id="design-tab-pane"
                role="tabpanel"
                aria-labelledby="design-tab"
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
                className={`tab-pane fade ${activeTab === "marketing-tab-pane" ? "show active" : ""}`}
                id="marketing-tab-pane"
                role="tabpanel"
                aria-labelledby="marketing-tab"
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
                          src={adv}
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
                          src={video}
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
                            <h5 class="mb-2">Auto Tracking</h5>

                            <p class="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span class="badge bg-advertising rounded-pill ms-auto">
                            50
                          </span>
                        </div>

                        <img
                          src={auto}
                          class="custom-block-image img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`tab-pane fade ${activeTab === "finance-tab-pane" ? "show active" : ""}`}
                id="finance-tab-pane"
                role="tabpanel"
                aria-labelledby="finance-tab"
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
                          src={investment}
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
                          src={investment2}
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
                className={`tab-pane fade ${activeTab === "music-tab-pane" ? "show active" : ""}`}
                id="music-tab-pane"
                role="tabpanel"
                aria-labelledby="music-tab"
              >
                 <div class="row">
                  <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div class="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div class="d-flex">
                          <div>
                            <h5 class="mb-2">Find Best Match</h5>

                            <p class="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span class="badge bg-music rounded-pill ms-auto">
                            45
                          </span>
                        </div>

                        <img
                          src={find}
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
                            <h5 class="mb-2">Hire</h5>

                            <p class="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span class="badge bg-music rounded-pill ms-auto">
                            45
                          </span>
                        </div>

                        <img
                          src={hire}
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
                            <h5 class="mb-2">Analyse</h5>

                            <p class="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span class="badge bg-music rounded-pill ms-auto">
                            20
                          </span>
                        </div>

                        <img
                          src={analyse}
                          class="custom-block-image img-fluid"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`tab-pane fade ${activeTab === "education-tab-pane" ? "show active" : ""}`}
                id="education-tab-pane"
                role="tabpanel"
                aria-labelledby="education-tab"
              >
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12 mb-4 mb-lg-3">
                    <div class="custom-block bg-white shadow-lg">
                      <a href="topics-detail.html">
                        <div class="d-flex">
                          <div>
                            <h5 class="mb-2">Impression</h5>

                            <p class="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span class="badge bg-education rounded-pill ms-auto">
                            80
                          </span>
                        </div>

                        <img
                          src={graduate}
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
                            <h5 class="mb-2">Profit</h5>

                            <p class="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span class="badge bg-education rounded-pill ms-auto">
                            75
                          </span>
                        </div>
                        
                        <img
                          src={Profit}
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
