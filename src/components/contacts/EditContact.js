import React, { Component } from 'react'
import {Consumer} from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
// import { v4 as uuidv4 } from 'uuid';
import axios from "axios";


class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        errors: {}
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    async componentDidMount() {
        const {id} = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const contact = res.data;
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        });
    }

    onSubmit = async(dispatch, e) => {
        e.preventDefault();
        const {name, email, phone} = this.state;

        // check for Errors//
        if(name === "" ) {
            this.setState({errors: {name: "Name is required"}});
            return;
        }
        if(email === "" ) {
            this.setState({errors: {email: "Email is required"}});
            return;
        }
        if(phone === "" ) {
            this.setState({errors: {phone: "Phone is required"}});
            return;
        }

        // new contact//
        const updContact = {
            name: name,
            email: email,
            phone: phone
        }

        // PUT request//
        const {id} = this.props.match.params;
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact);
        dispatch({type: "UPDATE_CONTACT", payload: res.data});

 
        // to clear inputs/
        this.setState({
            name: "",
            email: "",
            phone: "",
            error: {}
        });
        
       
        // redirect to home after submitting//
        this.props.history.push("/");
    };

    render() {
        const {name, email, phone, errors} = this.state;

        return(
            <Consumer>
                {value => {
                    /* destructuring */
                    const { dispatch } = value;
                    return(
                        <div className="container">
            <div className="card mb-3">
                <div className="card-header"> Edit Contact</div>
                <div className="card-body">
                {/* we bind "onSubmit" so that we can use dispatch function in "onSubmit" */}
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <TextInputGroup 
                        label="Name"
                        name="name"
                        placeholder="Enter Name..."
                        value={name}
                        onChange={this.onChange}
                        error={errors.name}

                    />

                     <TextInputGroup 
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={this.onChange}
                        error={errors.email}
                    />
                       
                       <TextInputGroup 
                        label="Phone"
                        name="phone"
                        type="phone"
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={this.onChange}
                        error={errors.phone}
                    />
                       
                        <div className=" mt-3"> 
                        <input type="submit" 
                        value="Update Contact" 
                        className="btn btn-block btn-outline-dark btn-lg " />
                        </div>
                       
                     </form>
                   </div>
               </div>
             </div>
                    )
                }}
            </Consumer>
        )

    }
}

export default AddContact;