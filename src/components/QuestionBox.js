import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import ClearAllIcon from '@material-ui/icons/ClearAll';

const QuestionBox = ({
	index,
	questionId,
	question,
	options,
	selectedValue,
	handleChange,
}) => {
	const onRadioValueChange = (event) => {
		handleChange(questionId, event.target.value);
	};
	const onClearButtonClick = (event) => {
		event.preventDefault();
		handleChange(questionId, '');
	};
	return (
		<Box
			style={{
				margin: '1rem',
				borderBottom: '1px solid gray',
				padding: '0 0 0.5rem 0',
			}}
		>
			<FormControl component='fieldset' style={{ width: '100%' }}>
				<FormLabel component='legend'>
					{index}. {question}
				</FormLabel>
				<Grid
					container
					spacing={2}
					direction={'row'}
					justifyContent={'space-between'}
					alignItems={'flex-start'}
				>
					<Grid item xs={12} sm={12} md={10}>
						<RadioGroup>
							{options.map((option) => (
								<FormControlLabel
									value={option.value}
									label={option.label}
									control={
										<Radio
											onChange={onRadioValueChange}
											checked={option.value === selectedValue}
											color='primary'
										/>
									}
									key={option.value}
								/>
							))}
						</RadioGroup>
					</Grid>
					<Grid item xs={12} sm={12} md={2}>
						<Button
							variant='outlined'
							startIcon={<ClearAllIcon />}
							disabled={!selectedValue}
							onClick={onClearButtonClick}
							size='small'
						>
							Clear
						</Button>
					</Grid>
				</Grid>
			</FormControl>
		</Box>
	);
};

export default QuestionBox;
