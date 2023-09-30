QuizIt = {

    /* Variables */
    activeQuiz: null,
    currentProblem: null,
    currentIsWrong: false,
    problems: [],
    quizzes: {},
    rightCount: 0,
    wrongCount: 0,
    wrongProblems: [],

    /* Helpers */
    getParameterByName: function (name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    },

    /* Private Methods */
    _getCurrentAnswer: function () {
        return this.currentProblem[this.activeQuiz.answerField];
    },

    _getCurrentPrompt: function () {
        return this.currentProblem[this.activeQuiz.promptField];
    },

    _loadNextProblem: function (wasRight, removeCurrent) {
        if (wasRight) {
            this._playSound();
            this.problems.shift();
            if (!removeCurrent) {
                this.problems.push(this.currentProblem);
                this.wrongProblems.push(this.currentProblem);
            }
        }

        if (this.problems.length === 0) {
            this._setup();
        }

        this.currentProblem = this.problems[0];

        this.currentIsWrong = false;
    },

    _playSound: function () {
        if (!this.activeQuiz.soundField) return;
        var sound = this.currentProblem[this.activeQuiz.soundField];
        if (sound) {
            new Audio(sound).play();
        }
    },

    _setup: function () {
        this.currentProblem = null;
        this.rightCount = 0;
        this.wrongCount = 0;
        this.wrongProblems = [];

        // Randomize and clone the problems.
        this.problems = [];
        var me = this;
        $.each(this.activeQuiz.problems, function (index, problem) {
            // Get a random index for where the problem should go.
            var index = Math.floor(Math.random() * (me.problems.length + 1));
            var problemClone = JSON.parse(JSON.stringify(problem));
            me.problems.splice(index, 0, problemClone);
        });
    },

    /* Public Methods */
    addQuiz: function (quiz) {
        this.quizzes[quiz.name] = quiz;
    },

    getActiveQuiz: function () {
        return this.activeQuiz;
    },

    getCurrentAnswer: function () {
        var currentAnswer = this._getCurrentAnswer();
        if (Array.isArray(currentAnswer)) {
            return currentAnswer.join(", ");
        } else {
            return currentAnswer;
        }
    },

    getCurrentProblem: function () {
        return this.currentProblem;
    },

    getCurrentPrompt: function () {
        return this._getCurrentPrompt();
    },

    getMessageText: function () {
        return this.activeQuiz.messageText;
    },

    getProblemTotal: function () {
        return this.activeQuiz.problems.length;
    },

    getProgress: function () {
        return {
            rightCount: this.rightCount,
            wrongCount: this.wrongCount
        };
    },

    guess: function (answer) {
        if (!answer) {
            throw "You must specify an answer.";
        }

        var right = false;
        answer = answer.toLowerCase();

        // If the currentAnswer is an array, check if the answer is in the list.
        var currentAnswer = this._getCurrentAnswer();
        if (Array.isArray(currentAnswer)) {
            $.each(currentAnswer, function (index, possibleAnswer) {
                if (answer == possibleAnswer.toLowerCase()) {
                    right = true;
                    return false;
                }
            });
        } else {
            right = (answer == currentAnswer.toLowerCase());
        }

        if (right) {
            if (!this.currentIsWrong && this.wrongProblems.indexOf(this.currentProblem) === -1) {
                this.rightCount++;
            }

            this._loadNextProblem(true, !this.currentIsWrong);

            return true;
        } else {
            if (!this.currentIsWrong && this.wrongProblems.indexOf(this.currentProblem) === -1) {
                this.wrongCount++;
            }

            this.currentIsWrong = true;
            return false;
        }
    },

    start: function (quizName) {
        // Get the quiz.
        if (quizName) {
            this.activeQuiz = this.quizzes[quizName];
            if (!this.activeQuiz) {
                throw "'{0}' is not the name of a loaded quiz.".format(quizName);
            }
        } else {
            throw "You must specify the name of a loaded quiz.";
        }

        this._setup();
        this._loadNextProblem();
    }

};


String.prototype.format = function () {
    var s = this;
    for (var i = 0; i < arguments.length; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, arguments[i]);
    }

    return s;
};