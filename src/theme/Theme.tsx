/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Sunrise, Sunset } from 'react-feather';
import './Theme.scss';

interface ColorTheme {
	[key: string]: string;
}

const lightTheme: ColorTheme = {
	'--background-gradient':
		'linear-gradient(158deg, rgba(84, 84, 84, .03) 0%, rgba(84, 84, 84, .03) 20%,rgba(219, 219, 219, .03) 20%, rgba(219, 219, 219, .03) 40%,rgba(54, 54, 54, .03) 40%, rgba(54, 54, 54, .03) 60%,rgba(99, 99, 99, .03) 60%, rgba(99, 99, 99, .03) 80%,rgba(92, 92, 92, .03) 80%, rgba(92, 92, 92, .03) 100%),linear-gradient(45deg, rgba(221, 221, 221, .02) 0%, rgba(221, 221, 221, .02) 14.286%,rgba(8, 8, 8, .02) 14.286%, rgba(8, 8, 8, .02) 28.572%,rgba(52, 52, 52, .02) 28.572%, rgba(52, 52, 52, .02) 42.858%,rgba(234, 234, 234, .02) 42.858%, rgba(234, 234, 234, .02) 57.144%,rgba(81, 81, 81, .02) 57.144%, rgba(81, 81, 81, .02) 71.42999999999999%,rgba(239, 239, 239, .02) 71.43%, rgba(239, 239, 239, .02) 85.71600000000001%,rgba(187, 187, 187, .02) 85.716%, rgba(187, 187, 187, .02) 100.002%),linear-gradient(109deg, rgba(33, 33, 33, .03) 0%, rgba(33, 33, 33, .03) 12.5%,rgba(147, 147, 147, .03) 12.5%, rgba(147, 147, 147, .03) 25%,rgba(131, 131, 131, .03) 25%, rgba(131, 131, 131, .03) 37.5%,rgba(151, 151, 151, .03) 37.5%, rgba(151, 151, 151, .03) 50%,rgba(211, 211, 211, .03) 50%, rgba(211, 211, 211, .03) 62.5%,rgba(39, 39, 39, .03) 62.5%, rgba(39, 39, 39, .03) 75%,rgba(55, 55, 55, .03) 75%, rgba(55, 55, 55, .03) 87.5%,rgba(82, 82, 82, .03) 87.5%, rgba(82, 82, 82, .03) 100%),linear-gradient(348deg, rgba(42, 42, 42, .02) 0%, rgba(42, 42, 42, .02) 20%,rgba(8, 8, 8, .02) 20%, rgba(8, 8, 8, .02) 40%,rgba(242, 242, 242, .02) 40%, rgba(242, 242, 242, .02) 60%,rgba(42, 42, 42, .02) 60%, rgba(42, 42, 42, .02) 80%,rgba(80, 80, 80, .02) 80%, rgba(80, 80, 80, .02) 100%),linear-gradient(120deg, rgba(106, 106, 106, .03) 0%, rgba(106, 106, 106, .03) 14.286%,rgba(67, 67, 67, .03) 14.286%, rgba(67, 67, 67, .03) 28.572%,rgba(134, 134, 134, .03) 28.572%, rgba(134, 134, 134, .03) 42.858%,rgba(19, 19, 19, .03) 42.858%, rgba(19, 19, 19, .03) 57.144%,rgba(101, 101, 101, .03) 57.144%, rgba(101, 101, 101, .03) 71.42999999999999%,rgba(205, 205, 205, .03) 71.43%, rgba(205, 205, 205, .03) 85.71600000000001%,rgba(53, 53, 53, .03) 85.716%, rgba(53, 53, 53, .03) 100.002%),linear-gradient(45deg, rgba(214, 214, 214, .03) 0%, rgba(214, 214, 214, .03) 16.667%,rgba(255, 255, 255, .03) 16.667%, rgba(255, 255, 255, .03) 33.334%,rgba(250, 250, 250, .03) 33.334%, rgba(250, 250, 250, .03) 50.001000000000005%,rgba(231, 231, 231, .03) 50.001%, rgba(231, 231, 231, .03) 66.668%,rgba(241, 241, 241, .03) 66.668%, rgba(241, 241, 241, .03) 83.33500000000001%,rgba(31, 31, 31, .03) 83.335%, rgba(31, 31, 31, .03) 100.002%),linear-gradient(59deg, rgba(224, 224, 224, .03) 0%, rgba(224, 224, 224, .03) 12.5%,rgba(97, 97, 97, .03) 12.5%, rgba(97, 97, 97, .03) 25%,rgba(143, 143, 143, .03) 25%, rgba(143, 143, 143, .03) 37.5%,rgba(110, 110, 110, .03) 37.5%, rgba(110, 110, 110, .03) 50%,rgba(34, 34, 34, .03) 50%, rgba(34, 34, 34, .03) 62.5%,rgba(155, 155, 155, .03) 62.5%, rgba(155, 155, 155, .03) 75%,rgba(249, 249, 249, .03) 75%, rgba(249, 249, 249, .03) 87.5%,rgba(179, 179, 179, .03) 87.5%, rgba(179, 179, 179, .03) 100%),linear-gradient(241deg, rgba(58, 58, 58, .02) 0%, rgba(58, 58, 58, .02) 25%,rgba(124, 124, 124, .02) 25%, rgba(124, 124, 124, .02) 50%,rgba(254, 254, 254, .02) 50%, rgba(254, 254, 254, .02) 75%,rgba(52, 52, 52, .02) 75%, rgba(52, 52, 52, .02) 100%),linear-gradient(90deg, #FFF,#FFF)',
	// Header
	'--header-background': '#121212',
	'--header-link': '#00bcab',
	'--header-link-hover': '#00e2cd',

	'--text-header-color': '#007065',
	'--accent': '#007065',
	'--main-text': '#333',
	'--icon-color': '#007065',
	'--resume-background': '#FCFCFC',
};

const darkTheme: ColorTheme = {
	'--background-gradient':
		'linear-gradient(161deg, rgba(121, 121, 121, .02) 0%, rgba(121, 121, 121, .02) 16.667%,rgba(193, 193, 193, .02) 16.667%, rgba(193, 193, 193, .02) 33.334%,rgba(177, 177, 177, .02) 33.334%, rgba(177, 177, 177, .02) 50.001000000000005%,rgba(5, 5, 5, .02) 50.001%, rgba(5, 5, 5, .02) 66.668%,rgba(229, 229, 229, .02) 66.668%, rgba(229, 229, 229, .02) 83.33500000000001%,rgba(211, 211, 211, .02) 83.335%, rgba(211, 211, 211, .02) 100.002%),linear-gradient(45deg, rgba(223, 223, 223, .02) 0%, rgba(223, 223, 223, .02) 14.286%,rgba(70, 70, 70, .02) 14.286%, rgba(70, 70, 70, .02) 28.572%,rgba(109, 109, 109, .02) 28.572%, rgba(109, 109, 109, .02) 42.858%,rgba(19, 19, 19, .02) 42.858%, rgba(19, 19, 19, .02) 57.144%,rgba(180, 180, 180, .02) 57.144%, rgba(180, 180, 180, .02) 71.42999999999999%,rgba(63, 63, 63, .02) 71.43%, rgba(63, 63, 63, .02) 85.71600000000001%,rgba(87, 87, 87, .02) 85.716%, rgba(87, 87, 87, .02) 100.002%),linear-gradient(337deg, rgba(142, 142, 142, .02) 0%, rgba(142, 142, 142, .02) 20%,rgba(164, 164, 164, .02) 20%, rgba(164, 164, 164, .02) 40%,rgba(203, 203, 203, .02) 40%, rgba(203, 203, 203, .02) 60%,rgba(228, 228, 228, .02) 60%, rgba(228, 228, 228, .02) 80%,rgba(54, 54, 54, .02) 80%, rgba(54, 54, 54, .02) 100%),linear-gradient(314deg, rgba(187, 187, 187, .02) 0%, rgba(187, 187, 187, .02) 12.5%,rgba(170, 170, 170, .02) 12.5%, rgba(170, 170, 170, .02) 25%,rgba(214, 214, 214, .02) 25%, rgba(214, 214, 214, .02) 37.5%,rgba(187, 187, 187, .02) 37.5%, rgba(187, 187, 187, .02) 50%,rgba(190, 190, 190, .02) 50%, rgba(190, 190, 190, .02) 62.5%,rgba(6, 6, 6, .02) 62.5%, rgba(6, 6, 6, .02) 75%,rgba(206, 206, 206, .02) 75%, rgba(206, 206, 206, .02) 87.5%,rgba(171, 171, 171, .02) 87.5%, rgba(171, 171, 171, .02) 100%),linear-gradient(300deg, rgba(243, 243, 243, .01) 0%, rgba(243, 243, 243, .01) 12.5%,rgba(209, 209, 209, .01) 12.5%, rgba(209, 209, 209, .01) 25%,rgba(179, 179, 179, .01) 25%, rgba(179, 179, 179, .01) 37.5%,rgba(3, 3, 3, .01) 37.5%, rgba(3, 3, 3, .01) 50%,rgba(211, 211, 211, .01) 50%, rgba(211, 211, 211, .01) 62.5%,rgba(151, 151, 151, .01) 62.5%, rgba(151, 151, 151, .01) 75%,rgba(16, 16, 16, .01) 75%, rgba(16, 16, 16, .01) 87.5%,rgba(242, 242, 242, .01) 87.5%, rgba(242, 242, 242, .01) 100%),linear-gradient(6deg, rgba(31, 31, 31, .02) 0%, rgba(31, 31, 31, .02) 20%,rgba(193, 193, 193, .02) 20%, rgba(193, 193, 193, .02) 40%,rgba(139, 139, 139, .02) 40%, rgba(139, 139, 139, .02) 60%,rgba(14, 14, 14, .02) 60%, rgba(14, 14, 14, .02) 80%,rgba(122, 122, 122, .02) 80%, rgba(122, 122, 122, .02) 100%),linear-gradient(279deg, rgba(190, 190, 190, .02) 0%, rgba(190, 190, 190, .02) 14.286%,rgba(160, 160, 160, .02) 14.286%, rgba(160, 160, 160, .02) 28.572%,rgba(23, 23, 23, .02) 28.572%, rgba(23, 23, 23, .02) 42.858%,rgba(60, 60, 60, .02) 42.858%, rgba(60, 60, 60, .02) 57.144%,rgba(149, 149, 149, .02) 57.144%, rgba(149, 149, 149, .02) 71.42999999999999%,rgba(4, 4, 4, .02) 71.43%, rgba(4, 4, 4, .02) 85.71600000000001%,rgba(50, 50, 50, .02) 85.716%, rgba(50, 50, 50, .02) 100.002%),linear-gradient(109deg, rgba(124, 124, 124, .03) 0%, rgba(124, 124, 124, .03) 12.5%,rgba(61, 61, 61, .03) 12.5%, rgba(61, 61, 61, .03) 25%,rgba(187, 187, 187, .03) 25%, rgba(187, 187, 187, .03) 37.5%,rgba(207, 207, 207, .03) 37.5%, rgba(207, 207, 207, .03) 50%,rgba(206, 206, 206, .03) 50%, rgba(206, 206, 206, .03) 62.5%,rgba(118, 118, 118, .03) 62.5%, rgba(118, 118, 118, .03) 75%,rgba(89, 89, 89, .03) 75%, rgba(89, 89, 89, .03) 87.5%,rgba(96, 96, 96, .03) 87.5%, rgba(96, 96, 96, .03) 100%),linear-gradient(329deg, rgba(35, 35, 35, .02) 0%, rgba(35, 35, 35, .02) 20%,rgba(246, 246, 246, .02) 20%, rgba(246, 246, 246, .02) 40%,rgba(118, 118, 118, .02) 40%, rgba(118, 118, 118, .02) 60%,rgba(245, 245, 245, .02) 60%, rgba(245, 245, 245, .02) 80%,rgba(140, 140, 140, .02) 80%, rgba(140, 140, 140, .02) 100%),linear-gradient(90deg, hsl(314,0%,31%),hsl(314,0%,31%))',
	// Header
	'--header-background': '#121212',
	'--header-link': '#00bcab',
	'--header-link-hover': '#00e2cd',

	'--text-header-color': '#00bcab',
	'--accent': '#00bcab',
	'--main-text': '#EEE',
	'--icon-color': '#00bcab',
	'--resume-background': '#121212',
};

const initTheme = (): string => {
	// First we check localstorage to see if they have already chosen a theme.
	const lsTheme = window.localStorage.getItem('theme');
	if (lsTheme !== null) {
		return lsTheme;
	}
	if (window.matchMedia('(prefers-color-scheme: light)').matches) {
		return 'light';
	}
	// Either they have chosen dark as a theme or they haven't chosen a theme. So dark mode it is :)
	return 'dark';
};

const applyTheme = (t: string): void => {
	const newTheme = t === 'dark' ? darkTheme : lightTheme;
	window.localStorage.setItem('theme', t);
	Object.keys(newTheme).forEach((key: string) => {
		const value = newTheme[key];
		document.documentElement.style.setProperty(key, value);
	});
};

export const ThemeControl = () => {
	const [theme, setTheme] = useState(initTheme);
	const [isDark, setIsDark] = useState(true);

	useEffect(() => {
		applyTheme(theme);
		setIsDark(theme === 'dark');
	}, [theme]);

	return (
		<button
			className={`theme-btn ${isDark ? ' dark' : ' light'}`}
			title={isDark ? 'enable light theme mode' : 'enable dark theme mode'}
			aria-label={isDark ? 'enable light theme mode' : 'enable dark theme mode'}
			onClick={() => setTheme(isDark ? 'light' : 'dark')}>
			{isDark ? <Sunrise className="theme-icon" /> : <Sunset className="theme-icon" />}
		</button>
	);
};
