import React, { useState } from 'react';
import './admin-find-jobs.scss'
import ReactPaginate from 'react-paginate';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import * as materialModules from "@/shared/modules/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import jobOne from "@/assets/job-one.png"
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const AdminFindJobsDesign = ({ adminJobList }) => {

  return (
    <>
      <div className="flex-container-admin-find-jobs">
        {/* <div> */}
        <h1 className='heading-color' style={{
          display: "flex", margin: "10px 60px", fontSize: "40px"
        }}>Find your new Job today</h1>

        <div style={{
          margin: "25px 0", display: "flex", justifyContent: "end", width: "81.5%"

        }}>

          <div
            style={{
              border: "2px solid #770CF1",
              borderRadius: "3px", display: "flex", alignItems: "center", padding: "10px",
              width: "41%", justifyContent: "space-between", marginLeft: '0',
            }}
          >
            <SearchSharpIcon style={{ color: "#14141480" }} />

            <input
              type="text"
              placeholder="What position are you looking for ?"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                background: "transparent",
                // color: "#FFFFFF",
                '::placeholder': { color: "red !important" }
              }}
            />
          </div>
          <div
            style={{
              border: "2px solid #770CF1",
              borderRadius: "3px", display: "flex", alignItems: "center", padding: "10px",
              width: "25%", justifyContent: "space-between", marginLeft: '0',
            }}
          >
            <PlaceIcon style={{ color: "#14141480" }} />

            <input
              type="text"
              placeholder="Location"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                background: "transparent",
                // color: "#FFFFFF",
                '::placeholder': { color: "red !important" }
              }}
            />
          </div>
          {/* <div > */}
          <materialModules.Button className="search-btn">Search job</materialModules.Button>
          {/* </div> */}
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "10px" }}>
          <div className="col-6-admin-find-jobs">
            <div style={{ border: "3px solid #770cf1", borderRadius: "10px", marginBottom: "10px" }}>
              <h3 style={{
                margin: "10px 30px",
              }}>Filters</h3>

              <div className="filter-section">
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">Location</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel className='radio-c' value="female" control={<Radio />} label="Near Me" />
                    <FormControlLabel className='radio-c' value="male" control={<Radio />} label="Remote Job" />
                    <FormControlLabel className='radio-c' value="other" control={<Radio />} label="Exact location" />
                    <FormControlLabel className='radio-c' value="female" control={<Radio />} label="Within 15 km" />
                    <FormControlLabel className='radio-c' value="male" control={<Radio />} label="Within 30 km" />
                    <FormControlLabel className='radio-c' value="other" control={<Radio />} label="Within 50 km" />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="filter-section">
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">Salary</FormLabel>
                  <div style={{ display: "flex",padding:"10px 0" }}>
                    <p className="filter-on-job-nature">Hourly</p>
                    <p className="filter-on-job-nature">Monthly</p>
                    <p className="filter-on-job-nature">Yearly</p>
                  </div>

                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel className='radio-c' value="female" control={<Radio />} label="Any" />
                    <FormControlLabel className='radio-c' value="male" control={<Radio />} label="> 30000k" />
                    <FormControlLabel className='radio-c' value="other" control={<Radio />} label="> 50000k" />
                    <FormControlLabel className='radio-c' value="female" control={<Radio />} label="> 80000k" />
                    <FormControlLabel className='radio-c' value="male" control={<Radio />} label="> 100000k" />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="filter-section">
                {/* <h4>Location</h4> */}
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">Date of posting</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel className='radio-c' value="female" control={<Radio />} label="All time" />
                    <FormControlLabel className='radio-c' value="male" control={<Radio />} label="Last 24 hours" />
                    <FormControlLabel className='radio-c' value="other" control={<Radio />} label="Last 3 days" />
                    <FormControlLabel className='radio-c' value="female" control={<Radio />} label="Last 7 days" />

                  </RadioGroup>
                </FormControl>
              </div>
              <div className="filter-section">
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">Work experience</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel className='radio-c' value="female" control={<Radio />} label="Any experience" />
                    <FormControlLabel className='radio-c' value="male" control={<Radio />} label="Intership" />
                    <FormControlLabel className='radio-c' value="other" control={<Radio />} label="Work remotely" />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="filter-section">
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">Type of employment</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel className='radio-c' value="female" control={<Radio />} label="Full-time" />
                    <FormControlLabel className='radio-c' value="male" control={<Radio />} label="Temporary" />
                    <FormControlLabel className='radio-c' value="other" control={<Radio />} label="Part-time" />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="col-8-admin-find-jobs">
            <div className="admin-start-job-section">

              <h2 className='heading-color'>500 Jobs</h2>
              <div style={{ display: "flex", width: "30%", border: "2px solid #770cf1", padding: "10px" }} >
                <FilterListIcon />
                <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                  <h5 style={{ padding: "3px", color: "#141414" }} >Filter By</h5>
                  <ArrowDropDownSharpIcon />
                </div>

              </div>
            </div>
            {adminJobList.map((job) => {
              return (
                <div style={{ border: "3px solid #770cf1", borderRadius: "10px", margin: "30px 0", width: "80%" }}>
                  <div style={{ display: "flex", margin: "10px" }}>
                    <img src={jobOne} alt="" style={{ height: "72px", width: "72px" }} />
                    <div style={{ display: 'flex' }}>
                      <div style={{ paddingLeft: "15px" }}>
                        <h6 style={{ margin: "5px" }}>{job.company}</h6>
                        <div style={{ display: "flex" }}>
                          <h4 style={{ margin: "5px" }}>{job.jobTitle}</h4>
                          {
                            job.isNewPost && (
                              <h6 style={{ color: "#7D5AE2", background: "#7D5AE21A", margin: "12px 10px" }}>{job.isNewPost}</h6>
                            )
                          }
                        </div>
                        <div style={{ display: "flex", gap: "25px", paddingTop: "5px" }}>
                          <div style={{ display: "flex", gap: "5px" }}>
                            <PlaceIcon style={{ color: "#141414B2" }} />
                            <h6 style={{ paddingTop: "5px", color: "#141414B2" }}>{job.jobLocation} .</h6>
                          </div>
                          <div style={{ display: "flex", gap: "5px" }}>
                            <AccessTimeIcon style={{ color: "#141414B2" }} />
                            <h6 style={{ paddingTop: "5px", color: "#141414B2" }}>{job.jobType} .</h6>
                          </div>
                          <div style={{ display: "flex", gap: "5px" }}>
                            <AttachMoneyIcon style={{ color: "#141414B2" }} />
                            <h6 style={{ paddingTop: "5px", color: "#141414B2" }}>{job.salaryRange} .</h6>
                          </div>
                          <div style={{ display: "flex", gap: "5px" }}>
                            <CalendarTodayIcon style={{ color: "#141414B2" }} />
                            <h6 style={{ paddingTop: "5px", color: "#141414B2" }}>{job.jobPostDate}</h6>
                          </div>
                        </div>
                        <div>
                          <p style={{ color: "#141414B2", textDecoration: "justify", marginTop: "15px", fontSize: "11px" }}>
                            {job.jobDescription}</p>
                        </div>
                      </div>
                      <DeleteForeverIcon style={{ color: "#EB5757", fontSize: "26px" }} />
                    </div>
                  </div>
                </div>
              )
            })}
            <ReactPaginate
              nextLabel=">"
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={5}
              previousLabel="<"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>


        {/* {<div style={{
          display: "flex", justifyContent: "center", margin: '15px', color: "#333333"
        }}> */}


        {/* </div>} */}
      </div>
      {/* </div> */}
    </>
  );
}

export default AdminFindJobsDesign