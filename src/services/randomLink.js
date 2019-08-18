import LINKS from '../constants/link'

export class RandomLinkService {

    constructor() { }

    async get() {
        // >>> does quicker Math.floor
        const insultIndex = Math.random() * LINKS.length - 1 >>> 0;
        return LINKS[insultIndex];
    }

}

const globalRandomLinkService = new RandomLinkService();

export default globalRandomLinkService;
