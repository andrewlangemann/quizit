var hangulQuiz = {
    name: 'hangul',
    description: 'Hangul',
    messageText: 'What is the transliteration of this letter?',

    promptField: 'letter',
    answerField: 'answer',
    soundField: 'sound',

    reviewFields: [
        {
            title: 'Letter',
            name: 'letter'
        },
        {
            title: 'Transliteration',
            name: 'transliteration'
        },
        {
            title: 'Romanization',
            name: 'romanization'
        },
        {
            title: 'Sound',
            name: 'sound'
        }
    ],

    problems: [
        // Vowels
        { letter: "ㅏ", transliteration: "ah", romanization: "a", soundFile: "audio-a" },
        { letter: "ㅐ", transliteration: "e", romanization: "ae", soundFile: "audio-ae" },
        { letter: "ㅑ", transliteration: "yah", romanization: "ya", soundFile: "audio-ya" },
        { letter: "ㅒ", transliteration: "yeh", romanization: "yae", soundFile: "audio-yae" },
        { letter: "ㅓ", transliteration: "aw", romanization: "eo", soundFile: "audio-eo" },
        { letter: "ㅔ", transliteration: "e", romanization: "e", soundFile: "audio-e" },
        { letter: "ㅕ", transliteration: "yaw", romanization: "yeo", soundFile: "audio-yeo" },
        { letter: "ㅖ", transliteration: "yeh", romanization: "ye", soundFile: "audio-ye" },
        { letter: "ㅗ", transliteration: "oh", romanization: "o", soundFile: "audio-o" },
        { letter: "ㅘ", transliteration: "wa", romanization: "wa", soundFile: "audio-wa" },
        { letter: "ㅙ", transliteration: "weh", romanization: "wae", soundFile: "audio-wae" },
        { letter: "ㅚ", transliteration: "weh", romanization: "oe", soundFile: "audio-oe" },
        { letter: "ㅛ", transliteration: "yoh", romanization: "yo", soundFile: "audio-yo" },
        { letter: "ㅜ", transliteration: "u", romanization: "u", soundFile: "audio-u" },
        { letter: "ㅝ", transliteration: "waw", romanization: "wo", soundFile: "audio-wo" },
        { letter: "ㅞ", transliteration: "weh", romanization: "we", soundFile: "audio-we" },
        { letter: "ㅟ", transliteration: "wi", romanization: "wi", soundFile: "audio-wi" },
        { letter: "ㅠ", transliteration: "yu", romanization: "yu", soundFile: "audio-yu" },
        { letter: "ㅡ", transliteration: "oo", romanization: "eu", soundFile: "audio-eu" },
        { letter: "ㅢ", transliteration: "ui", romanization: "ui", soundFile: "audio-ui" },
        { letter: "ㅣ", transliteration: "i", romanization: "i", soundFile: "audio-i" },

        // Basic and Aspirated Consonants
        { letter: "ㅂ", transliteration: "b", romanization: "b", soundFile: "audio-bieup" },
        { letter: "ㅍ", transliteration: "p", romanization: "p", soundFile: "audio-ssangbieup" },
        { letter: "ㄷ", transliteration: "d", romanization: "d", soundFile: "audio-digeut" },
        { letter: "ㅌ", transliteration: "t", romanization: "t", soundFile: "audio-tieut-new" },
        { letter: "ㄱ", transliteration: "g", romanization: "g", soundFile: "audio-giyeok" },
        { letter: "ㅋ", transliteration: "k", romanization: "k", soundFile: "audio-ssanggiyeok-new" },
        { letter: "ㅎ", transliteration: "h", romanization: "h", soundFile: "audio-hieut" },
        { letter: "ㅈ", transliteration: "ts", romanization: "j", soundFile: "audio-jieut" },
        { letter: "ㄹ", transliteration: "l", romanization: "r", soundFile: "audio-rieul" },
        { letter: "ㅁ", transliteration: "m", romanization: "m", soundFile: "audio-mieum" },
        { letter: "ㄴ", transliteration: "n", romanization: "n", soundFile: "audio-nieun-new" },
        { letter: "ㅅ", transliteration: "s", romanization: "s", soundFile: "audio-siot" },
        { letter: "ㅊ", transliteration: "ch", romanization: "ch", soundFile: "audio-chieut" },
        { letter: "ㅇ", transliteration: "ng", romanization: "ng", soundFile: "audio-ieung" },

        // Double Consonants
        { letter: "ㄸ", transliteration: "dd", romanization: "tt", soundFile: "audio-ssangdigeut" },
        { letter: "ㅉ", transliteration: "ts", romanization: "jj", soundFile: "audio-ssangjieut" },
        { letter: "ㄲ", transliteration: "gg", romanization: "kk", soundFile: "audio-ssanggiyeok-new" },
        { letter: "ㅃ", transliteration: "bb", romanization: "pp", soundFile: "audio-ssangbieup" },
        { letter: "ㅆ", transliteration: "ss", romanization: "ss", soundFile: "audio-ssangsiot-new" },
    ]
};

$.each(hangulQuiz.problems, function (index, problem) {
    if (!problem.sound)
        problem.sound = `https://90daykoreanaudiobytes.s3-us-west-1.amazonaws.com/${problem.soundFile}.mp3`
    problem.letter = `<span class="korean">${problem.letter}</span>`;
    problem.answer = [problem.transliteration, problem.romanization];
})

QuizIt.addQuiz(hangulQuiz);
