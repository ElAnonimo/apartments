module.exports = {
  before: {
    all: [],
    find: [
      async function (hook) {
        const filter = Object.assign({}, hook.params.query.filter);
        const hasFilter = filter && Object.values(filter).filter(Boolean).length;

        delete hook.params.query.filter;

        if (!hasFilter) {
          return hook;
        }

        const formatPartialTextValueFilter = (field) => {
          return filter[field]
            ? {$regex : `.*${filter[field]}.*`, $options : 'i'}
            : {$exists: true};
        };

        const formatNumberValueFilter = (field) => {
          return filter[field] || {$exists: true};
        };

        const formatPartialTextArrayFilter = (field) => {
          if (!filter[field]) {
            return {$exists: true};
          }

          const values = filter[field].split(/ +/g).filter(Boolean).map((value) => {
            return new RegExp(`.*${value}.*`, 'ig')
          });

          return {
            $all: values
          };
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
                'location.title': formatPartialTextValueFilter('location'),
                'amenities': formatPartialTextArrayFilter('amenities'),
                'services': formatPartialTextArrayFilter('services'),
                'price': formatRangeFilter('minPrice', 'maxPrice'),
                'size': formatRangeFilter('minSize', 'maxSize'),
                'detail.rooms': formatNumberValueFilter('rooms'),
                'detail.bedrooms': formatNumberValueFilter('bedrooms'),
                'detail.floor': formatNumberValueFilter('floor'),
                'detail.bathrooms': formatNumberValueFilter('bathrooms')
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
