export class UserData {
  constructor() {
    this.start_date = new Date();
    this.end_date = new Date();
    this.totalPeople = 0;
    
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

    this.visitors = [
        { countAdultNac: 0 },
        { countAdultKids06Nac: 0 },
        { countAdultKids612Nac: 0 },
        { countElderNac: 0 },
        { countAdultExt: 0 },
        { countAdultKids06Ext: 0 },
        { countAdultKids612Ext: 0 },
        { countElderExt: 0 },
    ];
    this.area = '';
    
  }

}