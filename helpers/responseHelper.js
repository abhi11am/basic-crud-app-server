const respond = (status, message, data = "") => {
  return {
    status: status,
    message: message,
    data: data,
  };
};

module.exports = {
  respond,
};
