import React from "react"
import {NavLink} from "react-router-dom"

let activeStyle = {
    textDecoration: "underline",
};


function Header() {
    return (
        <div>
            <span
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
            </span>
            <span
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
            </span>
            <span>
                <NavLink
                    to={"junior-plus"}
                    style={({isActive}): any =>
                        isActive ? activeStyle : undefined
                    }
                >
                junior-plus
            </NavLink>
            </span>


        </div>
    )
}

export default Header
