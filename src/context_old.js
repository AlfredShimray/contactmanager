import React, { Component } from 'react'
import axios from "axios";



const Context = React.createContext();

const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
            case "ADD_CONTACT":
                return {
                    ...state,
                    contacts: [action.payload, ...state.contacts]
                };
                
            default:
                return state;
           }
        }

 export class Provider extends Component {
  
            state = {
            contacts: [
                // {   
                //     id: 1,
                //     name: "John Doe",
                //     email: "jdoe@gmail.com",
                //     phone: "555-555-5555"
                // },
                // {   
                //     id: 2,
                //     name: "Karen Williams",
                //     email: "karen@gmail.com",
                //     phone: "222-222-2222"
                // },
                // {   
                //     id: 3,
                //     name: "Henry Johnson",
                //     email: "henry@gmail.com",
                //     phone: "333-333-3333"
                // }
            ],

            dispatch: action => { this.setState(state => reducer(state, action)) }
        }
        componentDidMount() {
            axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(res => this.setState({contacts: res.data}));
        }
     
        render() {
            return (
                // value contains the property of "state"//
                <Context.Provider value={this.state}>
                    {this.props.children}
                </Context.Provider>
            )
        }
    }

    export const Consumer = Context.Consumer;