import React from 'react';
import NewTeaForm from './NewTeaForm';
import TeaList from './TeaList';
import TeaDetail from './TeaDetail';

class TeaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      formVisibleOnPage: false,
      mainTeaList: [],
      selectedTea: null
    };
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedTea != null) {
      currentlyVisibleState = <TeaDetail />
      buttonText = "Return to Tea List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTeaForm />;
      buttonText = "Return to Tea List";
    } else {
      currentlyVisibleState = <TeaList />;
      buttonText = "Add Tea";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default TeaControl;