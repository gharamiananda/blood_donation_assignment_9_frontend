import { Box, Button, Container, Typography } from '@mui/material';

const Specialist = async () => {


   return (
      <Container>
         <Box
            sx={{
               margin: '80px 0px',
               textAlign: 'center',
            }}
         >
            <Box
               sx={{
                  textAlign: 'start',
               }}
            >
               <Typography variant='h4' fontWeight={600}>
                  Explore Treatments Across Specialties
               </Typography>
               <Typography component='p' fontWeight={300} fontSize={18} mt={1}>
                  Experienced Doctors Across All Specialties
               </Typography>
            </Box>
        
            <Button
               variant='outlined'
               sx={{
                  marginTop: '20px',
               }}
            >
               View ALL
            </Button>
         </Box>
      </Container>
   );
};

export default Specialist;
