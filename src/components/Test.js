import React, { Component } from 'react'

class Test extends Component {
    state = {
        title: '',
        body: ''
    };
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    title: data.title,
                    body: data.name
                });
                console.log("GENtle", data);
                console.log(this.state);
            })
    }

    render() {
        const { title, body } = this.state;
        return (
            <div>
                <h1>{title} {body} </h1>
            </div>
        )
    }
}
export default Test;