import React from "react";



function NewUser ({users}){



    return(
        <div>
            {users.map(user => {
                return(
                <ul key={user.id}>
                    <li>Name:{user.name} </li>
                    <li>Email:{user.email} </li>
                    <li>Password:{user.password} </li>
                    <li>Terms of Service:{user.terms} </li>
                </ul>
                );
            })}
        </div>
    )
};

export default NewUser;