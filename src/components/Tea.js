import React from "react";
import PropTypes from "prop-types";

function Tea(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTeaClicked(props.id)}>
        <h3>{props.name} - {props.origin}</h3>
        <p>{props.price}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Tea.propTypes = {
  origin: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string,
  id: PropTypes.string, 
  whenTeaClicked: PropTypes.func
}

export default Tea;