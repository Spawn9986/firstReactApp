//“App” contains the main logic of your file, or in React case, the main component,
//the one that represents your entire application/web-site. “App.js” would usually refer 
//to your main component.

//import files
import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

// Create the main component
function App() {
    return (
        //create a container to house the profile cards
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                                title = "Alexa" 
                                handle = "@alexa99" 
                                image= {AlexaImage} 
                                description="Alexa was created by Amazon and helps you buy things."
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title = "Cortana" 
                                handle = "@cortana32" 
                                image= {CortanaImage}
                                description="Cortana was made by Microsoft."  
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title = "Siri" 
                                handle = "@siri01" 
                                image= {SiriImage}
                                description="Siri was made by Apple." 
                            />
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}

export default App;