import INSULTS from '../constants/insult'

export class RandomInsultService {

    constructor() { }

    async get() {
        // >>> does quicker Math.floor
        const insultIndex = Math.random() * INSULTS.length - 1 >>> 0;
        return INSULTS[insultIndex];
    }

}

const globalRandomInsultService = new RandomInsultService();

export default globalRandomInsultService;
