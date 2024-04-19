import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Stepper, Step, StepLabel, Stack } from '@mui/material';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TimelineIcon from '@mui/icons-material/Timeline';
import "./stepprocess.scss";

const steps = [
  {
    label: 'Join Reposter',
    description: "Contact us with your requirements and we'll discuss available options with no pressure to proceed",
  },
  {
    label: 'Hire Creator/Reposter',
    description: 'We will provide advice and recommendations that match your requirements and goals',
  },
  {
    label: 'Track your Sale',
    description: 'Make your informed decision and we will take you smoothly through the reservation process',
  },
  {
    label: 'Watch your Brand Grow',
    description: "The journey doesn't end there and will be at hand to provide continual ongoing support",
  },
];

function ColorlibStepIcon(props) {
  const { active, completed, icon } = props;

  const icons = {
    1: <AddCircleOutlineIcon style={{ fontSize: '50px', color: 'black' }} />,
    2: <AssignmentIndIcon style={{ fontSize: '50px', color: 'black' }} />,
    3: <TimelineIcon style={{ fontSize: '50px', color: 'black' }} />,
    4: <TrendingUpIcon style={{ fontSize: '50px', color: 'black' }} />,
  };

  return (
    <div style={{ border: active || completed ? '8px solid #770CF1' : '8px solid #ccc', borderRadius: '50%', padding: '10px' }}>
      {icons[icon]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

export default function StepProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrolledUp, setScrolledUp] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolledUp(true);
      } else {
        setScrolledUp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section style={{ margin: '30px 0px' }}>
      <div className={`stepper-main ${scrolledUp ? 'scrolled-up' : ''}`}>
        <Stack sx={{ width: '90%', marginLeft:"5%" }} spacing={4}>
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel StepIconComponent={ColorlibStepIcon} icon={index + 1}>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: activeStep >= index ? 'black' : 'lightgray' }}>
                    {step.label}
                  </h3>
                </StepLabel>
                <p style={{ paddingLeft: '50px', paddingRight: '50px', textAlign: 'center', color: activeStep >= index ? 'black' : 'lightgray' }}>
                  {step.description}
                </p>
              </Step>
            ))}
          </Stepper>
        </Stack>
        <span onClick={handleBack} className="arrow-left">
          <KeyboardArrowLeftOutlinedIcon />
        </span>
        <span className="arrow-right" onClick={handleNext}>
          <KeyboardArrowRightOutlinedIcon />
        </span>
      </div>
    </section>
  );
}
