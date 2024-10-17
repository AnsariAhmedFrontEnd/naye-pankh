import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isVisible, onClose, amount }) => {
  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <>
      {/* Backdrop for modal */}
      <div className="modal-backdrop show"></div>

      {/* Modal content */}
      <div className="modal d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Personal Information</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="donorName" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" id="donorName" />
                </div>
                <div className="row">
                  <div className="col">
                    {" "}
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                  </div>
                  <div className="col">
                    {" "}
                    <div class="mb-3">
                      <label htmlFor="phone" class="form-label">
                        Phone
                      </label>
                      <div class="input-group">
                        <span class="input-group-text" id="basic-addon3">
                          +91
                        </span>
                        <input
                          type="text"
                          class="form-control"
                          id="phone"
                          aria-describedby="basic-addon3 basic-addon4"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Do you wish to receive Tax Exemption?
                  </label>
                </div>
                <div className="mb-3">
                  <label htmlFor="refernce" className="form-label">
                    Reference Code (if available)
                  </label>
                  <input type="text" className="form-control" id="refernce" />
                </div>

                <div class="input-group">
                  <span class="input-group-text" id="basic-addon3">
                    ₹
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    id="donationAmount"
                    aria-describedby="basic-addon3 basic-addon4"
                    value={amount}
                    disabled
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger rounded-5">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal-root") // Render in #modal-root
  );
};

export default Modal;
