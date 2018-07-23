import React from 'react';
import styleTitle from '../components/Title.css';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleName: 'Github repositiories search',
        }
    }

    render() {
        return (
            <div className={styleTitle.titleContainer}>
                <div className={styleTitle.title}>{this.state.titleName}</div>
            </div>
        )
    }

}

export default Title;