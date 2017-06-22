
import React from 'react';
import ReactDOM from 'react-dom';

const Print = (props) => {
  
       return (
        <div className="modal fade" ref='login'>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <h4 className="modal-title">props.text</h4>
            </div>
            <div className="modal-body">
              <p>Please try again!</p>
            </div>
          </div>
        </div>
      </div>
        );
  
};

module.exports = Print;