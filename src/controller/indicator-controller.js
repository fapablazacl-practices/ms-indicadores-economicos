/**
 * indicator-controller.js
 * Controla la logica de orquestacion, composición y presentación de informacion
 */

const { 
    IndeconService,
    INDECON_INDICATOR_GOLD,
    INDECON_INDICATOR_SILVER,
    INDECON_INDICATOR_COPPER,
    INDECON_INDICATOR_DOLLAR,
    INDECON_INDICATOR_EURO,
    INDECON_INDICATOR_UF
} = require('./services/indecon-service');


class IndicatorController {
    constructor() {
        this.indeconService = new IndeconService();
    }

    
    async get(input) {
        const response = await this.indeconService.getIndicatorHistory(INDECON_INDICATOR_GOLD);
        return this._formatDatePricePairs(response.values);
    }


    _formatDatePricePairs(values) {
        return Object.keys(values).map((key) => {
            return {
                'date': new Date(parseInt(key) * 1000),
                'price': `${values[key]} US$`
            };
        });
    }
}


module.exports = {
    IndicatorController
};
