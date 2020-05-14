import React from "react"


import PortfolioPagesHeader from "./PortfolioPagesHeader"
import Footer from "../Footer"
import PopUpBox from "./PopUpBox"
import PortPageNav from "../PortPageNav"
import SocialMediaNav from '../SocialMediaNav'

const images = [
  { id: 1, thumbnail: "/Images/Apparel-Pics/1-1.jpg", fullSize: "/Images/Apparel-Pics/1-2.jpg" },
  { id: 2, thumbnail: "/Images/Apparel-Pics/2-1.jpg" ,fullSize: "/Images/Apparel-Pics/2-2.jpg" },
  { id: 3, thumbnail: "/Images/Apparel-Pics/3-1.jpg" ,fullSize: "/Images/Apparel-Pics/3-2.jpg" },
  { id: 4, thumbnail: "/Images/Apparel-Pics/4-1.jpg" ,fullSize: "/Images/Apparel-Pics/4-2.jpg" },
  { id: 5, thumbnail: "/Images/Apparel-Pics/5-1.jpg" ,fullSize: "/Images/Apparel-Pics/5-2.jpg" },
  { id: 6, thumbnail: "/Images/Apparel-Pics/6-1.jpg" ,fullSize: "/Images/Apparel-Pics/6-2.jpg" },
  { id: 7, thumbnail: "/Images/Apparel-Pics/7-1.jpg" ,fullSize: "/Images/Apparel-Pics/7-2.jpg" },
  { id: 8, thumbnail: "/Images/Apparel-Pics/8-1.jpg" ,fullSize: "/Images/Apparel-Pics/8-2.jpg" },
  { id: 9, thumbnail: "/Images/Apparel-Pics/9-1.jpg" ,fullSize: "/Images/Apparel-Pics/9-2.jpg" },
  { id: 10, thumbnail: "/Images/Apparel-Pics/10-1.jpg" ,fullSize: "/Images/Apparel-Pics/10-2.jpg" },
  { id: 11, thumbnail: "/Images/Apparel-Pics/11-1.jpg" ,fullSize: "/Images/Apparel-Pics/11-2.jpg" },
  { id: 12, thumbnail: "/Images/Apparel-Pics/12-1.jpg" ,fullSize: "/Images/Apparel-Pics/12-2.jpg" },
  { id: 13, thumbnail: "/Images/Apparel-Pics/13-1.jpg" ,fullSize: "/Images/Apparel-Pics/13-2.jpg" },
  { id: 14, thumbnail: "/Images/Apparel-Pics/14-1.jpg" ,fullSize: "/Images/Apparel-Pics/14-2.jpg" },
  { id: 15, thumbnail: "/Images/Apparel-Pics/15-1.jpg" ,fullSize: "/Images/Apparel-Pics/15-2.jpg" },
  { id: 16, thumbnail: "/Images/Apparel-Pics/16-1.jpg" ,fullSize: "/Images/Apparel-Pics/16-2.jpg" },
  { id: 17, thumbnail: "/Images/Apparel-Pics/17-1.jpg" ,fullSize: "/Images/Apparel-Pics/17-2.jpg" },
  { id: 18, thumbnail: "/Images/Apparel-Pics/18-1.jpg" ,fullSize: "/Images/Apparel-Pics/18-2.jpg" },
  { id: 19, thumbnail: "/Images/Apparel-Pics/19-1.jpg" ,fullSize: "/Images/Apparel-Pics/19-2.jpg" },
  { id: 20, thumbnail: "/Images/Apparel-Pics/20-1.jpg" ,fullSize: "/Images/Apparel-Pics/20-2.jpg" },
  { id: 21, thumbnail: "/Images/Apparel-Pics/21-1.jpg" ,fullSize: "/Images/Apparel-Pics/21-2.jpg" },
  { id: 22, thumbnail: "/Images/Apparel-Pics/22-1.jpg" ,fullSize: "/Images/Apparel-Pics/22-2.jpg" },
  { id: 23, thumbnail: "/Images/Apparel-Pics/23-1.jpg" ,fullSize: "/Images/Apparel-Pics/23-2.jpg" },
  { id: 24, thumbnail: "/Images/Apparel-Pics/24-1.jpg" ,fullSize: "/Images/Apparel-Pics/24-2.jpg" },
  { id: 25, thumbnail: "/Images/Apparel-Pics/25-1.jpg" ,fullSize: "/Images/Apparel-Pics/25-2.jpg" },
  { id: 26, thumbnail: "/Images/Apparel-Pics/26-1.jpg" ,fullSize: "/Images/Apparel-Pics/26-2.jpg" },
  { id: 27, thumbnail: "/Images/Apparel-Pics/27-1.jpg" ,fullSize: "/Images/Apparel-Pics/27-2.jpg" },
  { id: 28, thumbnail: "/Images/Apparel-Pics/28-1.jpg" ,fullSize: "/Images/Apparel-Pics/28-2.jpg" },
  { id: 29, thumbnail: "/Images/Apparel-Pics/29-1.jpg" ,fullSize: "/Images/Apparel-Pics/29-2.jpg" },
  { id: 30, thumbnail: "/Images/Apparel-Pics/30-1.jpg" ,fullSize: "/Images/Apparel-Pics/30-2.jpg" },

]

class ApparelPage extends React.Component {
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




export default ApparelPage