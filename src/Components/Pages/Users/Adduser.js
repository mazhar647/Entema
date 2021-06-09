import React from 'react'
import './Adduser.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
function Adduser() {

    return (
        <>
            <div class="container" style={{ paddingTop: '30px', paddingLeft: '50px', backgroundColor: "whitesmoke" }}>
                <div className="heading-layout1">
                    <div className="item-title">
                        <h3 style={{ padding: "50px" }}>Add User</h3>
                    </div>
                </div>
                <form>
                    <div className="row">
                        <div class="col-md-4 mb-3">
                            <label for="validationServer013">User name</label>
                            <input type="text" class="form-control is-valid" id="validationServer013" placeholder="First name"
                                value="mark" required />
                        </div>

                        <div class="col-md-4 mb-3">
                            <label for="validationServer013">Full Name</label>
                            <input type="text" class="form-control is-valid" id="validationServer013" placeholder="First name"
                                value="" required />
                        </div><div class="col-md-4 mb-3">
                            <label for="validationServer013">User Email</label>
                            <input type="text" class="form-control is-valid" id="validationServer013" placeholder=""
                                value="mark" required />
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-md-4 mb-3">
                            <label for="validationServer013">Password</label>
                            <input type="text" class="form-control is-valid" id="validationServer013" placeholder="First name"
                                value="" required />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationServer013">Confirm Password</label>
                            <input type="text" class="form-control is-valid" id="validationServer013" placeholder="First name"
                                value="Mark" required />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationServer013">Phone</label>
                            <input type="text" class="form-control is-valid" id="validationServer013" placeholder="First name"
                                value="" required />
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-md-4 mb-3">
                            <label for="validationServer013">Designation</label>
                            <input type="text" class="form-control is-valid" id="validationServer013" placeholder="First name"
                                value="mark" required />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationServer013">Role</label>
                            <select class="custom-select" required>
                                <option value="">Select Role</option>
                                <option value="1">Admin</option>
                                <option value="2">Operator</option>

                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationServer013">Status</label>
                            <select class="custom-select" required>
                                <option value="">select Status</option>
                                <option value="1">Active</option>
                                <option value="2">InActive</option>

                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-md-4 mb-3">

                            <label for="validationServer013">Active Date</label>
                            <input type="date" class="form-control is-valid"
                                value="" required />
                        </div>
                        <div class="col-md-4 mb-3">

                            <label for="validationServer013">Dactive Date</label>
                            <input type="date" class="form-control is-valid"
                                value="" required />
                        </div>
                    </div>
                    <div>

                        <button type="button" class="btn btn-outline-success">Submit</button>
                    </div>
</form>
</div>

        </>
    )
}

export default Adduser
