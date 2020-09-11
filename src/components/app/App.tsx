import React from 'react';
import { Resume } from '../resume/Resume';
import { Header } from '../header/Header';
import { ThemeControl } from '../../theme/Theme';

export const App = () => {
	console.log('Thanks for checking out my resume!');

	return (
		<>
			<Header />
			<Resume />
			<ThemeControl />
		</>
	);
};
