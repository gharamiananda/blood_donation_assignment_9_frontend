import {
   Box,
   Button,
   Container,
   Typography
} from '@mui/material';
import Link from 'next/link';

const TopRatedDoctors = async () => {
 
   return (
      <Box
         sx={{
            my: 10,
            py: 30,
            backgroundColor: 'rgba(20, 20, 20, 0.1)',
            clipPath: 'polygon(0 0, 100% 25%, 100% 100%, 0 75%)',
         }}
      >
         <Box sx={{ textAlign: 'center' }}>
            <Typography variant='h4' component='h1' fontWeight={700}>
               Our Top Rated Doctors
            </Typography>
            <Typography
               component='p'
               fontSize={18}
               fontWeight={400}
               sx={{ mt: 2 }}
            >
               Access to expert physicians and surgeons, advanced technologies
            </Typography>
            <Typography component='p' fontSize={18} fontWeight={400}>
               and top-quality surgery facilities right here.
            </Typography>
         </Box>

         <Container sx={{ margin: '30px auto' }}>
          
            <Box
               sx={{
                  textAlign: 'center',
               }}
            >
               <Button
                  variant='outlined'
                  sx={{
                     marginTop: '20px',
                  }}
                  component={Link}
                  href='/doctors'
               >
                  View ALL
               </Button>
            </Box>
         </Container>
      </Box>
   );
};

export default TopRatedDoctors;
