import faker from 'faker';


export class User {
  name: string;

  // after having the following, location is still undefined, we need to give it inital value
  location: {
    lat: number;
    lng: number
  }

  constructor() {
    this.name = faker.name.firstName();

    // lacation is an object, so it should be initially valued; otherwise, we will see an error saying "cannot find lat of undefined"
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }


  }
}