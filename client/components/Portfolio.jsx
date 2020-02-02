import React from 'react'

class Portfolio extends React.Component {
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
            <div
            style={this.state.style}
            onMouseEnter={this.fade}>
            <img src='IMAGES/Portfolio-Pics-Logo.jpg' className='portfolioPic'></img>
            </div>
            </React.Fragment>
        )
    }
}


export default Portfolio