import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


export class Employee extends React.Component {
    constructor(props) {
        super(props)

        this.AddEmployee = this.AddEmployee.bind(this);
        // this.OnCancil = this.OnCancil.bind(this);
        //  this.handleSubmit = this.handleSubmit.bind(this);
        // this.AddUser = this.AddUser.bind(this);
        //  this.handleChange = this.handleChange.bind(this);

        this.state = {
            Id: '',
            EmpName: '',
            Address: '',
            Age: '',
            Degination: '',
            Location: '',
            PhoneNo: '',
            Email: '',
            Password: ''

        }
    }


    AddEmployee = (values) => {
        debugger;
        let NewEmployee = {
            Id: 0,
            EmpName: values.EmpName,
            Address: values.Address,
            Age: values.Age,
            Degination: values.Degination,
            Location: values.Location,
            PhoneNo: values.PhoneNo,
            Email: values.Email,
            Password: values.Password
        }

        Axios.post('https://localhost:44348/api/Employee/EmpCreate', NewEmployee).then(json => {
            debugger;
            if (json.data.response == 1) {
                alert('sagar')
                // this.props.history.push('/EmployeeDetails')
            }
            else {
                alert('Data Not Saved')
            }
        })

    }

    render() {
        return (<>
            <div className="col-sm-12">
                <Formik
                    initialValues={{
                        EmpName: '',
                        Address: '',
                        Age: '',
                        Degination: '',
                        Location: '',
                        PhoneNo: '',
                        Email: '',
                        Password: ''

                    }}

                    validationSchema={Yup.object().shape({
                        EmpName: Yup.string().required('EmpName is required'),
                        Address: Yup.string().required('Address is required'),
                        Degination: Yup.string().required('Degination is required'),
                        PhoneNo: Yup.string().required('PhoneNo is required'),
                        Email: Yup.string().required('Email is required'),
                        Password: Yup.string().required('Password is required')

                    })
                    }

                    onSubmit={(values) => { this.AddEmployee(values) }}

                    render={({ errors, status, touched }) => (

                        <Form style={{ backgroundColor: "#eee", borderRadius: "10px" }} className="AddUser">
                            <h3 className="FormHeader"> Create Employee </h3>

                            <div className="form-group">
                                <label htmlFor="EmpName">Emp Name</label>
                                <Field name="EmpName" type="text" maxLength="100" className={'form-control' + (errors.EmpName && touched.EmpName ? ' is-invalid' : '')} />
                                <ErrorMessage name="EmpName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Address">Address</label>
                                <Field name="Address" type="text" maxLength="100" className={'form-control' + (errors.Address && touched.Address ? ' is-invalid' : '')} />
                                <ErrorMessage name="Address" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Age">Age</label>
                                <Field name="Age" type="text" maxLength="100" className={'form-control' + (errors.Age && touched.Age ? ' is-invalid' : '')} />
                                <ErrorMessage name="Age" component="div" className="invalid-feedback" />
                            </div>


                            <div className="form-group">
                                <label htmlFor="Degination">Degination</label>
                                <Field name="Degination" type="text" maxLength="15" className={'form-control' + (errors.Degination && touched.Degination ? ' is-invalid' : '')} />
                                <ErrorMessage name="Degination" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Location">Location</label>
                                <Field name="Location" type="text" maxLength="100" className={'form-control' + (errors.Location && touched.Location ? ' is-invalid' : '')} />
                                <ErrorMessage name="Location" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="PhoneNo">PhoneNo</label>
                                <Field name="PhoneNo" type="text" maxLength="50" className={'form-control' + (errors.PhoneNo && touched.PhoneNo ? ' is-invalid' : '')} />
                                <ErrorMessage name="PhoneNo" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email">Email</label>
                                <Field name="Email" type="text" maxLength="50" className={'form-control' + (errors.Email && touched.Email ? ' is-invalid' : '')} />
                                <ErrorMessage name="Email" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password">Password</label>
                                <Field name="Password" type="password" maxLength="50" className={'form-control' + (errors.Password && touched.Password ? ' is-invalid' : '')} />
                                <ErrorMessage name="Password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group"></div><div className="form-group"></div>
                            <div className="form-group"></div><div className="form-group"></div>
                            <div className="form-group"></div><div className="form-group"></div>


                            <div className="form-group"><button type="submit" className="btn btn-success pull-right"  >Submit</button> &nbsp;&nbsp;&nbsp;&nbsp;
                                <button type="reset" className="btn btn-success pull-right" >Clear</button>
                            </div>
                           

                        </Form>
                        
                           

                    )}


                />
            </div>
            <br/>
            <div>
                <div className="form-group"> <Link to={"EmployeeDetails"}><button className="btn btn-success ">Go To Employee Details</button></Link></div>
            </div>


        </>)
    }

}

export default Employee;