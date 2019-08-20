import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default class ConfirmModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: this.props.value
    }

    this.handleClick.bind(this);
  }

  handleClick(yn) {
    this.props.onHide(yn);
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='confirmModal'
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" />
        </Modal.Header>
        <Modal.Body className='confirm'>
          <div>Are you sure you want to delete all ToDos?</div>
          <button onClick={() => {this.handleClick(false)}}>No</button>
          <button onClick={() => {this.handleClick(true)}}>Yes</button>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }
}
