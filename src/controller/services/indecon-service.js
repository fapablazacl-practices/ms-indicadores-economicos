/**
 * indecon-service.js
 * Encapsula las llamadas REST a los endpoints de indecon
 */
const request = require('request-promise');

const INDECON_INDICATOR_GOLD = 'oro';
const INDECON_INDICATOR_SILVER = 'plata';
const INDECON_INDICATOR_COPPER = 'cobre';
const INDECON_INDICATOR_DOLLAR = 'dolar';
const INDECON_INDICATOR_EURO = 'euro';
const INDECON_INDICATOR_UF = 'uf';


class IndeconService {
    constructor() {
        this._url = 'https://www.indecon.online';
    }

    /**
     * Consulta la informacion de precios asociado a un indicador en particular
     */
    async getIndicatorHistory(indicator) {
        return this._createRequest(`/values/${indicator}`);
    }

    async _createRequest(operation) {
        return request({
            'method': 'GET',
            'uri': this._url + operation,
            'json': true
        });
    }

    static getAvailableIndicators() {
        return [
            INDECON_INDICATOR_GOLD,
            INDECON_INDICATOR_SILVER,
            INDECON_INDICATOR_COPPER,
            INDECON_INDICATOR_DOLLAR,
            INDECON_INDICATOR_EURO,
            INDECON_INDICATOR_UF
        ];
    }
}

module.exports = {
    IndeconService,
    INDECON_INDICATOR_GOLD,
    INDECON_INDICATOR_SILVER,
    INDECON_INDICATOR_COPPER,
    INDECON_INDICATOR_DOLLAR,
    INDECON_INDICATOR_EURO,
    INDECON_INDICATOR_UF
};
