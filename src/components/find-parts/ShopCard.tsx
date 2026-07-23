import React from 'react';
import { Box, Button, Card, CardContent, Chip, Rating, Stack, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StorefrontIcon from '@mui/icons-material/Storefront';
import type { Shop } from './types';

interface ShopCardProps {
	shop: Shop;
	priceRange: string;
	partName: string;
}

export const ShopCard: React.FC<ShopCardProps> = ({ shop, priceRange, partName }) => {
	const isOpen = shop.status !== 'Closed';

	return (
		<Card
			sx={{
				backgroundColor: '#1E1E1E',
				borderColor: '#2D2D2D',
				border: '1px solid #2D2D2D',
				mb: 2,
			}}
		>
			<CardContent>
				<Stack spacing={2}>
					{/* Header with store icon and status */}
					<Stack direction="row" justifyContent="space-between" alignItems="flex-start">
						<Stack direction="row" gap={2} flex={1}>
							<StorefrontIcon
								sx={{
									width: 48,
									height: 48,
									backgroundColor: '#262626',
									borderRadius: '8px',
									padding: '8px',
									color: '#9CA3AF',
								}}
							/>
							<Box flex={1}>
								<Typography variant="h6" sx={{ color: '#FFFFFF', mb: 0.5 }}>
									{shop.name}
								</Typography>
								<Stack direction="row" gap={1} alignItems="center">
									<Typography variant="body2" sx={{ color: '#9CA3AF' }}>
										{shop.city}
									</Typography>
									<Typography variant="body2" sx={{ color: '#6B7280' }}>
										• {shop.distance} km away
									</Typography>
								</Stack>
							</Box>
						</Stack>
					</Stack>

					{/* Rating and status info */}
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Stack direction="row" gap={1} alignItems="center">
							<Rating value={shop.rating} readOnly size="small" sx={{ color: '#FF6B00' }} />
							<Typography variant="body2" sx={{ color: '#FFFFFF' }}>
								{shop.rating}
							</Typography>
						</Stack>
						<Chip
							label={shop.status}
							size="small"
							sx={{
								backgroundColor: isOpen ? 'rgba(34, 197, 94, 0.1)' : 'rgba(107, 114, 128, 0.1)',
								color: isOpen ? '#22C55E' : '#6B7280',
								fontWeight: 500,
							}}
						/>
					</Stack>

					{/* Units and price */}
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Typography variant="body2" sx={{ color: '#6B7280' }}>
							{shop.unitsInStock} units available
						</Typography>
						<Typography variant="body1" sx={{ color: '#FF6B00', fontWeight: 600 }}>
							{priceRange}
						</Typography>
					</Stack>

					{/* Reserve button */}
					<Button
						variant="contained"
						fullWidth
						sx={{
							backgroundColor: '#FF6B00',
							color: '#FFFFFF',
							padding: '12px',
							fontSize: '1rem',
							fontWeight: 600,
							textTransform: 'none',
							'&:hover': {
								backgroundColor: '#E05E00',
							},
						}}
					>
						Reserve for Pickup
					</Button>

					{/* Chat option */}
					<Button
						variant="text"
						fullWidth
						sx={{
							color: '#FF6B00',
							textTransform: 'none',
							padding: '8px',
						}}
					>
						💬 Chat Shop
					</Button>
				</Stack>
			</CardContent>
		</Card>
	);
};
