import React from 'react';

function Contact() {
    return (
      <div>
        <h2 style={{color:"blue"}}>
            Contact
        </h2> 
        <p style={{color:"green"}}>
            email: kshao1@emich.edu
        </p>
      </div>  

    );
 }

function Address() {
  return (
    <div>
      <h2 style={{color:"blue"}}>
          Address    
      </h2> 
      <p style={{color:"green"}}>
          Ann Arbor, MI 48104
      </p>
    </div>  

  );

}
  

export {Address, Contact};
export default Contact;