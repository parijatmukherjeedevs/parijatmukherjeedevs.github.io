import React from "react";

const textAreaStyle={
    outline:"none",
    resize:"none",
    border:"none",
    borderRadius:"20px",
    padding: "40px",
    backgroundColor:"#ecd9dd",
    fontSize:"20px"
}

function DisplayBox(props){
    return(
        <textarea class="form-control" id={props.id} rows="15" cols="60" placeholder={props.placeholder} style={textAreaStyle}></textarea> 

    );
};

export default DisplayBox;
