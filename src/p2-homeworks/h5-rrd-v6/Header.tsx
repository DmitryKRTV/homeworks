import React from "react"
import {NavLink} from "react-router-dom"
import headerModule from "./Header.module.css"

let activeStyle = {
    textDecoration: "underline",
    color: "#ece73e"
};


function Header() {
    return (
        <div className={headerModule["header"]}>
            <div
                // style={{"marginRight": "10px"}}
            >
                <NavLink
                    to={"pre-junior"}
                    style={({isActive}): any =>
                        isActive ? activeStyle : undefined
                    }
                >
                    pre-junior
                </NavLink>
            </div>
            <div
                style={{"margin": "0px 10px"}}
            >
                <NavLink
                    to={"junior"}
                    style={({isActive}): any =>
                        isActive ? activeStyle : undefined
                    }
                >
                    junior
                </NavLink>
            </div>
            <div>
                <NavLink
                    to={"junior-plus"}
                    style={({isActive}): any =>
                        isActive ? activeStyle : undefined
                    }
                >
                    junior-plus
                </NavLink>
            </div>
            <div className={headerModule["triangle"]}></div>

        </div>
    )
}

export default Header
