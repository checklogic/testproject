import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Suspense } from 'react';
import classNames from 'shared/lib/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AboutPage, MainPage } from 'pages';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<button onClick={toggleTheme}>TOGGLE</button>
			<AppRouter />
		</div>
	);
};

export default App;
