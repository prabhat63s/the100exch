import React from "react";
import Layout from "../components/layout/Layout";
import home_banner from "../images/362.png";
import banner_sports from "../images/banner_sports.png";
import banner_casino from "../images/banner_casino.png";
import evolution from "../images/evolution.png";
import ezugi from "../images/ezugi.png";
import aesexy from "../images/aesexy.png";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Layout>
      {/* dynamic content */}

      <div>
        <div _ngcontent-mlh-c6 className="full-wrap">
          <div
            _ngcontent-mlh-c6
            className="col-center gamehall"
            id="centerColumn"
          >
            <app-d4-announcment _ngcontent-mlh-c6 _nghost-mlh-c14>
              {/**/}
            </app-d4-announcment>
            <div _ngcontent-mlh-c6 className="over-wrap" id="overWrap">
              {/**/}
              {/**/}
              <div
                _ngcontent-mlh-c6
                className="promo-banner-wrap active ng-star-inserted"
                id="promoteWrap"
              >
                <div _ngcontent-mlh-c6 className="promo-banner">
                  <ul _ngcontent-mlh-c6 className="slides">
                    <li
                      _ngcontent-mlh-c6
                      className="banner"
                      style={{ display: "block" }}
                    >
                      <a _ngcontent-mlh-c6>
                        <img _ngcontent-mlh-c6 alt src={home_banner} />
                      </a>
                    </li>
                  </ul>
                </div>
                <div _ngcontent-mlh-c6 className="promo-banner-loading" />
              </div>
              <div _ngcontent-mlh-c6 className="homeCasino">
                <div _ngcontent-mlh-c6 className="gamehall-wrap-simple">
                  <a
                    _ngcontent-mlh-c6
                    neua="InPlay Banner"
                    style={{ cursor: "pointer" }}
                  >
                    <dl _ngcontent-mlh-c6 className="on_live" id="onLiveBoard">
                      <dt _ngcontent-mlh-c6>
                        <p _ngcontent-mlh-c6 className="live_icon">
                          <span _ngcontent-mlh-c6 /> LIVE
                        </p>
                      </dt>
                      <dd _ngcontent-mlh-c6 id="onLiveCount_CRICKET">
                        <p _ngcontent-mlh-c6>Cricket</p>
                        <span _ngcontent-mlh-c6>9 </span>
                      </dd>
                      <dd _ngcontent-mlh-c6 id="onLiveCount_SOCCER">
                        <p _ngcontent-mlh-c6>Soccer</p>
                        <span _ngcontent-mlh-c6 id="count">
                          9
                        </span>
                      </dd>
                      <dd _ngcontent-mlh-c6 id="onLiveCount_TENNIS">
                        <p _ngcontent-mlh-c6>Tennis</p>
                        <span _ngcontent-mlh-c6 id="count">
                          0
                        </span>
                      </dd>
                      {/**/}
                      <dd
                        _ngcontent-mlh-c6
                        id="onLiveCount_KABADDI"
                        className="ng-star-inserted"
                      >
                        <p _ngcontent-mlh-c6>Kabaddi</p>
                        <span _ngcontent-mlh-c6 id="count">
                          0
                        </span>
                      </dd>
                    </dl>
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Sports</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img
                      _ngcontent-mlh-c6
                      alt
                      draggable="false"
                      src={banner_sports}
                    />
                  </a>
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    neua="Casino Banner"
                    style={{ cursor: "pointer" }}
                    className="ng-star-inserted"
                  >
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Live Casino</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img
                      _ngcontent-mlh-c6
                      alt
                      draggable="false"
                      src={banner_casino}
                    />
                  </a>
                  {/**/}
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="EVO Banner"
                    style={{ cursor: "pointer" }}
                  >
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Evo</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img
                      _ngcontent-mlh-c6
                      alt
                      draggable="false"
                      src={evolution}
                    />
                  </a>
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="EVO Banner"
                    style={{ cursor: "pointer" }}
                  >
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Ezugi</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 alt draggable="false" src={ezugi} />
                  </a>
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="EVO Banner"
                    style={{ cursor: "pointer" }}
                  >
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Ae Sexy</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 alt draggable="false" src={aesexy} />
                  </a>
                  {/**/}
                  {/**/}
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Jili"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Teenpatti</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img
                      _ngcontent-mlh-c6
                      applazyload
                      className="image is-loaded"
                      src="./the100exch_files/72"
                    />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Jili"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Andar Bahar</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Jili"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Dragon &amp; Tiger</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Jili"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Dice</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Jili"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>7 Up-down</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Jili"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Lucky Number</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Jili"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Ak47</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Jili"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Rummy</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="KINGMAKER"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Dragon-tiger2</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="KINGMAKER"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Sicbo</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="KINGMAKER"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Keno</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="KINGMAKER"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Numbermatka</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="KINGMAKER"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Cardmatka</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="KINGMAKER"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>European Roulette</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="KINGMAKER"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>7 Up 7 Down</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="KINGMAKER"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Jhandi Munda</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="KINGMAKER"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Andar Bahar</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="KINGMAKER"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Cards Hi Lo</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="KINGMAKER"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Blackjack</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="KINGMAKER"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>32 Cards</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="KINGMAKER"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Bonus Dice</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="KINGMAKER"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Monkey King Roulette</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="KINGMAKER"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Teen Patti</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="KINGMAKER"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>5Cardpoker</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="KINGMAKER"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Bingo Roll</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Royal Gaming Live Lobby</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>7 Up Down</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Auto Roulette</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Teen Patti</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Dragon Tiger</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Cricket War</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Baccarat</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Amar Akbar Anthony</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>3 Cards Judgement</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Casino War</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Worli Matka</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Bollywood Casino</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Lottery</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Book Cricket</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Highlow</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Muflis Teen Patti</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>One Day Teenpatti</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Lucky7</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Akbar Romeo Walter</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>2 Cards Teenpatti</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Dragon Tiger One Day</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Dragon Tiger Lion</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Side Bet City</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Trio</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>2 Card Teen Patti One Day </dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Center Card </dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Roulette</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr 7 Up Down</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Auto Roulette</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Teen Patti</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Dragon Tiger</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Cricket War</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Baccarat</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Amar Akbar Anthony</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr 3 Cards Judgement</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Casino War</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Worli Matka</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Bollywood Casino</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Lottery</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Book Cricket</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Highlow</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Muflis Teen Patti</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Dragon Tiger One Day Vr</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>One Day Teenpatti Vr</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr 29 Card Baccarat</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr 2 Cards Teenpatti</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr 32 Cards</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Andar Bahar</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Akbar Romeo Walter</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Casino Meter</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Dragon Tiger Lion</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Foot Ball Studio</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Lucky7</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Movie Casino</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Poker</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Race To 17</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Race T20</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Side Bet City</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Super Over</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr Trio</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Vr The Trap</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>2 Card Teen Patti One Day Vr </dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Center Card One Day Vr</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Muflis Teenpatti One Day Vr</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Super Over One Day Vr</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Center Card Vr</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>High Card Vr</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Queen Race Vr</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Royal"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Sicbo Exclusive</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="SUPERSPADE"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Amar Akbar Anthony</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="SUPERSPADE"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Baccarat</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="SUPERSPADE"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Dragon Tiger</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="SUPERSPADE"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Higher-lower</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="SUPERSPADE"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Lucky 7</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="SUPERSPADE"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Roulette</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="SUPERSPADE"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Teenpatti 2020</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Live Teenpatti</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Andar Bahar</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Poker</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>32 Cards Casino</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Teenpatti T20</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Teenpatti One-day (V)</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Andar Bahar (V)</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Teenpatti T20 (V)</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Poker (V)</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>32 Cards Casino (V)</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Six Player Poker (V)</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>7 Up &amp; Down</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Amar Akbar Anthony</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Dragon Tiger</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Hi Low (V)</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Matka (V)</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>7 Up &amp; Down (V)</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Hi Low</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Worli Matka</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Six Player Poker</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Race 20-20</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Bollywood Casino</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Roulette</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Sicbo</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Baccarat</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Poker 20-20</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Muflis Teenpatti</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Trio</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>2 Cards Teenpatti</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Teenpatti Test</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Queen</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Dream Catcher</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Casino War</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>29 Card Baccarat</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Teenpatti Open</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Race To 17</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Super Over</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Casino Meter</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>The Trap</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Fortune Wheel</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Coin Toss</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Limbo</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Slot Game</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Rock Paper Scissors</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Cricket</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Classic Dice</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Mines</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="AURA"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>3 Cards Judgement</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Goa's Andar Bahar</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Baccarat</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Teen Patti</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Dragon Tiger</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Akbar Romeo Walter</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>32 Cards</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Lucky 7</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Andar Bahar</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Teen Patti Face Off</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Roulette</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Rng Lucky 7</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Rng Casino Queen 2020</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Rng Dragon Tiger 2020</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Rng King Race</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Rng Baccarat</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Rng Casino Queen</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Rng 3 Player Teen Patti</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Rng Teen Patti 2020</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Rng Joker</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Rng Akbar Romeo Walter</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Rng 32 Cards</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Rng Teen Patti</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Rng Dragon Tiger</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Teen Patti 2020</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Classic Andar Bahar</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                  {/**/}
                  <a
                    _ngcontent-mlh-c6
                    className="entrance-half ng-star-inserted"
                    neua="32Cards Banner"
                    style={{ cursor: "pointer" }}
                    id="Supernowa"
                  >
                    {/**/}
                    <dl _ngcontent-mlh-c6 className="entrance-title">
                      <dt _ngcontent-mlh-c6>Muflis Teenpatti</dt>
                      <dd _ngcontent-mlh-c6>Play Now</dd>
                    </dl>
                    <img _ngcontent-mlh-c6 applazyload className="image" />
                  </a>
                </div>
              </div>
            </div>
            {/**/}
            {/* <app-d4-footer
              _ngcontent-mlh-c6
              _nghost-mlh-c15
              className="ng-star-inserted"
            >
              <div _ngcontent-mlh-c15 className="footer">
                <div
                  _ngcontent-mlh-c15
                  className="support-wrap"
                  id="supportWrap"
                />
                <div
                  _ngcontent-mlh-c15
                  className="browser-wrap ng-star-inserted"
                >
                  <img
                    _ngcontent-mlh-c15
                    src="./the100exch_files/transparent(1).gif"
                  />
                  <br _ngcontent-mlh-c15 /> Our website works best in the newest
                  and last prior version of these browsers:{" "}
                  <br _ngcontent-mlh-c15 />
                  Google Chrome. Firefox{" "}
                </div>
                <ul _ngcontent-mlh-c15 className="policy-link ng-star-inserted">
                  <li _ngcontent-mlh-c15>
                    <a _ngcontent-mlh-c15>Privacy Policy</a>
                  </li>
                  <li _ngcontent-mlh-c15>
                    <a _ngcontent-mlh-c15>Terms and Conditions</a>
                  </li>
                  <li _ngcontent-mlh-c15>
                    <a _ngcontent-mlh-c15>Rules and Regulations</a>
                  </li>
                  <li _ngcontent-mlh-c15>
                    <a _ngcontent-mlh-c15>KYC</a>
                  </li>
                  <li _ngcontent-mlh-c15>
                    <a _ngcontent-mlh-c15>Responsible Gaming</a>
                  </li>
                  <li _ngcontent-mlh-c15>
                    <a _ngcontent-mlh-c15>About Us</a>
                  </li>
                  <li _ngcontent-mlh-c15>
                    <a _ngcontent-mlh-c15>Self-exclusion Policy</a>
                  </li>
                  <li _ngcontent-mlh-c15>
                    <a _ngcontent-mlh-c15>Underage Policy</a>
                  </li>
                </ul>
              </div>
            </app-d4-footer> */}
          </div>
        </div>
        {/**/}

        {/* <app-multiple-window _ngcontent-mlh-c6 _nghost-mlh-c17>
          <div
            _ngcontent-mlh-c17
            aria-hidden="true"
            aria-labelledby="exampleModalLabel"
            className="modal fade"
            data-backdrop="static"
            data-keyboard="false"
            id="multipleTab"
            role="dialog"
            tabIndex={-1}
          >
            <div
              _ngcontent-mlh-c17
              className="modal-dialog"
              role="document"
              style={{ top: "20%" }}
            >
              <div
                _ngcontent-mlh-c17
                className="modal-content"
                style={{ width: "450px !important", height: 150 }}
              >
                <div _ngcontent-mlh-c17 className="modal-header">
                  <h5
                    _ngcontent-mlh-c17
                    className="modal-title"
                    id="exampleModalLabel"
                  >
                    Alert
                  </h5>
                </div>
                <div
                  _ngcontent-mlh-c17
                  className="modal-body"
                  style={{ padding: "40px 10px" }}
                >
                  {" "}
                  We request you to play games in a single tab.{" "}
                </div>
              </div>
            </div>
          </div>
        </app-multiple-window> */}
        {/* <app-coming-soon _ngcontent-mlh-c6 _nghost-mlh-c18>
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
                    alt
                    src="./the100exch_files/ComingSoonPopup.svg"
                    srcSet
                    style={{ width: "100%", borderRadius: 14 }}
                    className="ng-star-inserted"
                  />
                </div>
              </div>
            </div>
          </div>
        </app-coming-soon> */}
        {/* <app-low-bal-currency-info _ngcontent-mlh-c6 _nghost-mlh-c19>
          <div
            _ngcontent-mlh-c19
            aria-hidden="true"
            aria-labelledby="staticBackdropLabel"
            className="modal fade"
            data-backdrop="static"
            data-keyboard="false"
            role="dialog"
            tabIndex={-1}
            id="curencyInfo"
          >
            <div
              _ngcontent-mlh-c19
              className="modal-dialog ranged3"
              role="document"
              style={{ top: 0 }}
            >
              <div _ngcontent-mlh-c19 className="modal-content popimgcoin">
                <div _ngcontent-mlh-c19 className="modal-header">
                  <button
                    _ngcontent-mlh-c19
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                  >
                    <img
                      _ngcontent-mlh-c19
                      src="./the100exch_files/removeicon.png"
                      width={40}
                    />
                  </button>
                </div>
                <div _ngcontent-mlh-c19 className="modal-body bodypa">
                  <h5
                    _ngcontent-mlh-c19
                    style={{
                      marginBottom: 26,
                      fontSize: 22,
                      color: "#fff",
                      fontFamily: '"Oswald", sans-serif',
                    }}
                  >
                    Please Note{" "}
                  </h5>
                  <h4
                    _ngcontent-mlh-c19
                    style={{ fontSize: 26, color: "#fff" }}
                  >
                    <span _ngcontent-mlh-c19 style={{ color: "#f8cc00" }}>
                      1 point{" "}
                    </span>{" "}
                    in live casino ={" "}
                    <span _ngcontent-mlh-c19 style={{ color: "#f8cc00" }}>
                      100 coins
                    </span>
                  </h4>
                  <h4
                    _ngcontent-mlh-c19
                    style={{ color: "#fff", marginTop: 20 }}
                  >
                    Please bet accordingly.
                  </h4>
                </div>
                <div _ngcontent-mlh-c19 className="modal-footer footermm">
                  <button
                    _ngcontent-mlh-c19
                    className="btn btn-primary"
                    type="button"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            _ngcontent-mlh-c19
            aria-hidden="true"
            aria-labelledby="staticBackdropLabel"
            className="modal fade"
            data-backdrop="static"
            data-keyboard="false"
            role="dialog"
            tabIndex={-1}
            id="lowbalance"
          >
            <div
              _ngcontent-mlh-c19
              className="modal-dialog ranged3"
              role="document"
            >
              <div _ngcontent-mlh-c19 className="modal-content popimgcoin">
                <div _ngcontent-mlh-c19 className="modal-header">
                  <button
                    _ngcontent-mlh-c19
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                  >
                    <img
                      _ngcontent-mlh-c19
                      src="./the100exch_files/removeicon.png"
                      width={40}
                    />
                  </button>
                </div>
                <div _ngcontent-mlh-c19 className="modal-body bodypabal">
                  <h5
                    _ngcontent-mlh-c19
                    style={{
                      marginBottom: 26,
                      fontSize: 22,
                      color: "#fff",
                      fontFamily: '"Oswald", sans-serif',
                    }}
                  >
                    Please Note{" "}
                  </h5>
                  <h4
                    _ngcontent-mlh-c19
                    style={{ fontSize: 26, color: "#fff" }}
                  >
                    Balance must be more than 100.
                  </h4>
                </div>
                <div _ngcontent-mlh-c19 className="modal-footer footermm">
                  <button
                    _ngcontent-mlh-c19
                    className="btn btn-primary"
                    type="button"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            _ngcontent-mlh-c19
            aria-hidden="true"
            aria-labelledby="staticBackdropLabel"
            className="modal fade"
            data-backdrop="static"
            data-keyboard="false"
            role="dialog"
            tabIndex={-1}
            id="coinslider"
          >
            <div
              _ngcontent-mlh-c19
              className="modal-dialog ranged3"
              role="document"
              style={{ top: "0%" }}
            >
              <div _ngcontent-mlh-c19 className="modal-content popimgcoin">
                <div _ngcontent-mlh-c19 className="modal-header">
                  <button
                    _ngcontent-mlh-c19
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                  >
                    <img
                      _ngcontent-mlh-c19
                      src="./the100exch_files/removeicon.png"
                      width={40}
                    />
                  </button>
                </div>
                <h2 _ngcontent-mlh-c19 className="boxMain" />
                <div _ngcontent-mlh-c19 className="modal-body bodypabal">
                  <div
                    _ngcontent-mlh-c19
                    bis_skin_checked={1}
                    className="available-wrap"
                  >
                    <h4 _ngcontent-mlh-c19 className="text-left">
                      <span _ngcontent-mlh-c19>Main Balance</span>
                      <label _ngcontent-mlh-c19 id="commonPlayerBalance" />
                    </h4>
                    <h4 _ngcontent-mlh-c19 className="text-right">
                      <span _ngcontent-mlh-c19 id="commonVendorBalanceTitle">
                        Wallet Balance
                      </span>
                      <label
                        _ngcontent-mlh-c19
                        id="commonPlayerVendorBalance"
                      />
                    </h4>
                  </div>
                  <div _ngcontent-mlh-c19 className="slidecontainer">
                    <input
                      _ngcontent-mlh-c19
                      id="coinval"
                      style={{ fontWeight: "bold", color: "black" }}
                      type="number"
                      className="ng-untouched ng-pristine ng-valid"
                    />
                    <div _ngcontent-mlh-c19 className="rangeBox">
                      <div _ngcontent-mlh-c19 className="inBox">
                        <span
                          _ngcontent-mlh-c19
                          className="ripple"
                          style={{ cursor: "pointer" }}
                        >
                          0
                        </span>
                        <input
                          _ngcontent-mlh-c19
                          className="slider ng-untouched ng-pristine ng-valid"
                          min={0}
                          type="range"
                          max="null"
                        />
                        <span
                          _ngcontent-mlh-c19
                          className="ripple"
                          style={{ cursor: "pointer" }}
                        >
                          Max
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div _ngcontent-mlh-c19 className="modal-footer footermm">
                  <button
                    _ngcontent-mlh-c19
                    className="btn btn-primary"
                    type="button"
                  >
                    Transfer and Enter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </app-low-bal-currency-info> */}
        {/* <app-social-icon _ngcontent-mlh-c6 _nghost-mlh-c20>
        </app-social-icon>         */}
        {/* <app-toastr _ngcontent-mlh-c0 _nghost-mlh-c1>
          <div
            _ngcontent-mlh-c1
            aria-hidden="true"
            className="toast app-error hide"
          >
            <i
              _ngcontent-mlh-c1
              aria-hidden="true"
              className="fa fa-exclamation-circle iocine"
            />
            <span _ngcontent-mlh-c1 className="error-msg msga" />
            <span
              _ngcontent-mlh-c1
              aria-role="button"
              className="close tosclose"
              tabIndex={0}
            >
              ×
            </span>
          </div>
          <div
            _ngcontent-mlh-c1
            aria-hidden="true"
            className="toast app-success hide"
          >
            <i
              _ngcontent-mlh-c1
              aria-hidden="true"
              className="fa fa-check iocinesu"
            />
            <span _ngcontent-mlh-c1 className="success-msg msga" />
            <span
              _ngcontent-mlh-c1
              aria-role="button"
              className="close tosclose"
              tabIndex={0}
            >
              ×
            </span>
          </div>
          <div
            _ngcontent-mlh-c1
            aria-hidden="true"
            className="toast app-warning hide"
          >
            <i
              _ngcontent-mlh-c1
              aria-hidden="true"
              className="fa fa-check iocinewrn"
            />
            <span _ngcontent-mlh-c1 className="warning-msg msga" />
            <span
              _ngcontent-mlh-c1
              aria-role="button"
              className="close tosclose"
              tabIndex={0}
            >
              ×
            </span>
          </div>
        </app-toastr> */}
        {/* <div
          _ngcontent-mlh-c0
          aria-hidden="true"
          aria-labelledby="admin-add-user"
          className="modal fade"
          id="demodepositalert"
          role="dialog"
          tabIndex={-1}
        >
          <div
            _ngcontent-mlh-c0
            className="modal-dialog modalMedimumSz demodeposit ifModalDarkTheme"
            role="document"
          >
            <div _ngcontent-mlh-c0 className="modal-content">
              <div _ngcontent-mlh-c0 className="modal-body">
                <span _ngcontent-mlh-c0>
                  <i
                    _ngcontent-mlh-c0
                    aria-hidden="true"
                    className="fa fa-info-circle"
                  />{" "}
                  Alert
                </span>
                <p _ngcontent-mlh-c0>This is a demo ID. Please Sign Up First</p>
                <button _ngcontent-mlh-c0 className="btn btn-dark">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div> */}

        <Footer />
      </div>
    </Layout>
  );
}