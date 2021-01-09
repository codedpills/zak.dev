import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h4 className="text-center text-uppercase">Contact</h4>
              <p className="text-center">
                Have a question or want to work together?
              </p>
              <br/>
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputPassword4">Name</label>
                    <input type="text" className="form-control" name="name" />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" className="form-control" name="email" />
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputAddress">Message</label>
                  <textarea
                    class="form-control"
                    name="message"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-warning rounded-pill">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
