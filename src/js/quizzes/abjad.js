var abjadQuiz = {

    name: 'arabic-abjad',
    description: 'Arabic Alphabet',
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
        { letter: 'ا', name: 'Alif' },
        { letter: 'ب', name: 'Ba' },
        { letter: 'ت', name: 'Ta' },
        { letter: 'ث', name: 'Tha' },
        { letter: 'ج', name: ['Jiim', 'Jim'] },
        { letter: 'ح', name: 'Hha' },
        { letter: 'خ', name: 'Kha' },
        { letter: 'د', name: ['Daal', 'Dal'] },
        { letter: 'ذ', name: ['Thaal', 'Dhal'] },
        { letter: 'ر', name: 'Ra' },
        { letter: 'ز', name: ['Zayn', 'Zay'] },
        { letter: 'س', name: ['Sin', 'Siin'] },
        { letter: 'ش', name: ['Shin', 'Shiin'] },
        { letter: 'ص', name: ['Sad', 'Saad'] },
        { letter: 'ض', name: ['Dad', 'Daad'] },
        { letter: 'ع', name: 'Ayn' },
        { letter: 'غ', name: 'Ghayn' },
        { letter: 'ف', name: 'Fa' },
        { letter: 'ق', name: 'Qaf' },
        { letter: 'ك', name: 'Kaf' },
        { letter: 'گ', name: 'Gaf' },
        { letter: 'غ', name: 'Lam' },
        { letter: 'م', name: ['Mim', 'Miim'] },
        { letter: 'ن', name: ['Nun', 'Nuun'] },
        { letter: 'ه', name: 'Ha' },
        { letter: 'و', name: 'Waw' },
        { letter: 'ي', name: 'Ya' }
    ]

};

$.each(abjadQuiz.problems, function (index, problem) {
    problem.letter = '<span class="hebrew">{0}</span>'.format(problem.letter);
})

QuizIt.addQuiz(abjadQuiz);