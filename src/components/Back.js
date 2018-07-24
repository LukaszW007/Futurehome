import React from 'react';
import style from '../components/BackBtn.css';


class BackButton extends React.Component {
    render() {
        return (
            <div className={style.backBtn}>
                <a href={"javascript:scroll(0,0)"}><i className="fas fa-chevron-up"/></a>
            </div>
        );
    }
}

export default BackButton;