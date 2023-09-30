QuizItReview = {

    _getParameterByName: function (name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    },

    init: function () {
        var quizName = this._getParameterByName("quiz");

        try {
            QuizIt.start(quizName);
        } catch (ex) {
            alert(ex);
        }

        var activeQuiz = QuizIt.getActiveQuiz();

        $('.js-title').html('Review {0}'.format(activeQuiz.description));

        var header = '<thead><tr>';
        $.each(activeQuiz.reviewFields, function (index, field) {
            header += '<td>{0}</td>'.format(field.title);
        });
        header += '</tr></thead>';

        $('.js-table').append(header);

        $.each(activeQuiz.problems, function (index, problem) {
            var row = '<tr>';
            $.each(activeQuiz.reviewFields, function (index2, field) {
                var value = problem[field.name],
                    valueStr;
                if (Array.isArray(value)) {
                    valueStr = value.join(", ");
                } else if (activeQuiz.soundField == field.name) {
                    valueStr = `<a class="play-link" data-audio-url="${value}">Play</a>`;
                } else {
                    valueStr = value;
                }
                row += '<td class="table-value">{0}</td>'.format(valueStr);
            });
            row += '</tr>';
            $('.js-table').append(row);
        });

        var cursive = this._getParameterByName("cursive");
        if (cursive) {
            var style = $("<style>.hebrew {font-family: 'guttman_yad-brush'; }</style>");
            $('html > head').append(style);
        }

        $('.play-link').on('click', (link) => {
            new Audio(link.target.attributes['data-audio-url'].nodeValue).play();
        })
    }

};