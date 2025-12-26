import React, { useState } from "react";

const Functinalform = () => {
  const [data, setData] = useState({ name: "", email: "",password:""});

  const formHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const formsubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({...data,name:"",email:"",password:""})
  };

  return (
     <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h4 className="text-center mb-4">Register</h4>

                <form onSubmit={formsubmit} autoComplete="off">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={data.name}
                      onChange={(e)=>{formHandler(e)}}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={data.email}
                      onChange={(e)=>{formHandler(e)}}
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
                      value={data.password}
                      onChange={(e)=>{formHandler(e)}}
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
};

export default Functinalform;
