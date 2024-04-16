"use client";

import "../css/aboutBook.css";
import { useRouter } from "next/navigation";

function SingleBook() {
  const router = useRouter();
  //   const navigate = useNavigate();
  //   const location = useLocation();
  // const userName = location.state.userName;
  // const [state, setStae] = useState(false);

  function goToAbout() {
    router.push("/aboutBook");
  }

  return (
    <div onClick={goToAbout}>
      <div className="SingleBook">
        <div className="Bookpic"></div>
        <p>BookName</p>
        <p> Writer</p>
      </div>
    </div>
  );
}

export default SingleBook;
