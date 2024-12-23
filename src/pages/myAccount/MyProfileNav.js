import React from "react";

export default function MyProfileNav() {
  return (
    <div _ngcontent-txx-c74 className="col-left">
      <app-sidebar-profile _ngcontent-txx-c74 className="showsidebar">
        <app-d4-sidebar-profile _nghost-txx-c78 className="ng-star-inserted">
          <div
            _ngcontent-txx-c78
            className="sub_path"
            id="subMenu"
            style={{ height: "calc(100% - 0px)" }}
          >
            <div _ngcontent-txx-c78 className="path">
              <a _ngcontent-txx-c78 className="path-back">
                ...
              </a>
              <ul _ngcontent-txx-c78 id="pathBackUl">
                <li _ngcontent-txx-c78 className>
                  <a _ngcontent-txx-c78 id="pathBackHome">
                    My Account{" "}
                  </a>
                </li>
              </ul>
            </div>
            <ul _ngcontent-txx-c78 className="menu-list" id="listBoard">
              <li
                _ngcontent-txx-c78
                style={{ display: "list-item" }}
                className="ng-star-inserted"
              >
                <a
                  _ngcontent-txx-c78
                  style={{ cursor: "pointer" }}
                  type="GROUP"
                  className="select"
                  href="/profile/account-details"
                >
                  My Profile
                </a>
              </li>

              <li
                _ngcontent-txx-c78
                style={{ display: "list-item" }}
                className="ng-star-inserted"
              >
                <a
                  _ngcontent-txx-c78
                  style={{ cursor: "pointer" }}
                  type="GROUP"
                  href="/profile/balance-overview"
                >
                  Balance Overview
                </a>
              </li>

              <li
                _ngcontent-txx-c78
                style={{ display: "list-item" }}
                className="ng-star-inserted"
              >
                <a
                  _ngcontent-txx-c78
                  style={{ cursor: "pointer" }}
                  type="GROUP"
                  href="/profile/account-statement"
                >
                  Account Statement
                </a>
              </li>

              <li
                _ngcontent-txx-c78
                style={{ display: "list-item" }}
                className="ng-star-inserted"
              >
                <a
                  _ngcontent-txx-c78
                  style={{ cursor: "pointer" }}
                  type="GROUP"
                  href="/profile/bet-history"
                >
                  Bets History
                </a>
              </li>

              <li
                _ngcontent-txx-c78
                style={{ display: "list-item" }}
                className="ng-star-inserted"
              >
                <a
                  _ngcontent-txx-c78
                  style={{ cursor: "pointer" }}
                  type="GROUP"
                  href="/profile/profit-loss"
                >
                  Profit And Loss
                </a>
              </li>

              <li
                _ngcontent-txx-c78
                style={{ display: "list-item" }}
                className="ng-star-inserted"
              >
                <a
                  _ngcontent-txx-c78
                  style={{ cursor: "pointer" }}
                  type="GROUP"
                  href="/profile/activity-log"
                >
                  Activity Log
                </a>
              </li>

              <li
                _ngcontent-txx-c78
                style={{ display: "list-item" }}
                className="ng-star-inserted"
              >
                <a
                  _ngcontent-txx-c78
                  style={{ cursor: "pointer" }}
                  type="GROUP"
                  href="/profile/notification"
                >
                  Notification History
                </a>
              </li>
            </ul>
          </div>
        </app-d4-sidebar-profile>
      </app-sidebar-profile>
    </div>
  );
}
