import React, {Component} from "react";
import {Consumer} from "../../context";
import axios from "axios";
import {Link} from "react-router-dom";


class Contact extends Component {
   state ={
       showContactInfo: false
   }

    onDeleteClick = async (id, dispatch) => {
         await axios
        .delete(`https://jsonplaceholder.typicode.com/users/${id}`);
         dispatch({
            type: "DELETE_CONTACT", 
            payload: id
        })
        


        // .then(res =>  dispatch({
        //     type: "DELETE_CONTACT", 
        //     payload: id
        // }) )
       
    //   this.props.deleteClickHandler();
    }

    render() {
        // destructure props - passed from Contacts//
        // const {name, email, phone} = this.props;
        // receive the contact object as prop//
        // const {contact} = this.props;
        // destruture the contact props//
        const { id, name, email, phone} = this.props.contact;
        const {showContactInfo} = this.state;
        
        return(
            <Consumer>
                { value => {
                    const {dispatch} = value;
                    return(
                        <div className="card card-body mb-3" style={{cursor: "pointer"}}>
                         {/* since onShowClick is a custom property/method/function of React Component we have to bind "this" */}
                      <h4> 
                        {""} {name} {""}
                        <i onClick={() => {
                          this.setState({showContactInfo: !this.state.showContactInfo})
                          }} 
                          className="fas fa-sort-down"></i>

                          <i className="fas fa-times" 
                          style={{cursor: "pointer", float: "right", color: "red"}} 
                          onClick={this.onDeleteClick.bind(this, id, dispatch)} />

                          <Link to={`contact/edit/${id}`} >
                              <i className="fas fa-pencil-alt"
                              style={{
                                  cursor: "pointer",
                                  float: "right",
                                  color: "black",
                                  marginRight: "1rem"
                                  }}></i>
                          </Link>

                        </h4>

                          { showContactInfo ?  ( <ul className="list-group">
                                   <li className="list-group-item"> Email: {email}</li>
                                   <li className="list-group-item"> Phone: {phone}</li>
                                   </ul> )
                            : null }
              
                       </div>

                    )
                }}
            </Consumer>
        )

    }
}


export default Contact;



// class Contact extends Component {
//     state ={
//         showContactInfo: false
//     }
     
//      // onShowClick (){
//      //     console.log("clicked")
//      // }
     
//      // this funciton is passed up to the Contacts component ///
 
//      onDeleteClick = (id, dispatch) => {
//          dispatch({
//              type: "DELETE_CONTACT", 
//              payload: id
//          })
//      //   this.props.deleteClickHandler();
//      }
 
//      render() {
//          // destructure props - passed from Contacts//
//          // const {name, email, phone} = this.props;
//          // receive the contact object as prop//
//          // const {contact} = this.props;
//          // destruture the contact props//
//          const { id, name, email, phone} = this.props.contact;
//          const {showContactInfo} = this.state;
         
//          return(
//              <Consumer>