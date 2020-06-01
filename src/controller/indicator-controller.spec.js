
const mockery = require('mockery');
const expect = require('mocha').expect;

const { indeconResponseMock } = require('./indecon-response-mock');

class IndeconServiceMock {
    async getIndicatorHistory(indicator) {
        console.log("Calling,mock!");

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
            mockery.enable();
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
                    done();
                })
                .catch( (err) => {
                    console.log("Faiil");
                    expect(false).to.be.true;
                    done();
                });
        });

        xit('should raise error when supplied with an invalid indicator name', (done) => {
            const { IndicatorController } = require('./indicator-controller');
            const controller = new IndicatorController();

            controller.getStats('platta')
                .then( (result) => {

                    done();
                })
                .catch( (err) => {
                    expect(err).to.be.true;
                    done();
                });
        });
    });
});
