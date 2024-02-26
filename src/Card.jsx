import profilePic from './assets/clouds-44.png';

function Card(){
    return (

        <div className="card">
            <img src={profilePic} alt="profilePicture" />
            <h2>Frank Yournet</h2>
            <p>I am a Computer Science student and love animals!</p>
        </div>


    );
}

export default Card;