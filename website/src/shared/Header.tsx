import { AppBar, Toolbar, Typography, Box, Link } from '@mui/material';

export const Header = () => {
  const base = process.env.PUBLIC_URL || '';
  const home = base + '/#/';
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Link href={home} color="inherit" underline="none">
          <Typography variant="h6" component="div">
            <Box
              sx={{
                verticalAlign: 'middle',
                paddingLeft: '5px',
                width: '55px',
                height: '55px',
              }}
              component="img"
              height="40"
              alt=""
              src="wiredcraft.svg"
            />
          </Typography>
        </Link>
        <Box
          sx={{
            marginLeft: 'auto',
          }}
        >
        </Box>
      </Toolbar>
    </AppBar>
  );
};
