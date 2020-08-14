import React from 'react';
import Select from 'react-select';

const SelectImg = props => {
	const { setRandomImg, memList } = props;

	const changeName = item => {
		setRandomImg(item.value)
	};

	return (
		<Select
			onChange={changeName}
			options={memList}
			placeholder={"Выбор мема..."}
		/>
	)
};

export default SelectImg;