// 타입별칭

type User = {
  id:number;
  name:string;
  nickname:string;
  bio:string;
  location:string;
};

let user:User={
  id:1,
  name:"이정환",
  nickname:"winterlood",
  bio:"안녕하세요",
  location:"부천시",
};

// 인덱스 시그니처
type CountryCodes = {
  [key:string]:string;
};

let countryCodes:CountryCodes = {
  Korea: 'ko',
  UnitedStates: 'us',
  UnitedKingdom: 'uk',
};

type CountryNumberCodes={
  Korea:number;
  [key:string]:number;
};

let countryNumberAndStringCodes:CountryNumberCodes = {
  Korea:410,
};