import email from './emailJS';

const shirtEmailTemplate = (data) => {
    // create new object to pass into the emailJS template so that you can call it from one variable
    let emailTemplate = {
        template: data.template,
        to: data.recipient,
        clientInformation: {
            name: `${data.firstName} ${data.lastName}`,
            company: `${data.company}`,
            location: `${data.city}, ${data.state} ZIP: ${data.zip}`,
            address: `${data.address}`,
            email: `${data.email}`,
            previousCustomer: `${data.previousCustomer}`,
            orderType: `${data.orderType}`
        },
        description: `${data.description}`,
        shirtInfo: {
            brand: `${data.brand}`,
            numOfShirts: `${data.shirtQuantity}`,
            type: `${data.articleClothing}`,
            backInks: `${data.inkNumberBack}`,
            frontInks: `${data.inkNumberFront}`,
        }

    }
    email(emailTemplate)

}

export default shirtEmailTemplate;