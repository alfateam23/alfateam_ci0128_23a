export class UserData {
  constructor() {
    this.start_date = "";
    this.end_date = "";
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
        { countAdultKids06Nac: 0 },
        { countAdultKids612Nac: 0 },
        { countAdultNac: 0 },
        { countElderNac: 0 },
        
        { countAdultKids06Ext: 0 },
        { countAdultKids612Ext: 0 },
        { countAdultExt: 0 },
        { countElderExt: 0 },
    ];
    this.area = '';
    
  }

}