import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

interface BottomNavBarProps {
	value: number;
	onChange: (newValue: number) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ value, onChange }) => {
	return (
		<Paper sx={{ position: 'sticky', bottom: 0, left: 0, right: 0 }} elevation={3}>
			<BottomNavigation value={value} onChange={(_, newValue) => onChange(newValue)}>
				<BottomNavigationAction label="Home" icon={<HomeIcon />} />
				<BottomNavigationAction label="Find Parts" icon={<SearchIcon />} />
				<BottomNavigationAction label="Profile" icon={<PersonIcon />} />
			</BottomNavigation>
		</Paper>
	);
};
