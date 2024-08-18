import React from 'react';
import Carditem from './Carditem';
import './Cards.css'; // Ensure this matches the filename and path
function Cards3() {
  return (
    <div className = 'cards'>
        <h1> Additional Resources</h1>
        <div className = "cards__container">
            <div className = "cards__wrapper">
                <ul className = "cards__items">
                    <Carditem 
                    src = "images/img-27.jpg"
                    text="If you are a youth facing any issues relating to your mental heatlh or any issues in general contact the Kids Help Phone at 1-800-668-6868"
                    label = 'Kids Help Phone'
                    path = 'https://kidshelpphone.ca/text-about-it/?utm_source=google&utm_medium=cpc&utm_campaign=texting&utm_term=kids%20help%20phone&utm_content=brand&gad_source=1&gclid=CjwKCAjw5Ky1BhAgEiwA5jGujrNl0M_V2N6ld7f1-KD8eqd7YjL0qWHO1ZBzvGdXPzAPJUejnM6UgBoC-6kQAvD_BwE'
                    />
                    <Carditem 
                    src = "images/img-28.jpg"
                    text="Mental Health Hotline:If you or someone you know is in immediate crisis or has suicide-related concerns: 9-8-8 is for anyone who is thinking about suicide, or who is worried about someone they know. "
                    label = 'Hotline'
                    path = "https://cmha.ca/find-help/if-you-are-in-crisis/"
                    />
                
                </ul>
                <ul className = "cards__items">
                    <Carditem 
                    src = "images/img-29.jpg"
                    text="Find a Clinic near you and speak with a professional about how you are feeling. Sometimes taking to someone is the best way to feeling better"
                    label = 'Speak'
                    path = 'https://www.google.com/search?q=Mental+Health+Clinics+near+me&client=opera-gx&hs=b5J&sca_esv=de3e428f524f6eaa&sca_upv=1&sxsrf=ADLYWIIHjTcWBq4Qb7cZBl2LBUHlkuA1kQ%3A1722535676558&ei=_M6rZrblIfLCp84Pz7PTIA&ved=0ahUKEwi20_S4sdSHAxVy4ckDHc_ZFAQQ4dUDCBA&uact=5&oq=Mental+Health+Clinics+near+me&gs_lp=Egxnd3Mtd2l6LXNlcnAiHU1lbnRhbCBIZWFsdGggQ2xpbmljcyBuZWFyIG1lMgsQABiABBiSAxiKBTILEAAYgAQYkgMYigUyDhAAGIAEGJECGMkDGIoFMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkjTJVAAWLwlcAN4AJABApgB5ASgAaIXqgELOS43LjEuMC4xLjG4AQPIAQD4AQGYAhSgAtwPwgIKECMYgAQYJxiKBcICChAAGIAEGEMYigXCAgsQABiABBixAxiDAcICDhAuGIAEGLEDGIMBGIoFwgINEAAYgAQYQxjJAxiKBcICEBAAGIAEGLEDGEMYgwEYigXCAhAQLhiABBjRAxhDGMcBGIoFwgIQEAAYgAQYsQMYQxjJAxiKBcICFRAAGIAEGLEDGEMYgwEYigUYRhj5AcICDRAAGIAEGLEDGEMYigXCAgoQABiABBjJAxgKwgIIEAAYgAQYsQPCAi8QABiABBixAxhDGIMBGIoFGEYY-QEYlwUYjAUY3QQYRhj5ARj0Axj1Axj2A9gBAcICCBAAGIAEGJIDwgIOEAAYgAQYkQIYkgMYigXCAhQQABiABBiRAhixAxiDARjJAxiKBcICCxAAGIAEGJECGIoFmAMA4gMFEgExIEC6BgYIARABGBOSBwY5LjEwLjGgB92ZAQ&sclient=gws-wiz-serp'
                    />
                    <Carditem 
                    src = "images/img-30.jpg"
                    text="Headspace: Offers guided meditation and mindfulness exercises to manage stress and improve mental well-being."
                    label = 'Medidtation App'
                    path = 'https://www.headspace.com/headspace-meditation-app'
                    />
                                        <Carditem 
                    src = "images/img-31.jpeg"
                    text="Peer Support Groups: Local groups where individuals with similar mental health experiences provide mutual support. Organizations like NAMI often host local peer support groups."
                    label = 'Support'
                    path = 'https://www.f2fontario.ca'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}




export default Cards3