//ES5
// export default function TextArea() {
//     return (
//       <div className="container">
//         <h1 className="Header">IMAGINE A PLACE...</h1>
//         <p className="intro-text">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
//       </div>
//     );
//   }

// ES6
// const UserCard = () => {
//   return <div> Hello from user card ES6 </div>;
// };

const TextArea = () => {
  return (
    <div className="text-container">
      <h1 className="h1">
        IMAGINE A<br /> PLACE...
      </h1>
      <p className="intro-text">
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </p>
    </div>
  );
};

export default TextArea;
