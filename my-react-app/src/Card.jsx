import profilePic from './assets/Profile-pic.png';

function Card() {
    return(
        <div className="card">
            <img className="class-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Hardik Marlapudi</h2>
            <p className="card-text">I'm a student at USC and play Tennis</p>
        </div>
    );
}

export default Card;
