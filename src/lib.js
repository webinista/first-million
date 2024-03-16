/* 

A = P((1 + (r/n))nt)

where

P = principal
r = rate expressed as a decimal
n = number of times interest is compounded in a year.
t = number of years 

Interest Rate on your account is 4.2656% with an Annual Percentage Yield of 4.35%.
*/

const BASE_NUM = 10;
const MILLION_EXPONENT = 6;
const MONTHS = 12;

export const first_million_years = (start_amount, rate = 0.05, monthly=true) => {
  const million = BASE_NUM ** MILLION_EXPONENT;
  const periods = monthly ? 12 : 1;
  
  const amount_log = Math.log( million / start_amount );
  const frequency_log = Math.log1p(rate/periods) * periods;
  
  const years = +(amount_log / frequency_log);
  
  return years.toFixed(1);
}

export const first_million_rate = (start_amount, years, monthly=true) => {
  const million = BASE_NUM ** MILLION_EXPONENT;
  const periods = monthly ? 12 : 1;
}

export const prep_number = (number) => {
  return number.toString().replace(/[,\$]/g, '');
}

export const formatted_number = (number) => {
  const num = prep_number(number)
  return new Intl.NumberFormat('en-US').format( parseFloat(num) );
}

export const numeric_to_number = (numeric_string) => {
  return parseFloat(prep_number( numeric_string ));
}

export const to_float = (percent) => {
  return percent / 100;
}

export const to_percentage = (percent) => {
  return float * 100;
}

export const reducer = (state, action) => {
  let value;
  
  switch(action.type) {
    case 'principal':
      value = formatted_number(action.value);
      break;
    case 'rate':
      value = parseFloat(action.value);
      break;
    case 'monthly':
      value = !!action.value;
    default:
      value = +action.value;
  }
  
  const num_years = first_million_years(
    numeric_to_number(state.principal),
    to_float(state.rate),
    state.monthly
  );
  
  return {
    ...state,
    [action.type]: value,
    years: num_years
  };
}

export const submitted = (evt) => {
  evt.preventDefault();
  console.log( 'submitted' )
}