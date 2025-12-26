import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  formHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  formsubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    alert("user registered  successfully  ");
    this.setState({
      name: "",
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h4 className="text-center mb-4">Register</h4>

                <form onSubmit={this.formsubmit} autoComplete="off">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.formHandler}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.formHandler}
                      autoComplete="off"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.formHandler}
                      autoComplete="new-password"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
