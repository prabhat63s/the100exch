import React from "react";
import MyProfileNav from "./MyProfileNav";
import Header from "../../components/Header";

export default function MyProfileDashbord() {
  return (
    <div>
      <div>
        <MyProfileNav />

        <div _ngcontent-txx-c74 className="col-center">
          <router-outlet _ngcontent-txx-c74 />
          <app-player-account-details
            _nghost-txx-c114
            className="ng-star-inserted"
          >
            <app-all-player-account-details
              _ngcontent-txx-c114
              _nghost-txx-c115
              className="ng-star-inserted"
            >
              <div _ngcontent-txx-c115 className="card-header ng-star-inserted">
                <h4 _ngcontent-txx-c115>Account Details</h4>
              </div>
              <div
                _ngcontent-txx-c115
                className="container-main-accountdetails container-main-userprofile container-bg usercontan"
              >
                <div _ngcontent-txx-c115>
                  <div
                    _ngcontent-txx-c115
                    className="profile-container padding-left-15"
                  >
                    <div _ngcontent-txx-c115 className="profile-panel">
                      <div
                        _ngcontent-txx-c115
                        className="row margin-0 profile-text userprofile-box"
                      ></div>
                      <div _ngcontent-txx-c115 className="row margin-0">
                        <div
                          _ngcontent-txx-c115
                          className="pl-0 col-lg-6 col-md-12 pr-0 changepassprof"
                        >
                          <div
                            _ngcontent-txx-c115
                            className="col-md-12 padding-0"
                          >
                            <div
                              _ngcontent-txx-c115
                              className="change-password-head-text table-card-header-bg primary-color"
                            >
                              Profile
                            </div>
                          </div>
                          <div
                            _ngcontent-txx-c115
                            className="change-password-box"
                          >
                            <form
                              _ngcontent-txx-c115
                              noValidate
                              className="ng-untouched ng-pristine ng-valid"
                            >
                              <div _ngcontent-txx-c115 className="form-group">
                                <label
                                  _ngcontent-txx-c115
                                  className="email-name-text primary-color"
                                  htmlFor="exampleInputEmail1"
                                >
                                  Username
                                </label>
                                <input
                                  _ngcontent-txx-c115
                                  className="form-control ng-untouched ng-pristine"
                                  formcontrolname="username"
                                  id="user_name"
                                  type="text"
                                  disabled
                                  placeholder="Enter Username"
                                />
                              </div>
                              <div _ngcontent-txx-c115 className="form-group">
                                <label
                                  _ngcontent-txx-c115
                                  className="email-name-text primary-color"
                                  htmlFor="exampleInputPassword1"
                                >
                                  Email
                                </label>
                                <input
                                  _ngcontent-txx-c115
                                  className="form-control ng-untouched ng-pristine"
                                  formcontrolname="emailId"
                                  id="user_mail"
                                  type="email"
                                  disabled
                                  placeholder
                                />
                                <app-validation-message
                                  _ngcontent-txx-c115
                                  _nghost-txx-c62
                                >
                                  <span
                                    _ngcontent-txx-c62
                                    className="validation-message"
                                  ></span>
                                </app-validation-message>
                              </div>
                            </form>
                          </div>

                          <div
                            _ngcontent-txx-c115
                            className="ng-star-inserted"
                          ></div>

                          <div
                            _ngcontent-txx-c115
                            className="ng-star-inserted"
                          ></div>
                        </div>

                        <div
                          _ngcontent-txx-c115
                          className="col-lg-6 col-md-12 ng-star-inserted"
                        >
                          <div
                            _ngcontent-txx-c115
                            className="col-md-12 padding-0"
                          >
                            <div
                              _ngcontent-txx-c115
                              className="change-password-head-text table-card-header-bg primary-color"
                            >
                              Change Password{" "}
                            </div>
                          </div>
                          <div
                            _ngcontent-txx-c115
                            className="change-password-box"
                          >
                            <form
                              _ngcontent-txx-c115
                              autoComplete="off"
                              noValidate
                              className="ng-untouched ng-pristine ng-invalid"
                            >
                              <div _ngcontent-txx-c115 className="form-group">
                                <label
                                  _ngcontent-txx-c115
                                  className="password-text primary-color"
                                >
                                  New Password
                                </label>
                                <br _ngcontent-txx-c115 />
                                <input
                                  _ngcontent-txx-c115
                                  autoComplete="nope"
                                  className="form-control ng-untouched ng-pristine ng-invalid"
                                  formcontrolname="newPwd"
                                  onfocus="$(this).removeAttr('readonly');"
                                  required
                                  type="password"
                                  placeholder="Enter New Password"
                                  readOnly
                                />
                                <span
                                  _ngcontent-txx-c115
                                  className="toggelPass fa fa-fw fa-eye"
                                  toggle="#password-field"
                                />

                                <app-validation-message
                                  _ngcontent-txx-c115
                                  _nghost-txx-c62
                                  className="ng-star-inserted"
                                >
                                  <span
                                    _ngcontent-txx-c62
                                    className="validation-message"
                                  ></span>
                                </app-validation-message>
                              </div>
                              <div _ngcontent-txx-c115 className="form-group">
                                <label
                                  _ngcontent-txx-c115
                                  className="password-text primary-color"
                                >
                                  Confirm Password
                                </label>
                                <br _ngcontent-txx-c115 />
                                <input
                                  _ngcontent-txx-c115
                                  autoComplete="nope"
                                  className="form-control ng-untouched ng-pristine ng-invalid"
                                  formcontrolname="confirmPass"
                                  onfocus="$(this).removeAttr('readonly');"
                                  required
                                  type="password"
                                  placeholder="Confirm Password"
                                  readOnly
                                />
                                <span
                                  _ngcontent-txx-c115
                                  className="toggelPass fa fa-fw fa-eye"
                                  toggle="#password-field"
                                />

                                <app-validation-message
                                  _ngcontent-txx-c115
                                  _nghost-txx-c62
                                  className="ng-star-inserted"
                                >
                                  <span
                                    _ngcontent-txx-c62
                                    className="validation-message"
                                  ></span>
                                </app-validation-message>
                              </div>
                              <div _ngcontent-txx-c115 className="form-group">
                                <label
                                  _ngcontent-txx-c115
                                  className="password-text primary-color"
                                >
                                  Old Password
                                </label>
                                <br _ngcontent-txx-c115 />
                                <input
                                  _ngcontent-txx-c115
                                  autoComplete="false"
                                  className="form-control ng-untouched ng-pristine ng-invalid"
                                  formcontrolname="password"
                                  id="your_password1"
                                  name="password"
                                  onfocus="$(this).removeAttr('readonly');"
                                  type="password"
                                  placeholder="Old Password"
                                  readOnly
                                />
                                <span
                                  _ngcontent-txx-c115
                                  className="toggelPass fa fa-fw fa-eye"
                                  toggle="#password-field"
                                />

                                <app-validation-message
                                  _ngcontent-txx-c115
                                  _nghost-txx-c62
                                  className="ng-star-inserted"
                                >
                                  <span
                                    _ngcontent-txx-c62
                                    className="validation-message"
                                  ></span>
                                </app-validation-message>
                              </div>

                              <div
                                _ngcontent-txx-c115
                                className="payment-confirmation payment-confirmation1"
                              >
                                <div
                                  _ngcontent-txx-c115
                                  className="payment bgnone"
                                >
                                  <div
                                    _ngcontent-txx-c115
                                    className="submit-payment display-ib"
                                    style={{
                                      marginLeft: "-23px",
                                      marginTop: "10px",
                                    }}
                                  >
                                    <button
                                      _ngcontent-txx-c115
                                      className="btn-submit-payment ripple"
                                      type="button"
                                    >
                                      Change Password
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <app-exposure-limit _ngcontent-txx-c115 _nghost-txx-c119>
                <div
                  _ngcontent-txx-c119
                  aria-hidden="true"
                  aria-labelledby="admin-add-user"
                  className="modal fade"
                  id="exposure-limit"
                  role="dialog"
                  tabIndex={-1}
                >
                  <div
                    _ngcontent-txx-c119
                    className="modal-dialog"
                    role="document"
                    style={{ width: "300px" }}
                  >
                    <div _ngcontent-txx-c119 className="modal-content">
                      <div _ngcontent-txx-c119 className="modal-header">
                        <button
                          _ngcontent-txx-c119
                          aria-label="Close"
                          className="close"
                          data-dismiss="modal"
                          style={{ color: "#fff", opacity: 1 }}
                          type="button"
                        >
                          <span _ngcontent-txx-c119 aria-hidden="true">
                            ×
                          </span>
                        </button>
                        <h4 _ngcontent-txx-c119 className="modal-title">
                          Change Exposure Limit
                        </h4>
                      </div>
                      <div _ngcontent-txx-c119 className="modal-body">
                        <div _ngcontent-txx-c119 className="row margin-0">
                          <div
                            _ngcontent-txx-c119
                            className="col-sm-6 username pl-0"
                          >
                            <div _ngcontent-txx-c119 className="form-group">
                              <div _ngcontent-txx-c119 className="box-text">
                                Exposure Limit:{" "}
                                <span _ngcontent-txx-c119>&nbsp;</span>
                                <span _ngcontent-txx-c119 />
                              </div>
                            </div>
                          </div>
                        </div>
                        <form
                          _ngcontent-txx-c119
                          noValidate
                          className="ng-untouched ng-pristine ng-invalid"
                        >
                          <div _ngcontent-txx-c119 className="row margin-0 ">
                            <div
                              _ngcontent-txx-c119
                              className="col-sm-12 username pl-0"
                            >
                              <div _ngcontent-txx-c119 className="form-group">
                                <div _ngcontent-txx-c119 className="box-text">
                                  New
                                </div>
                                <input
                                  _ngcontent-txx-c119
                                  autoComplete="off"
                                  className="form-control ng-untouched ng-pristine ng-invalid"
                                  formcontrolname="exposureLimit"
                                  id="exposure"
                                  onfocus="this.removeAttribute('readonly');"
                                  readOnly
                                  type="text"
                                />
                                <app-validation-message
                                  _ngcontent-txx-c119
                                  _nghost-txx-c62
                                >
                                  <span
                                    _ngcontent-txx-c62
                                    className="validation-message"
                                  ></span>
                                </app-validation-message>
                              </div>
                            </div>
                          </div>
                          <div _ngcontent-txx-c119 className="row margin-0">
                            <div
                              _ngcontent-txx-c119
                              className="col-sm-12 username pl-0"
                            >
                              <div _ngcontent-txx-c119 className="form-group">
                                <div _ngcontent-txx-c119 className="box-text">
                                  Password
                                </div>
                                <input
                                  _ngcontent-txx-c119
                                  autoComplete="current-password"
                                  className="form-control ng-untouched ng-pristine ng-invalid"
                                  formcontrolname="password"
                                  id="password"
                                  onfocus="this.removeAttribute('readonly');"
                                  readOnly
                                  type="password"
                                  defaultValue="password"
                                />
                                <app-validation-message
                                  _ngcontent-txx-c119
                                  _nghost-txx-c62
                                >
                                  <span
                                    _ngcontent-txx-c62
                                    className="validation-message"
                                  ></span>
                                </app-validation-message>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div
                        _ngcontent-txx-c119
                        className="modal-footer"
                        style={{ padding: 0 }}
                      >
                        <button
                          _ngcontent-txx-c119
                          className="btn btn-default"
                          data-dismiss="modal"
                          style={{
                            borderRadius: "0 0 0 10px",
                            width: "50%",
                            padding: "16px 12px",
                          }}
                          type="button"
                        >
                          Close
                        </button>
                        <button
                          _ngcontent-txx-c119
                          className="btn btn-primary"
                          style={{
                            width: "50%",
                            margin: 0,
                            borderRadius: "0 0 10px 0",
                            padding: "16px 12px",
                          }}
                          type="button"
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </app-exposure-limit>
              <app-confirm-box _ngcontent-txx-c115 _nghost-txx-c120>
                <div
                  _ngcontent-txx-c120
                  aria-hidden="true"
                  aria-labelledby="exampleModalLabel"
                  className="modal fade loyaltyConfirm ifModalDarkTheme"
                  data-backdrop="static"
                  data-keyboard="false"
                  id="confirmbox"
                  role="dialog"
                  tabIndex={-1}
                >
                  <div
                    _ngcontent-txx-c120
                    className="modal-dialog"
                    role="document"
                  >
                    <div
                      _ngcontent-txx-c120
                      className="modal-content"
                      style={{ width: "380px" }}
                    >
                      <div _ngcontent-txx-c120 className="modal-header">
                        <h5
                          _ngcontent-txx-c120
                          className="modal-title"
                          id="exampleModalLabel"
                        >
                          <span _ngcontent-txx-c120>Confirm</span>
                        </h5>
                      </div>
                      <div _ngcontent-txx-c120 className="modal-body">
                        {" "}
                        Are you sure you want to apply this change?{" "}
                      </div>
                      <div _ngcontent-txx-c120 className="modal-footer">
                        <button
                          _ngcontent-txx-c120
                          className="btn btn-primary"
                          type="button"
                        >
                          Yes
                        </button>
                        <button
                          _ngcontent-txx-c120
                          className="btn btn-secondary"
                          data-dismiss="modal"
                          type="button"
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </app-confirm-box>
            </app-all-player-account-details>
          </app-player-account-details>
        </div>
      </div>
    </div>
  );
}
