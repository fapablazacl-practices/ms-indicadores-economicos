
const request = require('request-promise');

class IndeconService {
    constructor() {
        this._url = 'https://www.indecon.online';
    }

    async getAu() {
        try {
            const response = await this._createRequest('/values/plata');

            return this._formatDatePricePairs(response.values);
        } catch (err) {
            return err;
        }
    }

    async getCu() {
        try {
            const response = await this._createRequest('/values/cobre');

            return this._formatDatePricePairs(response.values);
        } catch (err) {
            return err;
        }
    }

    async _createRequest(operation) {
        return request({
            'method': 'GET',
            'uri': this._url + operation,
            'json': true
        });
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
    IndeconService
};
