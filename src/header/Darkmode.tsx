import "./DarkMode.css"
import {useEffect, useState} from "react";

const DARK = "Dark";
const LIGHT = "Light";
const THEME = "theme";
const COLOR_THEME = "color-theme"

const Darkmode = () => {
    const isMobile = window.innerWidth <= 768;
    const storedTheme = localStorage.getItem(THEME) || LIGHT;
    const preferredDark =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const [displayed, setDisplayed] = useState(DARK)

    useEffect(() => {
        if (isMobile) {
            preferredDark ? setDarkMode() : setLightMode();
        } else if (storedTheme === LIGHT) {
            setLightMode();
        } else if (storedTheme === DARK){
            setDarkMode();
        } else {
            preferredDark ? setDarkMode() : setLightMode();
        }
    })

    const setDarkMode = () => {
        localStorage.setItem(THEME, DARK);
        document.documentElement.setAttribute(COLOR_THEME, DARK);
        const elem = document.getElementsByTagName("META")[2]
        // @ts-ignore
        if (elem.name === "theme-color"){
            // @ts-ignore
            elem.content = "222";
        }
        
        setDisplayed(LIGHT);
    }

    const setLightMode = () => {
        localStorage.setItem(THEME, LIGHT);
        document.documentElement.setAttribute(COLOR_THEME,  LIGHT)
        const elem = document.getElementsByTagName("META")[2]
        // @ts-ignore
        if (elem.name === "theme-color"){
            // @ts-ignore
            elem.content = "#f6f6f6";
        }
        setDisplayed(DARK);
    }

    const toggleTheme = () => {
        if (displayed === LIGHT) {
            setLightMode()
        } else if (displayed === DARK) {
            setDarkMode()
        }
    }

    return (
        <div className="darkmode-wrapper">
            <span onClick={toggleTheme}>{displayed}</span>
        </div>
    );
};


export default Darkmode;
