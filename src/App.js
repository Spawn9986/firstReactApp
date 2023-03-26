//import files
import ProfileCard from './ProfileCard';

// Create a component
function App() {
    return (
        <div>
            <div>Personal Digital Assistants</div>

            <ProfileCard title = "Alexa" handle = "@alexa99" />
            <ProfileCard title = "Cortana" handle = "@cortana32" />
            <ProfileCard title = "Siri" handle = "@siri01" />
        </div>
    );
}

export default App;