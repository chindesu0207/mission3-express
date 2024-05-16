function handleSuccess(res, data) {
  const output = {
    success: true,
    data: data,
  };
  res.json(output);
}

module.exports = handleSuccess;
