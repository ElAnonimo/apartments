module.exports = {
  before: {
    all: [],
    find: [
      async function (hook) {
        const filter = Object.assign({}, hook.params.query.filter);
        const hasFilter = filter && Object.values(filter).filter(v => v).length;

        delete hook.params.query.filter;

        if (!hasFilter) {
          return hook;
        }

        const formatValueFilter = (field) => {
          return filter[field]
            ? {$regex : `.*${filter[field]}.*`, $options : 'i'}
            : {$exists: true};
        };

        const formatTextArrayFilter = (field) => {
          return filter[field]
            ? {$all : filter[field].split(/ +/g).filter(v => v).map(v => v.toLowerCase())}
            : {$exists: true};
        };

        const formatRangeFilter = (minField, maxField) => {
          return {$gte: filter[minField] || 0, $lte: filter[maxField] || Infinity};
        };

        hook.result = await hook.service.Model.aggregate([
          {
            $lookup: {
              from: 'locations',
              localField: 'location',
              foreignField: '_id',
              as: 'location'
            }
          },
          {
            $match: Object.assign(
              {
                'location.title': formatValueFilter('location'),
                'amenities': formatTextArrayFilter('amenities'),
                'services': formatTextArrayFilter('services'),
                'price': formatRangeFilter('minPrice', 'maxPrice'),
                'size': formatRangeFilter('minSize', 'maxSize'),
                'detail.rooms': formatValueFilter('rooms'),
                'detail.bedrooms': formatValueFilter('bedrooms'),
                'detail.floor': formatValueFilter('floor'),
                'detail.bathrooms': formatValueFilter('bathrooms')
              },
              hook.params.query
            )
          }
        ]).toArray();

        return hook;
      }
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
