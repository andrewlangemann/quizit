var hangulQuiz = {
    name: 'hangul-vowels',
    description: 'Hangul Vowels',
    messageText: 'What is the transliteration of this letter?',

    promptField: 'letter',
    answerField: 'transliteration',

    reviewFields: [
        {
            title: 'Letter',
            name: 'letter'
        },
        {
            title: 'Transliteration',
            name: 'transliteration'
        }
    ],

    problems: [
        { letter: "ㅏ", transliteration: "a" },
        { letter: "ㅐ", transliteration: "ae" },
        { letter: "ㅑ", transliteration: "ya" },
        { letter: "ㅒ", transliteration: "yae" },
        { letter: "ㅓ", transliteration: "eo" },
        { letter: "ㅔ", transliteration: "e" },
        { letter: "ㅕ", transliteration: "yeo" },
        { letter: "ㅖ", transliteration: "ye" },
        { letter: "ㅗ", transliteration: "o" },
        { letter: "ㅘ", transliteration: "wa" },
        { letter: "ㅙ", transliteration: "wae" },
        { letter: "ㅚ", transliteration: "oe" },
        { letter: "ㅛ", transliteration: "yo" },
        { letter: "ㅜ", transliteration: "u" },
        { letter: "ㅝ", transliteration: "wo" },
        { letter: "ㅞ", transliteration: "we" },
        { letter: "ㅟ", transliteration: "wi" },
        { letter: "ㅠ", transliteration: "yu" },
        { letter: "ㅡ", transliteration: "eu" },
        { letter: "ㅢ", transliteration: "ui" },
        { letter: "ㅣ", transliteration: "i" },
    ]
};

$.each(hangulQuiz.problems, function (index, problem) {
    problem.letter = '<span class="hebrew">{0}</span>'.format(problem.letter);
})

QuizIt.addQuiz(hangulQuiz);
