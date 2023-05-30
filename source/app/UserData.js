/**
 * Class to save all the user information.
 */

export class UserData {
  constructor() {
    this.start_date = '';
    this.end_date = '';
    this.reservation_type = 0; // 1=parcel 2=picnic
    this.parcelaSeleccionada = new String();
    this.num_guests = 0;

    
    this.nameUser = '';
    this.secondName = '';
    this.firstSurname = '';
    this.secondSurname = '';
    this.id = '';
    this.mail = '';
    this.phone = [];
    this.plates = [];
    this.originCountry = '';
    this.originProvince = '';

    this.TotalPeople = 0;
    this.countAdultNac = 0;
    this.countAdultKidsNac = 0;
    this.countAdultFor = 0;
    this.countAdultKidsFor = 0;
    
  }

}