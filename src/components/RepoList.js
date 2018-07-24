import React from 'react';
import Repository from '../components/Repository';
import styleList from './RepoList.css';

class RepoList extends React.Component {
    get repositories() {
        return this.props.repo.map(repo => <Repository key={repo.id} className={styleList.listItem} repo={repo}/>);
    }

    render() {
        return (
            <div className={styleList.repoList}>
                {this.repositories}
            </div>
        );
    }
}
export default RepoList;