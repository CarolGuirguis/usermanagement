import logo from './logo.svg';
import './App.css';
import Users from "./components/Users";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import Button from 'react-bootstrap/Button';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#f8fafb',
  boxShadow: 24,
  p: 4,
  padding:0,
  margin:'0%',
}; 
function App() {
 const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="App">
     
     <Sidebar/>
     <div className='addingarea'>
     <div className='text'>
      User Management
     </div>
     <div className='button'>
     <Button onClick={handleOpen} variant="success" className='buttonsize'>+ Add New User</Button>
     
     <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>

      <Form handleClose={handleClose} 
      />
  </Box>
</Modal>
     </div>
     </div>
     <Users/>
    </div>
  );
}

export default App;
