class EmailService {
  send(payload) {
    return Promise.resolve({ success: true, payload });
  }
}

module.exports = new EmailService();
