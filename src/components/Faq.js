import {useState} from 'react'
import Underline from './Underline'
import tag from '../img/bi_question-circle.svg'
import down from '../img/chevron-down.svg'
import up from '../img/chevron-up.svg'
import { Data } from './FaqData'

const Faq = () => {

  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index){
      return setClicked(null)
    }
    setClicked(index)
    //if clicked question is already active, then close it
  }

  return (
    <div className='faq'>
        <Underline/>
        <h2>Frequently Asked Questions</h2>
        <div className="faq-card-ctn">
            <div className="card">
                <div className="together">
                  {Data.map((item, index) =>(
                    <div className='dropctn'>
                      <div className="line" onClick={() => toggle(index)} key={index}>
                        <p><img src={tag} alt="question tag" className='faq-img'/>{item.question}</p>
                        <span>{clicked === index ? <img src={up} alt="Up direction" /> : <img src={down} alt="down direction" />}</span>
                      </div>
                      {clicked === index ? 
                        <div className="dropdown">
                        <h4>{item.answer}</h4>  
                        </div> : null
                      }
                      <br/>
                    </div>
                  ))}  
                </div>
                   
            </div>    
        </div>
    </div>
  )
}

export default Faq