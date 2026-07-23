import React from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { ShopCard } from './ShopCard';
import { ShopCardCompact } from './ShopCardCompact';
import type { Shop } from './types';

interface ShopsListProps {
	shops: Shop[];
	selectedPartName: string;
	priceRange: string;
}

export const ShopsList: React.FC<ShopsListProps> = ({ shops, selectedPartName, priceRange }) => {
	if (shops.length === 0) {
		return (
			<Paper sx={{ p: 3, textAlign: 'center', backgroundColor: '#1E1E1E' }}>
				<Typography variant="subtitle1" sx={{ color: '#FFFFFF' }}>
					No shops found nearby
				</Typography>
				<Typography variant="body2" sx={{ color: '#9CA3AF', mt: 1 }}>
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
						<Stack direction="row" alignItems="center" sx={{ mb: 2, gap: 1 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 8,
                                        height: 8,
                                        backgroundColor: '#FF6B00',
                                        borderRadius: '50%',
                                    }}
                                />
                            </Box>
							<Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 600 }}>
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
						<Typography variant="body2" sx={{ color: '#6B7280', mb: 2, textTransform: 'uppercase' }}>
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
