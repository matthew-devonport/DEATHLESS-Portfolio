import React from "react"


import PortfolioPagesHeader from "./PortfolioPagesHeader"
import Footer from "../Footer"
import PopUpBox from "./PopUpBox"
import PortPageNav from "../PortPageNav"
import SocialMediaNav from '../SocialMediaNav'

const images = [
  { id: 1, thumbnail: "/IMAGES/Portfolio-Work-Pics/1-1.jpg", fullSize: "/IMAGES/Portfolio-Work-Pics/1-2.jpg" },
  { id: 2, thumbnail: "/IMAGES/Portfolio-Work-Pics/2-1.jpg" ,fullSize: "/IMAGES/Portfolio-Work-Pics/2-2.jpg" },
  { id: 3, thumbnail: "/IMAGES/Portfolio-Work-Pics/3-1.jpg" ,fullSize: "/IMAGES/Portfolio-Work-Pics/3-2.jpg" },
  { id: 4, thumbnail: "/IMAGES/Portfolio-Work-Pics/4-1.jpg" ,fullSize: "/IMAGES/Portfolio-Work-Pics/4-2.jpg" },
  { id: 5, thumbnail: "/IMAGES/Portfolio-Work-Pics/5-1.jpg" ,fullSize: "/IMAGES/Portfolio-Work-Pics/5-2.jpg" },
  { id: 6, thumbnail: "/IMAGES/Portfolio-Work-Pics/6-1.jpg" ,fullSize: "/IMAGES/Portfolio-Work-Pics/6-2.jpg" },
  { id: 7, thumbnail: "/IMAGES/Portfolio-Work-Pics/7-1.jpg" ,fullSize: "/IMAGES/Portfolio-Work-Pics/7-2.jpg" },
  { id: 8, thumbnail: "/IMAGES/Portfolio-Work-Pics/8-1.jpg" ,fullSize: "/IMAGES/Portfolio-Work-Pics/8-2.jpg" },
  { id: 9, thumbnail: "/IMAGES/Portfolio-Work-Pics/9-1.jpg" ,fullSize: "/IMAGES/Portfolio-Work-Pics/9-2.jpg" },
  { id: 10, thumbnail: "/IMAGES/Portfolio-Work-Pics/10-1.jpg" ,fullSize: "/IMAGES/Portfolio-Work-Pics/10-2.jpg" },
  { id: 11, thumbnail: "/IMAGES/Portfolio-Work-Pics/11-1.jpg" ,fullSize: "/IMAGES/Portfolio-Work-Pics/11-2.jpg" },
  { id: 12, thumbnail: "/IMAGES/Portfolio-Work-Pics/12-1.jpg" ,fullSize: "/IMAGES/Portfolio-Work-Pics/12-2.jpg" },
  { id: 13, thumbnail: "/IMAGES/Portfolio-Work-Pics/13-1.jpg" ,fullSize: "/IMAGES/Portfolio-Work-Pics/13-2.jpg" },
  { id: 14, thumbnail: "/IMAGES/Portfolio-Work-Pics/14-1.jpg" ,fullSize: "/IMAGES/Portfolio-Work-Pics/14-2.jpg" },
  { id: 15, thumbnail: "/IMAGES/Portfolio-Work-Pics/15-1.jpg" ,fullSize: "/IMAGES/Portfolio-Work-Pics/15-2.jpg" },
  { id: 16, thumbnail: "/IMAGES/Portfolio-Work-Pics/16-1.jpg" ,fullSize: "/IMAGES/Portfolio-Work-Pics/16-2.jpg" },
  { id: 17, thumbnail: "/IMAGES/Portfolio-Work-Pics/17-1.jpg" ,fullSize: "/IMAGES/Portfolio-Work-Pics/17-2.jpg" },
  { id: 18, thumbnail: "/IMAGES/Portfolio-Work-Pics/18-1.jpg" ,fullSize: "/IMAGES/Portfolio-Work-Pics/18-2.jpg" },

]

class PortfolioWorkPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      popupImageId: null,
    }
  }

  togglePopup(id = null) {
    this.setState((state, props) => ({
      popupImageId: id,
    }))
  }

  render() {
    return (
      <React.Fragment>
        <div className="headerPic">
        <PortPageNav />
        <SocialMediaNav />
          <PortfolioPagesHeader />
          <div className="portfolioPics">
            {images.map((image, index) => {
              return (
                <a
                  key={image.id}
                  className="pic"
                  onClick={() => this.togglePopup(image.id)}
                >
                  <img src={image.thumbnail}></img>
                </a>
              )
            })}
          </div> 
        <Footer />
        </div>
        {this.state.popupImageId !== null && (
          <PopUpBox
            togglePopup={() => this.togglePopup(null)} 
          >
            <div>
              <img
                src={
                  images.find(image => image.id === this.state.popupImageId).fullSize
                }
                className="picOne"
              ></img>
            </div>
          </PopUpBox>
        )}
      </React.Fragment>
    )
  }
}

export default PortfolioWorkPage