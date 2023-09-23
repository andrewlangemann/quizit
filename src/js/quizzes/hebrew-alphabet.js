var alphaQuiz = {

    name: 'hebrew-alphabet',
    description: 'Hebrew Alphabet',
    messageText: 'What is the name of this letter?',

    promptField: 'letter',
    answerField: 'name',

    reviewFields: [
        {
            title: 'Letter',
            name: 'letter'
        },
        {
            title: 'Name',
            name: 'name'
        }
    ],

    problems: [
        { letter: 'א', name: ['Alef'] },
        { letter: 'ב', name: 'Bet' },
        { letter: 'ג', name: 'Gimel' },
        { letter: 'ד', name: 'Dalet' },
        { letter: 'ה', name: ['Hey', 'He'] },
        { letter: 'ו', name: 'Vav' },
        { letter: 'ז', name: 'Zayin' },
        { letter: 'ח', name: ['Chet', 'Xet'] },
        { letter: 'ט', name: 'Tet' },
        { letter: 'י', name: ['Yud', 'Yod'] },
        { letter: 'כ', name: ['Kaf'] },
        { letter: 'ך', name: ['Kaf Sofit', 'Xaf Sofit'] },
        { letter: 'ל', name: 'Lamed' },
        { letter: 'מ', name: 'Mem' },
        { letter: 'ם', name: 'Mem Sofit' },
        { letter: 'נ', name: 'Nun' },
        { letter: 'ן', name: 'Nun Sofit' },
        { letter: 'ס', name: ['Samech', 'Samex'] },
        { letter: 'ע', name: 'Ayin' },
        { letter: 'פ', name: ['Pey', 'Pe'] },
        { letter: 'ף', name: ['Pey Sofit', 'Pey Sofit'] },
        { letter: 'צ', name: ['Tsade', 'Tsadi'] },
        { letter: 'ץ', name: ['Tsade Sofit', 'Tsadi Sofit'] },
        { letter: 'ק', name: 'Kof' },
        { letter: 'ר', name: 'Resh' },
        { letter: 'ש', name: 'Shin' },
        { letter: 'ת', name: 'Tav' }
    ]

};

$.each(alphaQuiz.problems, function (index, problem) {
    problem.letter = '<span class="hebrew">{0}</span>'.format(problem.letter);
})

QuizIt.addQuiz(alphaQuiz);