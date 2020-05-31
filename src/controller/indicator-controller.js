/**
 * indicator-controller.js
 * Controla la logica de orquestacion, composición y presentación de informacion
 */

const { IndeconService } = require('./services/indecon-service');

class IndicatorController {
    constructor() {
        this.indeconService = new IndeconService();
    }

    async get(input) {
        return await this.indeconService.getAu();
    }
}


module.exports = {
    IndicatorController
};
