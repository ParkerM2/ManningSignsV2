import React from 'react';
import Select from 'react-select'
import { Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import {
  Grid,
  CssBaseline,
  FormLabel,
} from '@material-ui/core';
import getNum from '../../../lib/shirtQuantity';
import moment from 'moment';
var year = moment().format('YYYY');
const ReactSelectAdapter = ({ input, ...rest }) => (
    <Select {...input} {...rest} theme={theme => ({
      ...theme,
      borderRadius: 1,
      colors: {
        ...theme.colors,
        neutral0: 'grey',
        primary25: 'grey',
        primary75: 'black'
      },
    })} searchable />
)




const VehicleWrapForm = () => {


    return (
        <>
    <br></br>
        <div style={{ maxWidth: 600 }}>
        <CssBaseline />
        <Grid container>
        <FormLabel component="legend" color="primary">Please answer these questions about your Vehicle Wrap!</FormLabel>
        <br></br>
        </Grid>
            <Grid container spacing={3}>
            <Grid item xs={6}>
                <FormLabel>Brand of Vehicle:</FormLabel>
                <Field
                fullWidth
                required
                name="brand"
                component={TextField}>
                </Field>
            </Grid>
            <Grid item xs={3}>
                <FormLabel>Model:</FormLabel>
                <Field
                fullWidth
                required
                name="model"
                component={TextField}
                />
            </Grid>
            <Grid item xs={3}>
                <FormLabel>Year:</FormLabel>
                <Field
                fullWidth
                required
                name="year"
                options={getNum(1900, year)}
                component={ReactSelectAdapter}
                />
            </Grid>
            </Grid> 
            <Grid item xs={12}>
            <Field
                name="description"
                required
                fullWidth            
                multiline
                rows={10}
                type="text"
                component={TextField}
                label="Enter your message here:"
            />  
            </Grid>
            </div>
            </>
    )
}

export default VehicleWrapForm;