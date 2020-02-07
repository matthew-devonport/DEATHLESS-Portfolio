import React from "react";
import PagesHeader from "./PagesHeader";
import Footer from "../Footer";
import PopUpBox from "./PopUpBox";

const images = [];
for (var i = 1; i < 25; i++) {
  images.push({
    id: i,
    thumbnail: `/IMAGES/Commission-Work-Pics/${i}-1.jpg`,
    fullSize: `/IMAGES/Commission-Work-Pics/${i}-2.jpg`
  });
}

class CommissionWorkPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popupImageId: null
    };
  }

  togglePopup(id = null) {
    this.setState((state, props) => ({
      popupImageId: id
    }));
  }

  render() {
    return (
      <React.Fragment>
        <div className="pageBackPic">
          <PagesHeader />
          <div className="pics">
            {images.map((image, index) => {
              return (
                <a
                  key={image.id}
                  className="pic"
                  onClick={() => this.togglePopup(image.id)}
                >
                  <img src={image.thumbnail}></img>
                </a>
              );
            })}
          </div>
        </div>
        <Footer />
        {this.state.popupImageId !== null && (
          <PopUpBox togglePopup={() => this.togglePopup(null)}>
            <div>
              <img
                src={
                  images.find(image => image.id === this.state.popupImageId)
                    .fullSize
                }
                className="picOne"
              ></img>
            </div>
          </PopUpBox>
        )}
      </React.Fragment>
    );
  }
}

export default CommissionWorkPage;
