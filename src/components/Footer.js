import { Link, NavLink } from "react-router-dom";
import transparent from "../images/transparent.gif";

export default function Footer() {
  return (
    <div>
      <app-d4-footer _ngcontent-gau-c6 _nghost-gau-c15>
        <div _ngcontent-gau-c15 className="footer">
          <div _ngcontent-gau-c15 className="support-wrap" id="supportWrap" />
          {/**/}
          <div _ngcontent-gau-c15 className="browser-wrap">
            <img _ngcontent-gau-c15 src={transparent} alt="" />
            <br _ngcontent-gau-c15 /> Our website works best in the newest and
            last prior version of these browsers: <br _ngcontent-gau-c15 />
            Google Chrome. Firefox{" "}
          </div>
          {/**/}
          <ul _ngcontent-gau-c15 className="policy-link">
            <li _ngcontent-gau-c15>
              <Link to='' _ngcontent-gau-c15>Privacy Policy</Link>
            </li>
            <li _ngcontent-gau-c15>
              <Link to='' _ngcontent-gau-c15>Terms and Conditions</Link>
            </li>
            <li _ngcontent-gau-c15>
              <Link to='' _ngcontent-gau-c15>Rules and Regulations</Link>
            </li>
            <li _ngcontent-gau-c15>
              <Link to='' _ngcontent-gau-c15>KYC</Link>
            </li>
            <li _ngcontent-gau-c15>
              <Link to='' _ngcontent-gau-c15>Responsible Gaming</Link>
            </li>
            <li _ngcontent-gau-c15>
              <Link to='' _ngcontent-gau-c15>About Us</Link>
            </li>
            <li _ngcontent-gau-c15>
              <Link to='' _ngcontent-gau-c15>Self-exclusion Policy</Link>
            </li>
            <li _ngcontent-gau-c15>
              <Link to='' _ngcontent-gau-c15>Underage Policy</Link>
            </li>
          </ul>
          {/**/}
        </div>
      </app-d4-footer>
      <app-d4-bottom-footer _nghost-sgg-c20>
        <nav _ngcontent-sgg-c20 className="mobile-nav">
          <ul _ngcontent-sgg-c20 style={{ marginBottom: 0 }}>
            <li _ngcontent-sgg-c20 id="sports">
              <NavLink
                to="/sport"
                _ngcontent-sgg-c20
                className={({ isActive }) =>
                  isActive ? "ui-link active" : "ui-link"
                }
                neua="Sports"
              >
                <i class="fa-solid fa-trophy"></i>
                Sports
              </NavLink>
            </li>
            <li _ngcontent-sgg-c20 id="inPlay">
              <NavLink
                to="/in-paly"
                _ngcontent-sgg-c20
                className={({ isActive }) =>
                  isActive ? "ui-link active" : "ui-link"
                }
                neua="In-Play"
              >
                <i class="fa-regular fa-clock"></i>
                In-Play
              </NavLink>
            </li>
            <li _ngcontent-sgg-c20 className="main-nav select" id="home">
              <NavLink
                to="/"
                _ngcontent-sgg-c20
                className={({ isActive }) =>
                  isActive ? "ui-link active" : "ui-link"
                }
                neua="Home"
              >
                <i class="fa-solid fa-house-chimney"></i>
                Home
              </NavLink>
            </li>
            <li _ngcontent-sgg-c20 id="multiMarket">
              <NavLink
                to="/multi"
                _ngcontent-sgg-c20
                className={({ isActive }) =>
                  isActive ? "ui-link active" : "ui-link"
                }
                neua="Multi Markets"
              >
                <i class="fa-solid fa-thumbtack"></i>
                Multi M...
              </NavLink>
            </li>
            <li _ngcontent-sgg-c20 id="account">
              <NavLink
                to="/account"
                _ngcontent-sgg-c20
                className={({ isActive }) =>
                  isActive ? "ui-link active" : "ui-link"
                }
              >
                <i class="fa-solid fa-circle-user"></i>
                Account
              </NavLink>
            </li>
          </ul>
        </nav>
      </app-d4-bottom-footer>
    </div>
  );
}
