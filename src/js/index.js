import axios from 'https://cdn.skypack.dev/axios';
import state from "./state.js";
import variables from './variables.js';
import { handleChange } from './convert.js';

const renderCodesList = () => {
    variables.selects.forEach((el) => {
        state.codes.forEach(([code]) => {
            const option = document.createElement('option')
            option.value = code
            option.innerText = code
            el.insertAdjacentElement('beforeend', option)
        })
        const name = el.getAttribute("name");
        name && el.addEventListener("change", handleChange);
    })
}

export const fetchCodes = async() => {
    try {
        const response = await axios.get(`${state.url}/codes`);
        const data = response.data

        if(data.result === state.success) {
            state.codes = data.supported_codes
            renderCodesList()
        }
    } catch (err) {
        console.log(err)
    } 
}

