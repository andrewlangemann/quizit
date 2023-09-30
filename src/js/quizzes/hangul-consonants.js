var hangulQuiz = {
    name: 'hangul-consonants',
    description: 'Hangul Consonants',
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
        { letter: "ㅂ", transliteration: "b" },
        { letter: "ㅍ", transliteration: "p" },
        { letter: "ㄷ", transliteration: "d" },
        { letter: "ㅌ", transliteration: "t" },
        { letter: "ㄱ", transliteration: "g" },
        { letter: "ㅋ", transliteration: "k" },
        { letter: "ㅎ", transliteration: "h" },
        { letter: "ㅈ", transliteration: "j" },
        { letter: "ㄹ", transliteration: "l" },
        { letter: "ㅁ", transliteration: "m" },
        { letter: "ㄴ", transliteration: "n" },
        { letter: "ㅅ", transliteration: "s" },
        { letter: "ㅊ", transliteration: "ch" },
        { letter: "ㅇ", transliteration: "ng", sound: "https://members.90daykorean.com/wp-content/uploads/2019/09/%E3%85%87-ng.mp3" },
    ]
};

$.each(hangulQuiz.problems, function (index, problem) {
    if (!problem.sound)
        problem.sound = `https://members.90daykorean.com/wp-content/uploads/2017/01/${problem.letter}.mp3`;
    problem.letter = `<span class="hebrew">${problem.letter}</span>`;
})

QuizIt.addQuiz(hangulQuiz);
