import LINKS from '../constants/link'

export class RandomLinkService {

    constructor() { }

    async get() {
        // >>> does quicker Math.floor
        const linkIndex = Math.random() * LINKS.length - 1 >>> 0;
        return LINKS[linkIndex];
    }

}

const globalRandomLinkService = new RandomLinkService();

export default globalRandomLinkService;
