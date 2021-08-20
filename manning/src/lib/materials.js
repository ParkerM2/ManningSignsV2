// Materials for Sign form
// Eventually this would be controlled via the admin board to add/remove/update materials
const materials = [
    {
        value: 'Metal',
        label: 'Metal'
    },
    {
        value: 'Corrugated Plastic',
        label: 'Corrugated Plastic'
    },
    {
        value: 'PVC',
        label: 'PVC'
    },
];


function getMats() {
    let materialArray = [];
    for (let i = 0; i < materials.length; i++) {
        materialArray.push(materials[i])
    }
    return materialArray;
}

export default getMats;