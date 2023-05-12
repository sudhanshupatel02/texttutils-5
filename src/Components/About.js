import React, {useState} from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });
       let myStyle ={
         color: props.mode ==="dark"?"white":"black",
         backgroundColor: props.mode ==="dark"?"#7f7f7f":"white"
       }

  return (
    <div className="container">
        <h1 className="my-3" style={{color: props.mode ==="dark"?"white":"#7f7f7f"}}>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze Your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       TextUtils gives you a way to analyze your text quickly and efficientiy.Be it word count,character count or
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free to useAnalyze Your text</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtills reports the
        number of works and characters. This it is suitable for writing text with word/ character limit
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      This word counter software works in any wed Browser such as Crome, Firefox, Internet Explorer, sofari, Opera. It suits to count characters in
      facebook, blog, books, excel document, pdf document ,essays, etc.
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-2">
<button type="button" onClick={toggleStyle} className="btn btn-success">{btntext}</button>
</div> */}
</div>
  )
}
