
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
    gender: TGender,
    dateOfBirth: string,
    email: string,
    contactNo: string,
    bloogGroup: TBloodGroup,
    presentAddress: string,
    permanentAddress: string,
    profileImg: string,
    isDeleted: boolean,
    fullName: string,
    username: string,
age:string

  }
  

 export type TDonorRes= {
  success: boolean,
  message: string,
  data: TDonor
}
