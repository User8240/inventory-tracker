import React from "react";
import PropTypes from "prop-types";

function Tea(props) {
  return (
    <React.Fragment>
        <h3>{props.name} - {props.origin}</h3>
        <p><em>{props.price}</em></p>
        <hr/>
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