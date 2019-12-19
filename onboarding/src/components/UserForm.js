import React, {useState, useEffect} from "react";
import {withFormik, Form, Field} from "formik"
import * as Yup from "yup";
import axios from "axios";
import NewUser from "./NewUser"



function UserForm ({values, touched, errors, status }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
    console.log('status has change!', status)

    status && setUsers(user => [...user, status])


    }, [status]); 

    return(
        <div className="user-form">
            <Form>
                <label> Name:
                    <Field
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter First and Last Name"
                    />
                    {touched.name && errors.name && (
                        <p>{errors.name}</p>
                    )}
                </label>

                <label> Email:
                    <Field
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    />

                    {touched.email && errors.email && (
                        <p>{errors.email}</p>
                    )}
                </label>
                <label> Password:
                    <Field
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    />

                    {touched.password && errors.password && (
                        <p>{errors.password}</p>
                    )}
                </label>
                <label> Terms of Service
                    <Field
                    type="checkbox"
                    name="terms"
                    />

                    {touched.terms && errors.terms && (
                        <p>{errors.terms}</p>
                    )}
                </label>
                <button type="submit">Submit</button>
            </Form>
            <NewUser users={users}/>
            
        </div>
    )
};

const FormikUserForm = withFormik({
    mapPropsToValues({name, email, password, terms}){

        return {
            name: name || "",
            email: email || "",
            password: password || "",
            terms: terms || ""
        };
    },

    validationSchema: Yup.object().shape({  
        name: Yup.string().required("Error: Please input your name"),
        email: Yup.string().required("Oops you forgot your email"),
        password: Yup.string().required("Create a password to sign up"),
        terms: Yup.boolean().oneOf([true], "Must Accept Terms and Condtions")

    }),

    handleSubmit(values, {setStatus}){
        console.log("submitting!", values);
        axios.post("https://reqres.in/api/users/", values)
        .then(res=> {
            console.log('succes', res);
            setStatus(res.data);
            
        })
        .catch(err => console.log(err.response));
    }

})(UserForm);

export default FormikUserForm;