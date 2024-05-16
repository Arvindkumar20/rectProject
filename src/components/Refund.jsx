import React from 'react'

export default function Refund() {
  return (
    <>
      <section className="refund-top-section m-auto w-max">
        <div className="top-section-text">
        Don't miss out on this <span>limited-time opportunity</span> to learn for <span>Free!</span>
        </div>
      </section>
      <section className="refund-middle-section m-auto w-max">
        <div className="refund-offer">
        <p>100% Refund Offer 😎 </p>
        <img src="./refund/snake.webp" alt="snake " />
        </div>
        <div className="sheat-left">
            <p>
            20 Seats Left
            </p>
            <div className="range">
                <input type="range" />
            </div>
            <div className="offer-time">
                <img src="./refund/time.webp" alt="time or watch image" />
                <p>Offer ends in 10:00Mins</p>
            </div>
        </div>
      </section>
      <section className="refund-bottom-section m-auto w-max">
        <div className="title">
        How does it work?
        </div>
        <div className="refund-bottom-items">
            <div className="refund-bottom-item">
            <img src="./refund/step1.webp" alt="step one image" />
         <hr className='connect'/>

            <div className="register">
                <div className="title">
                Step 1 : Enroll into your favorite course for only ₹1,499
                </div>
                <img src="./refund/man.webp" alt="registation image" />
                <div className="desc">
                Start Learning with <span>Lifetime Course Access</span>.
                </div>
            </div>
            </div>
            <div className="refund-bottom-item ">
            <img src="./refund/step2.webp" alt="step one image" />
         <hr className='connect'/>

            <div className="register">
                <div className="title">
                Step 2: Complete Course & Assignments within 2 Years!
                </div>
                <div className="enrollment">
                    
                <span>2</span>  <p>years time from the date of enrollment</p>
                </div>
                <div className="desc">
                Finish <span className='span-one'>the course</span> within <span className='span-two'>2 Years</span> to Qualify for Refund.
                </div>
            </div>
            </div>
            <div className="refund-bottom-item ">

         <img src="./refund/step3.webp" alt="step one image" />
            <div className="register">
                <div className="title">
                Step 3: Receive 100% Refund upon completion
                </div>
                <div className="enrollment">
                    
                <span>100%</span>  <p>Enrollment Fee is refunded</p>
                </div>
                <div className="desc">
                Upon Course Completion within <span className='span-one'>2 Years</span>, Get Your <span className='span-two'>₹1,499 Back</span>.
                </div>
            </div>
            </div>

        </div>
      </section>
    </>
  )
}
