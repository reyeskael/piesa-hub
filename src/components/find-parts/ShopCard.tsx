import React from 'react';
import { Box, Button, Card, CardContent, Chip, Rating, Stack, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import StorefrontIcon from '@mui/icons-material/Storefront';
import type { Shop } from './types';

interface ShopCardProps {
	shop: Shop;
	priceRange: string;
	partName: string;
}

const useStyles = makeStyles<{ isOpen: boolean }>()((_theme, { isOpen }) => ({
	card: {
		backgroundColor: '#1E1E1E',
		borderColor: '#2D2D2D',
		border: '1px solid #2D2D2D',
		marginBottom: 16,
	},
	headerRow: {
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
	storeInfoRow: {
		gap: 16,
		flex: 1,
	},
	storeIcon: {
		width: 48,
		height: 48,
		backgroundColor: '#262626',
		borderRadius: '8px',
		padding: 8,
		color: '#9CA3AF',
	},
	shopDetails: {
		flex: 1,
	},
	shopName: {
		color: '#FFFFFF',
		marginBottom: 4,
	},
	locationRow: {
		gap: 8,
		alignItems: 'center',
	},
	city: {
		color: '#9CA3AF',
	},
	distance: {
		color: '#6B7280',
	},
	statusRow: {
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	ratingRow: {
		gap: 8,
		alignItems: 'center',
	},
	ratingStars: {
		color: '#FF6B00',
	},
	ratingValue: {
		color: '#FFFFFF',
	},
	statusChip: {
		backgroundColor: isOpen ? 'rgba(34, 197, 94, 0.1)' : 'rgba(107, 114, 128, 0.1)',
		color: isOpen ? '#22C55E' : '#6B7280',
		fontWeight: 500,
	},
	priceRow: {
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	unitsText: {
		color: '#6B7280',
	},
	price: {
		color: '#FF6B00',
		fontWeight: 600,
	},
	reserveButton: {
		backgroundColor: '#FF6B00',
		color: '#FFFFFF',
		padding: 12,
		fontSize: '1rem',
		fontWeight: 600,
		textTransform: 'none',
		'&:hover': {
			backgroundColor: '#E05E00',
		},
	},
	chatButton: {
		color: '#FF6B00',
		textTransform: 'none',
		padding: 8,
	},
}));

export const ShopCard: React.FC<ShopCardProps> = ({ shop, priceRange, partName }) => {
	const isOpen = shop.status !== 'Closed';
	const { classes } = useStyles({ isOpen });

	return (
		<Card className={classes.card}>
			<CardContent>
				<Stack spacing={2}>
					{/* Header with store icon and status */}
					<Stack direction="row" className={classes.headerRow}>
						<Stack direction="row" className={classes.storeInfoRow}>
							<StorefrontIcon className={classes.storeIcon} />
							<Box className={classes.shopDetails}>
								<Typography variant="h6" className={classes.shopName}>
									{shop.name}
								</Typography>
								<Stack direction="row" className={classes.locationRow}>
									<Typography variant="body2" className={classes.city}>
										{shop.city}
									</Typography>
									<Typography variant="body2" className={classes.distance}>
										• {shop.distance} km away
									</Typography>
								</Stack>
							</Box>
						</Stack>
					</Stack>

					{/* Rating and status info */}
					<Stack direction="row" className={classes.statusRow}>
						<Stack direction="row" className={classes.ratingRow}>
							<Rating value={shop.rating} readOnly size="small" className={classes.ratingStars} />
							<Typography variant="body2" className={classes.ratingValue}>
								{shop.rating}
							</Typography>
						</Stack>
						<Chip label={shop.status} size="small" className={classes.statusChip} />
					</Stack>

					{/* Units and price */}
					<Stack direction="row" className={classes.priceRow}>
						<Typography variant="body2" className={classes.unitsText}>
							{shop.unitsInStock} units available
						</Typography>
						<Typography variant="body1" className={classes.price}>
							{priceRange}
						</Typography>
					</Stack>

					{/* Reserve button */}
					<Button variant="contained" fullWidth className={classes.reserveButton}>
						Reserve for Pickup
					</Button>

					{/* Chat option */}
					<Button variant="text" fullWidth className={classes.chatButton}>
						💬 Chat Shop
					</Button>
				</Stack>
			</CardContent>
		</Card>
	);
};
