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
