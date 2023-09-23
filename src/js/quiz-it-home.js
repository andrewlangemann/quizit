QuizItHome = {

    vocabLink: "quiz.html?quiz=hebrew-vocab&units={0}",
    vocabReverseLink: "quiz.html?quiz=hebrew-vocab-reverse&units={0}",
    vocabSameLink: "quiz.html?quiz=hebrew-vocab-same&units={0}",
    vocabTransLink: "quiz.html?quiz=hebrew-vocab-trans&units={0}",

    onVocabCheckbox_click: function (e) {
        QuizItHome.updateVocabLinks();
    },

    getIncludedUnits: function () {
        var includedUnits = [];
        $(".js-vocab-checkbox").each(function(index, box) {
            if (box.checked) {
                // var unitStr = $(box).attr("unit");
                // var unit = isNaN(unitStr) ? unitStr : parseInt(unitStr, 10);
                includedUnits.push($(box).attr("unit"));
            }
        });
        return includedUnits.join(",");
    },

    init: function () {
        $(".js-vocab-checkbox").click(this.onVocabCheckbox_click);
        this.restoreVocabLinks();
        this.updateVocabLinks();

        if (QuizIt.getParameterByName("showHidden")) {
            $.each($(".hidden"), function (index, element) {
                element.classList.remove("hidden");
            });
        }
    },

    restoreVocabLinks: function () {
        var unitsStr = $.cookie("vocab-links");
        if (!unitsStr) {
            unitsStr = "4,5,6";
        }

        var units = unitsStr.split(",");
        $.each(units, function(index, unit) {
            var checkBox = $(".js-vocab-checkbox[unit={0}]".format(unit));
            checkBox.attr("checked", "checked");
        });
    },

    saveVocabLinks: function () {
        $.cookie("vocab-links", this.getIncludedUnits(), { expires: 30 });
    },

    updateVocabLinks: function () {
        var unitsStr = this.getIncludedUnits();
        $(".js-vocab-link").attr("href", this.vocabLink.format(unitsStr));
        $(".js-vocab-reverse-link").attr("href", this.vocabReverseLink.format(unitsStr));
        $(".js-vocab-same-link").attr("href", this.vocabSameLink.format(unitsStr));
        $(".js-vocab-trans-link").attr("href", this.vocabTransLink.format(unitsStr));
        this.saveVocabLinks();
    }

};