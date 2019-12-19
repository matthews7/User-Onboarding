import React from "react";
import {withFormik, Form, Field} from "formik"

import NewUser from "./NewUser"



function UserForm () {



    return(
        <div className="user-form">
            <Form>
                <label> Name:
                    <Field
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    />
                </label>

                <label> Email:
                    <Field
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    />
                </label>
                <label> Password:
                    <Field
                    id="password"
                    type="text"
                    name="password"
                    placeholder="Enter Password"
                    />
                </label>
                <label> Terms of Service
                    <Field
                    type="checkbox"
                    name="terms"
                    />
                </label>
                <button type="submit">Submit</button>
            </Form>
        
        </div>
    )
};

export default UserForm;