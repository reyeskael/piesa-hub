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
