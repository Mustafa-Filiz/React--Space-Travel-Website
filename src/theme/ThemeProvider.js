import { createTheme, ThemeProvider} from '@mui/material/styles';
import React from 'react'

const theme = createTheme({
	typography:{
		fontFamily:["Barlow Condensed"]
	}
})

function FontTheme({children}) {
	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	)
}

export default FontTheme
