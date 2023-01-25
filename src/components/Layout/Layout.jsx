import React from "react";
import "./Layout.css"


const Layout = ({children}) => {
    return (
        <>
            <div className="container">
             {children}
            </div>
        </>
    )
}

export default Layout;