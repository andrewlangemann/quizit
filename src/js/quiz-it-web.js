QuizItWeb = {

    /* Variables */
    activeQuiz: null,

    /* Event Handlers */
    onAnswerInput_keydown: function (e) {
        if (e.keyCode === 13) {
            QuizItWeb.guess();
        }
    },

    onVocabCheckbox_click: function (e) {
        alert('times');
    },

    /* Methods */
    init: function () {
        var quizName = QuizIt.getParameterByName("quiz");

        try {
            QuizIt.start(quizName);
        } catch (ex) {
            alert(ex);
        }

        this.activeQuiz = QuizIt.getActiveQuiz();

        document.title = "{0} - QuizIt".format(this.activeQuiz.description);

        // Set up some things.
        $(".js-message").html(QuizIt.getMessageText());
        this._update();

        $(".js-answer-input").on("keydown", this.onAnswerInput_keydown);

        var cursive = QuizIt.getParameterByName("cursive");
        if (cursive) {
            var style = $("<style>.hebrew {font-family: 'guttman_yad-brush'; }</style>");
            $('html > head').append(style);
        }
    },

    guess: function () {
        var answer = $(".js-answer-input").val();
        var right;
        var message;

        var currentProblem = QuizIt.getCurrentProblem();

        try {
            right = QuizIt.guess(answer);
        } catch (ex) {
            message = ex;
        }

        if (right === true) {
            message = "You got it right!";
        } else if (right === false) {
            message = "You got it wrong. The answer is '{0}'.".format(QuizIt.getCurrentAnswer());
        }

        if (this.activeQuiz.getAnswerMessage) {
            message += " " + this.activeQuiz.getAnswerMessage(currentProblem);
        }

        $(".js-response").html(message);

        this._update();

        $(".js-answer-input").val(null);
        $(".js-answer-input").focus();
    },

    _update: function () {
        $(".js-prompt").html(QuizIt.getCurrentPrompt());

        // Update the progress indicators.
        var progress = QuizIt.getProgress();
        $(".js-progress-indicator").html("{0} of {1}".format(
                progress.rightCount + progress.wrongCount + 1, QuizIt.getProblemTotal()));
        $(".js-right-count").html("{0} right".format(progress.rightCount));
        $(".js-wrong-count").html("{0} wrong".format(progress.wrongCount));
    }

};