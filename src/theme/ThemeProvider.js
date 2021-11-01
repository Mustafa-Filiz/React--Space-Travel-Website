import { createTheme, ThemeProvider} from '@mui/material/styles';
import React from 'react'

const theme = createTheme({
	typography:{
		fontFamily:["Barlow Condensed"]
	},
	breakpoints: {
		values: {
		  xs: 0,
		  sm: 600,
		  md: 900,
		  lg: 1200,
		  xl: 1536,
		},
	  },
})

function AppThemeProvider({children}) {
	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	)
}

export default AppThemeProvider
