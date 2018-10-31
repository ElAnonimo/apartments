export default [
  `
  type ApartmentsWithPagination {
    total: Int
    items(filter: ApartmentsFilter): [Apartments]
  }
  
  input ApartmentsFilter {
    location: String
    amenities: String
    services: String
    minSize: Int
    maxSize: Int
    minPrice: Int
    maxPrice: Int
    rooms: Int
    bedrooms: Int
    floor: Int
    bathrooms: Int
  }
  
  type Apartments {
    _id: String!
    owner: Users
    title: String
    location: Locations
    size: Int
    price: Int
    images: [String]
    amenities: [String]
    details: Detail
    services: [String]
  }
  
  type Detail {
    rooms: Int
    bedrooms: Int
    floor: Int
    bathrooms: Int
  }
`,
];
