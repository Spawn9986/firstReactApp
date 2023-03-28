//Create a component for the profile cards
//add props to component
function ProfileCard({ title, handle, image }) {

    return (
        <div>
            <img src={image} />
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    );
}

export default ProfileCard;