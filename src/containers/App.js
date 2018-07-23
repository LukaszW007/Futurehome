import React from 'react';
import RepoList from '../components/RepoList';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
            repo: []
        };
    }

    onChangeHandle(event) {
        this.setState({searchText: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        const {searchText} = this.state;
        const url = `https://api.github.com/search/repositories?q=topic:${searchText}`;
        fetch(url)
            .then(response => response.json())
            .then(responseJson => this.setState({repo: responseJson.items}));
    }

    render() {
        return (
            <div>
                <form onSubmit={event => this.onSubmit(event)}>
                    <label htmlFor="searchText">Search by user name</label>
                    <input
                        type="text"
                        id="searchText"
                        onChange={event => this.onChangeHandle(event)}
                        value={this.state.searchText}/>
                </form>
                <RepoList repo={this.state.repo}/>
            </div>
        );
    }
}
export default App;