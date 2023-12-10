export const emptyStrings=(obj)=>{
  let ok = 1;
  for (const [key, value] of Object.entries(obj)){
    ok = ok & (value.length===0)
  }
  return ok
}
export const isNumber=(str)=>{
  for(let i = 0; i < str.length; i++) if(str[i] < '0' || str[i] > '9') return false;
  return !isNaN(str);
}
export const validateNumber=(str)=>{
  if(!str || str.length === 0) return "Please, submit required data"
  if(!isNumber(str) ) return "Please, provide the data of indicated type"
  return "";
}