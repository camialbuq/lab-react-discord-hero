import "./App.css";
import TextArea from "./components/TextArea.jsx";
import logo from "./assets/discord-logo-white.png";
import MenuIcon from "./assets/menu-icon.png";
import Button from "./components/Button.jsx";
import BackgroundImage from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <img className="logo" src={logo} alt="discord logo" />
        <img className="menu-icon" src={MenuIcon} alt="menu icon" />
      </div>
      <TextArea />
      <Button className="btn-download" buttonText="Download for Mac" />
      <Button
        className="btn-open-browser"
        buttonText="Open Discord in your browser"
      />
      <div>
        <img className="background-img" src={BackgroundImage} alt="menu icon" />
      </div>
    </div>
  );
}

export default App;

// export default function UserCard(props) {
//     const {title, avatarURL} = props;
//     return (
//       <div className="container">
//         <img className="avatar" alt={title} src={avatarURL} />
//         <h2 className="title"> {title || "no title was passed"} </h2>
//       </div>
//     );
//   }
