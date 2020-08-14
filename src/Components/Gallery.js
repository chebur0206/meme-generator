import React, { Fragment, useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '50%',
		height: '50%'
	}
};
Modal.setAppElement(document.getElementById('root'));

const Gallery = props => {
	const { memList, setRandomImg } = props;
	const [modalIsOpen, setIsOpen] = useState(false);
	let subtitle;

	const handleClick = event => {
		const { src } = event.target;
		setRandomImg(src)
		setIsOpen(false)
	};

	const openModal = () => {
		setIsOpen(true);
	};

	const afterOpenModal = () => {
		subtitle.style.color = '#f00';
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const images = memList.map((item, index) => {
		return (
			<img
				className='singleImage'
				src={item.value}
				key={index}
				alt=''
				width='100'
				height='100'
				onClick={handleClick}
			/>
		)
	});

	return (
		<Fragment>
			<button
				className='gallery-button'
				onClick={openModal}
			>
				Gallery
			</button >
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				id='koks'
				contentLabel="Example Modal"
			>
				<h2 ref={_subtitle => (subtitle = _subtitle)}>Choose a meme</h2>
				<div className='images'>
					{images}
				</div>
				<button
					onClick={closeModal}
					className='modal-button'
				>
					close
				</button>
			</Modal>
		</Fragment >
	)
};

export default Gallery;