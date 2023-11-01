import { Box, Button, Typography } from '@mui/material'
const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        color:"#fff"
      }}
      justifyContent={"center"}
      display={"flex"}
      alignItems={"center"}
    >
      <Typography
        color={"HighlightText"}
        variant="h6"
        sx={{ fontSize: 18, color: "fff" }}
        flexDirection={{xs: "column", lg: "row"}}
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
      >
        Designed and developed by
        <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
          variant="text"
          color="primary"
        >
          Abdulaziz Houry
        </Button>
        ©2023
      </Typography>
    </Box>
  )
}

export default Footer