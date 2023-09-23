var techVocabQuiz = {

    name: 'hebrew-tech-vocab',
    description: 'Hebrew Tech Vocabulary',
    messageText: 'Translate this Hebrew word into English',

    promptField: 'hebrewWord',
    answerField: 'englishWords',

    reviewFields: [
        {
            title: 'Hebrew',
            name: 'hebrewWord'
        },
        {
            title: 'English',
            name: 'englishWords'
        }
    ],

    problems: [
        // Gregorian Months
        {
            hebrewWord: 'ינואר',
            englishWords: ['January']
        },
        {
            hebrewWord: 'פברואר',
            englishWords: ['February']
        },
        {
            hebrewWord: 'מרץ',
            englishWords: ['March']
        },
        {
            hebrewWord: 'אפריל',
            englishWords: ['April']
        },
        {
            hebrewWord: 'מאי',
            englishWords: ['May']
        },
        {
            hebrewWord: 'יוני',
            englishWords: ['June']
        },
        {
            hebrewWord: 'יולי',
            englishWords: ['July']
        },
        {
            hebrewWord: 'אוגוסט',
            englishWords: ['August']
        },
        {
            hebrewWord: 'ספטמבר',
            englishWords: ['September']
        },
        {
            hebrewWord: 'אוקטובר',
            englishWords: ['October']
        },
        {
            hebrewWord: 'נובמבר',
            englishWords: ['November']
        },
        {
            hebrewWord: 'דצמבר',
            englishWords: ['December']
        },

        {
            hebrewWord: 'עריכה',
            englishWords: ['edit']
        },
        {
            hebrewWord: 'סיומ',
            englishWords: ['end']
        },
        {
            hebrewWord: 'טלפון',
            englishWords: ['phone', 'telephone']
        },
        {
            hebrewWord: 'חדש',
            englishWords: ['new']
        },
        {
            hebrewWord: 'חיפוש',
            englishWords: ['search']
        },
        {
            hebrewWord: 'ביטול',
            englishWords: ['cancel']
        },
        {
            hebrewWord: 'מאת',
            englishWords: ['from']
        },
        {
            hebrewWord: 'פח אשפה',
            englishWords: ['trash']
        },
        {
            hebrewWord: 'מחק',
            englishWords: ['delete']
        },
        {
            hebrewWord: 'שמור',
            englishWords: ['save']
        },
        {
            hebrewWord: 'אישור',
            englishWords: ['OK']
        },
        {
            hebrewWord: 'מצב טיסה',
            englishWords: ['airplane mode']
        },
        {
            hebrewWord: 'אינטרנט אלחוטי',
            englishWords: ['WiFi']
        },
        {
            hebrewWord: 'סלולרי',
            englishWords: ['cellular']
        },
        {
            hebrewWord: 'מפעיל',
            englishWords: 'carrier'
        },
        {
            hebrewWord: 'הגדרות',
            englishWords: ['settings']
        },
        {
            hebrewWord: 'תמונה',
            englishWords: ['photo']
        },
        {
            hebrewWord: 'מפה',
            englishWords: ['map']
        },
        {
            hebrewWord: 'פתק',
            englishWords: ['note']
        },
        {
            hebrewWord: 'מצלמה',
            englishWords: ['camera']
        },
        {
            hebrewWord: 'קשר',
            englishWords: ['contact']
        },
        {
            hebrewWord: 'מועדף',
            englishWords: ['favorite']
        },
        {
            hebrewWord: 'שפה',
            englishWords: ['language']
        },
        {
            hebrewWord: 'טיוטה',
            englishWords: ['draft']
        },
        {
            hebrewWord: 'אין',
            englishWords: ['no']
        },
        {
            hebrewWord: 'דואר',
            englishWords: ['mail']
        },
        {
            hebrewWord: 'פתיחה',
            englishWords: ['open']
        }
    ]

};

$.each(techVocabQuiz.problems, function (index, problem) {
    problem.hebrewWord = '<span class="hebrew">{0}</span>'.format(problem.hebrewWord);
})

QuizIt.addQuiz(techVocabQuiz);