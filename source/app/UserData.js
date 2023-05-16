/**
 * Class to save all the user information.
 */

export class UserData {
  constructor() {
    this.start_date = new Date();
    this.end_date = new Date();
    this.reservation_type = 0; // 1=parcel 2=picnic
    this.parcelaSeleccionada = new String();
    this.num_guests = 0;

    
    this.nameUser = new String();
    this.firstSurname = new String();
    this.secondSurname = new String();
    this.mail = new String();
    this.totalPlates = 0;
    this.plate1 = new String();
    this.plate2 = new String();
    this.plate3 = new String();
    this.plate4 = new String();
    this.plate5 = new String();
    this.plate6 = new String();

    this.TotalPeople = 0;
    this.countAdultNac = 0;
    this.countAdultKidsNac = 0;
    this.countAdultFor = 0;
    this.countAdultKidsFor = 0;
    
  }

}