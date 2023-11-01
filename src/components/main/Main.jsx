import { useTheme } from '@emotion/react';
import { Box, Button, Card, CardActions, CardMedia, Container, Dialog, IconButton, Paper, Rating, Stack, ToggleButton, ToggleButtonGroup, Typography, useMediaQuery } from '@mui/material'
import { useState } from 'react';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Close } from '@mui/icons-material';
import Products from './Products';
import { dataPrudact } from "../../mydata"

const Main = () => {
    const handleAlignment = (event, newAlignment) => {
        setData(newAlignment)
    };
    const matches = useMediaQuery('(min-width:600px)');
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const all = dataPrudact[0]
    const men = dataPrudact[2]
    const women = dataPrudact[1]
    const [data, setData] = useState(all)
    const [clickdata, setClickData] = useState({})
    if (data) {
        return (
            <Container sx={{ py: 9 }}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={matches ? "space-between" : "center"} flexWrap={"wrap"} gap={3}>
                    <Box>
                        <Typography variant='h6'>Products</Typography>
                        <Typography variant='body1' fontWeight={300}>All our new arrivals in a exclusive brand selection</Typography>
                    </Box>
                    <Box>
                        <ToggleButtonGroup
                            value={""}
                            exclusive
                            onChange={handleAlignment}
                            aria-label="text alignment"
                            color='error'
                            sx={{
                                ".Mui-selected": {
                                    border: "1px solid rgba(233, 69, 96, 0.5) !important",
                                    color: "#e94560",
                                    backgroundColor: "initial",
                                }
                            }}
                        >
                            <ToggleButton className='my_btn' sx={{ color: theme.palette.text.primary }} value={all} aria-label="left aligned">
                                All Products
                            </ToggleButton>
                            <ToggleButton className='my_btn' sx={{ color: theme.palette.text.primary, mx: "16px !important" }} value={men} aria-label="centered">
                                Men Category
                            </ToggleButton>
                            <ToggleButton className='my_btn' sx={{ color: theme.palette.text.primary }} value={women} aria-label="right aligned">
                                Women Category
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                </Stack>
                <Stack flexWrap={"wrap"} direction={"row"} justifyContent={{ xs: "center", lg: "space-between" }} gap={{ xs: 3, lg: 0 }}>
                    {
                        data.map((item) => {
                            return (
                                <Card key={Math.random()} sx={{ maxWidth: 333, mt: 6 }}>
                                    <CardMedia
                                        sx={{
                                            height: 270, ":hover .MuiCardMedia-root": {
                                                scale: "1.2",
                                                rotate: "5deg",
                                                transition: "0.4s",
                                            }
                                        }}
                                        image={item.img2}
                                        title=""
                                    />
                                    <Stack px={2} direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
                                        <Typography gutterBottom variant="h6" component="div">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary">
                                            ${item.price}
                                        </Typography>
                                    </Stack>
                                    <Typography px={2} variant='body1' color="text.secondary">
                                        {item.dsc}
                                    </Typography>
                                    <CardActions sx={{ justifyContent: "space-between" }}>
                                        <Button onClick={
                                            () => {
                                                handleClickOpen()
                                                setClickData(item)
                                            }
                                        } size="small"><AddShoppingCartOutlinedIcon sx={{ mr: 1 }} fontSize='small' /> Add To Cart</Button>
                                        <Button size="small">
                                            <Rating name="read-only" value={item.rating} readOnly precision={0.1} />
                                        </Button>
                                    </CardActions>
                                </Card>
                            )
                        }
                        )
                    }
                </Stack>
                <Dialog
                    sx={{ ".MuiPaper-root": { xs: "100%", md: "800" } }}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <IconButton
                        sx={{
                            ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
                            position: "absolute",
                            top: 0,
                            right: 10,
                        }}
                        onClick={handleClose}
                    >
                        <Close />
                    </IconButton>
                    <Products click={clickdata} />
                </Dialog>
            </Container>
        )
    }
}


export default Main