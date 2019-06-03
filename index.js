
export default getSectionItemLayout = ({
	getItemHeight = () => 0,
	getSeparatorHeight = () => 0,
	getSectionHeaderHeight = () => 0,
	getSectionFooterHeight = () => 0,
	listHeaderHeight = 0,
	listFooterHeight = 0,
}) => (sections, index) => {
	let length = 0, offset = 0, currentIndex = 0;

	while (currentIndex < index) {
		offset += length;
		length = currentIndex > 0 ? listFooterHeight : listHeaderHeight;
		currentIndex++;
		const sectionsLength = sections.length;
		for (let sectionIndex = 0; ((sectionIndex < sectionsLength) && (currentIndex < index)); sectionIndex++) {
			offset += length;
			length = getSectionHeaderHeight(sectionIndex);
			
			currentIndex++;
			const sectionData = sections[sectionIndex].data;
			const dataLength = sectionData.length;
			for (let dataIndex = 0; ((dataIndex < dataLength) && (currentIndex < index)); dataIndex++) {
				offset +=length;
				const separator_height = dataIndex < dataLength - 1 ? getSeparatorHeight(sectionIndex, dataIndex) : 0;
				length = getItemHeight(sectionData[dataIndex], sectionIndex, dataIndex) + separator_height;
				currentIndex++;
			}
			if (!dataLength && (currentIndex < index)) {
				offset +=length;
				length = getSectionFooterHeight(sectionIndex);
				currentIndex++;
			}
		}
	}

	return {
		index,
		length,
		offset
	};
}
