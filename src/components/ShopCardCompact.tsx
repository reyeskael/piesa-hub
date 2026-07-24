import React from 'react';
import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import StorefrontIcon from '@mui/icons-material/Storefront';
import type { Shop } from '../models/types';

interface ShopCardCompactProps {
	shop: Shop;
}

const useStyles = makeStyles<{ isOpen: boolean }>()((theme, { isOpen }) => ({
	card: {
		marginBottom: 12,
	},
	cardContent: {
		padding: '12px 16px',
		'&:last-child': {
			paddingBottom: 12,
		},
	},
	row: {
		alignItems: 'center',
	},
	storeIcon: {
		width: 40,
		height: 40,
		backgroundColor: theme.palette.background.elevated,
		borderRadius: '6px',
		padding: 6,
		color: theme.palette.text.secondary,
		flexShrink: 0,
	},
	shopInfo: {
		flex: 1,
		minWidth: 0,
	},
	shopNameRow: {
		alignItems: 'center',
		gap: 8,
		marginBottom: 4,
	},
	shopName: {
		color: theme.palette.text.primary,
		fontWeight: 600,
		whiteSpace: 'nowrap',
	},
	statusChip: {
		backgroundColor: isOpen ? alpha(theme.palette.success.main, 0.1) : alpha(theme.palette.text.disabled, 0.1),
		color: isOpen ? theme.palette.success.main : theme.palette.text.disabled,
		fontWeight: 500,
		height: '20px',
		fontSize: '0.7rem',
		padding: '4px 8px',
	},
	shopLocation: {
		color: theme.palette.text.disabled,
	},
	ratingColumn: {
		alignItems: 'flex-end',
		gap: 4,
		flexShrink: 0,
	},
	ratingRow: {
		alignItems: 'center',
		gap: 4,
	},
	rating: {
		color: theme.palette.primary.main,
		fontWeight: 600,
	},
	unitsInStock: {
		color: theme.palette.text.secondary,
	},
}));

export const ShopCardCompact: React.FC<ShopCardCompactProps> = ({ shop }) => {
	const isOpen = shop.status !== 'Closed';
	const { classes } = useStyles({ isOpen });

	return (
		<Card className={classes.card}>
			<CardContent className={classes.cardContent}>
				<Stack direction="row" spacing={2} className={classes.row}>
					{/* Store Icon */}
					<StorefrontIcon className={classes.storeIcon} />

					{/* Shop Info */}
					<Box className={classes.shopInfo}>
						<Stack direction="row" className={classes.shopNameRow}>
							<Typography variant="subtitle2" className={classes.shopName}>
								{shop.name}
							</Typography>
							<Chip label={shop.status} size="small" className={classes.statusChip} />
						</Stack>

						<Typography variant="caption" className={classes.shopLocation}>
							{shop.city} • {shop.distance} km
						</Typography>
					</Box>

					{/* Rating and Units */}
					<Stack className={classes.ratingColumn}>
						<Stack direction="row" className={classes.ratingRow}>
							<Typography variant="caption" className={classes.rating}>
								★ {shop.rating}
							</Typography>
						</Stack>
						<Typography variant="caption" className={classes.unitsInStock}>
							{shop.unitsInStock} unit{shop.unitsInStock !== 1 ? 's' : ''}
						</Typography>
					</Stack>
				</Stack>
			</CardContent>
		</Card>
	);
};
