import React from 'react';
import Modal from 'react-bootstrap/Modal';
import TodoServices from '../../services/toDoServices.js';

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
        <Modal.Body>
          <form className='addToDo' onSubmit={() => TodoServices.editTodo(this.props.edit, this.state.edit)}>
            <input type="text" value={this.state.edit} name='edit' onChange={(e) => this.onChange(e)} />
            <input type="submit" onSubmit={this.props.onHide}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={this.props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    );
  }
}
