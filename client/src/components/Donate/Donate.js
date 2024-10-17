import React, { useState } from "react";
import Modal from "../Modal";

const Donate = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const [amount, setAmount] = useState(0);

  const handleDonation = (donationAmount) => {
    setAmount(donationAmount);
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <div className="container-fluid bg-dark w-100 min-vh-100 p-5">
      <div className="row bg-white w-75 mx-auto p-4">
        <div className="col-3">
          <div class="card">
            <img
              src="images/kids1.webp"
              class="card-img-top"
              alt="..."
              style={{ height: "10rem", objectFit: "cover" }}
            />
            <div class="card-body">
              <h5 class="card-title mt-3 mb-5">
                Contribute towards a child's education for 12 Months
              </h5>

              <button
                className="btn btn-danger rounded-4 px-5 py-2"
                onClick={() => handleDonation(18000)}
              >
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-gift me-1"></i>
                  <p className="mb-0 fw-bold"> Donate</p>
                </div>
                <p className="mb-0 fw-bold">₹18000</p>
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div class="card">
            <img
              src="images/kids2.jpg"
              class="card-img-top"
              alt="..."
              style={{ height: "10rem", objectFit: "cover" }}
            />
            <div class="card-body">
              <h5 class="card-title mt-3 mb-5">
                Contribute towards a child's education for 6 Months
              </h5>

              <button className="btn btn-danger rounded-4 px-5 py-2">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-gift me-1"></i>
                  <p className="mb-0 fw-bold"> Donate</p>
                </div>
                <p className="mb-0 fw-bold">₹9000</p>
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div class="card">
            <img
              src="images/kids3.avif"
              class="card-img-top"
              alt="..."
              style={{ height: "10rem", objectFit: "cover" }}
            />
            <div class="card-body">
              <h5 class="card-title mt-3 mb-5">
                Contribute towards a child's education for 3 Months
              </h5>

              <button className="btn btn-danger rounded-4 px-5 py-2">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-gift me-1"></i>
                  <p className="mb-0 fw-bold"> Donate</p>
                </div>
                <p className="mb-0 fw-bold">₹4500</p>
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div class="card">
            <img
              src="images/kids4.webp"
              class="card-img-top"
              alt="..."
              style={{ height: "10rem", objectFit: "cover" }}
            />
            <div class="card-body">
              <h5 class="card-title mt-3 mb-5">
                Contribute towards a child's education for 2 Months
              </h5>

              <button className="btn btn-danger rounded-4 px-5 py-2">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-gift me-1"></i>
                  <p className="mb-0 fw-bold"> Donate</p>
                </div>
                <p className="mb-0 fw-bold">₹3000</p>
              </button>
            </div>
          </div>
        </div>
        <Modal
          isVisible={isModalVisible}
          onClose={handleClose}
          amount={amount}
        />
      </div>
    </div>
  );
};

export default Donate;
