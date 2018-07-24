import React from 'react';
import style from '../components/Repository.css';


class Repository extends React.Component {
    render() {
        return (
            <div className={style.repo}>
                <img className={style.avatar} src={this.props.repo.owner.avatar_url} style={{maxWidth: '100px'}}/>

                <div className={style.description}>
                    <div><span className={style.divTitle}>Repo name: </span>{this.props.repo.name}</div>
                    <div><span className={style.divTitle}>URL: </span><a href={this.props.repo.html_url}
                                                                         target="_blank">{this.props.repo.html_url}</a>
                    </div>
                    <div><span className={style.divTitle}>Technology: </span>{this.props.repo.language}</div>
                    <div><span className={style.divTitle}>Description: </span>{this.props.repo.description}</div>
                    <div><span className={style.divTitle}>Created at: </span>{this.props.repo.created_at}</div>
                </div>

            </div>
        );
    }
}

export default Repository;