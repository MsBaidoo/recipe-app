import welcomeImage from "../assets/images/welcome-image.png";
export default function Welcome() {

    return (
        <div className="bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url('./assets/images/welcome-bg.png')] bg-cover h-screen flex flex-col place-items-center place-content-center">

            <h4 className="text-white text-center text-4xl">Savory & <br /> Sweet</h4>
            <img src={welcomeImage} alt="welcome Image" />

        </div>
    )
} 
















