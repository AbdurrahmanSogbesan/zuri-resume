import "./App.css";
import Subtitle from "./components/Subtitle";
import Text from "./components/Text";
import SkillBar from "react-skillbars";
import ContactDetail from "./components/ContactDetail";
import Timeline from "./components/Timeline";
import { useState } from "react";
import Hobbies from "./components/Hobbies";
import SoccerGIF from "../src/images/soccer.gif";
import MusicGIF from "../src/images/music.gif";
import GameGIF from "../src/images/game.gif";

function App() {
  const [resumeMode, setResumeMode] = useState(true);
  const skills = [
    { type: "HTML", level: 85 },
    { type: "CSS", level: 80 },
    { type: "Javascript", level: 75 },
    { type: "ReactJS", level: 70 },
    { type: "Git", level: 70 },
    { type: "Typescript", level: 60 },
  ];

  const colors = {
    bar: "#3498db",
    title: {
      text: "white",
      background: "dodgerblue",
    },
  };

  const hobbies = [
    {
      name: "Sports",
      description:
        "I enjoy playing and watching various sports, the most of which is football.",
      image: SoccerGIF,
    },
    {
      name: "Music",
      description:
        "Music is life. Life is music. I listen to music quite a lot, as it relaxes me.",
      image: MusicGIF,
    },
    {
      name: "Gaming",
      description:
        "I've always enjoyed playing games. I guess I just stuck with it.",
      image: GameGIF,
    },
  ];

  const contactDetails = [
    {
      title: "Phone",
      content: "+2348184041848",
      icon: "phone",
    },
    {
      title: "Email",
      content: "abdurrahman0803@gmail.com",
      icon: "mail",
    },
    {
      title: "Address",
      content: "26 Kaltungo Street, Garki 2, Abuja",
      icon: "address",
    },
    {
      title: "Github",
      href: "https://github.com/AbdurrahmanSogbesan",
      link: "AbdurrahmanSogbesan",
      icon: "github",
    },
  ];

  const rightContents = [
    {
      title: "Career Objective",
      text: "Front End Developer with a passion for creating intuitive, dynamic user experiences using brilliant UI effects and animations. My end goal for every project is to deliver a resilient, scalable, and secure web app that delights end-users",
    },
    {
      title: "Education",
      timeline: [
        {
          date: "2019 - Present",
          name: "University of Lagos, Lagos — Bachelor's Degree",
          content: "Bachelors of Science - Computer Science - 4.4 CGPA",
        },
      ],
    },
    {
      title: "Experience",
      timeline: [
        {
          date: "01 - 2022 - Present",
          name: "Pramie Technologies — Front End Software Developer",
          content:
            "I built the web components of a virtual office assistant software with a dedicated team of front end and back end developers,integrated APIs for pages and authentication flows on a NextJS web application and worked on navigation bug fixes on an existing SaaS website.",
        },
        {
          date: "12 - 2021 - Present",
          name: "Freelance — Front End Software Developer",
          content:
            "Built a portfolio site, integrating real-time CRM using firebase with GatsbyJS. Created fully functional, mobile-responsive web applications.Implemented authentication on an open-source watermarking tool built with React.Built a simple carts page with React and Formspree for a vendor of drinks to enable real-time notifications on customer orders.",
        },
        {
          date: "10 - 2021 - 12 - 2021",
          name: "Side hustle Internship — Front End Software Developer",
          content:
            "Collaborated with sub-teams of developers and designers to build functional and scalable web apps.",
        },
      ],
    },
  ];

  const renderTimelines = (timelines) => {
    return timelines.map((timeline) => (
      <Timeline
        date={timeline.date}
        name={timeline.name}
        content={timeline.content}
      />
    ));
  };

  const renderResume = () => {
    return (
      <>
        <div className="leftSection">
          <div className="introSection">
            <Text
              text="Abdurrahman Sogbesan"
              fontSize={30}
              fontWeight="bold"
              textAlign="center"
            />
            <Text
              text="Front End Developer"
              fontSize={20}
              fontWeight="normal"
              textAlign="center"
            />
          </div>
          <img
            className="image"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
            alt="My face"
          />
          <div className="skillsSection">
            <Subtitle text="Professional Skills" />
            <SkillBar
              skills={skills}
              height={22}
              colors={colors}
              animationDelay={0}
              animationDuration={2000}
            />
          </div>
          <div className="contactSection">
            <Subtitle text="Contact Information" />
            {contactDetails.map((contact, index) => {
              return (
                <ContactDetail
                  key={index}
                  title={contact.title}
                  icon={contact.icon}
                  content={contact.content}
                  href={contact.href}
                  link={contact.link}
                />
              );
            })}
          </div>
        </div>
        <div className="rightSection">
          <ul>
            {rightContents.map((content) => (
              <li className="rightContent">
                <Subtitle fontSize={25} text={content.title} />
                {content.text ? <Text text={content.text} /> : null}
                {content.timeline ? renderTimelines(content.timeline) : null}
              </li>
            ))}
            <li className="rightContent">
              <Subtitle text="Hobbies" fontSize={25} />
              <ul className="hobbyList">
                {hobbies.map((hobby, index) => (
                  <li key={index}>
                    <Hobbies
                      name={hobby.name}
                      description={hobby.description}
                      image={hobby.image}
                    />
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </>
    );
  };

  const renderLetter = () => (
    <div className="coverLetter">
      <Text
        text="Application for the role of Frontend Developer"
        textAlign="center"
        fontSize={25}
        fontWeight="bold"
      />
      <br />
      <Text text="Dear Hiring Manager," fontSize={20} />
      <br />
      <Text
        text="As a passionate Developer and long-time fan of this company, I was elated to see an opening for a Front End Web Developer role. I have experience in HTML, CSS and JavaScript(React, Vue). Combined with my recent internship in front-end web development, I am confident I have the skills to help this company succeed."
        fontSize={20}
        lineHeight={25}
      />
      <br />
      <Text
        text="During my internship with Pramie Technologies, I gained hands-on experience coding websites and applications. One of my responsibilities was developing components and pages for a virtual office assistant software using React. Through my internship, I also gained valuable teamwork and communication skills that will make me a great asset to your company."
        fontSize={20}
        lineHeight={25}
      />
      <br />
      <Text
        text="Thank you for taking the time to review my qualifications. I look forward to sharing more about my skills and experiences. Feel free to contact me at +2348184041848 or abdurrahman0803@gmail.com."
        fontSize={20}
        lineHeight={25}
      />
      <br />
      <Text text="Best Regards, Abdurrahman" fontSize={20} lineHeight={25} />
    </div>
  );

  const toggleMode = () => {
    setResumeMode(!resumeMode);
  };
  return (
    <div className="App">
      <button className="toggle" onClick={toggleMode}>
        Show {resumeMode ? "Cover Letter" : "Resume"}
      </button>
      {resumeMode ? renderResume() : renderLetter()}
    </div>
  );
}

export default App;
