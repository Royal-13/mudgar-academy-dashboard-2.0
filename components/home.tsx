import React from "react";
import Hero from "./hero";
import Section1 from "./section1";
import HomeTable from "./hometable";
type Props = {};
function HomePage({}: Props) {
  return (
    <>
      <div className="main-wrapper">
        <Hero />
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-md-12">
                <Section1 />
                <HomeTable/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default HomePage;
