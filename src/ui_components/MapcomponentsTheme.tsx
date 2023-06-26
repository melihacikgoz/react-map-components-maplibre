import { ListItemTextProps } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Theme } from '@mui/system';

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		navtools: true;
	}
}
declare module '@mui/material' {
	export interface ListItemTextProps {
		variant?: 'layerlist';
	}
}

const lightDefault = createTheme({
	palette: {
		mode: 'light',
	},
});
const darkDefault = createTheme({
	palette: {
		mode: 'dark',
	},
});

const getDesignTokens = (mode: 'light' | 'dark') => ({
	...(mode === 'light' ? lightDefault : darkDefault),
	palette: {
		mode,
		...(mode === 'dark'
			? {
					primary: {
						main: '#009EE0',
					},
					secondary: { main: '#747577' },
					background: { paper: '#272727' },
					text: {
						primary: '#fff',
						contrast: '#000',
					},
					topToolbar: { barColor: '#000' },
					navigation: { navColor: '#525252', navHover: '#626262' },
					compass: { compColor: '#525252', compHover: '#626262' },
			  }
			: {
					primary: {
						main: '#009EE0',
					},
					secondary: { main: '#747577' },
					text: {
						primary: '#000',
						contrast: '#fff',
					},
					topToolbar: { barColor: '#fff' },
					navigation: { navColor: '#fff', navHover: '#f5f5f5' },
					compass: { compColor: '#fff', compHover: '#f5f5f5' },
			  }),
	},
});
const getTheme = (mode: 'light' | 'dark') => {
	const theme: Theme = getDesignTokens(mode);

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return createTheme(theme, {
		components: {
			MuiTypography: {
				styleOverrides: {
					root: {},
				},
			},
			MuiAppBar: {
				styleOverrides: {
					root: {
						backgroundColor: theme.palette.topToolbar.barColor,
					},
				},
			},
			MuiButton: {
				styleOverrides: {
					contained: {
						color: '#fff',
					},
				},
				variants: [
					{
						props: { variant: 'navtools' },
						style: {
							minWidth: '20px',
							minHeight: '20px',
							fontWeight: 600,
							[theme.breakpoints.down('md')]: {
								width: '50px',
								height: '50px',
								fontSize: '1.4em',
							},
							[theme.breakpoints.up('md')]: {
								width: '30px',
								height: '30px',
								fontSize: '1.2em',
							},
							color: theme.palette.text.primary,
							backgroundColor: theme.palette.navigation.navColor,
							borderRadius: '23%',
							margin: '0.15px',
							marginTop: '4px',
							':hover': {
								color: theme.palette.primary.main,
								backgroundColor: theme.palette.navigation.navHover,
							},
						},
					},
				],
			},
			MuiListItemText: {
				styleOverrides: {
					primary: ({ ownerState }: { ownerState: ListItemTextProps }) => {
						if (ownerState?.variant === 'layerlist') {
							return { fontSize: '0.9rem' };
						}
						return {};
					},
					secondary: ({ ownerState }: { ownerState: ListItemTextProps }) => {
						if (ownerState?.variant === 'layerlist') {
							return { fontSize: '0.7rem' };
						}
						return {};
					},
				},
			},
		},
	});
};

export default getTheme;
