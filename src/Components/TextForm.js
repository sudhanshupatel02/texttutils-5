
import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + Text);
    let newText = Text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "success");
  }


  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked" + Text);
    let newText = Text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!", "success");
  }

  const handleCopy = ()=>{
    navigator.clipboard.writeText(Text);
    props.showAlert("Copy text!", "success");
  }
  
  const handleExtraSpaces = ()=>{
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove Extra Spaces!", "success");
  }

  const handleClearClick = ()=>{
    let newText = "";
    setText(newText)
    props.showAlert("Clear Click!", "success");
  }
  
  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value)
  }
  const [Text, setText] = useState('');
  // Text = "new Text"; //Wrong way to change the stste
  // setText = "new Text"; //Wrong way to change the stste
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className="mb-4">{props.heading}</h1>      
            <div className="mb-3">       
               <textarea className="form-control" id="myBox" value = {Text} onChange={handleOnChange} style={{backgroundColor: props
                .mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} rows="8"></textarea>
            </div>
               <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick ={handleUpClick}>Convert to upeer case</button>
               <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick ={handleLoClick}>Convert to Lower case</button> 
               <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick ={handleCopy}>Copy Text</button>  
               <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick ={handleClearClick}>Clear Text</button>  
               <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick ={handleExtraSpaces}>Remove Extra Spaces</button>  
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Text summary</h2>
      <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
      <p>{0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{Text.length>0?Text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
