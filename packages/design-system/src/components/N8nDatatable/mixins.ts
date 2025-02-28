import { VNode } from 'vue';

export type DatatableRowDataType = string | number | boolean | null | undefined;

export interface DatatableRow {
	id: string | number;

	[key: string]: DatatableRowDataType;
}

export interface DatatableColumn {
	id: string | number;
	path: string;
	label: string;
	render: (row: DatatableRow) => (() => VNode | VNode[]) | DatatableRowDataType;
}
