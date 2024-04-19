import React,{useState} from 'react'
import AdminFindJobsDesign from '@/shared/design/admin-section/admin-find-job/admin-find-jobs.design'
import jobOne from "@/assets/job-one.png"

const AdminFindJobsPage = () => {
  const [adminJobList, setAdminJobList] = useState([
    {
      "company": "Linear company",
      "jobTitle": "Software Engineer",
      "jobImage": `${jobOne}`,
      "isNewPost": "New Post",
      "jobLocation": "Brussels",
      "jobType": "Full Time",
      "jobPostDate": "29 min ago",
      "salaryRange": "50-55k",
      "jobDescription": "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
    },
    {
      "company": "Notion",
      "jobTitle": "Junior UI Designer",
      "jobImage": `${jobOne}`,
      "jobLocation": "Madrid",
      "jobType": "Full Time",
      "jobPostDate": "1 day ago",
      "salaryRange": "30k-32k",
      "jobDescription": "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."

    },
    {
      "company": "Spline studio",
      "jobTitle": "Technical Support Engineer",
      "jobImage": `${jobOne}`,
      // "isNewPost": "New Post",
      "jobLocation": "United States",
      "jobType": "Full Time",
      "jobPostDate": "1 day ago",
      "salaryRange": "50-55k",
      "jobDescription": "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."

    },
    {
      "company": "Raycast corp",
      "jobTitle": "Product Designer",
      "jobImage": `${jobOne}`,
      "isNewPost": "New Post",
      "jobLocation": "London",
      "jobType": "Full Time",
      "jobPostDate": "2 day ago",
      "salaryRange": "40-42k",
      "jobDescription": "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."

    },
  ]);

  return (
    <AdminFindJobsDesign adminJobList={adminJobList}/>
  )
}

export default AdminFindJobsPage