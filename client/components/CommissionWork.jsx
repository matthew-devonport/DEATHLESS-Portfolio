import React from 'react'

class CommissionWork extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
        }

    }

    fade= () => {
        this.setState({
            style: {
                widith: '100%',
                height: 'auto',
                backgroundColor: 'black', 
            }
        })

    }
    
    render() {
        return (
            <React.Fragment>
              <div id="commissionWork"
               style={this.state.style}
              onMouseEnter={this.fade}>
            <img src='IMAGES/Commission-Pics-Logo.jpg' className='commissionPic'></img>   
            </div>
            </React.Fragment>
        )
    }
}




export default CommissionWork