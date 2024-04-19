import React, { useState, useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const ThirdChildAnimatedComponent = ({ item, index, animationValues }) => {
    const [counter, setCounter] = useState(false)
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById(`animatedComponent-${index}`);
            if (element) {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                setIsVisible(rect.top <= windowHeight);
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        const intervalId = setInterval(() => {
            setIsVisible(true);

            // Clear interval after fade-in
            clearInterval(intervalId);
        }, index * 1000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(intervalId);
        };
    }, [index]);



    return (
        <div key={index} style={{ margin: '10px 0 30px 0', }} className='main-average-section'>
            <img
                src={item.image}
                alt=""
                className={`average-section-img fade-container ${isVisible ? 'fade-in' : ''}`}
                id={`animatedComponent-${index}`}
            />
            <ScrollTrigger onEnter={() => setCounter(true)}>
                <div className="center-text-landing">
                    <h3 className="white-color">{item.title}</h3>
                    <h2
                        className="color-heading-landing marginB-state-o"
                    >
                        {counter &&
                            <>
                                {item.format === 'number' &&
                                    <CountUp start={item.start} end={item.end} duration={0.5                                                                                                    } delay={0.1} />
                                }
                                {item.format === 'percentage' &&
                                    <CountUp start={0} end={140} duration={0.5} delay={0.2} suffix="%" />
                                }
                                {item.format === 'millions' &&
                                    <CountUp start={0} end={50} duration={0.5} delay={0.3} suffix=" Millions" />
                                }
                                {item.format === 'bigNumber' &&
                                    <CountUp start={item.start} end={item.end} duration={0.5} delay={0.4} />
                                }
                            </>
                        }
                    </h2>
                </div>
            </ScrollTrigger>

        </div>
    )
}

export default ThirdChildAnimatedComponent