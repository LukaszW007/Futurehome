import React from 'react';


class Repository extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.repo.owner.avatar_url} style={{maxWidth: '100px'}}/>

                <div><div>{this.props.repo.name}</div>
                    <div><a href={this.props.repo.html_url} target="_blank">{this.props.repo.html_url}</a></div>
                    <div>{this.props.repo.language}</div>
                    <div>{this.props.repo.description}</div>
                    <div>{this.props.repo.created_at}</div>
                </div>

            </div>
        );
    }
}

export default Repository;