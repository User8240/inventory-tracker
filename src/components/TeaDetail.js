import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props){
  const { tea } = props;

  return (
    <React.Fragment>
      <h1>Tea Detail</h1>
      <h3>{tea.name} - {tea.origin}</h3>
      <p>{tea.price}</p>
      <hr/>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object
};

export default TeaDetail;