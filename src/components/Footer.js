import { Link } from "react-router-dom";
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
    </div>
  );
}
