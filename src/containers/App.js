import React from 'react';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:
                [{
                    id: 1,
                    text: 'clean room'
                }, {
                    id: 2,
                    text: 'wash the dishes'
                }, {
                    id: 3,
                    text: 'feed my cat'
                }],
            input: '',
            showModal: false
        };
    }

    inputChange(event) {
        const inputValue = event.target.value;
        console.log(inputValue)
        this.setState({input: inputValue});
    }

    render(){
        return(
            <div className={style.App}>
                <Title className={style.title}/>
                <div className={style.container}>
                    <div className={style.inputContainer}>
                        <input className={style.inputItemName}
                               type={'text'}
                               value={this.state.input}
                               onChange={event => this.inputChange(event)}/>
                        <button className={style.buttonAddItem}
                                onClick={() => {
                                    if (this.state.input) {
                                        this.addTodo(this.state.input)
                                    }
                                    this.setState({input: ''})
                                }
                                }
                        >Add item
                        </button>
                    </div>

                    <TodoList data={this.state.data} triggerModal={(text) => this.triggerShowModal(text)}
                              removeTodoItem={id => this.removeTodo(id)}/>
                    <Todo showModal={this.state.showModal} taskText={this.state.text}
                          triggerToChangeShowModal={(answer) => this.doShowModalFalse(answer)}/>
            </div>
        )
    }
}


https://github.com/search?q=gis