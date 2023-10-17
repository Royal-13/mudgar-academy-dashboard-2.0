import React from "react";
type Props = {};
export default function DepositModal({}: Props) {
  return (
    <div className="pop-modal">
      <div
        className="modal-styles modal fade"
        id="depositMethod"
        tabIndex={-1}
        aria-labelledby="addpaymentMethod"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addpaymentMethod">
                Deposit Method
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-regular fa-circle-xmark" />
              </button>
            </div>
            <div className="modal-body">
              <div className="addpaymethod-form add-course-info">
                <form action="#">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="radio-with-img">
                        <p className="radio-deposit-item">
                          <input
                            type="radio"
                            name="deposittypes"
                            id="deposit-type-one"
                            defaultValue="true"
                            className="ng-valid ng-dirty ng-touched ng-empty"
                            aria-invalid="false"
                          />
                          <label htmlFor="deposit-type-one">
                            <img
                              src="/img/deposit-01.jpg"
                              alt=""
                              className="img-fluid"
                            />
                            Bank
                          </label>
                        </p>
                        <p className="radio-deposit-item">
                          <input
                            type="radio"
                            name="deposittypes"
                            id="deposit-type-two"
                            defaultValue="false"
                            className="ng-valid ng-dirty ng-touched ng-empty"
                            aria-invalid="false"
                            defaultChecked
                          />
                          <label htmlFor="deposit-type-two">
                            <img
                              src="/img/deposit-02.jpg"
                              alt=""
                              className="img-fluid"
                            />
                            Paypal
                          </label>
                        </p>
                        <p className="radio-deposit-item">
                          <input
                            type="radio"
                            name="deposittypes"
                            id="deposit-type-three"
                            defaultValue="false"
                            className="ng-valid ng-dirty ng-touched ng-empty"
                            aria-invalid="false"
                          />
                          <label htmlFor="deposit-type-three">
                            <img
                              src="/img/deposit-03.jpg"
                              alt=""
                              className="img-fluid"
                            />
                            Stripe
                          </label>
                        </p>
                        <p className="radio-deposit-item me-0">
                          <input
                            type="radio"
                            name="deposittypes"
                            id="deposit-type-four"
                            defaultValue="false"
                            className="ng-valid ng-dirty ng-touched ng-empty"
                            aria-invalid="false"
                          />
                          <label htmlFor="deposit-type-four">
                            <img
                              src="/img/deposit-04.jpg"
                              alt=""
                              className="img-fluid"
                            />
                            Flutterwave - USD
                          </label>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-0">
                        <label className="form-control-label">
                          Enter Amount:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Amount"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer me-auto">
              <button type="button" className="btn btn-modal-style btn-theme">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-modal-style btn-cancel"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
