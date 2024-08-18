import React from 'react';
import Carditem from './Carditem';
import './Cards.css'; // Ensure this matches the filename and path
function Cards() {
  return (
    <div className = 'cards'>
        <h1> Join us on our upcoming Events! </h1>
        <div className = "cards__container">
            <div className = "cards__wrapper">
                <ul className = "cards__items">
                    <Carditem 
                    src = "images/img-21.jpg"
                    text="Join us as we dive into a webinar and discussion all about how to create a positive self-image"
                    label = 'Webinar'
                    path = ''
                    />
                    <Carditem 
                    src = "images/img-22.jpg"
                    text="Mental Health Challenge - Challenge yourself by creating a project that tackles an issue in Mental Health. Unleash your creativity to make a difference"
                    label = 'Challenge'
                    path = ''
                    />
                
                </ul>
                <ul className = "cards__items">
                    <Carditem 
                    src = "images/img-23.jpg"
                    text="Join us for a educational and enriching experience with a guest speaker as we dive into the world of identity"
                    label = 'Guest Speaker'
                    path = ''
                    />
                    <Carditem 
                    src = "images/img-24.jpg"
                    text="Mental Health Awareness Workshops: Educational sessions focusing on different mental health disorders, coping strategies, and resources for support. These workshops can be led by mental health professionals and include interactive activities."
                    label = 'Workshop'
                    path = ''
                    />
                                        <Carditem 
                    src = "images/img-25.jpg"
                    text="Art and Mental Health Exhibits: Showcasing artwork created by individuals with mental health challenges or art that explores mental health themes. This can help express experiences and foster empathy and understanding."
                    label = 'Art'
                    path = ''
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}




export default Cards 