const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

let score = 0

const getQuestions = (req, res) => {
    score = 0
    res.json(triviaQuestions);
  };


const getAnswer = (req, res) => {
  const {question, answer} = req.body;
  console.log(req.body)
  const filteredAnswer = triviaQuestions.filter((quest) => quest.question == question);
  console.log("I get the req...")
    if (filteredAnswer[0].answer == answer){
      score +=1
      res.status(200);
    } else {
      res.status(404);
    }
};

const getScore = (req, res) => {
    res.json(score);
  };

module.exports = {
  getQuestions,
  getAnswer,
  getScore,
}

