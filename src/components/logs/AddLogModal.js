import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = () => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState('');
  const [tech, setTech] = useState('');
  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'please enter a message and tech' });
    } else {
      console.log(message, attention, tech);
    }
  };
  return (
    <div className='modal' id='add-log-modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              log Message
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}
            >
              <option value='' disabled>
                {' '}
                Select Tecnition
              </option>
              <option value='John Due'>John Due</option>
              <option value='Sam smith'>Sam smith</option>
              <option value='Sara Wilson'>Sara Wilson</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Need Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  wight: '75%',
  height: '75%',
};
export default AddLogModal;
