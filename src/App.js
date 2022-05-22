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
        "I enjoy playing and watching various sports, especially football.",
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
      description: "I play games quite a lot, especially video games.",
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
      text: "Front-end Developer with a passion for creating intuitive, dynamic user experiences using brilliant UI effects and animations. My end goal for every project is to deliver a resilient, scalable, and secure web app that delights end-users",
    },
    {
      title: "Education",
      timeline: [
        {
          date: "2019 - Present",
          name: "University of Lagos, Lagos — Bachelor's Degree",
          content: ["Bachelors of Science - Computer Science - 4.4 CGPA"],
        },
      ],
    },
    {
      title: "Experience",
      timeline: [
        {
          date: "01 - 2022 - Present",
          name: "Pramie Technologies — Front-end Software Developer",
          content: [
            "Successfully built the web components of a virtual office assistant software with a dedicated team of front-end and back end developers.",
            "Integrated APIs for pages and authentication flows on a NextJS web application.",
            "Worked on navigation bug fixes on an existing SaaS website.",
          ],
        },
        {
          date: "12 - 2021 - Present",
          name: "Freelance — Front-end Software Developer",
          content: [
            "Built a portfolio site, integrating real-time CRM using firebase with GatsbyJS.",
            "Created fully functional, mobile-responsive web applications.",
            "Implemented authentication on an open-source watermarking tool built with React.",
            "Built a simple carts page with React and Formspree for a vendor of drinks to enable real-time notifications on customer orders ",
          ],
        },
        {
          date: "10 - 2021 - 12 - 2021",
          name: "Side hustle Internship — Front-end Software Developer",
          content: [
            "Collaborated with sub-teams of developers and designers to build functional and scalable web apps.",
          ],
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
              text="Front-end Developer"
              fontSize={20}
              fontWeight="normal"
              textAlign="center"
            />
          </div>
          <img
            className="image"
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-website-42916.appspot.com/o/profile%20pic%2FScreenshot%202022-05-22%20at%2019.22.42.png?alt=media&token=bbbf57c0-b903-43bc-934b-969c65534571"
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
      <Text text="Abdurrahman Sogbesan" fontSize={25} textAlign="center" />
      <Text
        text="26 Kaltungo Street, Garki 2, Abuja"
        fontSize={14}
        textAlign="center"
      />
      <Text text="abdurrahman0803@gmail.com" fontSize={14} textAlign="center" />
      <Text text="+2348184041848" fontSize={14} textAlign="center" />
      <Text text="May 22, 2022" />
      <Text text="Dear Hiring Manager," />
      <br />
      <Text
        text="Application for the role of Front-end Developer"
        textAlign="center"
        fontWeight="bold"
      />
      <br />
      <Text
        text="I am a passionate and emerging front-end developer, who was elated to read about an employment opportunity at your organisation. As a result, I am thrilled to apply for the position of Front-end Web Developer at your company."
        lineHeight={25}
      />
      <br />
      <Text
        text="I have spent the past year and a half honing my skills in HTML, CSS and Javascript (React), while pursuing a degree in computer science at the University of Lagos. Most recently, I have put those skills to work during my ongoing internship with Pramie Technologies, where I gained hands-on experience as I worked alongside a team of talented developers."
        lineHeight={25}
      />
      <br />
      <Text
        text="During this internship, I have played a valuable role in writing code for the websites and applications the company builds. More specifically, I was in charge of developing components and pages for a virtual office assistant software using React. This internship has also opened my eyes to the importance of teamwork and clear communication, skills I continue to polish during my time with the team."
        lineHeight={25}
      />
      <br />
      <Text
        text="In addition to my abilities as a developer, I am also a curious person who is always looking to learn and take initiative. This is why I have combined internships and other practical opportunities with my university education. It has enriched my thinking and approach as a developer and student."
        lineHeight={25}
      />
      <br />
      <Text
        text="I have no doubt that I possess skills and experiences that would be valuable to your organisation. I am also excited at the prospect of working with you to meet the goals and missions of your company."
        lineHeight={25}
      />
      <br />
      <Text
        text="Thank you very much for taking the time to consider my application. I look forward to talking to you about why I am the perfect fit for this role."
        lineHeight={25}
      />
      <br />
      <Text text="Sincerely," lineHeight={25} />
      <Text text="Abdurrahman Sogbesan." lineHeight={25} />
      <br />
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
