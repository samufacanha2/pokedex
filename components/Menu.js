import React from 'react'


function toggleAnimation()  {
        document.querySelector(".menuIcon").classList.toggle("clicked")
        document.getElementById("Bar1").classList.toggle("clicked")
        document.getElementById("Bar2").classList.toggle("clicked")
        document.getElementById("Bar3").classList.toggle("clicked")
}

export default function Menu() {
        return (
            
            <div id="MenuBox">
                    <div className="menuIcon" onClick={() => toggleAnimation()}>
                        <div id="Bar1"></div>
                        <div id="Bar2"></div>
                        <div id="Bar3"></div>
                    </div>
            </div>
        )
}

