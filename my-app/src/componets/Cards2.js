import React from 'react';
import Carditem from './Carditem';
import './Cards.css'; // Ensure this matches the filename and path
function Cards2() {
  return (
    <div className = 'cards'>
        <h1> Additional Resources</h1>
        <div className = "cards__container">
            <div className = "cards__wrapper">
                <ul className = "cards__items">
                    <Carditem 
                    src = "images/img-16.png"
                    text="Try a self - reflection quiz to evaluate your mental well-being"
                    label = 'Reflections'
                    path = 'https://acentra.com/quiz/mental-health-self-reflection-quiz/'
                    />
                    <Carditem 
                    src = "images/img-17.jpg"
                    text="Use this resource to track your mental health and moods to see how you are doing throughout the week"
                    label = 'Mindful'
                    path = "https://www.dbsalliance.org/wellness/wellness-toolbox/wellness-tracker/"
                    />
                
                </ul>
                <ul className = "cards__items">
                    <Carditem 
                    src = "images/img-18.jpg"
                    text="Discover an endless amount of ways to heal and educate yourself on mental heatlh"
                    label = 'Educate'
                    path = 'https://www.canada.ca/en/public-health/services/mental-health-services/mental-health-get-help.html'
                    />
                    <Carditem 
                    src = "images/img-19.jpg"
                    text="Find mental health services near you"
                    label = 'Locate'
                    path = 'https://www.centralwesthealthline.ca/listServices.aspx?id=10237'
                    />
                                        <Carditem 
                    src = "images/img-20.jpeg"
                    text="Learn about all types of mental health to ensure the best safety of you and your loved ones"
                    label = 'Learn'
                    path = 'https://cmha.ca/find-info/mental-health/general-info/'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}




export default Cards2