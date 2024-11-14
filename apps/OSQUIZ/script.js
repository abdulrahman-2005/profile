


class Quiz {
    constructor(questions) {
        this.localStorageKey = "__quiz_app__";
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.selectedAnswers = [];
        this.chaptersScore = {}

        this.quizSection = document.getElementById('quiz-section');
        this.resultsSection = document.getElementById('results-section');
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.chapterInfo = document.getElementById('chapter-info');
        this.submitBtn = document.getElementById('submit-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.progressBar = document.getElementById('progress-bar');

        this.loadState();
        this.initEventListeners();
        this.loadQuestion();


        this.resetBtn = document.getElementById('reset-btn');
        this.resetBtn.addEventListener('click', () => this.resetAndRestart());
    }

    saveState() {
        // saves current question, asnwers, score, etc.
        const state = {
            currentQuestionIndex: this.currentQuestionIndex,
            score: this.score,
            selectedAnswers: this.selectedAnswers,
            chaptersScore: this.chaptersScore
        };

        localStorage.setItem(this.localStorageKey, JSON.stringify(state));
    }

    loadState() {
        // loads saved state from local storage
        const state = localStorage.getItem(this.localStorageKey);
        if (state) {
            const { currentQuestionIndex, score, selectedAnswers, chaptersScore } = JSON.parse(state);
            this.currentQuestionIndex = currentQuestionIndex;
            this.score = score;
            this.selectedAnswers = selectedAnswers;
            this.chaptersScore = chaptersScore;
        } else {
            this.saveState();
        }

    }

    resetAndRestart() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.selectedAnswers = [];
        this.chaptersScore = {};
        this.saveState();
        this.loadQuestion();
    }

    initEventListeners() {
        this.submitBtn.addEventListener('click', () => this.submitAnswer());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        document.getElementById('restart-btn').addEventListener('click', () => this.restartQuiz());
    }

    loadQuestion() {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        this.questionText.textContent = currentQuestion.question;
        this.optionsContainer.innerHTML = '';

        currentQuestion.options.forEach((option, index) => {
            const optionButton = document.createElement('button');
            optionButton.className = 'option-btn';
            optionButton.textContent = option;
            optionButton.addEventListener('click', () => this.selectOption(index));
            this.optionsContainer.appendChild(optionButton);
        });

        this.chapterInfo.textContent = `Chapter: ${currentQuestion.chapter}`;
        this.updateProgressBar();
    }

    selectOption(index) {
        const selectedOption = this.optionsContainer.querySelectorAll('.option-btn');
        selectedOption.forEach((btn, i) => {
            btn.classList.remove('selected');
            if (i === index) {
                btn.classList.add('selected');
            }
        });
    }

    submitAnswer() {
        const selectedOption = this.optionsContainer.querySelector('.selected');
        if (!selectedOption) {
            alert("Please select an option.");
            return;
        }

        const answerIndex = Array.from(this.optionsContainer.children).indexOf(selectedOption);
        const currentQuestion = this.questions[this.currentQuestionIndex];

        if (answerIndex === currentQuestion.answer) {
            this.score++;

            if (this.chaptersScore[currentQuestion.chapter]) {
                this.chaptersScore[currentQuestion.chapter]++;
            } else {
                this.chaptersScore[currentQuestion.chapter] = 1;
            }

            selectedOption.classList.add('correct');
        } else {
            selectedOption.classList.add('incorrect');
            this.optionsContainer.children[currentQuestion.answer].classList.add('correct');
        }

        this.selectedAnswers.push(answerIndex);
        this.currentQuestionIndex++;

        if (this.currentQuestionIndex < this.questions.length) {
            this.nextBtn.style.display = 'block';
            this.submitBtn.style.display = 'none';
        } else {
            this.showResults();
        }
    }

    nextQuestion() {
        this.loadQuestion();
        this.submitBtn.style.display = 'block';
        this.nextBtn.style.display = 'none';
        this.saveState();
    }

    showResults() {
        this.quizSection.style.display = 'none';
        this.resultsSection.classList.remove('results-hidden');

        let numberOfQuestionsPerChapter = {};
        this.questions.forEach(question => {
            if (numberOfQuestionsPerChapter[question.chapter]) {
                numberOfQuestionsPerChapter[question.chapter]++;
            } else {
                numberOfQuestionsPerChapter[question.chapter] = 1;
            }
        });

        document.getElementById('final-score').textContent = this.score;
        document.getElementById('correct-count').textContent = this.selectedAnswers.filter((answer, index) => answer === this.questions[index].answer).length;
        document.getElementById('incorrect-count').textContent = this.questions.length - this.score;

    }

    restartQuiz() {
        this.resultsSection.classList.add('results-hidden');
        this.quizSection.style.display = 'block';
        this.resetAndRestart();
    }

    updateProgressBar() {
        const progressPercentage = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressBar.style.width = `${progressPercentage}%`;
    }
}

const quiz = new Quiz(questions);