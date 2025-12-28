function itemListGenerator() {
	//card list container
	const cardContainer = document.querySelector(`[data-card-list]`);
	//initializing cards properties and data
	class Item {
		constructor(Class, link, heading, para, imgSrc) {
			this.Class = Class;
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
			item.classList.add(this.Class);
			itemLink.href = this.href;
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
		`firest item`,
		`first item para`,
		`#`,
		`../src/assets/images/image.png`
	);
	const item2 = new Item(
		`card`,
		`second item`,
		`second item para`,
		`#`,
		`../src/assets/images/image.png`
	);
	const item3 = new Item(
		`card`,
		`third item`,
		`third item para`,
		`#`,
		`../src/assets/images/image.png`
	);
	const itemArray = [item1, item2, item3];
	itemArray.forEach((e) => {
		e.itemCreateFunction();
		console.log(e);
	});
}
itemListGenerator();
