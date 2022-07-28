import React from 'react';
// import PropTypes from 'prop-types';

export default function Alert(props) {

    const capitalize = (word)=> {
        if(word==='danger'){
            word='Error';
        }
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{height: "50px"}}>
                {/* if props.alert is null then this code would not run. this is similar to an if statement */}
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>}
        </div>
    )
}
