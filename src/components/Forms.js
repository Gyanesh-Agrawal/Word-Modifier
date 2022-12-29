import React, {useState} from 'react'

export default function Forms(props) {
    const ChangeHua = (event) =>{
        setText(event.target.value)
    }

    const Up = () =>{
        let kj = text.toUpperCase()
        setText(kj)
    }
    const Down = () =>{
        let kj = text.toLowerCase()
        setText(kj)
    }
    const Clear = () =>{
        let kj = ""
        setText(kj)
    }
    const Capitalized = () =>{
        let kj = text.charAt(0).toUpperCase() + text.slice(1);
        setText(kj)
    }
    const [text, setText] = useState("");
  return (<>
    <h1>Enter the text to analyze</h1>
    <div className="container">
    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange = {ChangeHua} placeholder="Enter the text to analyze" rows="10"></textarea>
    <button className="btn btn-primary" onClick={Up}>Convert To Upper Case</button>
    <button className="btn btn-primary my-3 mx-2" onClick={Down}>Convert To Lower Case</button>
    <button className="btn btn-primary my-3 mx-2" onClick={Clear}>Clear</button>
    <button className="btn btn-primary my-3 mx-2" onClick={Capitalized} >Capitalized Case</button>
  </div>
  <div className="container">
    <p>Number of words are {text.split(" ").length} and letters are {text.length}</p>
    <p>{.008 * text.split(" ").length} Minutes Required To Read The Text</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
  </>
  )
}
