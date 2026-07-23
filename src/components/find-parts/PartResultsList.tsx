import React from 'react';
import { Box, Card, CardContent, Chip, Grid, Paper, Stack, Typography } from '@mui/material';
import type { PartResult } from './types';

interface PartResultsListProps {
	results: PartResult[];
}

export const PartResultsList: React.FC<PartResultsListProps> = ({ results }) => {
	if (results.length === 0) {
		return (
			<Paper sx={{ p: 3, textAlign: 'center' }}>
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
							<Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
								<Box>
									<Typography variant="h6">{result.name}</Typography>
									<Typography variant="body2" color="text.secondary">
										Part #: {result.partNumber}
									</Typography>
								</Box>
								<Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
									<Chip label={result.compatibility} color={result.compatibility === 'Direct Fit' ? 'success' : 'warning'} />
									<Typography variant="body2" sx={{ mt: 1 }}>
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
