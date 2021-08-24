import email from './emailJS';

const signEmailTemplate = (data) => {

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
        orderInfo: {
            material: `${data.material}`,
            height: `${data.height}`,
            width: `${data.width}`,
            brand: `${data.brand}`,
            model: `${data.model}`,
            year: `${data.year}`,
        }

    }
    email(emailTemplate)

}

export default signEmailTemplate;