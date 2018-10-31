const createService = require('feathers-mongodb');
const hooks = require('./locations.hooks');

module.exports = function() {
  const app = this;
  const mongoClient = app.get('mongoClient');

  const locationsService = createService({});
  app.use('/locations', locationsService);

  const service = app.service('locations');

  mongoClient.then(db => {
    service.Model = db.collection('locations');
  });

  service.hooks(hooks);
};
