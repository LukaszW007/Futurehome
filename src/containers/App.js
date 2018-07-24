import React from 'react';
import RepoList from '../components/RepoList';
import style from './App.css';
import Title from "../components/Title";
import Logo from "../components/Logo";
import Back from "../components/Back";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            className: 'searchForm',
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
        this.setState({className: 'searchFormSecond'});
        fetch(url)
            .then(response => response.json())
            .then(responseJson => this.setState({repo: responseJson.items}));
    }

    render() {
        return (
            <div className={style.gitApp}>
                <div className={style.header}>
                    <Logo className={style.logo}/>
                    <Title className={style.title}/>
                </div>
                <form className={style.searchForm} onSubmit={event => this.onSubmit(event)}>
                    {/*<label htmlFor="searchText" className={style.inputsLabel}>Search by user name</label>*/}
                    <input
                        className={style.inputSearch}
                        type="text"
                        id="searchText"
                        placeholder={'The name of repository'}
                        onChange={event => this.onChangeHandle(event)}
                        value={this.state.searchText}/>
                </form>
                <RepoList className={style.list} repo={this.state.repo}/>
                <Back/>
            </div>
        );
    }
}

export default App;