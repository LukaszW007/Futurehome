import React from 'react';
import Repository from '../components/Repository';

class RepoList extends React.Component {
    get repositories() {
        return this.props.repo.map(repo => <Repository key={repo.id} repo={repo}/>);
    }

    render() {
        return (
            <div>
                {this.repositories}
            </div>
        );
    }
}
export default RepoList;