import { useContext, useMemo, useEffect, useState } from 'react';
import { AgeContext } from './AgeContext';
import { NameContext } from './NameContext';

export default function Header() {
	const age = useContext(AgeContext);
	const user = useContext(NameContext);
	const [number, setNumber] = useState(0);
	const [isKorea, setIsKorea] = useState(true);
	const [Weather, setWeather] = useState('');
	// const location = { country: isKorea ? '한국' : '일본' };
	const location = useMemo(() => {
		return {
			country: isKorea ? '한국' : '일본',
		};
	}, [isKorea]);

	useEffect(() => {
		console.log('useEffect... 호출');
		// 뭔가 오래 걸리는 작업
	}, [location]);
	return (
		<header>
			<p>
				환영합니다. {user}님의 나이는 {age}입니다.
			</p>
			<h2>어떤 수가 좋은가요?</h2>
			<input
				type='number'
				value={number}
				onChange={(e) => setNumber(e.target.value)}
			/>
			<hr />
			<h2>어느 나라에 있어요?</h2>
			<p>나라: {location.country}</p>
			<button onClick={() => setIsKorea(!isKorea)}>Update</button>
			<h2>좋아하는 날씨가 무엇인가요?</h2>
			<input
				type='text'
				value={Weather}
				onChange={(e) => setWeather(e.target.value)}
			/>
		</header>
	);
}
