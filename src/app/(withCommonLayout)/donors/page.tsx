import BasicPagination from "@/components/Shared/pagination/Pagination";
import DashedLine from "@/components/UI/Doctor/DashedLine";
import ScrollCategory from "@/components/UI/Doctor/ScrollCategory";
import {
   Box,
   Button,
   Card,
   CardActions,
   CardContent,
   Container,
   Grid,
   Stack,
   TextField,
   Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import DonorFilter from "./components/DonorFilter";

interface PropType {
  searchParams: { specialties: string };
}

const Donors = async ({ searchParams }: PropType) => {
  let res;

  res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/donor-list?page=1`
  );

  const { data } = await res.json();

  // console.log(data);

  return (
    <Container>
      <DashedLine />
      <Container>
        <Typography variant="h4">Blood Donors</Typography>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          <TextField name="" placeholder="Enter some search" size="small" />
          <Button>Search</Button>
        </Stack>
      </Container>

      <ScrollCategory specialties={searchParams.specialties} />

      <Container sx={{ margin: "30px auto" }}>
        <Box component="div" className="mb-5">
          <Typography
            //  onClick={() => { }}
            variant="h5"
            mb={0}
          >
            Filters
          </Typography>
          <Button
            color="secondary"
            className="fontWeight600"
            href="/"
            component={Link}
          >
            Clear All
          </Button>
        </Box>
        <Grid container spacing={2}>
          <Grid item md={2}>
            <DonorFilter />
          </Grid>
          <Grid item md={10}>
            <Grid container spacing={2}>
              {data.map((doctor: any) => (
                <Grid item key={doctor.id} md={4}>
                  <Card>
                    <Box
                      sx={{
                        width: "100%",
                        height: 300,
                        "& img": {
                          width: "100%",
                          height: "100%",
                          overflow: "hidden",
                          objectFit: "cover",
                        },
                      }}
                    >
                      <Image
                        src={doctor.profilePhoto}
                        alt="doctor"
                        width={500}
                        height={100}
                      />
                    </Box>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {doctor.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {doctor.qualification}, {doctor.designation}
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        justifyContent: "space-between",
                        px: 2,
                        paddingBottom: "20px",
                      }}
                    >
                      <Button
                        variant="outlined"
                        component={Link}
                        href={`/donors/${doctor?.id}`}
                      >
                        View Profile
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Stack
              justifyContent="center"
              justifyItems="center"
              sx={{ width: "100%", mx: "auto" }}
            >
              <BasicPagination totalPage={2} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ mt: 2, p: 3, bgcolor: "secondary.light" }}>
        {data.length === 0 && <Box>No Doctor Found With This Specialty</Box>}
      </Box>
    </Container>
  );
};

export default Donors;
