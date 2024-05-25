function handleSuccess(res, data) {
  const output = {
    code:200,
    success: true,
    data: data,
  };
  res.json(output);
}

module.exports = handleSuccess;
