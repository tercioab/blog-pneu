import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
	// { name: "Custo Do Km", link: "custokm" },
	// { name: "inicio", link: "" },
];

function Header() {
	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = ({ currentTarget }) => {
		setAnchorElNav(currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='/'
						sx={{
							mr: 4,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							color: "inherit",
							textDecoration: "none",
						}}
					>
						WALTHERCIO BLOG
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map(({ link, name }) => (
								<MenuItem key={name} onClick={handleCloseNavMenu}>
									<Button
										key={name}
										onClick={handleCloseNavMenu}
										sx={{ my: 0, color: "black" }}
										href={`/${link}`}
									>
										{name}
									</Button>
								</MenuItem>
							))}
						</Menu>
					</Box>

					<Typography
						variant='h5'
						noWrap
						component='a'
						href=''
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						CUSTO POR KM
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map(({ link, name }) => (
							<Button
								key={name}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "white", display: "block" }}
								href={`/${link}`}
							>
								{name}
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Header;
