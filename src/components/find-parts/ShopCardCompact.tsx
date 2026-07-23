import React from 'react';
import { Box, Card, CardContent, Chip, Rating, Stack, Typography } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import type { Shop } from './types';

interface ShopCardCompactProps {
	shop: Shop;
}

export const ShopCardCompact: React.FC<ShopCardCompactProps> = ({ shop }) => {
	const isOpen = shop.status !== 'Closed';

	return (
		<Card
			sx={{
				backgroundColor: '#1E1E1E',
				borderColor: '#2D2D2D',
				border: '1px solid #2D2D2D',
				mb: 1.5,
			}}
		>
			<CardContent sx={{ padding: '12px 16px', '&:last-child': { pb: '12px' } }}>
				<Stack direction="row" spacing={2} alignItems="center">
					{/* Store Icon */}
					<StorefrontIcon
						sx={{
							width: 40,
							height: 40,
							backgroundColor: '#262626',
							borderRadius: '6px',
							padding: '6px',
							color: '#9CA3AF',
							flexShrink: 0,
						}}
					/>

					{/* Shop Info */}
					<Box flex={1} minWidth={0}>
						<Stack direction="row" alignItems="center" gap={1} sx={{ mb: 0.5 }}>
							<Typography
								variant="subtitle2"
								sx={{
									color: '#FFFFFF',
									fontWeight: 600,
									whiteSpace: 'nowrap',
								}}
							>
								{shop.name}
							</Typography>
							<Chip
								label={shop.status}
								size="small"
								sx={{
									backgroundColor: isOpen ? 'rgba(34, 197, 94, 0.1)' : 'rgba(107, 114, 128, 0.1)',
									color: isOpen ? '#22C55E' : '#6B7280',
									fontWeight: 500,
									height: '20px',
									fontSize: '0.7rem',
									padding: '4px 8px',
								}}
							/>
						</Stack>

						<Typography variant="caption" sx={{ color: '#6B7280' }}>
							{shop.city} • {shop.distance} km
						</Typography>
					</Box>

					{/* Rating and Units */}
					<Stack alignItems="flex-end" gap={0.5} flexShrink={0}>
						<Stack direction="row" alignItems="center" gap={0.5}>
							<Typography variant="caption" sx={{ color: '#FF6B00', fontWeight: 600 }}>
								★ {shop.rating}
							</Typography>
						</Stack>
						<Typography variant="caption" sx={{ color: '#9CA3AF' }}>
							{shop.unitsInStock} unit{shop.unitsInStock !== 1 ? 's' : ''}
						</Typography>
					</Stack>
				</Stack>
			</CardContent>
		</Card>
	);
};
