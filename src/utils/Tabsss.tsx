import MyRequestList from '@/app/(withCommonLayout)/(ProtectedLayout)/profile/components/MyRequestList';
import RequestToMeList from '@/app/(withCommonLayout)/(ProtectedLayout)/profile/components/RequestToMe';
import UpdateProfileForm from '@/app/(withCommonLayout)/(ProtectedLayout)/profile/components/UpdateProfileForm';
import UsersList from '@/app/(withCommonLayout)/(ProtectedLayout)/profile/components/UsersList';
import { useGetSingleUserQuery } from '@/redux/api/userApi';
import { TDonor } from '@/types/donor';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function FillExample() {
  const { data:profileData, isFetching } = useGetSingleUserQuery<{ data: TDonor, isFetching: boolean }>(undefined)
console.log('profileData', profileData)

  return (
    <>
  {

profileData?.role !=='superAdmin' ?  <Tabs
defaultActiveKey='profile'
id="fill-tab-example"
className="mb-3"
fill
>


<Tab eventKey="profile" title="Profile">
<UpdateProfileForm />
</Tab>
<Tab eventKey="longer-tab" title="My Blood Requests">

  <MyRequestList />


</Tab>
<Tab eventKey="contact" title="Requests for Blood to Me" >

  <RequestToMeList />

</Tab>

</Tabs> :



<Tabs
defaultActiveKey={"users"}
id="fill-tab-example"
className="mb-3"
fill
>

<Tab eventKey="users" title="Users List" >

  <UsersList />

</Tab>
</Tabs>
  } 
  


 

    </>
  );
}

export default FillExample;