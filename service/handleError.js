function handleError(res, error) {
  let message = "";
  if(error){
    message = error.message;
  }else{
    message = "Input error" 
  }
  const output = {
    success: false,
    message,
  };
  res.json(output);
}

module.exports = handleError;