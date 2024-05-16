import React from 'react'

export default function Home() {
    const handleKnowMoreBtn=()=>{
        window.location.href = "https://www.google.com";
    }
    const handleStyleEnrollBtn=()=>{
        window.location.href = "https://www.google.com";
    }
  return (
   <>
   {/* home page main  */}
      <section className="home-container m-auto w-max">
<section className="home-container-top">
<div className="initiative">
    <img src="./home/trophy.webp" alt="Trophy image" />
    <div className="text-of-initiative">
    An <span>IIT Delhi</span> Alumni Initiative
    </div>
</div>

<section className="main">
    <div className="main-text">
    <p>Become an Expert in the 
        field of <span> Data Science with 6 courses</span></p>
    </div>
    <div className="about-main">
    A specially crafted Tech Kickstarter, with <span>5+ extensive online courses</span>.
    </div>


    <section className="bottom-of-main">
        <div className="Mentorship main-bottom-box">
            <img src="./home/star.webp" alt="Personal Mentorship " />
            <div className="text-of-main-bottom-box">
            Personal Mentorship
            </div>
        </div>
        <div className="Assistance main-bottom-box">
        <img src="./home/star.webp" alt="Internship Assistance " />
            <div className="text-of-main-bottom-box">
            Internship Assistance
            </div>  
        </div>
        <div className="Certified-cource main-bottom-box">
        <img src="./home/star.webp" alt="Industry Certified Courses" />
            <div className="text-of-main-bottom-box">
            Industry Certified Courses
            </div> 
        </div>
    </section>
    
</section>


</section>
<section className="home-container-bottom">
<section className="enroll-now" onClick={
    handleStyleEnrollBtn
    // On click
// Scroll to: "None";
// Animate: Animate;
// Spring: { mass: 1, stiffness: 80, damping: 20 };
}>
    <div className="enroll-now-text">
    Enroll Now
    </div>
    <div className="enroll-now-button">
        <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">
            <img src="./home/enroll.webp" alt="image for enroll button" />
        </a>
    </div>
</section>
<section className="know-more" onClick={
    
    handleKnowMoreBtn
    // On click
// Scroll to: "None";
// Animate: Animate;
// Spring: { mass: 1, stiffness: 80, damping: 20 };

}>
    <div className="know-more-text">
    Know More
    </div>
<div className="know-more-button">
    <img src="./home/icon.webp" alt="know more icon" />
</div>
</section>
      </section>
    </section>


{/* home page <footer></footer> */}
<footer>
    <section className="footer-container">
<div className="footer-container-item">
    <img src="./home/cources.webp" alt="cources image" />
    <div className="footer-container-item-text">
<span>24</span>
<p>Cource</p>
    </div>
</div>
<hr />
<div className="footer-container-item">
    <img src="./home/learner.webp" alt="learners image" />
    <div className="footer-container-item-text">
<span>30K+</span>
<p>Learners</p>
    </div>
</div>
<hr />

<div className="footer-container-item">
    <img src="./home/dout.webp" alt="Doubts Solved" />
    <div className="footer-container-item-text">
<span>100K+</span>
<pre><p>Doubts Solved</p></pre>
    </div>
</div>
<hr />

<div className="footer-container-item">
    <img src="./home/project.webp" alt="Student Projects image" />
    <div className="footer-container-item-text">
<span>10K+</span>
<pre><p>Student Projects</p></pre>
    </div>
</div>
    </section>
</footer>
    </>
  )
}
