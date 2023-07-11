import React ,{useState} from 'react'


function TextForm(props) {
  const handleUpclick=()=>{
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase","success");
    
  }
  const handleExtraclick=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Has Been Removed","success");
  }
 const handleCopyclick=()=>{
  var text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  document.getSelection().removeAllRanges();
  props.showAlert("Text Has Been Copied","success");
 }
  const handleLoclick=()=>{
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase","success");
    
  }
  const handleClrclick=()=>{
    
    setText("")
    props.showAlert("Text is Cleared","success");
    
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
  }
  const[text,setText]= useState('Enter Your Text Here');
  
  return (
  <>
  <div className="container" style={{color: props.mode===`dark`? `white`:`black`}} >
  <h1 >{props.heading}</h1>
    <div className="mb-3">  
      <textarea className="form-control" style={{backgroundColor: props.mode===`light`? `white`:`#343a40`, color: props.mode===`dark`? `white`:`black`}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
     </div>
     <button className="btn btn-primary mx-1 my-1"  onClick={handleUpclick}>Convert To Uppercase</button>
     <button className="btn btn-info mx-1 my-1"  onClick={handleLoclick}>Convert To Lowercase</button>
     <button className="btn btn-danger mx-1 my-1"  onClick={handleClrclick}>Clear TextBox</button>
     <button className="btn btn-success mx-1 my-1"  onClick={handleCopyclick}>Copy Text</button>
     <button className="btn btn-warning mx-1 my-1"  onClick={handleExtraclick}>Remove Extra Spaces</button>
  </div>
  <div className="container my-3" style={{color: props.mode===`dark`? `white`:`black`}} >
    <h2>Your Text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length * 0.008} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:`Enter Your Text To Preview`}</p>
  </div>
    
      
  
 </>
  )
}

export default TextForm