import React from "react";
import "./styles.css";

export default function SplashScreen() {
    return (
        <div className={"splash-screen"} style={{
            backgroundImage: "assets/img/header.png",
            height: "100vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
        </div>
    );
}