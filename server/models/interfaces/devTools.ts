export interface DevelopmentField {
	id: number;
	name: string;
}

export interface DevelopmentTool {
	id: number;
	name: string;
	devField?: DevelopmentField;
}
