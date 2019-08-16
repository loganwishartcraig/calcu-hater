const INSULTS = [
    'Are you... are you joking? Too easy.',
    'Haha, unbelievable. You need help with that?',
    '-.- get it together, that\'s child\'s play.',
    'I GUESS I can tell you the answer...',
    'You woke me up for this? Really?',
    'Somebody could use a math lesson...',
    'Brb, laughing at you.',
    '*rolling eyes emoji*'
]

export class InsultService {

    constructor() { }

    async getRandom() {
        // >>> does quicker Math.floor
        const insultIndex = Math.random() * INSULTS.length >>> 0;
        return INSULTS[insultIndex];
    }

}
