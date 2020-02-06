import React from 'react'
import PagesHeader from './PagesHeader'
import Footer from '../Footer'
import PopUpBox from './PopUpBox'

class CommissionWorkPage extends React.Component {
    constructor(props){  
        super(props);  
        this.state = { showPopup: false };  
        }  
        
          togglePopup(content='') {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });
        this.popupContent = content  
         }  



    render() {
        return (
            <React.Fragment>
              
             <div className='pageBackPic'>
                 <PagesHeader />
                 <div className="picRow">
  <div className="picColumn">
    <a onClick={() => this.togglePopup(this.picOne)}><img src="/IMAGES/Commission-Work-Pics/1-1.jpg"></img></a>
    <img src="/IMAGES/Commission-Work-Pics/2-1.jpg"></img>
    <img src="/IMAGES/Commission-Work-Pics/3-1.jpg"></img>
    <img src="/IMAGES/Commission-Work-Pics/4-1.jpg"></img>
    <img src="/IMAGES/Commission-Work-Pics/5-1.jpg"></img>
    <img src="/IMAGES/Commission-Work-Pics/6-1.jpg"></img>
    </div>
    <div className="picColumn">
    <img src="/IMAGES/Commission-Work-Pics/7-1.jpg"></img>
    <img src="/IMAGES/Commission-Work-Pics/8-1.jpg"></img>
    <img src="/IMAGES/Commission-Work-Pics/9-1.jpg"></img>
    <img src="/IMAGES/Commission-Work-Pics/10-1.jpg"></img>
    <img src="/IMAGES/Commission-Work-Pics/11-1.jpg"></img>
    <img src="/IMAGES/Commission-Work-Pics/12-1.jpg"></img>
    </div>
    <div className="picColumn">
    <img src="/IMAGES/Commission-Work-Pics/13-1.jpg"></img>
    <img src="/IMAGES/Commission-Work-Pics/14-1.jpg"></img>
    <img src="/IMAGES/Commission-Work-Pics/15-1.jpg"></img>
    <img src="/IMAGES/Commission-Work-Pics/16-1.jpg"></img>
    <img src="/IMAGES/Commission-Work-Pics/17-1.jpg"></img>
    <img src="/IMAGES/Commission-Work-Pics/18-1.jpg"></img>
    </div>
    <div className="picColumn">
    <img src="/IMAGES/Commission-Work-Pics/19-1.jpg"></img>
    <img src="/IMAGES/Commission-Work-Pics/20-1.jpg"></img>
    <img src="/IMAGES/Commission-Work-Pics/21-1.jpg"></img>
    <img src="/IMAGES/Commission-Work-Pics/22-1.jpg"></img>
    <img src="/IMAGES/Commission-Work-Pics/23-1.jpg"></img>
    <img src="/IMAGES/Commission-Work-Pics/24-1.jpg"></img>
  </div>
  </div>
    </div> 
    <Footer />
    {this.state.showPopup && <PopUpBox content={this.popupContent} togglePopup={this.togglePopup}
     />}
            </React.Fragment>
        )
    } 
    


picOne = (
    <div>
    <img src="IMAGES/Commission-Work-Pics/1-2.jpg" className="picOne"></img>    
    </div>
)    
}


export default CommissionWorkPage