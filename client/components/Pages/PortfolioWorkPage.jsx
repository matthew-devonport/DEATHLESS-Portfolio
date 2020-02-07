import React from "react";
import PortfolioPagesHeader from "./PortfolioPagesHeader";
import Footer from "../Footer";

class PortfolioWorkPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="pageBackPic">
          <PortfolioPagesHeader />
          <div className="picRow">
            <div className="picColumn">
              <img src="/IMAGES/Portfolio-Work-Pics/1-1.jpg"></img>
              <img src="/IMAGES/Portfolio-Work-Pics/2-1.jpg"></img>
              <img src="/IMAGES/Portfolio-Work-Pics/3-1.jpg"></img>
              <img src="/IMAGES/Portfolio-Work-Pics/4-1.jpg"></img>
              <img src="/IMAGES/Portfolio-Work-Pics/5-1.jpg"></img>
              <img src="/IMAGES/Portfolio-Work-Pics/6-1.jpg"></img>
            </div>
            <div className="picColumn">
              <img src="/IMAGES/Portfolio-Work-Pics/7-1.jpg"></img>
              <img src="/IMAGES/Portfolio-Work-Pics/8-1.jpg"></img>
              <img src="/IMAGES/Portfolio-Work-Pics/9-1.jpg"></img>
              <img src="/IMAGES/Portfolio-Work-Pics/10-1.jpg"></img>
              <img src="/IMAGES/Portfolio-Work-Pics/11-1.jpg"></img>
              <img src="/IMAGES/Portfolio-Work-Pics/12-1.jpg"></img>
            </div>
            <div className="picColumn">
              <img src="/IMAGES/Portfolio-Work-Pics/13-1.jpg"></img>
              <img src="/IMAGES/Portfolio-Work-Pics/14-1.jpg"></img>
              <img src="/IMAGES/Portfolio-Work-Pics/15-1.jpg"></img>
              <img src="/IMAGES/Portfolio-Work-Pics/16-1.jpg"></img>
              <img src="/IMAGES/Portfolio-Work-Pics/17-1.jpg"></img>
              <img src="/IMAGES/Portfolio-Work-Pics/18-1.jpg"></img>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default PortfolioWorkPage;
