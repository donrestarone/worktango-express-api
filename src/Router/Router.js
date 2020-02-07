const {languages, questions} = require('../__mocks__/data')

module.exports = function(router) {
  router.get("/v1/questions", (req, res) => {
    res.status(200).send(
      questions
    );
  });
}

