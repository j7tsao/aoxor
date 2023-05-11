import "./../App.css";
import StickyBar from "./StickyBar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <StickyBar />
      <div className="homepage">
        <div className="container">
            <div className="men">
                <Link to="/men" style={{ textDecoration: 'none' }}><p>MEN</p></Link>
            </div>
            <div className="women">
                <Link to="/women" style={{ textDecoration: 'none' }}><p>WOMEN</p></Link>
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;
