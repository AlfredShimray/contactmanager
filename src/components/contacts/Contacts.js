import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from "../../context";


class Contacts extends Component {

    render() {
        return(
           <Consumer>
              {value => {
                const {contacts} = value;
                  return (
                     <React.Fragment>
                       <h1 className="display-4 mb-2">
                         <span className="text-danger">Contact</span> List
                       </h1>
                        {contacts.map(contact => (
                          <Contact 
                           key={contact.id}
                           contact={contact}
                             />
                           ) )} 
                      </React.Fragment>
                   )
               }}  
           </Consumer>
          )
     }
 }

export default Contacts;




// class Contacts extends Component {
//     // ES 6 subclass///
//     // constructor(){
//     //     super();
//         // this.state = {
//         //     contacts: [
//         //         {   
//         //             id: 1,
//         //             name: "John Doe",
//         //             email: "jdoe@gmail.com",
//         //             phone: "555-555-5555"
//         //         },
//         //         {   
//         //             id: 2,
//         //             name: "Karen Williams",
//         //             email: "karen@gmail.com",
//         //             phone: "222-222-2222"
//         //         },
//         //         {   
//         //             id: 3,
//         //             name: "Henry Johnson",
//         //             email: "henry@gmail.com",
//         //             phone: "333-333-3333"
//         //         }
//         //     ]
//         // }
//     // }

//     // deleteContact = (id) => {
//     //     // destructure the state///
//     //    const {contacts} = this.state;
//     //    const newContacts = contacts.filter(contact => 
//     //     contact.id !==id ) ;
//     //     this.setState({
//     //         contacts: newContacts
//     //     });
//     // }

//     render() {
//         return(
//            <Consumer>
//               {value => {
//                 const {contacts} = value;
//                   return (
//                      <React.Fragment>
//                         {contacts.map(contact => (
//                           <Contact 
//                            key={contact.id}
//                            contact={contact}
//                         //   deleteClickHandler={this.deleteContact.bind(this, contact.id)}
//                             //   pass entire object instead //     
//                             //   name={contact.name}
//                             //   email={contact.email}
//                             //   phone={contact.phone}
//                              />
//                            ) )} 
//                       </React.Fragment>
//                    )
//                }}  
//            </Consumer>
//           )
//         // destructure contacts - pull out contacts from the "this.state"//
//         // const {contacts} = this.state;

//         // return (
           
//         // )
//     }
// }

// export default Contacts;
