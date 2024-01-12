import "./Book.css";
// import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function SingleBook() {
  //   const navigate = useNavigate();
  //   const location = useLocation();
  // const userName = location.state.userName;
  // const [state, setStae] = useState(false);

  //   function goToAbout() {
  //     navigate("/AboutBook");
  //   }

  return (
    <div>
      <div className="SingleBook">
        <div className="Bookpic"></div>
        <p>BookName</p>
        <p> Writer</p>
        <p> 대출정보</p>
      </div>
    </div>
  );
}

export default SingleBook;
