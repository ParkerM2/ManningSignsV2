import React from 'react';
import { Field } from 'react-final-form';
import Select from 'react-select';
import FormLabel from '@material-ui/core/FormLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from 'final-form-material-ui';
import {
  Grid,
} from '@material-ui/core';
import getMats from '../../../lib/materials';

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


const SignForm = (values) => {

    
    return (
       <>
    <FormLabel component="legend" color="primary">Select the material you would like to use:</FormLabel>
        <br></br>
        <Grid item xs={6}>
            <Field
            fullWidth
            name="material"
            options={getMats()}
            component={ReactSelectAdapter}>
            </Field>
        </Grid>
              
        <Grid item xs={6}>
            <Field
            fullWidth
            name="height"
            component={TextField}
            type="number"
            label="Height"
            InputProps={{ endAdornment: <InputAdornment position="end">Inches</InputAdornment> }}
            />
        </Grid>
        <Grid item xs={6}>
            <Field
            fullWidth
            name="width"
            component={TextField}
            type="number"
            label="Width"
            InputProps={{ endAdornment: <InputAdornment position="end">Inches</InputAdornment>}}
        />
        </Grid>               
        <Grid item xs={12}>
            <Field
            name="description"
            fullWidth            
            multiline
            rows={4}
            required
            type="text"
            component={TextField}
            label="Description of Sign"
        />  
    </Grid>
    <br></br>
    </>
    )
}

export default SignForm;