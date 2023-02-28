import { useEffect } from "react"
import { useState } from "react"
import {useLocation, useNavigate} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { DataGrid } from '@mui/x-data-grid';



const Dashboard=(props)=>{
    const location = useLocation()
    const navigate = useNavigate()

    const user = location.state.data
    console.log(user)

    const columns = [
        { field: 'username', headerName: 'Username', width: 130 },
        { field: 'fullName', headerName: 'FullName', width: 130 },
        { field: 'location', headerName: 'Location', width: 130 },
        { field: 'education', headerName: 'Education', width: 130 },
        { field: 'occupation', headerName: 'Occupation', width: 130 },
        { field: 'hobbies', headerName: 'Hobbies', width: 130 }

    ]

    const rows = [user];

    function logout(){
        navigate("/")
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> Home </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> About Us </Typography> */}

                    <h2  style={{"margin-left":"20px"}} >Home</h2 >
                    <h2  style={{"margin-left":"20px"}} >About Us</h2 >

                    <Button color="inherit" style={{"margin-left":"900px", 'background-color':"yellow ","color":"black","border-radius":"15px"}}  onClick={logout}><b>Logout</b></Button>
                    </Toolbar>
                </AppBar>
            </Box>

            
            {/* <table className="table-info" border="1">
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
            </table> */}

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    
                />
            </div>



            
               
        </div>
        
    )
    
}

export default Dashboard