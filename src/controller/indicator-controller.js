/**
 * indicator-controller.js
 * Controla la logica de orquestacion, composición y presentación de informacion
 */

const { IndeconService } = require('./services/indecon-service');


class IndicatorController {
    constructor() {
        this.indeconService = new IndeconService();
        this._indicators = IndeconService.getAvailableIndicators();
    }

    async get(indicator) {
        if (this._indicators.indexOf(indicator) === -1) {
            console.error("Error de validacion");
            throw new Error(`Supplied indicator ${indicator} isn't supported`);
        }

        const result = await this.indeconService.getIndicatorHistory(indicator);
        return this._createPriceHistory(result.values);
    }

    async getStats(indicator) {
        const priceHistory = await this.get(indicator);
        const dateFrom = this._computeFromDate();

        return this._computeStats(priceHistory, dateFrom);
    }

    _computeFromDate() {
        const MONTHS_PAST = 10;
        const currentDate = new Date();

        return new Date(currentDate.setMonth(currentDate.getMonth() - MONTHS_PAST));
    }

    _createPriceHistory(values) {
        return Object.keys(values).map((key) => {
            return {
                date: new Date(parseInt(key) * 1000),
                price: values[key]
            };
        });
    }

    _computeStats(priceHistory, dateFrom) {
        let min = Number.MAX_VALUE;
        let max = Number.MIN_VALUE;
        let average  = 0.0;
        let total = 0;
    
        priceHistory
            .filter( value => (value.date >= dateFrom))
            .forEach( (value) => {
                const price = value.price;

                min = Math.min(min, price);
                max = Math.max(max, price);
                average += price;

                total ++;
            });
    
        average /= total;

        return { min, max, average };
    }
}


module.exports = {
    IndicatorController
};
