import React from 'react'

class CommissionWorkPage extends React.Component {
  
    
    render() {
        return (
            <React.Fragment>
             <div
             onLoad={four} 
             className='background headerPic'>
                 <div class="row">
  <div class="picColumn thumbPics">
    <img src="/IMAGES/Commission-Work-Pics/1.jpg"></img>
    <img src="rocks.jpg"></img>
    <img src="falls2.jpg"></img>
    <img src="paris.jpg"></img>
    <img src="nature.jpg"></img>
    <img src="mist.jpg"></img>
    <img src="paris.jpg"></img>
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