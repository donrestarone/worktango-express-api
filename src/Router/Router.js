const {languages, questions} = require('../__mocks__/data')

module.exports = function(router) {
  router.get("/v1/questions", (req, res) => {
    res.status(200).send(
      questions
    );
  });

  router.post("/v1/questions", (req, res) => {
    console.log(req.body.questions.map(q => q.response))
    res.status(200).send(
      {
        status: 'OK',
        code: 200,
        questionsLength: req.body.questions.length
      }
    );
  });
}

