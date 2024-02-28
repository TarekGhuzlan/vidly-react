import React, { Component } from 'react'

const Like = (props) => {
    let classes = "bi bi-heart";
    if(props.liked){
        classes +="-fill"
    }
    return (<i onClick={props.onClick} style={{cursor:"pointer"}} className={classes}></i>);
}

export default Like;