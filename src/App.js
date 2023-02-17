import { useRef } from "react";
import "./App.css";

import {
  manImg,
  scrollDownMouse,
  logo,
  vectorBack,
  vectorGreen,
  profile,
  textBackground,
  instagramIcon,
  twitterIcon,
  skyIcon,
  gitHubLogo,
} from "./assets";

function App() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }
  return (
    <>
      <div className="topNav">
        <img alt="logo" className="logo" src={logo} />
        <p className="icon">
          <i className="fa fa-bars"></i>
        </p>
        <div className="navBar">
          <p>Home</p>
          <p onClick={handleClick}>About me</p>
          <p onClick={() => window.scrollTo(0, 1580)}>Skills</p>
        </div>
      </div>
      <div className="greetingSection">
        <img className="manImg" alt="manImg" src={manImg} />
        <div className="icons">
     
          <img
            alt="skyIcon"
            className="iconItem"
            src={skyIcon}
            onClick={() =>
              window.open("https://join.skype.com/invite/r7tSRlW8D7QT")
            }
          />
          <img
            alt="instagramIcon"
            className="iconItem"
            src={instagramIcon}
            onClick={() => window.open("https://www.instagram.com/inori___k")}
          />
          <img alt="twitterIcon" className="iconItem" src={twitterIcon} />
          <img alt="linkedinIcon" className="iconItem" src={gitHubLogo} onClick={()=> {
            window.open("https://github.com/lolzni1")
          }}/>
        </div>
        <p className="welcome">Welcome to my portfolio</p>
        <p className="hi">Hi! I'm front-end </p>
        <p className="webdev">web developer</p>
        <div
          className="contactMe"
          onClick={() => window.open("https://qrco.de/bdiLNc")}
        >
          <p>CONTACT ME</p>
        </div>
        <img
          className="scrollDownMouse"
          alt="scrollDownMouse"
          src={scrollDownMouse}
        />
        <div className="aboutMeSection" id="aboutmeSection" >
          <p className="aboutMe" ref={ref}>About Me</p>
          <img alt="profile" className="profile" src={profile} />
          <img alt="vectorBack" className="vectorBack" src={vectorBack} />
          <img alt="vectorGreen" className="vectorGreen" src={vectorGreen} />
          <p className="ino">
            Hi, I'm Gantumur {"<You can call me Ino/>"}, a front-end web
            developer with two years of experience creating dynamic and engaging
            websites. I am skilled in HTML, CSS, JavaScript, and various
            frameworks such as React and MUI. Btw, this page has the mobile
            version, chekout please. If you're interested in working with me,
            don't hesitate to reach out.
          </p>
          <div className="cvBackground" onClick={()=> window.open('https://my.indeed.com/p/gantumurs-m6d2vhq')}>
            <p> Click to see CV </p>
          </div>
        </div>
        <div className="skillSection" >
          <img
            alt="textBackground"
            className="textBackground"
            src={textBackground}
          />
          <p className="title">Skills</p>
          <div className="skills">
            <ul className="coreSkills">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>REACT</li>
            </ul>
            <ul className="otherSkills">
              <li>RestAPI</li>
              <li>MUI</li>
              <li>Golang</li>
              <li>Hooks</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
