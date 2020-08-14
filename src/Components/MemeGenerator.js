import React, { useState, useEffect } from 'react';
import SelectImg from './SelectImg';
import Gallery from './Gallery';

const MemeGenerator = () => {
	const [text, setText] = useState({});
	const [randomImg, setRandomImg] = useState('');
	const [memList, setMemList] = useState([]);

	useEffect(() => {
		fetch('https://api.imgflip.com/get_memes')
			.then(response => response.json())
			.then(response => {
				const { memes } = response.data
				const memesList = memes.map((item) => {
					return ({
						value: item.url,
						label: item.name
					})
				});
				setMemList(memesList);
				const randNum = Math.floor(Math.random() * memes.length);
				setRandomImg(memes[randNum].url)
			})
	}, []);

	// Узнать про ...text
	const handleChange = event => {
		const { name, value } = event.target;
		setText({
			...text,
			[name]: value
		})
	};

	const handleSubmit = event => {
		event.preventDefault()
		const randNum = Math.floor(Math.random() * memList.length)
		setRandomImg(memList[randNum].value)
	};

	return (
		<div>
			<Gallery
				memList={memList}
				setRandomImg={setRandomImg}
			/>
			<form className="meme-form" onSubmit={handleSubmit}>
				<SelectImg
					memList={memList}
					setRandomImg={setRandomImg}
				/>
				<input
					type='text'
					placeholder='Top Text'
					name='topText'
					onChange={handleChange}
				/>
				<input
					type='text'
					placeholder='Bottom Text'
					name='bottomText'
					onChange={handleChange}
				/>
				<button>Random</button>
			</form>
			<div className="meme">
				<img align="center" src={randomImg} alt="" />
				<h2 className="top">{text.topText}</h2>
				<h2 className="bottom">{text.bottomText}</h2>
			</div>
		</div >
	)
};


export default MemeGenerator;
