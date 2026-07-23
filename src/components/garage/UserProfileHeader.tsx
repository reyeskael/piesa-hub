import React from 'react';
import { Avatar, Box, Button, IconButton, Stack, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface UserProfileHeaderProps {
	user: {
		name: string;
		location: string;
		avatar: string;
		bikeCount: number;
		savedPartsCount: number;
	};
	onEditProfile: () => void;
}

export const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({ user, onEditProfile }) => {
	return (
		<Box sx={{ mb: 4 }}>
			{/* Header with settings */}
			<Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 3 }}>
				<Typography variant="h5" sx={{ color: '#FFFFFF', fontWeight: 700 }}>
					My Garage
				</Typography>
				<IconButton
					size="small"
					sx={{
						color: '#9CA3AF',
						backgroundColor: '#262626',
						'&:hover': {
							backgroundColor: '#2D2D2D',
						},
					}}
					onClick={onEditProfile}
				>
					<SettingsIcon />
				</IconButton>
			</Stack>

			{/* User Card */}
			<Box
				sx={{
					backgroundColor: '#1E1E1E',
					border: '1px solid #2D2D2D',
					borderRadius: '12px',
					p: 3,
					mb: 3,
				}}
			>
				<Stack direction="row" spacing={2} sx={{ mb: 2 }}>
					<Avatar
						src={user.avatar}
						sx={{
							width: 80,
							height: 80,
							backgroundColor: '#262626',
						}}
					/>
					<Stack direction="column" justifyContent="center" flex={1}>
						<Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 600 }}>
							{user.name}
						</Typography>
						<Stack direction="row" alignItems="center" gap={0.5} sx={{ mb: 1 }}>
							<LocationOnIcon sx={{ width: 16, height: 16, color: '#9CA3AF' }} />
							<Typography variant="body2" sx={{ color: '#9CA3AF' }}>
								{user.location}
							</Typography>
						</Stack>
						<Stack direction="row" gap={2}>
							<Stack direction="row" alignItems="center" gap={0.5}>
								<span style={{ fontSize: '1rem' }}>🏍️</span>
								<Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 600 }}>
									{user.bikeCount} bikes
								</Typography>
							</Stack>
							<Stack direction="row" alignItems="center" gap={0.5}>
								<span style={{ fontSize: '1rem' }}>📑</span>
								<Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 600 }}>
									{user.savedPartsCount} saved parts
								</Typography>
							</Stack>
						</Stack>
					</Stack>
				</Stack>

				<Button
					variant="outlined"
					fullWidth
					sx={{
						color: '#FF6B00',
						borderColor: '#FF6B00',
						textTransform: 'none',
						'&:hover': {
							backgroundColor: 'rgba(255, 107, 0, 0.1)',
						},
					}}
					onClick={onEditProfile}
				>
					Edit Profile
				</Button>
			</Box>
		</Box>
	);
};
