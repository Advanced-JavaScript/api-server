'use strict';
const { apiServer } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(apiServer);


describe('500 error', () => {

    it('should return 500 ', () => {
        return mockRequest
            .get('/bad')
            .then(results => {
                expect(results.status).toBe(500);
            });
    });
    it('should not return at status on a good request', async () => {
        const result = await mockRequest.get('/');
        expect(result.status).not.toBe(500);
    });

});