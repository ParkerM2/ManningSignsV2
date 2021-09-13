import React, {useState} from 'react';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox } from 'final-form-material-ui';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import materials from '../../../lib/materials';
import { Link } from 'react-router-dom';
import {
  Typography,
  Paper,
  Grid,
  Button,
  Container,
  CssBaseline,
  makeStyles
} from '@material-ui/core';
import SignForm from './SignForm';
import VehicleForm from './VehicleWrapForm';
import ShirtForm from './ShirtForm';
import shirtEmailTemplate from '../../../lib/shirtTemplate';
import signEmailTemplate from '../../../lib/signTemplate';
const signTemplate = "template_u7olvj9";
const shirtTemplate = "template_6u0hilf";

const useStyles = makeStyles((theme) => ({
  container: {
    
  }
}))

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};



function QuoteForm({font}) {
  const classes = useStyles();
    // Check to see if shirts/signs/vehicle wrap are selected to then display the corresponding form beneath.
  const [orderType, setOrderType] = useState('null')
  const [sending, setSending] = useState("Submit for Quote");
  const [recipient, setRecipient] = useState('')
  const [emailTemplate, setEmailTemplate] = useState()
  
  const handleChange = (event) => {
      setOrderType(event.target.value);
  };

  function handleQuoteForm(orderType) {
      switch (orderType) {
        case 'sign':
          setEmailTemplate(signTemplate)
          setOrderType('sign')
          setRecipient("parkerlmanning@hotmail.com")
          return <SignForm materials={materials} onSubmit={onSubmit} />
        case 'shirt':
          setEmailTemplate(shirtTemplate)
          setOrderType('shirt')
          setRecipient("parkerlmanning@hotmail.com")
          return <ShirtForm onSubmit={onSubmit} />
        case 'vehicle':
          setEmailTemplate(signTemplate)
          setOrderType('vehicle')
          setRecipient("parkerlmanning@hotmail.com")
              return <VehicleForm onSubmit={onSubmit} />
          case null:
              return <Typography>Please Select an Option!</Typography>
      }
  }

  const onSubmit = async (values) => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(300);

    setSending("...Sending")


    let data = {
      template: emailTemplate,
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.Address,
      city: values.City,
      previousCustomer: JSON.stringify(values.previousCustomer),
      email: values.email,
      company: values.company,
      description: values.description,
      orderType: orderType,
      recipient: recipient,
      zip: values.zip,
      state: values.state
    };

    if (data.previousCustomer === 'undefined') {
      data.previousCustomer = 'New Client'
    } else {
      data.previousCustomer = 'Returning Client'
    };

    if (data.orderType === 'sign') {
      data.height = values.height
      data.width = values.width
      data.material = values.material
      signEmailTemplate(data)
    } else if (data.orderType === 'shirt') {
      data.shirtQuantity = JSON.stringify(values.shirtQuantity.value)
      data.brand = values.brand.value
      data.inkNumberFront = JSON.stringify(values.inkNumberFront.value)
      data.inkNumberBack = JSON.stringify(values.inkNumberBack.value)
      data.articleClothing = values.articleClothing.value
      shirtEmailTemplate(data)
    } else if (data.orderType === 'vehicle') {
      data.brand = values.brand
      data.year = JSON.stringify(values.year.value)
      data.model = values.model
      signEmailTemplate(data)
    };
    console.log(data)
    // sendEmail(data);
    setSending("Sent!")
  };

  return (
    <>
    <Container lg={12} md={12} sm={12}>
      <Typography style={{fontFamily: font}} variant="h4" align="center" component="h2" gutterBottom>
        Feel Free to Request a Quote!
      </Typography>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} >
            <Paper elevation={3} style={{ padding: 16 }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    required
                    name="firstName"
                    component={TextField}
                    type="text"
                    label="First Name"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    required
                    name="lastName"
                    component={TextField}
                    type="text"
                    label="Last Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    required
                    name="company"
                    component={TextField}
                    type="text"
                    label="Company"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="email"
                    fullWidth
                    required
                    component={TextField}
                    type="email"
                    label="Email"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="state"
                    fullWidth
                    required
                    component={TextField}
                    type="State"
                    label="State"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="City"
                    fullWidth
                    required
                    component={TextField}
                    type="City"
                    label="City"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="Address"
                    fullWidth
                    required
                    component={TextField}
                    type="address"
                    label="Address"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="zip"
                    fullWidth
                    required
                    component={TextField}
                    type="zip"
                    label="Zip"
                  />
                  </Grid>
                <Grid item xs={12}>
                  <Field
                    label="Previous Customer"
                    name="previousCustomer"
                    type="checkbox"                   
                    component={Checkbox}
                  />Previous Customer
                </Grid>
                  <Grid item>
                    <FormLabel component="legend" color="primary">What type of <strong>Quote</strong> are you looking for?</FormLabel>
                  <RadioGroup onChange={handleChange} color="primary.main" name="typeOrder" row>
                      <FormControlLabel
                            label="Shirts"
                            name="shirts"
                            control={<Radio />}
                            type="Radio"                            
                            value="shirt"
                      />       
                      <FormControlLabel
                            label="Sign"
                            name="sign"
                            control={<Radio />}
                            type="Radio"
                            value="sign"                            
                      />
                      <FormControlLabel
                            label= "Vehicle Wrap"  
                            name= "vehicle wrap"
                            control={<Radio />}
                            type= "Radio"
                            value="vehicle"
                      />
                  </RadioGroup>
                  </Grid>
                </Grid>        
            <Grid>
                {handleQuoteForm(orderType)} 
            </Grid>
              <br></br>
              <Button variant="outlined" component={Link} to="/sent" color="inherit" type="submit">{sending}</Button>
            </Paper>
          </form>
        )}
      />
      </Container>
    </>
  );
}

export default QuoteForm;