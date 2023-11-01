import { AddShoppingCartOutlined } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'


const Products = ({ click }) => {
    console.log(click.show)
    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            gap: 2.5,
            flexDirection: { xs: "column", sm: "row" },
        }}>
            <Box sx={{ display: "flex" }}>
                <img width={360} src={click.img2} />
            </Box>
            <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
                <Typography variant="h5">
                    {click.catigory}
                </Typography>
                <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
                    ${click.price}
                </Typography>
                <Typography variant="body1">
                    {click.dsc}
                </Typography>
                <Stack sx={{ justifyContent: { xs: "center", sm: "left" } }}
                    direction={"row"}
                    gap={1}
                    my={2}>
                    {
                        click.show.map((item) => {
                            return (
                                <img style={{ borderRadius: 3 }} width={90} height={100} src={item.img} />
                            )
                        }
                        )
                    }
                </Stack>
                <Button
                    sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
                    variant="contained"
                >
                    <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                    Buy now
                </Button>
            </Box>
        </Box>
    )
}

export default Products