import React from "react";
import logo from "../images/sky-the100-logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <app-root _nghost-mlh-c0 ng-version="8.2.3">
      <router-outlet _ngcontent-mlh-c0 />
      <app-landing-dashboard className="ng-star-inserted">
        <app-d4-landing-dashboard _nghost-mlh-c6 className="ng-star-inserted">
          <app-d4-header _ngcontent-mlh-c6 _nghost-mlh-c13></app-d4-header>
        </app-d4-landing-dashboard>
      </app-landing-dashboard>
      {/* common header */}
      <div _ngcontent-mlh-c13 className="top">
        <div _ngcontent-mlh-c13 className="header full-wrap">
          <div _ngcontent-mlh-c13 className="logoBox">
            <Link to="/" _ngcontent-mlh-c13>
              <img _ngcontent-mlh-c13 src={logo} alt="" />
            </Link>
          </div>
          <div _ngcontent-mlh-c13 className="flexRow">
            <div _ngcontent-mlh-c13 id="searchWrap" className="search-wrap">
              <div _ngcontent-mlh-c13 className="searchhh">
                <ng2-completer
                  _ngcontent-mlh-c13
                  style={{ zIndex: 9999999 }}
                  _nghost-mlh-c21
                  className="ng-untouched ng-pristine ng-valid ng-star-inserted"
                >
                  <div
                    _ngcontent-mlh-c21
                    className="completer-holder"
                    ctrcompleter
                  >
                    <input
                      _ngcontent-mlh-c21
                      autoCapitalize="off"
                      autoComplete="off"
                      autoCorrect="off"
                      className="completer-input ng-untouched ng-pristine ng-valid"
                      ctrinput
                      type="search"
                      name
                      placeholder="Search by event name…"
                      maxLength={524288}
                      tabIndex={0}
                    />

                    <div
                      _ngcontent-mlh-c21
                      className="completer-dropdown-holder ng-star-inserted"
                    ></div>
                  </div>
                </ng2-completer>
                <button
                  _ngcontent-mlh-c13
                  className="search-clear"
                  id="searchClear"
                  style={{ display: "none" }}
                />
              </div>
              <div
                _ngcontent-mlh-c13
                className="suggestion-wrap"
                id="searchResult"
                style={{ display: "none" }}
              >
                <ul _ngcontent-mlh-c13 id="searchList">
                  <li
                    _ngcontent-mlh-c13
                    id="noMatching"
                    style={{ display: "none" }}
                  >
                    <p _ngcontent-mlh-c13 className="no-matching">
                      No events found matching ...
                    </p>
                  </li>
                  <li
                    _ngcontent-mlh-c13
                    id="resultTemplate"
                    style={{ display: "none" }}
                  >
                    <Link to="" _ngcontent-mlh-c13 />
                  </li>
                </ul>
              </div>
            </div>
            <ul
              _ngcontent-mlh-c13
              className="login-wrap logindisplayFlex ng-star-inserted"
            >
              <li _ngcontent-mlh-c13 className="languageLi headerLang">
                <select _ngcontent-mlh-c13 className="btn-submit">
                  <option
                    _ngcontent-mlh-c13
                    value="English"
                    className="ng-star-inserted"
                  >
                    English
                  </option>
                  <option
                    _ngcontent-mlh-c13
                    value="Hindi"
                    className="ng-star-inserted"
                  >
                    Hindi
                  </option>
                  <option
                    _ngcontent-mlh-c13
                    value="Telugu"
                    className="ng-star-inserted"
                  >
                    Telugu
                  </option>
                  <option
                    _ngcontent-mlh-c13
                    value="Kannada"
                    className="ng-star-inserted"
                  >
                    Kannada
                  </option>
                  <option
                    _ngcontent-mlh-c13
                    value="Marathi"
                    className="ng-star-inserted"
                  >
                    Marathi
                  </option>
                  <option
                    _ngcontent-mlh-c13
                    value="Gujarati"
                    className="ng-star-inserted"
                  >
                    Gujarati
                  </option>
                </select>
                <i _ngcontent-mlh-c13 className="fas fa-caret-down" />
              </li>
              <app-d4-player-header-login _ngcontent-mlh-c13 _nghost-mlh-c23>
                <form
                  _ngcontent-mlh-c23
                  className="errorMessageContrl ng-untouched ng-pristine ng-invalid ng-star-inserted"
                  noValidate
                >
                  <li _ngcontent-mlh-c23>
                    <i
                      _ngcontent-mlh-c23
                      aria-hidden="true"
                      className="fa fa-user"
                    />
                    <input
                      _ngcontent-mlh-c23
                      formcontrolname="usernameOrEmail"
                      id="usernamee"
                      onfocus="this.removeAttribute('readonly');"
                      type="email"
                      defaultValue
                      readOnly
                      placeholder="Username"
                      className="ng-untouched ng-pristine ng-invalid"
                    />
                    <p _ngcontent-mlh-c23>
                      <app-validation-message
                        _ngcontent-mlh-c23
                        _nghost-mlh-c35
                      >
                        <span
                          _ngcontent-mlh-c35
                          className="validation-message"
                        ></span>
                      </app-validation-message>
                    </p>
                  </li>
                  <li _ngcontent-mlh-c23>
                    <input
                      _ngcontent-mlh-c23
                      autoComplete="on"
                      formcontrolname="password"
                      defaultValue
                      type="password"
                      placeholder="Password"
                      className="ng-untouched ng-pristine ng-invalid"
                    />
                    <p _ngcontent-mlh-c23>
                      <app-validation-message
                        _ngcontent-mlh-c23
                        _nghost-mlh-c35
                      >
                        <span
                          _ngcontent-mlh-c35
                          className="validation-message"
                        ></span>
                      </app-validation-message>
                    </p>
                    <span
                      _ngcontent-mlh-c23
                      className="toggelPass fa fa-fw fa-eye"
                      toggle="#password-field"
                    />
                  </li>
                  <li _ngcontent-mlh-c23 className="valid-code" />
                  <li _ngcontent-mlh-c23>
                    <input
                      _ngcontent-mlh-c23
                      id="valid"
                      name="valid"
                      type="hidden"
                      defaultValue="8fd97d9e-ada0-4e48-8714-40ebd8a7af93"
                    />
                  </li>
                  <li _ngcontent-mlh-c23>
                    <Link
                      to=""
                      _ngcontent-mlh-c23
                      className="btn-login"
                      id="loginBtn"
                    >
                      LOGIN{" "}
                      <i _ngcontent-mlh-c23 className="fas fa-sign-in-alt" />
                    </Link>
                  </li>
                </form>

                <div
                  _ngcontent-mlh-c23
                  className="loginDemo bankingTrue ng-star-inserted"
                >
                  <Link to="" _ngcontent-mlh-c23 className="text-underline">
                    Login With Demo{" "}
                  </Link>
                </div>
                <div
                  _ngcontent-mlh-c23
                  aria-hidden="true"
                  aria-labelledby="myLargeModalLabel"
                  className="modal fade header_login_modal"
                  id="logininfo-popupd7"
                  role="dialog"
                  tabIndex={-1}
                >
                  <div
                    _ngcontent-mlh-c23
                    className="modal-dialog"
                    role="document"
                  >
                    <div
                      _ngcontent-mlh-c23
                      className="modal-content login-popup-content"
                    >
                      <div _ngcontent-mlh-c23 className="modal-header">
                        <button
                          _ngcontent-mlh-c23
                          aria-label="Close"
                          className="close"
                          data-dismiss="modal"
                          type="button"
                        >
                          <span
                            _ngcontent-mlh-c23
                            aria-hidden="true"
                            className="fa fa-times"
                          />
                        </button>
                      </div>
                      <div _ngcontent-mlh-c23 className="modal-body bodypa">
                        <h5 _ngcontent-mlh-c23 className="modal-title">
                          Non-Gambling Territories.{" "}
                        </h5>
                        <div _ngcontent-mlh-c23 className="text2">
                          Connecting to our site from non gambling countries, it
                          will be User's responsibility to ensure that their use
                          of the service is lawful.
                        </div>
                        <div _ngcontent-mlh-c23 className="confirm-text">
                          <div
                            _ngcontent-mlh-c23
                            className="text1 text-confirm-bold"
                          >
                            Underage gambling is prohibited.
                          </div>
                          <hr _ngcontent-mlh-c23 className="confirm-line" />
                          <div _ngcontent-mlh-c23 className="text2">
                            Please confirm if you are{" "}
                            <span
                              _ngcontent-mlh-c23
                              className="text-confirm-bold"
                            >
                              18 years old and above
                            </span>{" "}
                            as of today.
                          </div>
                        </div>
                        <div _ngcontent-mlh-c23 className="confirm-button">
                          <button
                            _ngcontent-mlh-c23
                            className="btn-verification btn-confirm"
                            data-dismiss="modal"
                          >
                            Confirm
                          </button>
                          <Link
                            to=""
                            _ngcontent-mlh-c23
                            className="btn-verification border-btn"
                            href="https://www.google.com/"
                          >
                            Exit
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <app-playerinfo-forgot _ngcontent-mlh-c23 _nghost-mlh-c44>
                  <div
                    _ngcontent-mlh-c44
                    role="dialog"
                    tabIndex={-1}
                    className="skin-1"
                  >
                    <div
                      _ngcontent-mlh-c44
                      aria-hidden="true"
                      aria-labelledby="exampleModalLabel"
                      className="modal fade"
                      id="forgotInfo"
                      role="dialog"
                      tabIndex={-1}
                    >
                      <div
                        _ngcontent-mlh-c44
                        className="modal-dialog formddmain2"
                        role="document"
                      >
                        <div
                          _ngcontent-mlh-c44
                          className="login-panel forgetInfopass"
                        >
                          <div _ngcontent-mlh-c44 className="main login">
                            <div
                              _ngcontent-mlh-c44
                              className="downline-heading"
                            >
                              <button
                                _ngcontent-mlh-c44
                                aria-label="Close"
                                className="close ng-star-inserted"
                                data-dismiss="modal"
                                type="button"
                              >
                                <span _ngcontent-mlh-c44 aria-hidden="true">
                                  ×
                                </span>
                              </button>
                            </div>
                            <div
                              _ngcontent-mlh-c44
                              className="icon-login forgetPassHeadin"
                            >
                              <h2 _ngcontent-mlh-c44>
                                Forgot Username/Password
                              </h2>
                            </div>
                            <div _ngcontent-mlh-c44 className="formdd2">
                              <form
                                _ngcontent-mlh-c44
                                className="formmconform ng-untouched ng-pristine ng-invalid"
                                noValidate
                              >
                                <div _ngcontent-mlh-c44 className="form-group">
                                  <div
                                    _ngcontent-mlh-c44
                                    className="form-group forget-enterNo ng-star-inserted"
                                  >
                                    <div
                                      _ngcontent-mlh-c44
                                      className="col-sm-5 pl-0"
                                    >
                                      <select
                                        _ngcontent-mlh-c44
                                        className="form-control countryCode ng-untouched ng-pristine ng-valid"
                                        formcontrolname="countryCode"
                                      >
                                        <option
                                          _ngcontent-mlh-c44
                                          value="0: +91"
                                          className="ng-star-inserted"
                                        >
                                          IN(+91)
                                        </option>
                                      </select>
                                    </div>
                                    <div
                                      _ngcontent-mlh-c44
                                      className="col-sm-7 pr-0"
                                    >
                                      <input
                                        _ngcontent-mlh-c44
                                        autoComplete="off"
                                        className="form-control ng-untouched ng-pristine ng-invalid"
                                        formcontrolname="phoneNo"
                                        id="phoneNo"
                                        maxLength={10}
                                        onfocus="this.removeAttribute('readonly');"
                                        onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                                        type="tel"
                                        readOnly
                                        placeholder="Phone no."
                                      />
                                      <app-validation-message
                                        _ngcontent-mlh-c44
                                        _nghost-mlh-c35
                                      >
                                        <span
                                          _ngcontent-mlh-c35
                                          className="validation-message"
                                        ></span>
                                      </app-validation-message>
                                    </div>
                                  </div>
                                  <span _ngcontent-mlh-c44 />
                                </div>

                                <div
                                  _ngcontent-mlh-c44
                                  className="forget-password text-center ng-star-inserted"
                                  style={{ marginTop: 20 }}
                                >
                                  <button
                                    _ngcontent-mlh-c44
                                    className="apl-btn apl-btn-large btn-login"
                                    type="button"
                                  >
                                    Send Otp
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </app-playerinfo-forgot>
              </app-d4-player-header-login>
            </ul>
          </div>
        </div>
        <div _ngcontent-mlh-c13 className="menu-wrap">
          <div _ngcontent-mlh-c13 className="full-wrap">
            <ul _ngcontent-mlh-c13 className="menu" id="tabMenu">
              <li _ngcontent-mlh-c13 className="ng-star-inserted">
                <Link
                  to="/"
                  _ngcontent-mlh-c13
                  id="menu_InPlay"
                  className="select"
                >
                  Home
                </Link>
              </li>
              <li _ngcontent-mlh-c13 className="ng-star-inserted">
                <Link to="/sports" _ngcontent-mlh-c13 id="menu_InPlay">
                  In- Play
                </Link>
              </li>
              <li _ngcontent-mlh-c13 className="ng-star-inserted">
                <Link to="" _ngcontent-mlh-c13 id="menu_InPlay">
                  Multi Markets
                </Link>
              </li>
              <li _ngcontent-mlh-c13 className="ng-star-inserted">
                <Link to="" _ngcontent-mlh-c13 id="menu_InPlay">
                  <span
                    _ngcontent-mlh-c13
                    className="tag-live ng-star-inserted"
                    id="tagLive"
                    style={{}}
                  >
                    <strong _ngcontent-mlh-c13 />9
                  </span>{" "}
                  Cricket
                </Link>
              </li>
              <li _ngcontent-mlh-c13 className="ng-star-inserted">
                <Link to="" _ngcontent-mlh-c13 id="menu_InPlay">
                  <span
                    _ngcontent-mlh-c13
                    className="tag-live ng-star-inserted"
                    id="tagLive"
                    style={{}}
                  >
                    <strong _ngcontent-mlh-c13 />9
                  </span>{" "}
                  Soccer
                </Link>
              </li>
              <li _ngcontent-mlh-c13 className="ng-star-inserted">
                <Link to="" _ngcontent-mlh-c13 id="menu_InPlay">
                  <span
                    _ngcontent-mlh-c13
                    className="tag-live ng-star-inserted"
                    id="tagLive"
                    style={{}}
                  >
                    <strong _ngcontent-mlh-c13 />0
                  </span>{" "}
                  Tennis
                </Link>
              </li>
              <li _ngcontent-mlh-c13 className="ng-star-inserted">
                <Link to="" _ngcontent-mlh-c13 id="menu_InPlay">
                  <span
                    _ngcontent-mlh-c13
                    className="tag-live ng-star-inserted"
                    id="tagLive"
                    style={{}}
                  >
                    <strong _ngcontent-mlh-c13 />0
                  </span>{" "}
                  Kabaddi
                </Link>
              </li>
              <li _ngcontent-mlh-c13 className="ng-star-inserted">
                <Link to="" _ngcontent-mlh-c13 id="menu_InPlay">
                  Ace Casino
                </Link>
              </li>
              <li _ngcontent-mlh-c13 className="ng-star-inserted">
                <Link to="" _ngcontent-mlh-c13 id="menu_InPlay">
                  Live Casino
                </Link>
              </li>
              <li _ngcontent-mlh-c13 className="ng-star-inserted">
                <Link to="" _ngcontent-mlh-c13 id="menu_InPlay">
                  Virtual Sports
                </Link>
              </li>
              <li _ngcontent-mlh-c13 className="ng-star-inserted">
                <Link to="" _ngcontent-mlh-c13 id="menu_InPlay">
                  Slots
                </Link>
              </li>
              <li _ngcontent-mlh-c13 className="ng-star-inserted">
                <Link to="" _ngcontent-mlh-c13 id="menu_InPlay">
                  Special Market
                </Link>
              </li>
              <li _ngcontent-mlh-c13 className="ng-star-inserted">
                <Link to="" _ngcontent-mlh-c13 id="menu_InPlay">
                  Games
                </Link>
              </li>

              <li _ngcontent-mlh-c13 className="ng-star-inserted">
                <Link to="" _ngcontent-mlh-c13>
                  Theme
                </Link>
              </li>
            </ul>
            <app-d4-edit-stack _ngcontent-mlh-c13 _nghost-mlh-c24>
              <ul _ngcontent-mlh-c24 className="setting-wrap">
                <li _ngcontent-mlh-c24 className="time_zone">
                  <span _ngcontent-mlh-c24>Time Zone :</span> GMT+5:30
                </li>
                <li _ngcontent-mlh-c24>
                  <Link
                    to=""
                    _ngcontent-mlh-c24
                    className="setting"
                    onclick="event.preventDefault();"
                    style={{ cursor: "pointer" }}
                  >
                    Setting{" "}
                    <i
                      _ngcontent-mlh-c24
                      aria-hidden="true"
                      className="fa fa-cog"
                    />
                  </Link>
                </li>
              </ul>
            </app-d4-edit-stack>
          </div>
        </div>
      </div>
      <app-annoucment-model _ngcontent-mlh-c13 _nghost-mlh-c25>
        <div
          _ngcontent-mlh-c25
          aria-hidden="true"
          aria-labelledby="admin-add-user"
          className="modal fade forcetopassIsssue"
          id="bonusEnabletheme"
          role="dialog"
          tabIndex={-1}
        >
          <div
            _ngcontent-mlh-c25
            className="modal-dialog anncoumentimg anncmulti d9-modalLg"
            role="document"
          >
            <div _ngcontent-mlh-c25 className="modal-content">
              <button
                _ngcontent-mlh-c25
                aria-label="Close"
                className="close closeBTN"
                data-dismiss="modal"
                type="button"
              >
                <span _ngcontent-mlh-c25 aria-hidden="true">
                  ×
                </span>
              </button>

              <div
                _ngcontent-mlh-c25
                className="modal-body p-0 ng-star-inserted"
              >
                <div _ngcontent-mlh-c25 className="table-transferred">
                  <img
                    _ngcontent-mlh-c25
                    className="cursor-pointer"
                    src="./the100exch_files/Welcome756.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <app-low-bal-currency-welcombanner _ngcontent-mlh-c25 _nghost-mlh-c34>
          <div
            _ngcontent-mlh-c34
            aria-hidden="true"
            aria-labelledby="staticBackdropLabel"
            className="modal fade welcoinModal"
            data-backdrop="static"
            data-keyboard="false"
            id="welcomBannerCoinslider"
            role="dialog"
            tabIndex={-1}
          >
            <div
              _ngcontent-mlh-c34
              className="modal-dialog ranged3"
              role="document"
              style={{ top: "0%" }}
            >
              <div _ngcontent-mlh-c34 className="modal-content popimgcoin">
                <div _ngcontent-mlh-c34 className="modal-header">
                  <button
                    _ngcontent-mlh-c34
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                  >
                    <img
                      _ngcontent-mlh-c34
                      src="./the100exch_files/removeicon.png"
                      width={40}
                      alt=""
                    />
                  </button>
                </div>
                {/* <h2 _ngcontent-mlh-c34 className="boxMain" /> */}
                <div _ngcontent-mlh-c34 className="modal-body bodypabal">
                  <div
                    _ngcontent-mlh-c34
                    bis_skin_checked={1}
                    className="available-wrap"
                  >
                    <h4 _ngcontent-mlh-c34 className="text-left">
                      <span _ngcontent-mlh-c34>Main Balance</span>
                      <label _ngcontent-mlh-c34 id="commonPlayerBalance" />
                    </h4>
                    <h4 _ngcontent-mlh-c34 className="text-right">
                      <span _ngcontent-mlh-c34 id="commonVendorBalanceTitle">
                        Wallet Balance
                      </span>
                      <label
                        _ngcontent-mlh-c34
                        id="commonPlayerVendorBalance"
                      />
                    </h4>
                  </div>
                  <div _ngcontent-mlh-c34 className="slidecontainer">
                    <input
                      _ngcontent-mlh-c34
                      id="coinval"
                      style={{ fontWeight: "bold", color: "black" }}
                      type="number"
                      className="ng-untouched ng-pristine ng-valid"
                    />
                    <div _ngcontent-mlh-c34 className="rangeBox">
                      <div _ngcontent-mlh-c34 className="inBox">
                        <span
                          _ngcontent-mlh-c34
                          className="ripple"
                          style={{ cursor: "pointer" }}
                        >
                          0
                        </span>
                        <input
                          _ngcontent-mlh-c34
                          className="slider ng-untouched ng-pristine ng-valid"
                          min={0}
                          type="range"
                          max="null"
                        />
                        <span
                          _ngcontent-mlh-c34
                          className="ripple"
                          style={{ cursor: "pointer" }}
                        >
                          Max
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div _ngcontent-mlh-c34 className="modal-footer footermm">
                  <button
                    _ngcontent-mlh-c34
                    className="btn btn-primary"
                    type="button"
                  >
                    Transfer and Enter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </app-low-bal-currency-welcombanner>
      </app-annoucment-model>

      <div>
        <app-exposure-details _ngcontent-mlh-c13 _nghost-mlh-c26>
          <div
            _ngcontent-mlh-c26
            aria-hidden="true"
            aria-labelledby="admin-add-user"
            className="modal fade"
            id="exposure-details"
            role="dialog"
            tabIndex={-1}
          >
            <div _ngcontent-mlh-c26 className="modal-dialog" role="document">
              <div _ngcontent-mlh-c26 className="modal-content">
                <div _ngcontent-mlh-c26 className="modal-header">
                  <button
                    _ngcontent-mlh-c26
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                  >
                    <span _ngcontent-mlh-c26 aria-hidden="true">
                      ×
                    </span>
                  </button>
                  <h4
                    _ngcontent-mlh-c26
                    className="modal-title"
                    id="myModalLabel"
                  >
                    {" "}
                    Exposure Details{" "}
                  </h4>
                </div>
                <div _ngcontent-mlh-c26 className="modal-body">
                  <div _ngcontent-mlh-c26 className="table-transferred">
                    <table _ngcontent-mlh-c26 className="table table-striped">
                      <thead _ngcontent-mlh-c26 className="table-header">
                        <tr _ngcontent-mlh-c26>
                          <th _ngcontent-mlh-c26 style={{ color: "#fff" }}>
                            Events Name
                          </th>
                          <th _ngcontent-mlh-c26 style={{ color: "#fff" }}>
                            Exposure
                          </th>
                        </tr>
                      </thead>
                      <tbody _ngcontent-mlh-c26></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </app-exposure-details>
        <app-coming-soon _ngcontent-mlh-c13 _nghost-mlh-c18>
          <div
            _ngcontent-mlh-c18
            aria-labelledby="myModalLabel"
            className="modal fade"
            id="specialMarket"
            role="dialog"
            tabIndex={-1}
          >
            <div _ngcontent-mlh-c18 className="modal-dialog" role="document">
              <div _ngcontent-mlh-c18 className="modal-content">
                <div
                  _ngcontent-mlh-c18
                  className="modal-header"
                  style={{ height: 30 }}
                >
                  <button
                    _ngcontent-mlh-c18
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                  >
                    <span _ngcontent-mlh-c18 aria-hidden="true">
                      ×
                    </span>
                  </button>
                </div>
                <div
                  _ngcontent-mlh-c18
                  className="modal-body"
                  style={{ backgroundColor: "#fff" }}
                >
                  <img
                    _ngcontent-mlh-c18
                    alt=""
                    src="./the100exch_files/ComingSoonPopup.svg"
                    srcSet
                    style={{ width: "100%", borderRadius: 14 }}
                    className="ng-star-inserted"
                  />
                </div>
              </div>
            </div>
          </div>
        </app-coming-soon>
        <app-d4-theme-modal _ngcontent-mlh-c13 _nghost-mlh-c27>
          <div
            _ngcontent-mlh-c27
            aria-hidden="true"
            aria-labelledby="myLargeModalLabel"
            className="modal fade all-login-theme-modal icetheme"
            id="theme-modal"
            role="dialog"
            tabIndex={-1}
          >
            <div
              _ngcontent-mlh-c27
              className="modal-dialog"
              role="document"
              style={{ top: 0 }}
            >
              <div _ngcontent-mlh-c27 className="modal-content popimgcoin">
                <div _ngcontent-mlh-c27 className="modal-header">
                  <h5 _ngcontent-mlh-c27 className="modal-title">
                    Select Theme{" "}
                    <button
                      _ngcontent-mlh-c27
                      aria-label="Close"
                      className="close"
                      data-dismiss="modal"
                      type="button"
                    >
                      <span _ngcontent-mlh-c27 aria-hidden="true">
                        ×
                      </span>
                    </button>
                  </h5>
                </div>
                <div _ngcontent-mlh-c27 className="modal-body bodypa">
                  <ul _ngcontent-mlh-c27 className="ch-theme">
                    <li _ngcontent-mlh-c27 className="ng-star-inserted">
                      <img
                        _ngcontent-mlh-c27
                        src="./the100exch_files/world777logo.png"
                        className="ng-star-inserted"
                        alt=""
                      />
                    </li>

                    <li _ngcontent-mlh-c27 className="ng-star-inserted">
                      <img
                        _ngcontent-mlh-c27
                        src="./the100exch_files/logo-diamond.png"
                        className="ng-star-inserted"
                        alt=""
                      />
                    </li>

                    <li _ngcontent-mlh-c27 className="ng-star-inserted">
                      <img
                        _ngcontent-mlh-c27
                        src="./the100exch_files/lotuslogo.png"
                        className="ng-star-inserted"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </app-d4-theme-modal>
        <app-force-to-change-password _ngcontent-mlh-c13 _nghost-mlh-c28>
          <div
            _ngcontent-mlh-c28
            aria-hidden="true"
            aria-labelledby="exampleModalLabel"
            className="modal fade changePasswordModal"
            data-backdrop="static"
            data-keyboard="false"
            id="updatePassword"
            role="dialog"
            tabIndex={-1}
          >
            <div
              _ngcontent-mlh-c28
              className="modal-dialog modal-dialog-centered popupBox customShowModal"
            >
              <div _ngcontent-mlh-c28 className="modal-content">
                <div _ngcontent-mlh-c28 className="modal-header">
                  <button _ngcontent-mlh-c28 className="close" type="button">
                    <i
                      _ngcontent-mlh-c28
                      aria-hidden="true"
                      className="red fa fa-power-off"
                    />
                  </button>
                  <h3
                    _ngcontent-mlh-c28
                    className="modal-title"
                    id="myModalLabel"
                  >
                    Change Password
                  </h3>
                </div>
                <div _ngcontent-mlh-c28 className="modal-body">
                  <form
                    _ngcontent-mlh-c28
                    autoComplete="off"
                    noValidate
                    className="ng-untouched ng-pristine ng-invalid"
                  >
                    <div _ngcontent-mlh-c28 className="form-group mb-3ForD8">
                      <input
                        _ngcontent-mlh-c28
                        autoComplete="nope"
                        className="form-control ng-untouched ng-pristine ng-invalid"
                        formcontrolname="newPwd"
                        onfocus="$(this).removeAttr('readonly');"
                        placeholder="Enter New Password"
                        required
                        type="password"
                        readOnly
                      />
                      <span
                        _ngcontent-mlh-c28
                        className="eyeIcon fa fa-fw fa-eye"
                        toggle="#password-field"
                      />
                      <app-validation-message
                        _ngcontent-mlh-c28
                        _nghost-mlh-c35
                      >
                        <span
                          _ngcontent-mlh-c35
                          className="validation-message"
                        ></span>
                      </app-validation-message>
                    </div>
                    <div _ngcontent-mlh-c28 className="form-group">
                      <input
                        _ngcontent-mlh-c28
                        autoComplete="nope"
                        className="form-control ng-untouched ng-pristine ng-invalid"
                        formcontrolname="confirmPass"
                        onfocus="$(this).removeAttr('readonly');"
                        placeholder="Confirm Password"
                        required
                        type="password"
                        readOnly
                      />
                      <span
                        _ngcontent-mlh-c28
                        className="eyeIcon fa fa-fw fa-eye"
                        toggle="#password-field"
                      />
                      <app-validation-message
                        _ngcontent-mlh-c28
                        _nghost-mlh-c35
                      >
                        <span
                          _ngcontent-mlh-c35
                          className="validation-message"
                        ></span>
                      </app-validation-message>
                    </div>
                    <div
                      _ngcontent-mlh-c28
                      className="payment-confirmation payment-confirmation1"
                    >
                      <div _ngcontent-mlh-c28 className="form-group">
                        <input
                          _ngcontent-mlh-c28
                          autoComplete="false"
                          className="form-control ng-untouched ng-pristine ng-valid"
                          formcontrolname="password"
                          id="your_password"
                          name="password"
                          onfocus="$(this).removeAttr('readonly');"
                          placeholder="Enter Old Password"
                          type="password"
                          readOnly
                        />
                        <span
                          _ngcontent-mlh-c28
                          className="eyeIcon fa fa-fw fa-eye"
                          toggle="#password-field"
                        />
                        <app-validation-message
                          _ngcontent-mlh-c28
                          _nghost-mlh-c35
                        >
                          <span
                            _ngcontent-mlh-c35
                            className="validation-message"
                          ></span>
                        </app-validation-message>
                      </div>
                    </div>
                  </form>
                </div>
                <div _ngcontent-mlh-c28 className="modal-footer">
                  <button
                    _ngcontent-mlh-c28
                    className="btn btn-primary"
                    type="button"
                  >
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </app-force-to-change-password>
        <app-agree-continue-rules _ngcontent-mlh-c13 _nghost-mlh-c29>
          <div
            _ngcontent-mlh-c29
            aria-hidden="true"
            aria-labelledby="exampleModalLabel"
            className="signup-accept-continue modal fade"
            data-backdrop="static"
            data-keyboard="false"
            id="accept-continue"
            role="dialog"
            tabIndex={-1}
          >
            <div
              _ngcontent-mlh-c29
              className="modal-dialog centerModalIfNewTheme"
              role="document"
            >
              <div _ngcontent-mlh-c29 className="modal-content">
                <div _ngcontent-mlh-c29 className="modal-header">
                  <button _ngcontent-mlh-c29 className="close" type="button">
                    <i
                      _ngcontent-mlh-c29
                      aria-hidden="true"
                      className="fa fa-power-off"
                      style={{ color: "red" }}
                    />
                  </button>
                  <h5
                    _ngcontent-mlh-c29
                    className="modal-title"
                    id="exampleModalLabel"
                  >
                    Multiple Account &amp; Bet Limit Rule Acceptance
                  </h5>
                </div>
                <div _ngcontent-mlh-c29 className="modal-body">
                  <p _ngcontent-mlh-c29>
                    Members are not permitted to hold multiple accounts. This
                    includes holding an account with any associated site
                    operating on the same platform as this site. Where maximum
                    bet or maximum market limits are imposed, the Site reserves
                    to the right to void bets from accounts found to be
                    exceeding these limits by using multiple accounts across
                    this and any other associated sites. Please confirm your
                    acceptance and understanding of this rule.
                  </p>
                </div>
                <div
                  _ngcontent-mlh-c29
                  className="modal-footer"
                  style={{ justifyContent: "center", display: "flex" }}
                >
                  <input
                    _ngcontent-mlh-c29
                    className="largerCheckbox"
                    id="accept"
                    name="accept-continue"
                    type="checkbox"
                  />
                  <button
                    _ngcontent-mlh-c29
                    className="btn btn-primary"
                    type="button"
                  >
                    Accept and Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </app-agree-continue-rules>
        <app-bonus-terms _ngcontent-mlh-c13 _nghost-mlh-c30>
          <div
            _ngcontent-mlh-c30
            aria-hidden="true"
            aria-labelledby="myLargeModalLabel"
            className="modal fade bonus-terms"
            id="bonus-terms"
            role="dialog"
            tabIndex={-1}
          >
            <div
              _ngcontent-mlh-c30
              className="modal-dialog modal-dialog-centered modal-lg"
              role="document"
              style={{ height: "auto!important", marginTop: 20 }}
            >
              <div _ngcontent-mlh-c30 className="modal-content">
                <div _ngcontent-mlh-c30 className="modal-header">
                  <h5
                    _ngcontent-mlh-c30
                    className="modal-title"
                    id="modal-title"
                  >
                    Bonus Terms and Conditions{" "}
                    <button
                      _ngcontent-mlh-c30
                      _ngcontent-ckk-c18
                      aria-label="Close"
                      className="close"
                      data-dismiss="modal"
                      type="button"
                    >
                      <span
                        _ngcontent-mlh-c30
                        _ngcontent-ckk-c18
                        aria-hidden="true"
                        style={{ color: "#fff" }}
                      >
                        ×
                      </span>
                    </button>
                  </h5>
                </div>
                <div _ngcontent-mlh-c30 className="modal-body">
                  <p _ngcontent-mlh-c30>
                    <b _ngcontent-mlh-c30>Rolling: </b>
                    <span _ngcontent-mlh-c30>
                      Rolling calculated daily 6-7am.
                    </span>
                    <br _ngcontent-mlh-c30 /> To make things simpler for our
                    players our rolling conditions and methods are designed and
                    defined as follows When calculating the rolling amount Your
                    profit/loss bet or stake whichever is lower is calculated as
                    rolling: <br _ngcontent-mlh-c30 />
                    For example: You have taken 10% bonus on Rs100. You will be
                    getting Rs 110 in your account, out of which Rs 10 will be
                    in your bonus wallet That amount you can only withdraw after
                    you completed the rolling condition of 10x. Which means you
                    will have to play a stake of Rs 100 x 10 = Rs 1000.{" "}
                    <br _ngcontent-mlh-c30 />
                    <b _ngcontent-mlh-c30> Example 1:</b> A bet of Rs 100 on the
                    odds of 1.30 and 1.32 If a player backs at: 1.30, The
                    winning amount of Rs 30 will be considered towards rolling
                    amount whereas If a player lays at 1:32, the winning amount
                    of Rs 32 will be considered towards rolling amount.{" "}
                    <br _ngcontent-mlh-c30 />
                    <b _ngcontent-mlh-c30>Example 2:</b> A bet of Rs 100 on the
                    odds of 1.98 and 2 If a player backs at 1.98, the winning
                    amount of Rs 98 will be considered towards rolling amount
                    whereas If a player lays at 2, the winning amount of Rs 100
                    will be considered towards rolling amount.{" "}
                    <br _ngcontent-mlh-c30 />
                    <b _ngcontent-mlh-c30>Example 3:</b> A bet of Rs 100 on the
                    odds of 5.00 and 6.00 If a player backs at 5.00, the winning
                    amount will be Rs 400 and stake would be Rs 100 hence your
                    stake of Rs 100 will be considered towards rolling amount{" "}
                    <br _ngcontent-mlh-c30 />
                    <br _ngcontent-mlh-c30 />
                    <b _ngcontent-mlh-c30>1. </b> The bonus amount credited to
                    the customer's wallet will depend upon the rolling plan
                    customer opted for. <br _ngcontent-mlh-c30 />
                    <b _ngcontent-mlh-c30>2. </b>The bonus will be credited to
                    the customer's bonus wallet account automatically after
                    Deposit but will not be activated unless the rolling
                    conditions are completed. <br _ngcontent-mlh-c30 />
                    <b _ngcontent-mlh-c30>3. </b>Withdrawal of funds from the
                    customer account will only be possible after the rolling
                    conditions are met. <br _ngcontent-mlh-c30 />
                    <b _ngcontent-mlh-c30>4.</b>The number of times the amount
                    is to be rolled will depend upon the bonus plan opted by the
                    player. <br _ngcontent-mlh-c30 />
                    <b _ngcontent-mlh-c30>5. </b>Bonus validity for rolling is 7
                    days and after the bonus will no longer be valid for the
                    player. <br _ngcontent-mlh-c30 />
                    <b _ngcontent-mlh-c30>6. </b>No new bonus will be credited
                    unless the previous bonus is expired or used.{" "}
                    <br _ngcontent-mlh-c30 />
                    <b _ngcontent-mlh-c30>7. </b>The offer is not valid in
                    conjunction with any other promotions or special offers.{" "}
                    <br _ngcontent-mlh-c30 />
                    <b _ngcontent-mlh-c30>8. </b>If the company suspects a
                    customer misusing the bonus, foul play, and/or participation
                    in strategies that the company in its sole discretion deems
                    to be abusive the Company reserves the right to apply
                    special wagering requirements to such customers, including
                    bonus cancellation, without any explanation.{" "}
                    <br _ngcontent-mlh-c30 />
                    <b _ngcontent-mlh-c30>9. </b>Only one bonus is allowed per
                    customer, per family, per address, per shared computer and
                    shared IP address, and per any account details including
                    e-mail address, bank account details, credit card
                    information, and payment system account number.{" "}
                    <br _ngcontent-mlh-c30 />
                    <b _ngcontent-mlh-c30>10.</b> Any misuse of this bonus offer
                    will lead to the cancelation of the bonus and all bonus
                    winnings, or to the closure of the account.{" "}
                    <br _ngcontent-mlh-c30 />
                    <b _ngcontent-mlh-c30>11.</b> The offer is only available to
                    customers with one user account. The company has the right
                    to amend the terms of the offer, cancel or renew the offer,
                    or refuse to allow participation at any time without prior
                    notice. <br _ngcontent-mlh-c30 />
                    <b _ngcontent-mlh-c30>12.</b> The bonus is deemed to have
                    been wagered only after all the bets for the specified
                    amount have been settled.{" "}
                  </p>
                  <br _ngcontent-mlh-c30 />
                  <p _ngcontent-mlh-c30 style={{ wordWrap: "break-word" }} />
                </div>
              </div>
            </div>
          </div>
          <div
            _ngcontent-mlh-c30
            aria-hidden="true"
            aria-labelledby="myLargeModalLabel"
            className="modal fade "
            id="pb-term"
            role="dialog"
            tabIndex={-1}
          >
            <div
              _ngcontent-mlh-c30
              className="modal-dialog modal-dialog-centered modal-lg"
              role="document"
              style={{ height: "auto!important", marginTop: 20 }}
            >
              <div _ngcontent-mlh-c30 className="modal-content">
                <div _ngcontent-mlh-c30 className="modal-header">
                  <h5
                    _ngcontent-mlh-c30
                    className="modal-title"
                    id="modal-title"
                  >
                    Terms and Conditions{" "}
                    <button
                      _ngcontent-mlh-c30
                      _ngcontent-ckk-c18
                      aria-label="Close"
                      className="close"
                      data-dismiss="modal"
                      type="button"
                    >
                      <span
                        _ngcontent-mlh-c30
                        _ngcontent-ckk-c18
                        aria-hidden="true"
                        style={{ color: "#fff" }}
                      >
                        ×
                      </span>
                    </button>
                  </h5>
                </div>
                <div _ngcontent-mlh-c30 className="modal-body">
                  <p _ngcontent-mlh-c30>
                    <strong _ngcontent-mlh-c30>1.</strong> Player battle is a
                    skill game where any user can select real players and play
                    against computer. <br _ngcontent-mlh-c30 />
                    <br _ngcontent-mlh-c30 />
                    <strong _ngcontent-mlh-c30>2.</strong> User can select his
                    set of players based on the event type. For example, 2vs2,
                    4vs4 or 6vs6 based on the game category.{" "}
                    <br _ngcontent-mlh-c30 />
                    <br _ngcontent-mlh-c30 />
                    <strong _ngcontent-mlh-c30>3.</strong> If the user selects
                    first, the computer will get the default points. Vise versa
                    if the computer selects first, the user will get the default
                    points. (Default points are based on game category (2v2,
                    4v4, 6v6)) <br _ngcontent-mlh-c30 />
                    <br _ngcontent-mlh-c30 />
                    <strong _ngcontent-mlh-c30>4.</strong> If any player who has
                    been selected is not included in playing 11 or didn't get
                    opportunity to play (bat), Default points which was
                    announced in advance will be given to them respectively{" "}
                    <br _ngcontent-mlh-c30 />
                    <br _ngcontent-mlh-c30 />
                    <strong _ngcontent-mlh-c30>5.</strong> User is allowed to
                    make any changes in the team before placing the bet, Once
                    the bet is confirmed user will not be allowed to make any
                    change in the current team However, user is allowed to
                    create new team and participate <br _ngcontent-mlh-c30 />
                    <br _ngcontent-mlh-c30 />
                    <strong _ngcontent-mlh-c30>6.</strong> Results will be
                    announced post the match. <br _ngcontent-mlh-c30 />
                    <br _ngcontent-mlh-c30 />
                    <strong _ngcontent-mlh-c30> 7.</strong> If the match got
                    interrupted due to any situation such as rain/bad light and
                    the match gets stopped. Default run/run scored whichever is
                    the highest will be awarded for the players who haven't
                    finished their quota. For example, Ina IND vs ENG T20 match
                    England has completed playing 20 over and India got to play
                    10 over post that the match got stopped due to rain, Then
                    Indian players will get points based on the above mentioned
                    rule, (Note: This is not applicable to the player who has
                    already got out before the match got stopped){" "}
                    <br _ngcontent-mlh-c30 />
                    <br _ngcontent-mlh-c30 />
                    <strong _ngcontent-mlh-c30>8.</strong> Player Battle Event
                    will be closed before one hour from the match Start timing.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </app-bonus-terms>
        <app-login _ngcontent-mlh-c13 _nghost-mlh-c31>
          <app-d4-player-login
            _ngcontent-mlh-c31
            _nghost-mlh-c38
            className="ng-star-inserted"
          >
            <div
              _ngcontent-mlh-c38
              aria-labelledby="exampleModalLabel"
              className="overlay"
              id="login"
              role="dialog"
              tabIndex={-1}
              aria-hidden="true"
              style={{ display: "none" }}
            >
              <div _ngcontent-mlh-c38 className="dialog-wrap-w login_to_go">
                <div _ngcontent-mlh-c38 className="kv">
                  <img
                    _ngcontent-mlh-c38
                    src="./the100exch_files/sky-login-logo.jpg"
                    alt=""
                  />
                </div>
                <form
                  _ngcontent-mlh-c38
                  noValidate
                  className="ng-untouched ng-pristine ng-invalid"
                >
                  <dl _ngcontent-mlh-c38 className="login-panel">
                    <dt _ngcontent-mlh-c38>Please login to continue</dt>
                    <dd _ngcontent-mlh-c38>
                      <input
                        _ngcontent-mlh-c38
                        className="form-control ng-untouched ng-pristine ng-invalid ng-star-inserted"
                        formcontrolname="usernameOrEmail"
                        id="username"
                        onfocus="this.removeAttribute('readonly');"
                        type="email"
                        defaultValue
                        readOnly
                        placeholder="Username"
                      />
                      <span _ngcontent-mlh-c38 className="ng-star-inserted">
                        <app-validation-message
                          _ngcontent-mlh-c38
                          _nghost-mlh-c35
                        >
                          <span
                            _ngcontent-mlh-c35
                            className="validation-message"
                          ></span>
                        </app-validation-message>
                      </span>
                    </dd>

                    <dd _ngcontent-mlh-c38>
                      <input
                        _ngcontent-mlh-c38
                        autoComplete="on"
                        className="form-control ng-untouched ng-pristine ng-invalid"
                        formcontrolname="password"
                        defaultValue
                        type="password"
                        placeholder="Password"
                      />
                      <span
                        _ngcontent-mlh-c38
                        className="toggelPass fa fa-fw fa-eye"
                        toggle="#password-field"
                      />
                    </dd>
                    <span _ngcontent-mlh-c38>
                      <app-validation-message
                        _ngcontent-mlh-c38
                        _nghost-mlh-c35
                      >
                        <span
                          _ngcontent-mlh-c35
                          className="validation-message"
                        ></span>
                      </app-validation-message>
                    </span>
                    <div _ngcontent-mlh-c38 className="forget-div"></div>
                    <dd _ngcontent-mlh-c38>
                      <Link to=""
                        _ngcontent-mlh-c38
                        className="btn-send"
                        id="loginBoxLoginBtn"
                        style={{ cursor: "pointer" }}
                      >
                        LOGIN{" "}
                        <img
                          _ngcontent-mlh-c38
                          className="icon-login"
                          src="./the100exch_files/transparent.gif"
                          alt=""
                        />
                      </Link>
                    </dd>
                    <dd _ngcontent-mlh-c38>
                      <Link to=""
                        _ngcontent-mlh-c38
                        className="btn-send demoLogin"
                        style={{ marginTop: 0, cursor: "pointer" }}
                      >
                        Login With Demo
                      </Link>
                      <app-social-link _ngcontent-mlh-c38 _nghost-mlh-c36>
                        <div
                          _ngcontent-mlh-c36
                          className="modal-socialLInk "
                        ></div>
                      </app-social-link>
                    </dd>
                  </dl>
                </form>
                <Link to=""
                  _ngcontent-mlh-c38
                  className="close"
                  data-dismiss="modal"
                  id="close"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>

            <app-qr-code-verification _ngcontent-mlh-c38 _nghost-mlh-c37>
              <div
                _ngcontent-mlh-c37
                aria-hidden="true"
                aria-labelledby="admin-add-user"
                className="modal fade barcode-verificationMdl"
                id="barcode-verification"
                role="dialog"
                tabIndex={-1}
              >
                <div
                  _ngcontent-mlh-c37
                  className="modal-dialog modal-dialog-centered iceModalCentered"
                  role="document"
                >
                  <div _ngcontent-mlh-c37 className="modal-content">
                    <div _ngcontent-mlh-c37 className="modal-header">
                      <h5
                        _ngcontent-mlh-c37
                        className="modal-title position-relative w-100"
                        id="modal-title"
                      >
                        {" "}
                        Enter Otp{" "}
                        <button
                          _ngcontent-mlh-c37
                          className="close"
                          data-dismiss="modal"
                          type="button"
                        >
                          <span
                            _ngcontent-mlh-c37
                            aria-hidden="true"
                            style={{ color: "#fff" }}
                          >
                            ×
                          </span>
                          <span _ngcontent-mlh-c37 className="sr-only">
                            Close
                          </span>
                        </button>
                      </h5>
                    </div>
                    <div
                      _ngcontent-mlh-c37
                      className="modal-body"
                      style={{ padding: "0 !important" }}
                    >
                      <hr
                        _ngcontent-mlh-c37
                        style={{ marginTop: "0px !important" }}
                      />
                      <div
                        _ngcontent-mlh-c37
                        className="form-group form-group-lg"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <label
                          _ngcontent-mlh-c37
                          className="col-sm-3 control-label"
                          htmlFor="formGroupInputLarge"
                        >
                          CODE
                        </label>
                        <div _ngcontent-mlh-c37 className="col-sm-9">
                          <input
                            _ngcontent-mlh-c37
                            className="form-control"
                            id="formGroupInputLarge"
                            placeholder="Enter Code"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      _ngcontent-mlh-c37
                      className="modal-footer"
                      style={{
                        backgroundColor: "none",
                        padding: 0,
                        borderRadius: "0 0 20px 20px",
                      }}
                    >
                      <div
                        _ngcontent-mlh-c37
                        className="btn-group btn-group-justified"
                      >
                        <button
                          _ngcontent-mlh-c37
                          className="btn btn-default verfication-btn"
                          data-dismiss="modal"
                          type="button"
                        >
                          Cancel
                        </button>
                        <button
                          _ngcontent-mlh-c37
                          className="btn btn-warning verfication-btn"
                          type="button"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </app-qr-code-verification>
          </app-d4-player-login>

          <app-qr-code-verification _ngcontent-mlh-c31 _nghost-mlh-c37>
            <div
              _ngcontent-mlh-c37
              aria-hidden="true"
              aria-labelledby="admin-add-user"
              className="modal fade barcode-verificationMdl"
              id="barcode-verification"
              role="dialog"
              tabIndex={-1}
            >
              <div
                _ngcontent-mlh-c37
                className="modal-dialog modal-dialog-centered iceModalCentered"
                role="document"
              >
                <div _ngcontent-mlh-c37 className="modal-content">
                  <div _ngcontent-mlh-c37 className="modal-header">
                    <h5
                      _ngcontent-mlh-c37
                      className="modal-title position-relative w-100"
                      id="modal-title"
                    >
                      {" "}
                      Enter Otp{" "}
                      <button
                        _ngcontent-mlh-c37
                        className="close"
                        data-dismiss="modal"
                        type="button"
                      >
                        <span
                          _ngcontent-mlh-c37
                          aria-hidden="true"
                          style={{ color: "#fff" }}
                        >
                          ×
                        </span>
                        <span _ngcontent-mlh-c37 className="sr-only">
                          Close
                        </span>
                      </button>
                    </h5>
                  </div>
                  <div
                    _ngcontent-mlh-c37
                    className="modal-body"
                    style={{ padding: "0 !important" }}
                  >
                    <hr
                      _ngcontent-mlh-c37
                      style={{ marginTop: "0px !important" }}
                    />
                    <div
                      _ngcontent-mlh-c37
                      className="form-group form-group-lg"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <label
                        _ngcontent-mlh-c37
                        className="col-sm-3 control-label"
                        htmlFor="formGroupInputLarge"
                      >
                        CODE
                      </label>
                      <div _ngcontent-mlh-c37 className="col-sm-9">
                        <input
                          _ngcontent-mlh-c37
                          className="form-control"
                          id="formGroupInputLarge"
                          placeholder="Enter Code"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    _ngcontent-mlh-c37
                    className="modal-footer"
                    style={{
                      backgroundColor: "none",
                      padding: 0,
                      borderRadius: "0 0 20px 20px",
                    }}
                  >
                    <div
                      _ngcontent-mlh-c37
                      className="btn-group btn-group-justified"
                    >
                      <button
                        _ngcontent-mlh-c37
                        className="btn btn-default verfication-btn"
                        data-dismiss="modal"
                        type="button"
                      >
                        Cancel
                      </button>
                      <button
                        _ngcontent-mlh-c37
                        className="btn btn-warning verfication-btn"
                        type="button"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </app-qr-code-verification>
        </app-login>
        <app-low-bal-currency-info-sportbook _ngcontent-mlh-c13 _nghost-mlh-c32>
          <div
            _ngcontent-mlh-c32
            aria-hidden="true"
            aria-labelledby="staticBackdropLabel"
            className="modal fade welcoinModal addPaymentModalAllTheme"
            data-backdrop="static"
            data-keyboard="false"
            id="coinsliderSportBook"
            role="dialog"
            tabIndex={-1}
          >
            <div
              _ngcontent-mlh-c32
              className="modal-dialog ranged3"
              role="document"
              style={{ top: "0%" }}
            >
              <div _ngcontent-mlh-c32 className="modal-content popimgcoin">
                <div _ngcontent-mlh-c32 className="modal-header">
                  <button
                    _ngcontent-mlh-c32
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                  >
                    <img
                      _ngcontent-mlh-c32
                      src="./the100exch_files/removeicon.png"
                      width={40}
                      alt=""
                    />
                  </button>
                </div>
                <h2 _ngcontent-mlh-c32 className="boxMain">
                  Sports Book
                </h2>
                <div _ngcontent-mlh-c32 className="modal-body bodypabal">
                  <div
                    _ngcontent-mlh-c32
                    bis_skin_checked={1}
                    className="available-wrap"
                  >
                    <h4 _ngcontent-mlh-c32 className="text-left">
                      <span _ngcontent-mlh-c32>Main Balance</span>
                      <label _ngcontent-mlh-c32 id="commonPlayerBalance" />
                    </h4>
                    <h4 _ngcontent-mlh-c32 className="text-right">
                      <span _ngcontent-mlh-c32 id="commonVendorBalanceTitle">
                        Wallet Balance
                      </span>
                      <label
                        _ngcontent-mlh-c32
                        id="commonPlayerVendorBalance"
                      />
                    </h4>
                  </div>
                  <div _ngcontent-mlh-c32 className="slidecontainer">
                    <input
                      _ngcontent-mlh-c32
                      id="coinval"
                      style={{ fontWeight: "bold", color: "black" }}
                      type="number"
                      className="ng-untouched ng-pristine ng-valid"
                    />
                    <div _ngcontent-mlh-c32 className="rangeBox">
                      <div _ngcontent-mlh-c32 className="inBox">
                        <span
                          _ngcontent-mlh-c32
                          className="ripple"
                          style={{ cursor: "pointer" }}
                        >
                          0
                        </span>
                        <input
                          _ngcontent-mlh-c32
                          className="slider ng-untouched ng-pristine ng-valid"
                          min={0}
                          type="range"
                          max="null"
                        />
                        <span
                          _ngcontent-mlh-c32
                          className="ripple"
                          style={{ cursor: "pointer" }}
                        >
                          Max
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div _ngcontent-mlh-c32 className="modal-footer footermm">
                  <button
                    _ngcontent-mlh-c32
                    className="btn btn-primary"
                    type="button"
                  >
                    Transfer and Enter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </app-low-bal-currency-info-sportbook>
        <app-player-signup _ngcontent-mlh-c13 _nghost-mlh-c33>
          <div
            _ngcontent-mlh-c33
            aria-hidden="true"
            aria-labelledby="admin-add-user"
            className="modal fade signupB2cDesign ng-star-inserted"
            id="player-signup"
            role="dialog"
          >
            <div
              _ngcontent-mlh-c33
              className="modal-dialog singpopup modal-dialog-centered"
              role="document"
            >
              <div _ngcontent-mlh-c33 className="modal-content">
                <div _ngcontent-mlh-c33 className="downline-heading">
                  <span _ngcontent-mlh-c33 className="logoCell">
                    <img
                      _ngcontent-mlh-c33
                      src="./the100exch_files/sky-the100-logo.png"
                      className="ng-star-inserted"
                      alt=""
                    />
                  </span>

                  <button
                    _ngcontent-mlh-c33
                    className="close ng-star-inserted"
                    data-dismiss="modal"
                    type="button"
                  >
                    <span _ngcontent-mlh-c33 aria-hidden="true">
                      ×
                    </span>
                    <span _ngcontent-mlh-c33 className="sr-only">
                      Close
                    </span>
                  </button>
                </div>
                <div _ngcontent-mlh-c33 className="downline-container">
                  <div _ngcontent-mlh-c33 className="tab-content">
                    <div _ngcontent-mlh-c33 className="tab-pane fade in active">
                      <form
                        _ngcontent-mlh-c33
                        noValidate
                        className="ng-untouched ng-pristine ng-invalid ng-star-inserted"
                      >
                        <div _ngcontent-mlh-c33 className="downline-form">
                          <div
                            _ngcontent-mlh-c33
                            className="col-sm-12 username"
                          >
                            <div _ngcontent-mlh-c33 className="row">
                              <div
                                _ngcontent-mlh-c33
                                className="col-xs-4 padding-right-0"
                              >
                                <div _ngcontent-mlh-c33 className="form-group">
                                  <select
                                    _ngcontent-mlh-c33
                                    className="form-control ng-untouched ng-pristine ng-valid"
                                    formcontrolname="countryCode"
                                  >
                                    <option
                                      _ngcontent-mlh-c33
                                      value="0: +91"
                                      className="ng-star-inserted"
                                    >
                                      {" "}
                                      IN(+91)
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div _ngcontent-mlh-c33 className="col-xs-8">
                                <div _ngcontent-mlh-c33 className="form-group">
                                  <input
                                    _ngcontent-mlh-c33
                                    autoComplete="off"
                                    className="form-control ng-untouched ng-pristine ng-invalid"
                                    formcontrolname="phoneNo"
                                    id="phoneNo"
                                    maxLength={10}
                                    onfocus="this.removeAttribute('readonly');"
                                    onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                                    type="text"
                                    readOnly
                                    placeholder="Phone no."
                                  />
                                  <app-validation-message
                                    _ngcontent-mlh-c33
                                    _nghost-mlh-c35
                                  >
                                    <span
                                      _ngcontent-mlh-c35
                                      className="validation-message"
                                    ></span>
                                  </app-validation-message>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            _ngcontent-mlh-c33
                            className="col-sm-12 username"
                          >
                            <div _ngcontent-mlh-c33 className="form-group">
                              <input
                                _ngcontent-mlh-c33
                                className="form-control ng-untouched ng-pristine ng-invalid"
                                formcontrolname="username"
                                id="usernames"
                                onfocus="this.removeAttribute('readonly');"
                                type="text"
                                readOnly
                                placeholder="Username"
                              />
                              <app-validation-message
                                _ngcontent-mlh-c33
                                _nghost-mlh-c35
                              >
                                <span
                                  _ngcontent-mlh-c35
                                  className="validation-message"
                                ></span>
                              </app-validation-message>
                            </div>
                          </div>
                          <div
                            _ngcontent-mlh-c33
                            className="col-sm-12 username"
                          >
                            <div _ngcontent-mlh-c33 className="form-group">
                              <input
                                _ngcontent-mlh-c33
                                autoComplete="off"
                                className="form-control ng-untouched ng-pristine ng-invalid"
                                formcontrolname="password"
                                onfocus="this.removeAttribute('readonly');"
                                type="password"
                                readOnly
                                placeholder="Password"
                              />
                              <span
                                _ngcontent-mlh-c33
                                className="toggelPass fa fa-fw fa-eye"
                                toggle="#password-field"
                              />

                              <app-validation-message
                                _ngcontent-mlh-c33
                                _nghost-mlh-c35
                                className="ng-star-inserted"
                              >
                                <span
                                  _ngcontent-mlh-c35
                                  className="validation-message"
                                ></span>
                              </app-validation-message>
                            </div>
                          </div>
                          <div
                            _ngcontent-mlh-c33
                            className="col-sm-12 username"
                          >
                            <div _ngcontent-mlh-c33 className="form-group">
                              <input
                                _ngcontent-mlh-c33
                                autoComplete="off"
                                className="form-control ng-untouched ng-pristine ng-invalid"
                                formcontrolname="cPassword"
                                id="cPassword"
                                onfocus="this.removeAttribute('readonly');"
                                type="password"
                                readOnly
                                placeholder="Confirm Password"
                              />
                              <span
                                _ngcontent-mlh-c33
                                className="toggelPass fa fa-fw fa-eye"
                                toggle="#password-field"
                              />
                              <app-validation-message
                                _ngcontent-mlh-c33
                                _nghost-mlh-c35
                              >
                                <span
                                  _ngcontent-mlh-c35
                                  className="validation-message"
                                ></span>
                              </app-validation-message>
                            </div>
                          </div>

                          <div
                            _ngcontent-mlh-c33
                            className="col-sm-12 text-center clear-both-div"
                          >
                            <p _ngcontent-mlh-c33 className="ptext">
                              By clicking the 'Sign up' button, you confirm that
                              you have attained the age of majority in your
                              country of residence and accept the Terms of
                              the100exch.
                            </p>
                            <div _ngcontent-mlh-c33 className="form-group">
                              <button
                                _ngcontent-mlh-c33
                                className="apl-btn apl-btn-large btn-login"
                                type="button"
                              >
                                Sign Up
                              </button>
                            </div>

                            <app-social-link _ngcontent-mlh-c33 _nghost-mlh-c36>
                              <div
                                _ngcontent-mlh-c36
                                className="modal-socialLInk "
                              ></div>
                            </app-social-link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </app-player-signup>
      </div>
    </app-root>
  );
}
