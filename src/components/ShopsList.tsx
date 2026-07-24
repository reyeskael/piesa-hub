import React from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { ShopCard } from './ShopCard';
import { ShopCardCompact } from './ShopCardCompact';
import type { Shop } from '../models/types';

interface ShopsListProps {
	shops: Shop[];
	selectedPartName: string;
	priceRange: string;
}

const useStyles = makeStyles()({
	emptyState: {
		padding: 24,
		textAlign: 'center',
		backgroundColor: '#1E1E1E',
	},
	emptyTitle: {
		color: '#FFFFFF',
	},
	emptySubtitle: {
		color: '#9CA3AF',
		marginTop: 8,
	},
	bestMatchHeader: {
		alignItems: 'center',
		marginBottom: 16,
		gap: 8,
	},
	bestMatchDotWrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	bestMatchDot: {
		width: 8,
		height: 8,
		backgroundColor: '#FF6B00',
		borderRadius: '50%',
	},
	bestMatchTitle: {
		color: '#FFFFFF',
		fontWeight: 600,
	},
	moreShopsLabel: {
		color: '#6B7280',
		marginBottom: 16,
		textTransform: 'uppercase',
	},
});

export const ShopsList: React.FC<ShopsListProps> = ({ shops, selectedPartName, priceRange }) => {
	const { classes } = useStyles();

	if (shops.length === 0) {
		return (
			<Paper className={classes.emptyState}>
				<Typography variant="subtitle1" className={classes.emptyTitle}>
					No shops found nearby
				</Typography>
				<Typography variant="body2" className={classes.emptySubtitle}>
					Try searching for a different part or location.
				</Typography>
			</Paper>
		);
	}

	return (
		<Box>
			<Stack spacing={3}>
				{/* Best Match Section */}
				{shops.length > 0 && (
					<Box>
						<Stack direction="row" className={classes.bestMatchHeader}>
							<Box className={classes.bestMatchDotWrapper}>
								<Box className={classes.bestMatchDot} />
							</Box>
							<Typography variant="h6" className={classes.bestMatchTitle}>
								Best Match
							</Typography>
						</Stack>
						<ShopCard
							shop={shops[0]}
							partName={selectedPartName}
							priceRange={priceRange}
						/>
					</Box>
				)}

				{/* More Nearby Shops Section */}
				{shops.length > 1 && (
					<Box>
						<Typography variant="body2" className={classes.moreShopsLabel}>
							More Nearby Shops
						</Typography>
						<Stack spacing={0}>
							{shops.slice(1).map((shop) => (
								<ShopCardCompact key={shop.shopId} shop={shop} />
							))}
						</Stack>
					</Box>
				)}
			</Stack>
		</Box>
	);
};
