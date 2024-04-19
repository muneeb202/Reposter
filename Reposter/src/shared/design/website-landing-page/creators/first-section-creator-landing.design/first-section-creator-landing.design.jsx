import React, { useState } from 'react'
import "./first-section-creator-landing.design.scss";
import { useSpring, animated, config } from '@react-spring/web';
import * as materialModules from "@/shared/modules/material";
import CountUp from 'react-countup';

import creatorGirlImg from "@/assets/girl-img-creator.jpg";
import avatarImg from "@/assets/avatar.png";

const FirstSectionCreatorLandingDesign = () => {
  const [currentView, setCurrentView] = useState("reposter")

  const [stateList, setStateList] = useState([
    {
      stateNumber: "20%",
      stateTitle: "Commision",
      start: 0,
      end: 20,
      format: "percentage"

    },
    {
      stateNumber: "2000$",
      stateTitle: "Retainer",
      start: 0,
      end: 2000,
      format: "dollar"

    },
    {
      stateNumber: "80M",
      stateTitle: "Views",
      start: 0,
      end: 80,
      format: "millions"
    },
    {
      stateNumber: "65k+",
      stateTitle: "Earned",
      start: 0,
      end: 65,
      format: "earned"
    },
  ]);

  const handleChageText = (changeText) => {
    setCurrentView(changeText)
  }

  const slideAnimation = useSpring({
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
    from: { opacity: 0, transform: 'translate3d(0, -50px, 0)' },
    config: { duration: 1000 },
  });

  return (
    <div className="main-first-section-creator-container">
      <animated.div className="first-side-creator-column"
        style={{
          ...slideAnimation,
        }}
      >
        <h1 className="main-first-section-creator-heading">
          Turn Your Creativity Into Cash – Shine Bright with Reposter
        </h1>
        <p className="main-first-section-creator-description">
          Craft content, share stories, and watch your bank account grow.
        </p>
        <div className="btn-text-section">
          <materialModules.Button className="see-dashboard-btn">See Dashboard</materialModules.Button>
          {
            currentView === "creator" ?

              <h3 className="heading-c-r active-text-class"
                onClick={() => handleChageText('creator')}>CREATOR</h3>

              :
              <h3 className="heading-c-r"
                onClick={() => handleChageText('creator')}>CREATOR</h3>

          }
          <hr />
          {
            currentView === "reposter" ?

              <h3 className="heading-c-r active-text-class"
                onClick={() => handleChageText('reposter')}>REPOSTER</h3>
              :
              <h3 className="heading-c-r"
                onClick={() => handleChageText('reposter')}>REPOSTER</h3>

          }
        </div>
      </animated.div>

      <div className="images-with-state-section-creator">
        <img src={creatorGirlImg} className='creator-background-img-container' alt="" />

        <div className="container-of-card-f-section-second-c" style={{}}>
          <materialModules.Card className='first-section-card-state-creator'>
            <materialModules.CardHeader
              avatar={
                <materialModules.Avatar>
                  <img src={avatarImg} alt="" />
                </materialModules.Avatar>
              }
              title={<materialModules.Typography className="customTitle">Jennifer William</materialModules.Typography>}
              subheader={<materialModules.Typography className="customSubheader">Entry Level</materialModules.Typography>}
            />
            <materialModules.CardContent>
              <div className='show-card-state-creator'>
                {stateList.map((state) => {
                  return (
                    <div>
                      <>
                        {state.format === 'percentage' &&
                          <CountUp className="show-card-state-heading" start={state.start} end={state.end} duration={0.8} delay={1} suffix='%' />
                        }
                        {state.format === 'dollar' &&
                          <CountUp className="show-card-state-heading" start={0} end={140} duration={0.8} delay={1.1} suffix="$" />
                        }
                        {state.format === 'millions' &&
                          <CountUp className="show-card-state-heading" start={0} end={50} duration={0.8} delay={1.2} suffix="M" />
                        }
                        {state.format === 'earned' &&
                          <CountUp className="show-card-state-heading" start={state.start} end={state.end} duration={0.8} delay={1.5} suffix="k+" />
                        }
                      </>
                      {/* <h3 className="show-card-state-heading">{state.stateNumber}</h3> */}
                      <p className="show-card-state-paragraph">{state.stateTitle}</p>
                    </div>
                  )
                })}
              </div>
            </materialModules.CardContent>
          </materialModules.Card>
        </div>
      </div>
    </div>
  )
}

export default FirstSectionCreatorLandingDesign