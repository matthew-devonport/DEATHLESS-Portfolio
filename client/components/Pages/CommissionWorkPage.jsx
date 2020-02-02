import React from 'react'

class CommissionWorkPage extends React.Component {
  
    
    render() {
        return (
            <React.Fragment>
             <div
             onLoad={four} 
             className='background headerPic'>
                 <div class="picRow">
  <div class="picColumn">
    <img src="/IMAGES/Commission-Work-Pics/1-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/2-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/3-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/4-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/5-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/6-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/7-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/8-1.jpg" className="thumbPics"></img>
  </div>
  </div>
 
             </div>

            </React.Fragment>
        )
    }
}

var elements = document.getElementsByClassName("picColumn");
var i;
function four() {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.flex = "25%";
    }
}

export default CommissionWorkPage