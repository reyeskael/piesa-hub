import React from 'react';
import { Box, Card, CardContent, Chip, Grid, Paper, Stack, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import type { PartResult } from './find-parts/types';

interface PartResultsListProps {
	results: PartResult[];
}

const useStyles = makeStyles()((theme) => ({
	emptyState: {
		padding: 24,
		textAlign: 'center',
	},
	resultRow: {
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	compatibilityColumn: {
		textAlign: 'left',
		[theme.breakpoints.up('sm')]: {
			textAlign: 'right',
		},
	},
	category: {
		marginTop: 8,
	},
}));

export const PartResultsList: React.FC<PartResultsListProps> = ({ results }) => {
	const { classes } = useStyles();

	if (results.length === 0) {
		return (
			<Paper className={classes.emptyState}>
				<Typography variant="subtitle1">No matching parts found yet.</Typography>
				<Typography variant="body2" color="text.secondary">
					Try adjusting the search filters or keyword.
				</Typography>
			</Paper>
		);
	}

	return (
		<Grid container spacing={2}>
			{results.map((result) => (
				<Grid item xs={12} key={result.partNumber}>
					<Card>
						<CardContent>
							<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} className={classes.resultRow}>
								<Box>
									<Typography variant="h6">{result.name}</Typography>
									<Typography variant="body2" color="text.secondary">
										Part #: {result.partNumber}
									</Typography>
								</Box>
								<Box className={classes.compatibilityColumn}>
									<Chip label={result.compatibility} color={result.compatibility === 'Direct Fit' ? 'success' : 'warning'} />
									<Typography variant="body2" className={classes.category}>
										Category: {result.category}
									</Typography>
								</Box>
							</Stack>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};
