'use client'

import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

const DonorFilter = () => {
  return (
    <> <Box component='div' >
    <Box component='div' >
     

   
       
          <Box component='div' >
            <Typography variant='h6' gutterBottom>
              Size
            </Typography>
         
              <FormGroup>
                {[{},{}]?.map((size: any) => (
                  <FormControlLabel
                    key={size?.name}
                    className='fiterCheck'
                    control={
                      <Checkbox
                        name={size?.name}
                        // checked={isCheckedUpdated(allSize, size?.name)}
                        onChange={(e) => {
                          // let setColorNew: string[] = [];
                          // let allColorSechParams: string[] = [];
                          // if (allSize) {
                          //   allColorSechParams = allSize.split(/-/);

                          //   if (
                          //     Array.isArray(allColorSechParams) &&
                          //     allColorSechParams?.includes(size?.name)
                          //   ) {
                          //     setColorNew = allColorSechParams.filter((c) => c !== size?.name);
                          //   }

                          //   if (
                          //     Array.isArray(allColorSechParams) &&
                          //     !allColorSechParams?.includes(size?.name)
                          //   ) {
                          //     setColorNew = [...allColorSechParams, size?.name];
                          //   }
                          // } else {
                          //   setColorNew = [size?.name];
                          // }
                          // router.replace(
                          //   pathname +
                          //   '?' +
                          //   createQueryString(
                          //     's',
                          //     setColorNew.join('-'),
                          //     !setColorNew.length,
                          //   ),
                          //   { scroll: true },
                          // );
                        }}
                        color='secondary'
                        size='small'
                      />
                    }
                    label='{size?.name}'
                  />
                ))}
              </FormGroup>
          
          </Box>
       
          <Box component='div' >
            <Typography variant='h6' gutterBottom>
              Size
            </Typography>
         
              <FormGroup>
                {[{},{}]?.map((size: any) => (
                  <FormControlLabel
                    key={size?.name}
                    className='fiterCheck'
                    control={
                      <Checkbox
                        name={size?.name}
                        // checked={isCheckedUpdated(allSize, size?.name)}
                        onChange={(e) => {
                          // let setColorNew: string[] = [];
                          // let allColorSechParams: string[] = [];
                          // if (allSize) {
                          //   allColorSechParams = allSize.split(/-/);

                          //   if (
                          //     Array.isArray(allColorSechParams) &&
                          //     allColorSechParams?.includes(size?.name)
                          //   ) {
                          //     setColorNew = allColorSechParams.filter((c) => c !== size?.name);
                          //   }

                          //   if (
                          //     Array.isArray(allColorSechParams) &&
                          //     !allColorSechParams?.includes(size?.name)
                          //   ) {
                          //     setColorNew = [...allColorSechParams, size?.name];
                          //   }
                          // } else {
                          //   setColorNew = [size?.name];
                          // }
                          // router.replace(
                          //   pathname +
                          //   '?' +
                          //   createQueryString(
                          //     's',
                          //     setColorNew.join('-'),
                          //     !setColorNew.length,
                          //   ),
                          //   { scroll: true },
                          // );
                        }}
                        color='secondary'
                        size='small'
                      />
                    }
                    label='{size?.name}'
                  />
                ))}
              </FormGroup>
          
          </Box> <Box component='div' >
            <Typography variant='h6' gutterBottom>
              Size
            </Typography>
         
              <FormGroup>
                {[{},{}]?.map((size: any) => (
                  <FormControlLabel
                    key={size?.name}
                    className='fiterCheck'
                    control={
                      <Checkbox
                        name={size?.name}
                        // checked={isCheckedUpdated(allSize, size?.name)}
                        onChange={(e) => {
                          // let setColorNew: string[] = [];
                          // let allColorSechParams: string[] = [];
                          // if (allSize) {
                          //   allColorSechParams = allSize.split(/-/);

                          //   if (
                          //     Array.isArray(allColorSechParams) &&
                          //     allColorSechParams?.includes(size?.name)
                          //   ) {
                          //     setColorNew = allColorSechParams.filter((c) => c !== size?.name);
                          //   }

                          //   if (
                          //     Array.isArray(allColorSechParams) &&
                          //     !allColorSechParams?.includes(size?.name)
                          //   ) {
                          //     setColorNew = [...allColorSechParams, size?.name];
                          //   }
                          // } else {
                          //   setColorNew = [size?.name];
                          // }
                          // router.replace(
                          //   pathname +
                          //   '?' +
                          //   createQueryString(
                          //     's',
                          //     setColorNew.join('-'),
                          //     !setColorNew.length,
                          //   ),
                          //   { scroll: true },
                          // );
                        }}
                        color='secondary'
                        size='small'
                      />
                    }
                    label='{size?.name}'
                  />
                ))}
              </FormGroup>
          
          </Box>
    </Box>
  </Box></>
  )
}

export default DonorFilter