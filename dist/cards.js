function itemListGenerator() {
	//card list container
	const cardContainer = document.querySelector(`[data-card-list]`);
	//initializing cards properties and data
	class Item {
		constructor(className, link, heading, para, imgSrc) {
			this.className = className;
			this.link = link;
			this.heading = heading;
			this.para = para;
			this.imgSrc = imgSrc;
		}
		// creating prototype method for each card
		itemCreateFunction() {
			// initialize elements
			const item = document.createElement(`li`);
			const itemLink = document.createElement(`a`);
			const imageDiv = document.createElement(`div`);
			const image = document.createElement(`img`);
			const itemHeading = document.createElement(`h3`);
			const itemPara = document.createElement(`p`);

			//assign values to elements
			item.classList.add(this.className);
			itemLink.href = this.link;
			imageDiv.classList.add(`image-div`);
			image.src = this.imgSrc;
			itemHeading.textContent = this.heading;
			itemPara.textContent = this.para;

			// append elements
			cardContainer.append(item);
			item.append(itemLink);
			itemLink.append(imageDiv, itemHeading, itemPara);
			imageDiv.append(image);
		}
	}
	// creating objects for our items
	const item1 = new Item(
		`card`,
		`#`,
		`firest item`,
		`first item para`,
		`../src/assets/images/image.png`
	);
	const itemsData = [
		{
			className: 'card',
			link: '#',
			heading: 'First Item',
			para: 'First item para',
			imgSrc: '../src/assets/images/image.png',
		},
		{
			className: 'card',
			link: '#',
			heading: 'Second Item',
			para: 'Second item para',
			imgSrc: '../src/assets/images/image.png',
		},
		{
			className: 'card',
			link: '#',
			heading: 'Third Item',
			para: 'Third item para',
			imgSrc: '../src/assets/images/image.png',
		},
	];
	itemsData.forEach((data) => {
		const item = new Item(
			data.className,
			data.link,
			data.heading,
			data.para,
			data.imgSrc
		);
		item.itemCreateFunction();
		console.log(data);
	});
}
itemListGenerator();
