import React, { useEffect, useRef } from 'react'
import '../../styles/intro.scss'
import { init } from 'ityped'

const Intro = () => {
  const job = useRef();

  useEffect(() => {
    init(job.current, {
      strings: ["Front-End Developer", "React JS Developer", "React Native Developer"],
      backSpeed: 50,
      backDelay: 1500,
      showCursor: true,
      autoStart:true,
      delay:75,
      loop:true
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Arun Jojo</h1>
          <h3>
            <React.StrictMode>
              <span ref={job}></span>
            </React.StrictMode>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
