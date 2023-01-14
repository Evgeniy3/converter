import axios from 'https://cdn.skypack.dev/axios';
import state from "./state.js"
import variables from './variables.js';
import { renderResult } from './view.js';
import { getFullName, convertTime } from './utils.js'

const {resultFrom, resultTo, formResults, rateLast} = variables;

export const handleChange = ({ target: { value, name } }) => {
    state.pair = {
      ...state.pair,
      [name]: value,
    };
  };

export const handleInput = ({target: {value, name}}) => {
    state[name] = Number(value)
}

const insertResults = ({
  base_code: baseCode,
  target_code: targetCode,
  conversion_result: result,
  time_last_update_utc: time,
}) => {
  const from = {
    code: baseCode,
    amount: state.amount,
    fullCode: getFullName(state.codes, baseCode)
  }

  const to = {
    code: targetCode,
    amount: result,
    fullCode: getFullName(state.codes, targetCode)
  }

  resultFrom.innerHTML = renderResult(from)
  resultTo.innerHTML = renderResult(to)

  rateLast.innerHTML = `Last updated ${convertTime(time)}`

  formResults.classList.add('show')

}

export const handleSubmit = async(e) => {
    e?.preventDefault()

    const {
        success,
        url,
        amount,
        pair: { from, to },
      } = state;
    
      if (!amount || !from || !to) return;
    
      try {
        const response = await axios.get(`${url}/pair/${from}/${to}/${amount}`);
        const data = response.data
        console.log(data);
        if (data.result === success) insertResults(data);

    
      } catch (err) {
        console.log(err);
      }

}