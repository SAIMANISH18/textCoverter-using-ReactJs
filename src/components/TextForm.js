import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpperCaseClick = ()=>{
    console.log("UpperCase was clicked  " + text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  } 
  const handleLowerCaseClick = ()=>{
    console.log("LowerCase was clicked" + text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  } 
  const handleToClear = ()=>{
    console.log("LowerCase was clicked  " + text);
    let newText='';
    setText(newText);
  } 
  const handleOnChnage = (event)=>{
    console.log("On Change");
    setText(event.target.value);
  }
  const [text, setText] = useState("Enter text here");
  // text="new text";//Wrong way to change the state
  // setText("new text");//Correct way to Change the state
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text}   onChange={handleOnChnage}  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" ></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpperCaseClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLowerCaseClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleToClear}>Clear Text</button>
      </div>

    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Yours text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and  {text.length}characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Mintues to Read a Word</p>
      <h2>Preview Of Text</h2>
      <p>{text.length>0?text:"Enter the text to preview it "}</p>
    </div>
    </>
  );
}
