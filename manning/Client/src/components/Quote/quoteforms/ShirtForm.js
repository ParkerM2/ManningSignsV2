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

const brandOptions = [
    {
        value: "Gildan", label: "Gildan"
    },
    {
        value: "Comfort Color", label: "Comfort Color"
    },
    {
        value: "Bella+Canvas", label: "Bella+Canvas"
    },
    {
        value: "Anvil", label: "Anvil"
    },
    {
        value: "Not Sure", label: "Not Sure"
    },
    {
        value: "Other", label: "Other"
    },
]
const clothingArticle = [
    {
        value: "Short Sleeve", label: "Short Sleeve"
    },
    {
        value: "Long Sleeve", label: "Long Sleeve"
    },
    {
        value: "Hoodie", label: "Hoodie"
    },
    {
        value: "Other", label: "Other"
    },
]

const ShirtForm = () => {
    return (
        <>
    <CssBaseline />
    <Grid container>
    <br></br>
    </Grid>
        <Grid container spacing={3}>
        <Grid item xs={6}>
            <FormLabel>Quantity of Shirts:</FormLabel>
            <Field
            fullWidth
            required
            name="shirtQuantity"
            component={ReactSelectAdapter}
            options={getNum(24, 1000)}>
            </Field>
        </Grid>
        <Grid color="inherit" item xs={3}>
            <FormLabel>Front Ink Count</FormLabel>
            <Field
            fullWidth
            required
            color="inherit"
            name="inkNumberFront"
            options={getNum(1,5)}
            component={ReactSelectAdapter}
            />
        </Grid>
        <Grid item xs={3}>
            <FormLabel>Back Ink Count</FormLabel>
            <Field
            fullWidth
            required
            name="inkNumberBack"
            options={getNum(1,5)}
            component={ReactSelectAdapter}
            />
        </Grid>
    </Grid>
    <Grid container spacing={3}>
        <Grid item xs={6}>
            <FormLabel>Brand of Shirt</FormLabel>
            <Field
            fullWidth
            required
            name="brand"
            component={ReactSelectAdapter}
            options={brandOptions}>
            </Field>
        </Grid>
        <Grid item xs={6}>
            <FormLabel>Type:</FormLabel>
            <Field
            fullWidth
            required
            name="articleClothing"
            options={clothingArticle}
            component={ReactSelectAdapter}
            />
        </Grid>
    </Grid> 
    <Grid item xs={12}>
        <Field
            name="description"
            fullWidth            
            multiline
            rows={10}
            type="text"
            component={TextField}
            label="Enter your message here:"
        />  
    </Grid>
        </>
    
    )
}

export default ShirtForm;