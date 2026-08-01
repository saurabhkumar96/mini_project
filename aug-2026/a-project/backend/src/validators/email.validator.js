module.exports = {
  validateEmailPayload(payload) {
    return Boolean(payload && payload.to);
  }
};
