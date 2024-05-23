import { Container } from '@mui/material';

type PropTypes = {
   params: {
      id: string;
   };
};

const InfoBoxStyles = {
   background:
      'linear-gradient(to bottom, rgba(21,134,253,0.3), rgba(255,255,255,1) 100%)',
   width: '100%',
   p: 3,
   '& h6': {
      color: 'primary.main',
   },
   '& p': {
      color: 'secondary.main',
   },
};

const DoctorsProfilePage = async ({ params }: PropTypes) => {


   return (
      <Container>
        dsfdsf
      </Container>
   );
};

export default DoctorsProfilePage;
