
const request = require('request-promise');

class IndeconService {
    async getAu() {
        try {
            const response = await request({
                'method': 'GET',
                'uri': 'https://www.indecon.online/values/plata',
                'json': true
            });

            return this._formatDatePricePairs(response.values);
        } catch (err) {
            return err;
        }
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
