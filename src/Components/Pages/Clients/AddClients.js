import React from 'react'

function AddClients() {
    return (
        <>
        <div class="container" style={{ paddingTop: '30px', paddingLeft: '50px' }}>
        <div className="scroll">
        <div className="heading-layout1">
                    <div className="item-title">
                        <h3 style={{ padding: "50px" }}>Add Clients</h3>
                    </div>
                    </div>
                    <form >
                    <div className="row">
                    <div class="col-md-6 mb-3">
                        <label for="userName">Contact Person Name</label>
                        <input type="text" class="form-control is-valid" id="userName" name="userName" required/>
                    </div>
                    <div class="col-md-6 mb-3">
                    <label for="userName">Company Name</label>
                    <input type="text" class="form-control is-valid" id="userName" name="userName" required/>
                </div>
                    </div>
                    <div className="row">
                    <div class="col-md-6 mb-3">
                    <label for="userName">Mobile</label>
                    <input type="text" class="form-control is-valid" id="userName" name="userName" required/>
                </div>
                <div class="col-md-6 mb-3">
                <label for="userName">Email</label>
                <input type="text" class="form-control is-valid" id="userName" name="userName" required/>
            </div>
            </div>
            <div class="col-md-8 mb-3">
            <label for="userFname">Address</label>
            <textarea type="text" class="form-control is-valid" id="userFname" name="userFname"  required/>
        </div>

        <div>

        <button type="submit" class="btn btn-outline-success">Submit</button>
    </div>
                    </form>





                    </div>
                    </div>
        </>
    )
}

export default AddClients
