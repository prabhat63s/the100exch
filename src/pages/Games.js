import React from "react";
import fantasyGamesBanner from "../images/fantasy-Games-Banner.png";
import playerBattle from "../images/Player-Battle.png";
import Header from "../components/Header";

export default function Games() {
  return (
    <>
      <Header />
      <app-fantasy-gamelist _nghost-rcc-c13>
        {/**/}
        {/**/}
        <div _ngcontent-rcc-c13 className="landingpage bgColor newGamea">
          <div _ngcontent-rcc-c13 className="livescro maindiv">
            <div _ngcontent-rcc-c13 className="headerimg show_image">
              <img _ngcontent-rcc-c13 alt="" src={fantasyGamesBanner} srcSet />
            </div>
            <div _ngcontent-rcc-c13 className="container maibody">
              {/**/}
              <div _ngcontent-rcc-c13 className="col-sm-6">
                <div _ngcontent-rcc-c13 className="imagwitex">
                  <img
                    _ngcontent-rcc-c13
                    className="fadeinweb"
                    src={playerBattle}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/**/}
        </div>
        {/**/}
      </app-fantasy-gamelist>
    </>
  );
}
