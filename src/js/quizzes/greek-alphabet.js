var greekAlphaQuiz = {

    name: 'greek-alphabet',
    description: 'Greek Alphabet',
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
        { letter: "Αα", name: "Alpha" },
        { letter: "Ββ", name: "Beta" },
        { letter: "Γγ", name: "Gamma" },
        { letter: "Δδ", name: "Delta" },
        { letter: "Εε", name: "Epsilon" },
        { letter: "Ζζ", name: "Zeta" },
        { letter: "Ηη", name: "Eta" },
        { letter: "Θθ", name: "Theta" },
        { letter: "Ιι", name: "Iota" },
        { letter: "Κκ", name: "Kappa" },
        { letter: "Λλ", name: "Lamda" },
        { letter: "Μμ", name: "Mu" },
        { letter: "Νν", name: "Nu" },
        { letter: "Ξξ", name: "Xi" },
        { letter: "Οο", name: "Omicron" },
        { letter: "Ππ", name: "Pi" },
        { letter: "Ρρ", name: "Rho" },
        { letter: "Σσ", name: "Sigma" },
        { letter: "ς", name: "Final Sigma" },
        { letter: "Στ", name: "Tau" },
        { letter: "Υυ", name: "Upsilon" },
        { letter: "Φφ", name: "Phi" },
        { letter: "Χχ", name: "Chi" },
        { letter: "Ψψ", name: "Psi" },
        { letter: "Ωω", name: "Omega" }
    ]

};

$.each(greekAlphaQuiz.problems, function (index, problem) {
    problem.letter = '<span class="greek">{0}</span>'.format(problem.letter);
})

QuizIt.addQuiz(greekAlphaQuiz);