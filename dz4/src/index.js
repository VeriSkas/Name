import './ex1';
import {
    initApi,
    createData,
    getMedicine,
    deleteMedicine
} from './api/api-handlers';

const drugName = document.querySelector('.drugName');
const form = document.querySelector('.form');
const quantity = document.querySelector('.quantity');
const price = document.querySelector('.price');
const addBtn = document.querySelector('.addBtn');

const doMedicine = () => {
    const medicine = {
        drugName: drugName.value,
        form: form.value,
        quantity: quantity.value,
        'price($)': price.value
    };

    return medicine;
};

addBtn.onclick = () => {
    createData(doMedicine())
        .then(() => renderMedicines());
};

const renderMedicines = () => {
    const medicines = document.querySelector('.medicines');
    medicines.innerHTML = null;
    getMedicine()
        .then( response => response.json() )
        .then( result => {
            const transformedArr = Object.keys(result).map( id => ({
                ...result[id],
                id
            }));
            transformedArr.forEach( item => {
                const li = document.createElement('li');
                const removeBtn = document.createElement('button');
                removeBtn.innerHTML = 'Х';
                li.innerHTML = item.drugName;
                li.append(removeBtn);
                medicines.append(li);
                removeBtn.onclick = () => {
                    deleteMedicine(item)
                        .then(() => renderMedicines())
                }
            })
        })
};

initApi();
renderMedicines();
