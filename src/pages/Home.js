import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import Navbar from '../components/Navbar'
import bgImg from "../images/background-home-desktop.jpg"

const useStyles = makeStyles({
	container:{
		width: "100%",
		height: "100vh",
		backgroundImage : `url(${bgImg})`,
		backgroundSize : "cover",
		paddingTop: 40,
	},
})

function Home() {

	const classes = useStyles()
	return (
		<Grid className={classes.container}>
			<Navbar />
		</Grid>
	)
}

export default Home
