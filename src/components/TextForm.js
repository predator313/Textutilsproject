// import React from 'react'
// import React from "react";
import React, {useState} from 'react';

// filter((ele)=>{
//   return (ele.length>0 || !isNaN(ele));
// });


export default function Textform(props) {
  const handlerUpClick=()=>{
    // console.log("uppercasewas clicked"+text);
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("converted to upper case","success");
  }
  const handlerLowClick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("converted to lower case","success");
  }
  const handlerErase=(event)=>{
    let newtext="";
    setText(newtext);
    props.showAlert("successfully erase all text","success");
  }
  const handlerOnchange=(event)=>{
    // console.log("handler on change");
    setText(event.target.value);
  }
  
  const [text,setText]=useState('');
  // text='newtexttt'
  // setText("abcedehfkdu");
  // const [textt, setText] = useState('enter the text');
  // setText('abcde');

  

  return( 
    <>


    

  <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>


    <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handlerOnchange}  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8">

      </textarea>

    </div>
    <button className="btn btn-primary mx-1" onClick={handlerUpClick}>Convert to Uppercase</button>


    <button className="btn btn-primary mx-1" onClick={handlerLowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handlerErase}>ClearText</button>
  </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((ele)=>{
        return ele.length!==0;
      }).length} and {text.length} char</p>
      <p>{0.008*text.split(" ").filter((ele)=>{
        return ele.length!==0;
      }).length} minutes to read</p>

      <h2>Preview</h2>
      <p>{text}</p>

    </div>
  {/* </div> */}
  </>
  )
}
