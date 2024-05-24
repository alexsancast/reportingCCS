import Verticalmenu from "../components/Verticalmenu"
import "../sass/main.scss"
import Logo from "../components/Logo"





export default function Mainlayout({ childen }) {
    return <>

        <div className="main-container-layout">
            <div className="horizontal-container">
                <Verticalmenu />
                <div className="logo-container">
                    <Logo />
                </div>
            </div>
        </div>

    </>
}