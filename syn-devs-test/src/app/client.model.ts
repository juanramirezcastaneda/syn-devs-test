export class Client {
  gender: string;
  name: any;
  location: any;
  email: string;
  login: any;
  dob: any;
  registered: any;
  phone: string;
  cell: string;
  id: any;
  picture: any;
  nat: string;
  constructor(
    gender: string,
    name: any,
    location: any,
    email: string,
    login: any,
    dob: any,
    registered: any,
    phone: string,
    cell: string,
    id: any,
    picture: any,
    nat: string
  ) {
    this.gender = gender;
    this.name = name;
    this.location = location;
    this.email = email;
    this.login = login;
    this.dob = dob;
    this.registered = registered;
    this.phone = phone;
    this.cell = cell;
    this.id = id;
    this.picture = picture;
    this.nat = nat;
  }
}
