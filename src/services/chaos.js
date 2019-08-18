import globalRandomInsultService from './randomInsult';
import globalRandomLinkService from './randomLink';

export const ChaosType = {
    INSULT: 'INSULT',
    OPEN_PAGE: 'OPEN_PAGE',
}

const defaultWeights = {
    [ChaosType.INSULT]: 0.8,
    [ChaosType.OPEN_PAGE]: 0.2,
};

export class ChaosService {

    constructor(config) {

        this._randomInsultService = config.randomInsultService;
        this._randomLinkService = config.randomLinkService;

        const sum = Object.values(config.weights).reduce((sum, w) => sum + w, 0);

        if (sum !== 1) {
            this._weights = { ...defaultWeights };
            console.error('[ChaosService] - constructor() - Weights assigned in config must sum to 1', {})
        } else {
            this._weights = config.weights;
        }

    }

    async get() {

        const type = this._getChaosType();

        switch (type) {
            case ChaosType.INSULT:
            case ChaosType.OPEN_PAGE:
            default:

        }

    }

    _getChaosType() {

        const rand = Math.random();
        const weights = Object.entries(config.weights);
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
