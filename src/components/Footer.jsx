import React from "react";

const footerStyle={
    backgroundColor: "#c9f29b",
    align:"center",
    position:"fixed",
    bottom:"0",
    width: "100%",
    height: "60px",
    marginTop:"10px"
    
}

const titleStyle={
    color: "white",
    fontSize: "30px",
}

function Footer(){
    return(
        <nav class="navbar navbar-light" style={footerStyle}>
        <div class="container-fluid">
        <h4 style={titleStyle} class="mx-auto">© 2023 Aristocat Studio</h4>
        </div>    
        
        </nav>
    );
};

export default Footer;
