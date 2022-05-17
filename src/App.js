import "./App.css";
import Subtitle from "./components/Subtitle";
import Text from "./components/Text";
import SkillBar from "react-skillbars";
import ContactDetail from "./components/ContactDetail";

function App() {
  const skills = [
    { type: "HTML", level: 85 },
    { type: "CSS", level: 80 },
    { type: "Javascript", level: 75 },
    { type: "ReactJS", level: 70 },
    { type: "Git", level: 70 },
    { type: "Typescript", level: 60 },
    // { type: "CSS", level: 80 },
  ];

  const colors = {
    bar: "#3498db",
    title: {
      text: "white",
      background: "dodgerblue",
    },
  };

  // const hobbies = ["Sports", "Music", "Gaming"];

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
      content: "26 Kaltungo Street Garki 2, Abuja",
      icon: "address",
    },
  ];

  return (
    <div className="App">
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
          <img
            className="image"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
            alt="My face"
          />
        </div>
        <div className="skillsSection">
          <Subtitle text="Professional Skills" />
          <SkillBar
            skills={skills}
            height={30}
            colors={colors}
            animationDelay={2000}
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
              />
            );
          })}
        </div>
        {/* <div className="hobbySection">
          <Subtitle text="Hobbies" />
          <ul className="hobbyList">
            {hobbies.map((text, index) => (
              <li key={index}>
                <Text text={text} fontSize={20} />
              </li>
            ))}
          </ul>
        </div> */}
      </div>
      <div className="rightSection"></div>
    </div>
  );
}

export default App;
