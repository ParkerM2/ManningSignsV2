import email from './emailJS';

const signEmailTemplate = (data) => {
// address: "11500 Jollyville Rd"
// brand: "Jeep"
// city: "Austin"
// company: "Manning Signs"
// description: "dkejslkjaf;lsdkjfasdfa"
// email: "parkerlmanning@hotmail.com"
// firstName: "Parker"
// lastName: "Manning"
// model: "1014"
// orderType: "vehicle"
// previousCustomer: "Returning Client"
// recipient: ""
// state: undefined
// template: "template_u7olvj9"
// year: 1904
// zip: "78759-2465"
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