import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types"; 

function NewTeaForm(props){

  function handleNewTeaFormSubmission(event) {
    event.preventDefault();
    props.onNewTeaCreation(
      {
        origin: event.target.origin.value, 
        name: event.target.name.value, 
        price: event.target.price.value, 
        amount: 130,
        id: v4()
      }
    );
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewTeaFormSubmission}>
        <input
          type='text'
          name='origin'
          placeholder='Enter Origin' />
        <input
          type='text'
          name='name'
          placeholder='Enter Name' />
        <textarea
          name='price'
          placeholder='Enter Price' />
        <button type='submit'>Add Tea to Inventory</button>
      </form>
    </React.Fragment>
  );
}

NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
};

export default NewTeaForm;