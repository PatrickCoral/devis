abstract class Line {
	name = '';
	total = 0;
	hidden = false;
}

export type lineType
	= Group
	| Entry

export class Group extends Line {
	children: lineType[] = [];

	public constructor(name: string) {
		super();
		this.name = name;
	}
}

export class Entry extends Line {
	quantity = 0;
	unit = '';
	unitPrice = 0;

	public constructor(name: string) {
		super();
		this.name = name;
	}
}