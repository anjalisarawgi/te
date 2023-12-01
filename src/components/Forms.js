import React, { useState } from 'react'

export default function Forms(props) {

    const handlerUpClick = () => {
        // console.log('clicked upper case' + text );
        let newText = text.toUpperCase();
        // setText(`We have converted your text to upper case: ${newText}`);
        setText(newText)
    }

    const handlerDownClick = () => {
        // console.log('clicked upper case' + text );
        let newText = text.toLowerCase();
        // setText(`We have converted your text to upper case: ${newText}`);
        setText(newText)
    }

    const handlerClearClick = () => {
        // console.log('clicked upper case' + text );
        let newText = ''
        // setText(`We have converted your text to upper case: ${newText}`);
        setText(newText)
    }


    const handleCopyClick =() => {
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        // text.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(text.value);
        alert("Copied the text: " + text.value);
    }

    // const handlerCopyClick =()=>{
    //     console.log('i am copy');
    //     var text = document.getElementById('exampleFormControlInput1');
    //     text.select();
    //     navigator.clipboard.writeText(text.value);
    // }

    const HandleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    // const handlerEmailClick = () => {
    //     let emailChecker = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)
    //     setText(emailChecker)
    // }

    // const handlerEmail = () => {
    //     let newText = text;
    //     setText(newText)
    // }


    const handleOnChange = (event) =>{
        setText(event.target.value)
    }


    const [text, setText] = useState('');

    return (
        <>
        <div className='container' style={{color: props.mode ==='light'? '#1f3946' : 'white'}}>
            <h2 style={{color: props.mode ==='light'? 'dark' : 'white'}}>{props.heading}</h2>
            <p>Please enter your details below</p>
            {/* <div className={`mb-3 ${props.mode ==='light'? 'dark' : 'light'}`}>
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div> */}
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.contentBox}</label>
                <textarea  value={text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button onClick={handlerUpClick} className="btn btn-primary mx-2">Convert to Upper-Case</button>
            <button onClick={handlerDownClick} className="btn btn-primary mx-2">Convert to Lower-Case</button>
            <button onClick={handlerClearClick} className="btn btn-primary mx-2">Clear text</button>
            <button onClick={HandleExtraSpaces} className="btn btn-primary mx-2">Remove Extra Spaces</button>
            <button onClick={handleCopyClick} className="btn btn-primary">Copy Text</button>

            {/* <button onClick={handlerDelete} className="btn btn-primary">Delete the text</button> */}


        </div>
        <div className='container my-3' style={{color: props.mode ==='light'? 'black' : 'white'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h1>Preview</h1>
            <p>{text.length>0 ? text : 'Enter your text to preview it here'}</p>
            {/* <p> Emails: {handlerEmailClick()}</p> */}
        </div>
        </>
    )
}
