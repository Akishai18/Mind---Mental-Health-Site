import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../footer';

function Home() {
  return (
    <>
      <HeroSection />
      
      <section className="welcome-section">
        <h1>Welcome to Our Mental Health Resource Hub</h1>
        <p>We are here to support you on your journey to well-being. Explore our resources, find the help you need, and join our community of individuals committed to mental wellness.</p>
        <h2>Mission Statement</h2>
        <p>Our goal is to empower individuals through their journey of mental health and well-being. With a plethora of illnesses affecting hundreds of millions of people, we want to provide an outlet filled with resources that can aid individuals in their journey through mental health, making a positive difference in the world and our community.</p>
        
        <h1>Testimonials</h1>
        <div className="testimonials-section">
          <div className="testimonial">
            <img src="/images/h-img-1.png" alt="Robert Williams" className="testimonial-image" />
            <div className="testimonial-content">
              <p>"This platform has been a game-changer for my mental health. The resources are invaluable, and the community is so supportive."</p>
              <p className="testimonial-name">- Robert Williams</p>
            </div>
          </div>
          <div className="testimonial">
            <img src="/images/h-img-2.png" alt="Lisa Truman" className="testimonial-image" />
            <div className="testimonial-content">
              <p>"I found exactly what I needed here to help me through a tough time. Highly recommend to anyone seeking support."</p>
              <p className="testimonial-name">- Lisa Truman</p>
            </div>
          </div>
        </div>

        <h1> Introduction Video On Mental Health</h1>
        <iframe width="1120" height="630" src="https://www.youtube.com/embed/G0M41N1Lyw4?si=KlTnBgwP7Pxu7m1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>      </section>
      
      <Footer />
    </>
  );
}

export default Home;
