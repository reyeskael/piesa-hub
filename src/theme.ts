import { createTheme } from '@mui/material/styles';

// Registers the custom background.elevated key so theme.palette.background.elevated typechecks
declare module '@mui/material/styles' {
	interface TypeBackground {
		elevated: string;
	}
}

const piesaTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#FF6B00',
			dark: '#E05E00',
			light: '#FF8C42',
		},
		secondary: {
			main: '#9CA3AF',
		},
		background: {
			default: '#121212',
			paper: '#1E1E1E',
			elevated: '#262626',
		},
		success: {
			main: '#22C55E',
			dark: '#16A34A',
			light: '#86EFAC',
		},
		divider: '#2D2D2D',
		text: {
			primary: '#FFFFFF',
			secondary: '#9CA3AF',
			disabled: '#6B7280',
		},
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		h4: {
			fontSize: '2rem',
			fontWeight: 600,
			color: '#FFFFFF',
		},
		h6: {
			fontSize: '1.25rem',
			fontWeight: 500,
			color: '#FFFFFF',
		},
		body1: {
			color: '#FFFFFF',
		},
		body2: {
			color: '#9CA3AF',
		},
		subtitle1: {
			color: '#FFFFFF',
		},
		subtitle2: {
			color: '#6B7280',
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundColor: '#121212',
					color: '#FFFFFF',
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundColor: '#1E1E1E',
					backgroundImage: 'none',
					borderColor: '#2D2D2D',
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					backgroundColor: '#1E1E1E',
					borderColor: '#2D2D2D',
					border: '1px solid #2D2D2D',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				contained: {
					backgroundColor: '#FF6B00',
					color: '#FFFFFF',
					'&:hover': {
						backgroundColor: '#E05E00',
					},
				},
				outlined: {
					borderColor: '#2D2D2D',
					color: '#FFFFFF',
					'&:hover': {
						backgroundColor: 'rgba(255, 107, 0, 0.1)',
						borderColor: '#FF6B00',
					},
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiOutlinedInput-root': {
						backgroundColor: '#262626',
						color: '#FFFFFF',
						borderColor: '#2D2D2D',
						'& fieldset': {
							borderColor: '#2D2D2D',
						},
						'&:hover fieldset': {
							borderColor: '#3D3D3D',
						},
						'&.Mui-focused fieldset': {
							borderColor: '#FF6B00',
						},
					},
					'& .MuiInputBase-input::placeholder': {
						color: '#6B7280',
						opacity: 0.7,
					},
				},
			},
		},
		MuiSelect: {
			styleOverrides: {
				root: {
					backgroundColor: '#262626',
					color: '#FFFFFF',
					'& .MuiOutlinedInput-notchedOutline': {
						borderColor: '#2D2D2D',
					},
					'&:hover .MuiOutlinedInput-notchedOutline': {
						borderColor: '#3D3D3D',
					},
					'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderColor: '#FF6B00',
					},
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					color: '#9CA3AF',
					'&.Mui-focused': {
						color: '#FF6B00',
					},
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					backgroundColor: '#262626',
					color: '#9CA3AF',
					borderColor: '#2D2D2D',
				},
				filled: {
					backgroundColor: '#262626',
					'&:hover': {
						backgroundColor: '#2D2D2D',
					},
				},
				colorSuccess: {
					backgroundColor: '#143322',
					color: '#22C55E',
				},
				colorWarning: {
					backgroundColor: 'rgba(255, 107, 0, 0.1)',
					color: '#FF6B00',
				},
			},
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					color: '#FFFFFF',
					backgroundColor: '#1E1E1E',
					'&:hover': {
						backgroundColor: '#262626',
					},
					'&.Mui-selected': {
						backgroundColor: 'rgba(255, 107, 0, 0.2)',
						color: '#FF6B00',
						'&:hover': {
							backgroundColor: 'rgba(255, 107, 0, 0.3)',
						},
					},
				},
			},
		},
		MuiBottomNavigation: {
			styleOverrides: {
				root: {
					backgroundColor: '#1E1E1E',
					borderTop: '1px solid #2D2D2D',
				},
			},
		},
		MuiBottomNavigationAction: {
			styleOverrides: {
				root: {
					color: '#6B7280',
					'&.Mui-selected': {
						color: '#FF6B00',
					},
				},
			},
		},
	},
});

export default piesaTheme;
