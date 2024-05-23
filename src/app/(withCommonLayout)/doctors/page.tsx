import DashedLine from '@/components/UI/Doctor/DashedLine';
import ScrollCategory from '@/components/UI/Doctor/ScrollCategory';
import { Container } from '@mui/material';

interface PropType {
   searchParams: { specialties: string };
}

const Doctors = async ({ searchParams }: PropType) => {


   // console.log(data);

   return (
      <Container>
         <DashedLine />

         <ScrollCategory specialties={searchParams.specialties} />

         sadfsad
      </Container>
   );
};

export default Doctors;
