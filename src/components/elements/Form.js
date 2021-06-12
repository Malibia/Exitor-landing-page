import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));


const Form = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [businessemail, setBusinessEmail] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    

  const handleSubmit = e => {
      e.preventDefault();
      console.log("We will contact you soon...");
      //console.log(firstName, lastName, companyName, email, password);
      // For now we are just login the output, ideally we want to take in the details and then redirect the user

      // For starters, we will use Netlify
    handleClose();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        onChange={e => setLastName(e.target.value)}
	  />
	  <TextField
        label="Company Name"
        variant="filled"
        required
        value={companyName}
        onChange={e => setCompanyName(e.target.value)}
      />
      <TextField
        label="Business Email"
        variant="filled"
        type="email"
        required
        value={businessemail}
        onChange={e => setBusinessEmail(e.target.value)}
	  />
	  <TextField
        label="Business Phone Number"
        variant="filled"
        type="phonenumber"
        required
        value={phonenumber}
        onChange={e => setPhoneNumber(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
};

export default Form;
