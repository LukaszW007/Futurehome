import React from 'react';
import styleLogo from '../components/Logo.css';

// import pictLogo from '../pictures/logo.png';

class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <img className={styleLogo.logoSize} src={require('../pictures/logo.png')} alt="logo"/>
            </div>
        )
    }

}

export default Logo;