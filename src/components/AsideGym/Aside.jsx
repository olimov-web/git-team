import React from 'react'
import "./Aside.css"
import img from "../../assets/GymImg/img1.png"  

const Aside = () => {
  return (
    <div className='box'>
      <div className="bash">
        <h2><strong>Gym membership</strong></h2>
      </div>
      <div className="cart1">
        <div className="Cart">
          <div className="card">
            <div className="card1">
                <h3>Pass 'Trial'</h3>
                <p style={{fontWeight: 'bold'}}>$0</p> <div className="line"></div>
                <div className="card2">
                    <img src={img} alt="Gym" />
                    <p>Access to the gym from 8:00 to 14:00</p>
                </div>
                <div className="card3">
                    <img src={img} alt="Gym" />
                    <p>The trainer on duty will introduce you to the gym</p>
                </div>
                <button>Buy</button>
            </div>
          </div>
          <div className="card">
            <div className="card1">
                <h3>Pass 'Easy Start' </h3>
                <p style={{fontWeight: 'bold'}}>$119</p> <div className="line"></div>
                <div className="card2">
                    <img src={img} alt="Gym" />
                    <p>Visit without restrictions 24/7</p>
                </div>
                <div className="card3">
                    <img src={img} alt="Gym" />
                    <p>Individual training program</p>
                </div>
                <div className="card3">
                    <img src={img} alt="Gym" />
                    <p>Access to the VTRAINER application</p>
                </div>
                <div className="card3">
                    <img src={img} alt="Gym" />
                    <p>Trainer support</p>
                </div>
                <button>Buy</button>
            </div>
          </div>
          <div className="card">
            <div className="card1">
                <h3>Pass 'Free Time'</h3>
                <p style={{fontWeight: 'bold'}}>$49</p> <div className="line"></div>
                <div className="card2">
                    <img src={img} alt="Gym" />
                    <p>The entrance time to the gym is from 14:00 to 16:00</p>
                </div>
                <div className="card3">
                    <img src={img} alt="Gym" />
                    <p>Without suspension of gym membership</p>
                </div>
                <div className="card3">
                    <img src={img} alt="Gym" />
                    <p>The trainer on duty will introduce you to the gym</p>
                </div>
                <button>Buy</button>
            </div>
          </div>
          <div className="card">
            <div className="card1">
                <h3>Pass '1 Month 24/7'</h3>
                <p style={{fontWeight: 'bold'}}>$85</p> <div className="line"></div>
                <div className="card2">
                    <img src={img} alt="Gym" />
                    <p>Visit without restrictions 24/7</p>
                </div>
                <div className="card3">
                    <img src={img} alt="Gym" />
                    <p>The trainer on duty will introduce you to the gym</p>
                </div>
                <button>Buy</button>
            </div>
          </div>
          <div className="card">
            <div className="card1">
                <h3>Pass 'In Shape (AM)'</h3>
                <p style={{fontWeight: 'bold'}}>$165</p> <div className="line"></div>
                <div className="card2">
                    <img src={img} alt="Gym" />
                    <p>Training in mini-groups until 14:00</p>
                </div>
                <div className="card3">
                    <img src={img} alt="Gym" />
                    <p>Without suspension of gym membership</p>
                </div>
                <div className="card3">
                    <img src={img} alt="Gym" />
                    <p>Classes with a trainer in a mini-group 3 times a week</p>
                </div>
                <div className="card3">
                    <img src={img} alt="Gym" />
                    <p>Trainer support</p>
                </div>
                <button>Buy</button>
            </div>
          </div>
          <div className="card">
            <div className="card1">
                <h3>Pass 'In Shape (PM)' </h3>
                <p style={{fontWeight: 'bold'}}>$195</p> <div className="line"></div>
                <div className="card2">
                    <img src={img} alt="Gym" />
                    <p>Training in mini-groups until 17:00</p>
                </div>
                <div className="card3">
                    <img src={img} alt="Gym" />
                    <p>Without suspension of gym membership</p>
                </div>
                <div className="card3">
                    <img src={img} alt="Gym" />
                    <p>Classes with a trainer in a mini-group 3 times a week</p>
                </div>
                <div className="card3">
                    <img src={img} alt="Gym" />
                    <p>Trainer support</p>
                </div>
                <button>Buy</button>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Aside
