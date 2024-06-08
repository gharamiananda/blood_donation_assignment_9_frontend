
export const Gender: TGender[] = ['male', 'female', 'other'];
export type TGender = 'male' | 'female' | 'other';


export type TBloodGroup =
| 'A_POSITIVE'
| 'A_NEGETIVE'
| 'B_POSITIVE'
| 'B_NEGETIVE'
| 'AB_POSITIVE'
| 'AB_NEGETIVE'
| 'O_POSITIVE'
| 'O_NEGETIVE';
   
export const BloodGroup: TBloodGroup[] = [
    'A_POSITIVE'
   , 'A_NEGETIVE'
   , 'B_POSITIVE'
   , 'B_NEGETIVE'
   , 'AB_POSITIVE'
   , 'AB_NEGETIVE'
   , 'O_POSITIVE'
   , 'O_NEGETIVE'
  
  ];


  export type TDonor= {
    _id: string,
    id:string,
    name: {
  firstName: string,
  middleName:string,
  lastName:string
        
    },
    address?:string;
    gender: TGender,
    dateOfBirth: string,
    email: string,
    contactNo: string,
    bloogGroup: TBloodGroup,
    country: string;
    state: string;
    city: string;
    profileImg: string,
    isDeleted: boolean,
    fullName: string,
    username: string,
    
age:string,
role:string,
wantToDonateBlood?:boolean,
user:any

  }
  

 export type TDonorRes= {
  success: boolean,
  message: string,
  data: TDonor
}
