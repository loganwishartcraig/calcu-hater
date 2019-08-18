import globalRandomInsultService from './randomInsult';
import globalRandomLinkService from './randomLink';

export const ChaosType = {
    INSULT: 'CHAOS::INSULT',
    OPEN_LINK: 'CHAOS::OPEN_LINK',
}

const defaultWeights = {
    [ChaosType.INSULT]: 0.8,
    [ChaosType.OPEN_LINK]: 0.2,
};

export class ChaosService {

    constructor({
        randomInsultService,
        randomLinkService,
        weights = { ...defaultWeights },
    }) {

        this._randomInsultService = randomInsultService;
        this._randomLinkService = randomLinkService;

        const sum = Object.values(weights).reduce((sum, w) => sum + w, 0);

        if (sum !== 1) {
            this._weights = { ...defaultWeights };
            console.error('[ChaosService] - constructor() - Weights assigned in config must sum to 1', weights);
        } else {
            this._weights = weights;
        }

        console.log(this);

    }

    async get() {

        const type = this._getChaosType();
        let payload;

        switch (type) {
            case ChaosType.INSULT:
                payload = await this._randomInsultService.get();
                return { type, payload };
            case ChaosType.OPEN_LINK:
                payload = await this._randomLinkService.get();
                return { type, payload };
            default:
                throw new TypeError(`Received unknown chaos type: ${type}`)

        }

    }

    _getChaosType() {

        const rand = Math.random();
        const weights = Object.entries(this._weights);
        let sum = 0;

        for (const [key, weight] of weights) {
            sum += weight;
            if (sum >= rand) return key;
        }


    }

}

const globalChaosService = new ChaosService({
    randomInsultService: globalRandomInsultService,
    randomLinkService: globalRandomLinkService
});

export default globalChaosService;
