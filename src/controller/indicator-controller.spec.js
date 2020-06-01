
const mockery = require('mockery');
const expect = require('chai').expect;

const { indeconResponseMock } = require('./indecon-response-mock');

// tolerancia de error en computo de punto flotante.
const delta = 0.01;

class IndeconServiceMock {
    async getIndicatorHistory(indicator) {
        return new Promise( (resolve, reject) => {
            resolve(indeconResponseMock);
        });
    }

    static getAvailableIndicators() {
        return ['oro'];
    }
}

describe('IndicatorController', () => {
    describe('getStats', () => {
        before( () => {
            mockery.registerMock('./services/indecon-service', { IndeconService: IndeconServiceMock});
            mockery.enable({
                warnOnReplace: false,
                warnOnUnregistered: false
            });
        });

        after( () => {
            mockery.deregisterAll();
            mockery.disable();
        });

        it('should compute correctly the min, max and average stats', (done) => {
            const { IndicatorController } = require('./indicator-controller');
            const controller = new IndicatorController();

            controller.getStats('oro')
                .then( (result) => {
                    expect(result).to.be.not.null;
                    expect(result.min).to.be.closeTo(1439.06, delta);
                    expect(result.max).to.be.closeTo(1674.59, delta);
                    expect(result.average).to.be.closeTo(1523.433076923076, delta);

                    done();
                })
                .catch( (err) => {
                    // este codigo no deberia dispararse ...
                    console.error(result);
                    expect(false).to.be.true;
                    done();
                });
        });

        it('should raise error when supplied with an invalid indicator name', (done) => {
            const { IndicatorController } = require('./indicator-controller');
            const controller = new IndicatorController();

            controller.getStats('platta')
                .then( (result) => {
                    // este codigo no deberia dispararse ...
                    console.error(result);
                    expect(false).to.be.true;
                    done();
                })
                .catch( (err) => {
                    expect(err).to.be.not.null;
                    done();
                });
        });
    });
});
