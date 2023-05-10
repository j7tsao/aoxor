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
                <Link to="/men" style={{ textDecoration: 'none' }}><h3>MEN</h3></Link>
            </div>
            <div className="women">
                <Link to="/women" style={{ textDecoration: 'none' }}><h3>WOMEN</h3></Link>
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;
