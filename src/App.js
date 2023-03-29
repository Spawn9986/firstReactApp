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
            <div>Personal Digital Assistants</div>
            
            <ProfileCard title = "Alexa" handle = "@alexa99" image= {AlexaImage} />
            <ProfileCard title = "Cortana" handle = "@cortana32" image= {CortanaImage}  />
            <ProfileCard title = "Siri" handle = "@siri01" image= {SiriImage} />
        </div>
    );
}

export default App;