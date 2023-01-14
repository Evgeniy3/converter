export const renderResult = ({ code, amount, fullCode }) => {  
    return `<div class="form-result__item-icon icon">
            <img src="./src/img/arrow.svg" alt="" />
          </div>
          <div class="form-result__item-titles">
            <div class="form-result__item-title">${code}</div>
            <div class="form-result__item-full">
              ${fullCode}
            </div>
          </div>
          <div class="form-result__item-value">${amount.toFixed(2)}</div>`
}