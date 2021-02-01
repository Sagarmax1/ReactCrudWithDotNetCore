import React, { Component } from 'react'
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


export class EmployeeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            EmployeeDetails: [],
            EmpName: "",
            Address: "",
            Age: "",
            Degination: "",
            Location: "",
            PhoneNo: "",
            Email: "",
            Password: "",
            IDInEditMode: 0
        }
        this.UpdateRow = this.UpdateRow.bind(this);
    }
    componentDidMount() {
        Axios.get(`https://localhost:44348/api/Employee/GetAllEmployee`)
            .then(res => {
               
                if (res.data.response.length > 0) {
               

                    this.setState({
                        EmployeeDetails: res.data.response
                    })
                }
                //debugger;
                //if (res.data) {
                //    this.setState({ EmployeeDetails: res.data})
                //}
            });

    }


    

    UpdateRow = () => {
        debugger;
        let UpdatedEmp = {
            "Id": this.state.IDInEditMode,
            "EmpName": this.state.EmpName,
            "Address": this.state.Address,
            "Age": this.state.Age,
            "Degination": this.state.Degination,
            "Location": this.state.Location,
            "PhoneNo": this.state.PhoneNo,
            "Password": this.state.Password
        }

        Axios.post('https://localhost:44348/api/Employee/UpdateEmployee', UpdatedEmp)
            .then(res => {
                debugger;
                if (res.data.status === 200) {
                    debugger;
                    let UpdatedEntry = this.state.EmployeeDetails.findIndex(s => s.Id == this.state.IDInEditMode);
                    this.state.EmployeeDetails[UpdatedEntry].EmpName = UpdatedEmp.EmpName;
                    this.state.EmployeeDetails[UpdatedEntry].Address = UpdatedEmp.Address;
                    this.state.EmployeeDetails[UpdatedEntry].Age = UpdatedEmp.Age;
                    this.state.EmployeeDetails[UpdatedEntry].Degination = UpdatedEmp.Degination;
                    this.state.EmployeeDetails[UpdatedEntry].Location = UpdatedEmp.Location;
                    this.state.EmployeeDetails[UpdatedEntry].PhoneNo = UpdatedEmp.PhoneNo;
                    this.state.EmployeeDetails[UpdatedEntry].Password = UpdatedEmp.Password;

                    if (res.data.response == 1) {
                        debugger;
                        this.setState({
                            EmployeeDetails: this.state.EmployeeDetails, IDInEditMode: 0,
                            EmpName: "",
                            Address: "",
                            Age: "",
                            Degination: "",
                            Location: "",
                            PhoneNo: "",
                            Password: ""
                        });
                    }
                    this.componentDidMount();
                    
                }
            });

    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    //onSave = () => {
    //    debugger;
    //    const {
    //        checkId,
    //        EmpName,
    //        Address,
    //        Age,
    //        Degination,
    //        Location,
    //        PhoneNo,
    //        Email,
    //        Password

    //    } = this.state;

    //    let obj = {
    //        "Id": checkId,
    //        "EmpName": EmpName,
    //        "Address": Address,
    //        "Age": Age,
    //        "Degination": Degination,
    //        "Location": Location,
    //        "PhoneNo": PhoneNo,
    //        "Email": Email,
    //        "Password": Password

    //    }


    //    Axios.put(`http://localhost:44348/api/Employee/UpdateEmployee`, obj)
    //        .then(res => {
    //            debugger;
    //            console.log(res);
    //            let status = res.data.status
    //            debugger;
    //            if (status === 200) {
    //                debugger;
    //                alert("data has been updated");
    //                this.setState({
    //                    checkId: ""
    //                })

    //                Axios.get(`http://localhost:44348/api/Employee/GetAllEmployee`)
    //                    .then(res => {
                           
    //                        if (res.data.response.length > 0) {
    //                            this.setState({
    //                                EmployeeDetails: res.data.response
    //                            })
    //                        }
    //                    })
    //            }
    //        })

    //};

    render() {
        return (
            <Container className="App">
            <>
                <ul className="breadCrumbs">
                    <li className="activePage"><a href="" title="Websites" className="animation"></a></li>
                    <div className="clear"></div>
                </ul>
                <div className="tablebox">
                    <div className="tabletoolbar_master">
                        <div className="tblbar_left">
                            <label className="lbl1 record_lbl">Records/Page</label>
                            <div className="select_record_page ">
                                <div className="form-group ">
                                    <select id="ddlRecordsPerPage" className="form-control">
                                        <option>10</option>
                                        <option defaultValue>20</option>
                                        <option>30</option>
                                        <option>50</option>
                                        <option>100</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="tblbar_right">
                            <div className="tblSearch">
                                <div className="form-group has-feedback" onKeyUp="if(event.which == 13 || event.keyCode == 13) LoadPageIndex(1);">
                                    <input type="text" id="txtSimpleSearch" className="form-control " placeholder="Search..." title="" data-toggle="tooltip" data-original-title="Press Enter to search" />
                                    <span className="form-control-feedback"> <i className="fa fa-search"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                        <form className="table-responsive">
                            <table className="themetable table-hover table">
                                <thead>
                                    <tr>
                                        <th>EmpName</th>
                                        <th>Address</th>
                                        <th>Age</th>
                                        <th>Degination</th>
                                        <th>Location</th>
                                        <th>PhoneNo</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th style={{ width: "190px" }}>Action</th>
                                    </tr>


                                </thead>
                                <tbody>
                                    {
                                        this.state.EmployeeDetails.length > 0 ?
                                            (
                                                this.state.EmployeeDetails.map((EmpData) => {

                                                    return (
                                                        <>
                                                            <tr style={{ display: (this.state.IDInEditMode == EmpData.Id ? 'none' : '') }}>
                                                                <td>{EmpData.EmpName}</td>
                                                                <td>{EmpData.Address}</td>
                                                                <td>{EmpData.Age}</td>
                                                                <td>{EmpData.Degination}</td>
                                                                <td>{EmpData.Location}</td>
                                                                <td>{EmpData.PhoneNo}</td>
                                                                <td>{EmpData.Email}</td>
                                                                <td>{EmpData.Password}</td>
                                                                <td><button type="reset" className="btn-edit" onClick={() => this.setState({ IDInEditMode: EmpData.Id })}>Edit</button>
                                                                    
                                                                </td>
                                                            </tr>
                                                            <tr style={{ display: (this.state.IDInEditMode == EmpData.Id ? '' : 'none') }} >
                                                                <td><input className="editInput" type="text" name="EmpName" placeholder="EmpName" defaultValue={EmpData.EmpName} onChange={(e) => this.handleChange(e)} /></td>
                                                                <td><input className="editInput" type="text" name="Address" placeholder="Address" defaultValue={EmpData.Address} onChange={(e) => this.handleChange(e)} /></td>
                                                                <td><input className="editInput" type="text" name="Age" placeholder="Age" defaultValue={EmpData.Age} onChange={(e) => this.handleChange(e)} /></td>
                                                                <td><input className="editInput" type="text" name="Degination" placeholder="Degination" defaultValue={EmpData.Degination} onChange={(e) => this.handleChange(e)} /></td>
                                                                <td><input className="editInput" type="text" name="Location" placeholder="Location" defaultValue={EmpData.Location} onChange={(e) => this.handleChange(e)} /></td>
                                                                <td><input className="editInput" type="text" name="PhoneNo" placeholder="PhoneNo" defaultValue={EmpData.PhoneNo} onChange={(e) => this.handleChange(e)} /></td>
                                                                <td><input className="editInput" type="text" name="Email" placeholder="Email" defaultValue={EmpData.Email} onChange={(e) => this.handleChange(e)} /></td>
                                                                <td><input className="editInput" type="text" name="Password" placeholder="Password" defaultValue={EmpData.Password} onChange={(e) => this.handleChange(e)} /></td>
                                                                <td><button type="button" className="btn-update" onClick={() => this.UpdateRow()}>Update</button> <button type="button" className="btn-cancel" onClick={() => this.setState({ IDInEditMode: 0 })}>Cancel</button></td>

                                                            </tr>

                                                        </>
                                                        );
                                                }
                                                )
                                            ):
                                                (<div>No User </div>)
                                    }
                                </tbody>
                            </table>
                        </form>
                            <div className="row">
                            <div className="col-xs-12">  
                                <div className="paginationwrap">
                                        <ul className="pagination">
                                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                            <div className="row" >
                            <div className="col-xs-12">
                                <Link to={"Employee"}><button className="btn-edit">Add Employee</button></Link>
                            </div>
                        </div>

                    </div>


                </div>
                </>
            </Container>
            
            );
    }

}

export default EmployeeDetails