import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


  export class Registration extends React.Component {
    constructor(props) {
        super(props)

        this.AddRegistration = this.AddRegistration.bind(this);
        // this.OnCancil = this.OnCancil.bind(this);
        //  this.handleSubmit = this.handleSubmit.bind(this);
        // this.AddUser = this.AddUser.bind(this);
        //  this.handleChange = this.handleChange.bind(this);

        this.state = {
            Rid: '',
            Name: '',
            Email: '',
            Password: ''

        }
    }


      AddRegistration = (values) => {
          debugger;
        let NewRegistration = {
            Rid: 0,
            Name: values.Name,
            Email: values.Email,
            Password: values.Password
        }

          Axios.post(' ', NewRegistration).then(json => {
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
                        Name:'',
                        Email: '',
                        Password: ''

                    }}

                    validationSchema={Yup.object().shape({
                        Name: Yup.string().required('Name is required'),
                        Email: Yup.string().required('Email is required'),
                        Password: Yup.string().required('Password is required')
                        
                    })
                    }

                    onSubmit={(values) => { this.AddRegistration(values) }}

                    render={({ errors, status, touched, values }) => (

                        <Form style={{ backgroundColor: "#eee", borderRadius: "10px" }} className="AddUser">
                            <h3 className="FormHeader"> Registration </h3>

                            <div className="form-group">
                                <label htmlFor="Name"> Name</label>
                                <Field name="Name" type="text" maxLength="100" className={'form-control' + (errors.Name && touched.Name ? ' is-invalid' : '')} />
                                <ErrorMessage name="Name" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email">Email</label>
                                <Field name="Email" type="text" maxLength="100" className={'form-control' + (errors.Email && touched.Email ? ' is-invalid' : '')} />
                                <ErrorMessage name="Email" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password">Password</label>
                                <Field name="Password" type="text" maxLength="100" className={'form-control' + (errors.Password && touched.Password ? ' is-invalid' : '')} />
                                <ErrorMessage name="Password" component="div" className="invalid-feedback" />
                            </div>

                           
                           
                            <div className="form-group"></div><div className="form-group"></div>
                            <div className="form-group"></div><div className="form-group"></div>
                            <div className="form-group"></div><div className="form-group"></div>

                            <div className="form-group"> <Link to={"EmployeeDetails"}><button className="btn btn-success">Go To Employee Details</button></Link></div>
                            <div className="form-group"><button type="submit" className="btn btn-success pull-right" >Register</button>
                            </div>

                        </Form>

                        )}


                />
            </div>


        </>)
    }

}

export default Registration;