var hebrewVowelsQuiz = {

    name: 'hebrew-vowels',
    description: 'Hebrew Vowels',
    messageText: 'What is the sound of this vowel?',

    promptField: 'vowel',
    answerField: 'sound',

    problems: [
        { vowel: 'אָ', sound: ['A', 'OH', 'O'] },
        { vowel: 'אַ', sound: ['A'] },
        { vowel: 'אֲ', sound: ['A'] },
        { vowel: 'אִ', sound: ['EE', 'I'] },
        { vowel: 'אִי', sound: ['EE', 'I'] },
        { vowel: 'אֵ', sound: ['EH', 'E'] },
        { vowel: 'אֱ', sound: ['EH', 'E'] },
        { vowel: 'אֶ', sound: ['EH', 'E'] },
        { vowel: 'אֳ', sound: ['OH', 'O'] },
        { vowel: 'אֹ', sound: ['OH', 'O'] },
        { vowel: 'אוֹ', sound: ['OH', 'O'] },
        { vowel: 'אֻ', sound: ['OO', 'U'] },
        { vowel: 'אוּ', sound: ['OO', 'U'] }
    ]

};

QuizIt.addQuiz(hebrewVowelsQuiz);