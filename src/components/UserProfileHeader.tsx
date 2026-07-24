import React from 'react';
import { Avatar, Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
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

const useStyles = makeStyles()((theme) => ({
	root: {
		marginBottom: 32,
	},
	header: {
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		marginBottom: 24,
	},
	title: {
		color: theme.palette.text.primary,
		fontWeight: 700,
	},
	settingsButton: {
		color: theme.palette.text.secondary,
		backgroundColor: theme.palette.background.elevated,
		'&:hover': {
			backgroundColor: theme.palette.divider,
		},
	},
	userCard: {
		backgroundColor: theme.palette.background.paper,
		border: `1px solid ${theme.palette.divider}`,
		borderRadius: '12px',
		padding: 24,
		marginBottom: 24,
	},
	userRow: {
		marginBottom: 16,
	},
	avatar: {
		width: 80,
		height: 80,
		backgroundColor: theme.palette.background.elevated,
	},
	userInfo: {
		justifyContent: 'center',
		flex: 1,
	},
	userName: {
		fontWeight: 600,
	},
	locationRow: {
		alignItems: 'center',
		gap: 4,
		marginBottom: 8,
	},
	locationIcon: {
		width: 16,
		height: 16,
		color: theme.palette.text.secondary,
	},
	statsRow: {
		gap: 16,
	},
	statItem: {
		alignItems: 'center',
		gap: 4,
	},
	statEmoji: {
		fontSize: '1rem',
	},
	statText: {
		color: theme.palette.text.primary,
		fontWeight: 600,
	},
	editButton: {
		color: theme.palette.primary.main,
		borderColor: theme.palette.primary.main,
		textTransform: 'none',
	},
}));

export const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({ user, onEditProfile }) => {
	const { classes } = useStyles();

	return (
		<Box className={classes.root}>
			{/* Header with settings */}
			<Stack direction="row" className={classes.header}>
				<Typography variant="h5" className={classes.title}>
					My Garage
				</Typography>
				<IconButton size="small" className={classes.settingsButton} onClick={onEditProfile}>
					<SettingsIcon />
				</IconButton>
			</Stack>

			{/* User Card */}
			<Box className={classes.userCard}>
				<Stack direction="row" spacing={2} className={classes.userRow}>
					<Avatar src={user.avatar} className={classes.avatar} />
					<Stack direction="column" className={classes.userInfo}>
						<Typography variant="h6" className={classes.userName}>
							{user.name}
						</Typography>
						<Stack direction="row" className={classes.locationRow}>
							<LocationOnIcon className={classes.locationIcon} />
							<Typography variant="body2">
								{user.location}
							</Typography>
						</Stack>
						<Stack direction="row" className={classes.statsRow}>
							<Stack direction="row" className={classes.statItem}>
								<span className={classes.statEmoji}>🏍️</span>
								<Typography variant="body2" className={classes.statText}>
									{user.bikeCount} bikes
								</Typography>
							</Stack>
							<Stack direction="row" className={classes.statItem}>
								<span className={classes.statEmoji}>📑</span>
								<Typography variant="body2" className={classes.statText}>
									{user.savedPartsCount} saved parts
								</Typography>
							</Stack>
						</Stack>
					</Stack>
				</Stack>

				<Button variant="outlined" fullWidth className={classes.editButton} onClick={onEditProfile}>
					Edit Profile
				</Button>
			</Box>
		</Box>
	);
};
