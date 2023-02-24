import { useEffect } from "react"
import { useState } from "react"
import {useLocation, useNavigate} from 'react-router-dom'


const Dashboard=(props)=>{
    const location = useLocation()
    const navigate = useNavigate()

    const user = location.state.data
    console.log(user)

    function logout(){
        navigate("/")
    }

    return (
        <div className="container">
            <button className="btn-logout" onClick={logout}>Logout</button>
            
            <table className="table-info" border="1">
                <thead>
                    <th>Username</th>
                    <th>Full Name</th>
                    <th>Location</th>
                    <th>Education</th>
                    <th>Occupation</th>
                    <th>Hobbies</th>
                </thead>

                <tbody>
                    <tr>
                        <td>{user.username}</td>
                        <td>{user.full_name}</td>
                        <td>{user.location}</td>
                        <td>{user.education}</td>
                        <td>{user.occupation}</td>
                        <td>{user.hobbies}</td>

                    </tr>
                </tbody>
            </table>
            
               
        </div>
        
    )
    
}

export default Dashboard