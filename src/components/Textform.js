import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    const[text,setText]=useState("");
    // console.log(text);
    const handleOnChange=(event)=>{
        // console.log(event);
        setText(event.target.value);
    }
    const CopyOnClick=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("The text has been copied to clipboard.","success");
    }
    const LowerOnClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnClick=(event)=>{
        console.log(text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const ClearOnClick=()=>{
        setText("");
    }
  return (
    <>
    <div> 
    <h1 className='my-5'>{props.text}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
    </div>
    <button className='btn btn-primary mx-2' onClick={handleOnClick} >Convert to UpperCase</button>
    <button className='btn btn-primary mx-2' onClick={LowerOnClick} >Convert to LowerCase</button>
    <button className='btn btn-primary mx-2' onClick={ClearOnClick} >Clear Text</button>
    <button className='btn btn-primary mx-2' onClick={CopyOnClick} >Copy to Clipboard</button>
    </div>
    <div className="container">
        <h1>Your text Summary</h1>
        Your text has {text.split(" ").length} words and {text.length} characters.
    </div>
    </>
  )
}
Textform.propTypes={
    text: PropTypes.string
}