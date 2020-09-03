import React from 'react';
import '../styles/ContactPage.css';
import { Prompt } from 'react-router-dom';

class ContactPage extends React.Component {

    state = {
        value: "",

    }

    handleSumbit = (e) => {
        e.preventDefault()
        this.setState({
            value: ""
        })
    }

    handelChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div className="contact">
                <form onSubmit={this.handleSumbit}>
                    <h3>Napisz do nas</h3>
                    <textarea value={this.state.value} onChange={this.handelChange}></textarea>
                    <button  >Wyslij</button>
                </form>
                <Prompt
                    when={this.state.value}
                    message="Masz nie wypelniony formularz. Czy na pewno chcesz opuscic strone" />
            </div>
        );
    }
}

export default ContactPage;