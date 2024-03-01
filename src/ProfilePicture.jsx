
function ProfilePicture(){
    const imageUrl = './src/assets/react.svg';
    const handleClick = (e) => {
        e.target.style.width = "300px";
        e.target.style.height = "300px"
    }
    
    
    return(
        <img onClick={(e) => handleClick(e)} src={imageUrl} alt="" />
    );

}
export default ProfilePicture;