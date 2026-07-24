import React from 'react';
import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import StorefrontIcon from '@mui/icons-material/Storefront';
import type { Shop } from './find-parts/types';

interface ShopCardCompactProps {
	shop: Shop;
}

const useStyles = makeStyles<{ isOpen: boolean }>()((_theme, { isOpen }) => ({
	card: {
		backgroundColor: '#1E1E1E',
		borderColor: '#2D2D2D',
		border: '1px solid #2D2D2D',
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
		backgroundColor: '#262626',
		borderRadius: '6px',
		padding: 6,
		color: '#9CA3AF',
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
		color: '#FFFFFF',
		fontWeight: 600,
		whiteSpace: 'nowrap',
	},
	statusChip: {
		backgroundColor: isOpen ? 'rgba(34, 197, 94, 0.1)' : 'rgba(107, 114, 128, 0.1)',
		color: isOpen ? '#22C55E' : '#6B7280',
		fontWeight: 500,
		height: '20px',
		fontSize: '0.7rem',
		padding: '4px 8px',
	},
	shopLocation: {
		color: '#6B7280',
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
		color: '#FF6B00',
		fontWeight: 600,
	},
	unitsInStock: {
		color: '#9CA3AF',
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
