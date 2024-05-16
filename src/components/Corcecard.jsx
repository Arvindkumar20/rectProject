import React from 'react'

export default function Corcecard() {
  return (
    <div>
      <div className="card m-auto w-max">
        <div className="card-left">
            <div className="card-top">
            <div className="title">
            Enroll for DataScience Bundle @₹1,499 <span>₹2,600</span>
                    </div>
              <p>Become an Expert in the data science field by enrolling into 6 Extensive courses!</p>
            </div>
            <div className="card-bottom">
                <button>
                    <img src="./certi/button.webp" alt="enroll button image" />
                    <p>Enroll Now</p>
                </button>
            </div>
        </div>
        <div className="card-right">
        <div className="card-item">
            <p>Total number of Courses</p>
            <p className='num'>6</p>
        </div>
        <div className="card-item">
            <p>Total number of Courses</p>
            <p className='num'>6</p>
        </div>
        <div className="card-item">
            <p>Access to Courses</p>
            <p className='num'>Lifetime</p>
        </div>

        </div>

      </div>
    </div>
  )
}
