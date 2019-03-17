import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';

const inputParsers = {
    date(input) {
        const [month, day, year] = input.split('/');
        return `${year}-${month}-${day}`;
    },
    uppercase(input) {
        return input.toUpperCase();
    },
    number(input) {
        return parseFloat(input);
    },
};

class MyForm extends React.Component {
    constructor() {
        super();
        this.state = {email: '', designation: '', confirm: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectionChange = this.handleSelectionChange.bind(this);
    }

    handleChange(event) {
        this.setState({email: event.target.value});
    }

    handleSelectionChange(event) {
        console.log(event.target.value);
        this.setState({designation: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let handle = this;
        fetch('https://kinect-21e49.firebaseio.com/roadmap/v1/contacts.json', {
            method: 'POST',
            body: JSON.stringify({email: this.state.email, designation: this.state.designation}),
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log('Created Gist:', data);
            handle.setState({confirm: 'Thank you for signing up. We will be in touch soon :)'});
        });
    }

    render() {
        return (
        <div id="getinvolved" class="card">
          <header class="card-header">
            <p class="paragraph-small has-text-grey-light card-header-title">
              I want to:
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <form onSubmit={this.handleSubmit}>
                <div class="field">
                  <div class="control">
                    <input class="input" name="email" type="email" placeholder="EMAIL" value={this.state.value} 
                      onChange={this.handleChange}/>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <div class="select">
                      <select name="contact" onChange={this.handleSelectionChange}>
                        <option value="Company">Outsource a project</option>
                        <option value="PM">Manage a project</option>
                        <option value="Freelancer">Freelance a project</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <Button class="button">Sign me up!</Button>
                  </div>
                </div>
                    <p>{this.state.confirm}</p>
                </form>
              </div>
            </div>
          </div>           
        );
    }
}

export default MyForm;