import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import questionBank from '../data/QuestionBank.json';
import QuestionBox from '../components/QuestionBox';

class QuizPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedAnswers: {},
		};
	}

	updateAnswer = (questionId, selected) => {
		this.setState(
			(prevState) => {
				return {
					selectedAnswers: {
						...prevState.selectedAnswers,
						[questionId]: selected,
					},
				};
			},
			() => {
				console.log(JSON.stringify(this.state.selectedAnswers, undefined, 2));
			},
		);
	};

	render() {
		const { selectedAnswers } = this.state;
		return (
			<div>
				{questionBank.map(({ questionId, question, options }, index) => (
					<QuestionBox
						index={index + 1}
						questionId={questionId}
						question={question}
						options={options}
						selectedValue={selectedAnswers[questionId]}
						handleChange={this.updateAnswer}
						key={questionId}
					/>
				))}
			</div>
		);
	}
}
