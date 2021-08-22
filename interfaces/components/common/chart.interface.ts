export type Fill = {
	match: {
		id: string;
	};
	id: string;
};

export interface StackBarProps {
	data: object[];
	keys: string[];
	fills?: Fill[];
	xlabel: string;
	ylabel: string;
}

export interface RadarProps {
	keys: string[];
	index: string;
	data: object[];
}
