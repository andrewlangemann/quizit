var hangulQuiz = {
    name: 'hangul-vowels',
    description: 'Hangul Vowels',
    messageText: 'What is the transliteration of this letter?',

    promptField: 'letter',
    answerField: 'transliteration',
    soundField: 'sound',

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
    if (!problem.sound)
        problem.sound = `https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/audio-${problem.transliteration}.mp3`
    problem.letter = `<span class="hebrew">${problem.letter}</span>`;
})

QuizIt.addQuiz(hangulQuiz);
