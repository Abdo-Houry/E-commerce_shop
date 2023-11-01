import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { Box, Container, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
const options = [
  'EN',
  "AR"
];
const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <Box sx={{
      bgcolor: "#2b3445",
      py: "4px",
      borderBottomRightRadius: 5,
      borderBottomLeftRadius: 5,
    }}>
    <Container>
      <Stack direction={"row"} alignItems={"center"}>
        <Typography
          sx={{
            mr: 2,
            p: "4px 10px",
            bgcolor: "#D23F57",
            borderRadius: "12px",
            fontSize: "12px",
            fontWeight: "bold",
            color: "#fff",
          }}
          variant="body2"
        >
          HOT
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 300,
            color: "#fff",
          }}
          variant="body2"
        >
          Free Express Shipping
        </Typography>
        <Box flexGrow={1}></Box>
        <div>
          {theme.palette.mode === "light" ? (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <LightModeOutlined sx={{ color: "white" }} fontSize="small" />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <DarkModeOutlined fontSize="small" />
            </IconButton>
          )}
        </div>
        <div>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{ margin: "0%", padding: "0%" }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClickListItem}
              sx={{ "&:hover": { curser: "pointer" }, px:"1px" }}
            >
              <ListItemText
                sx={{ ".MuiTypography-root": { fontSize: "13px", color: "white" } }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ color: "white" }} />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'lock-button',
              role: 'listbox',
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <TwitterIcon
          sx={{
            fontSize: "16px",
            color: "#fff",
          }}
        />
        <FacebookIcon
          sx={{
            fontSize: "16px",
            mx: 1,
            color: "#fff",
          }}
        />
        <InstagramIcon
          sx={{
            fontSize: "16px",
            color: "#fff",
          }}
        />
      </Stack>
      </Container>
    </Box>
  )
}

export default TopBar