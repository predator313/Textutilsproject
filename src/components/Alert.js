import React from 'react'

export default function Alert(props) {
    // const capatiLize= (words)=>{
    //     const lower=words.toLowerCase();
    //     return lower.charAt[0].toUpperCase()+lower.slice(1);
    // }
  return (
    // <div>
       props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
  {props.alert.type}:{props.alert.msg};
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
    // </div>
  )
}
