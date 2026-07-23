export interface PartResult {
	partNumber: string;
	name: string;
	category: string;
	compatibility: string;
	make: string;
	model: string;
	year: string;
	keywords: string[];
}

export interface FilterValues {
	year: string;
	make: string;
	model: string;
	category: string;
	keyword: string;
}

export interface Shop {
	shopId: string;
	name: string;
	city: string;
	distance: number;
	rating: number;
	status: string;
	unitsInStock: number;
	image: string;
}

export interface Garage {
	id: string;
	year: string;
	make: string;
	model: string;
}
