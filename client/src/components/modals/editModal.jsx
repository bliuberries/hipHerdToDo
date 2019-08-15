import React from 'react';
import Modal from 'react-bootstrap/Modal';
import TodoServices from '../../services/toDoServices.js';

const modulStyle = {
  paddingTop: '1.5%'
}

export default class EditModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: this.props.edit
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='editModal'
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" />
        </Modal.Header>
        <Modal.Body className='editForm'>
          <form 
            className='addToDo'
            style={modulStyle}
            onSubmit={(e) => {
              e.preventDefault();
              TodoServices
                .editTodo(this.props.edit, this.state.edit)
                .then(() => {
                  document.dispatchEvent(new CustomEvent('editTodo', {
                    bubbles: false,
                    detail: {
                      edited: this.state.edit,
                      index: this.props.index
                    }
                  }));
                  this.props.onHide();
                })
            }}
          >
            <textarea 
              type="text" 
              value={this.state.edit} 
              name='edit' 
              onChange={(e) => this.onChange(e)} 
            />
            <button>Update</button> 
          </form>
          <button onClick={this.props.onHide}>Close</button>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }
}
