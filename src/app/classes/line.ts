abstract class Line {
    name: string = '';
    total: number = 0;
}

enum lineType {
    Group,
    Entry
}

export class Group extends Line {
    children: Map<string, lineType> = new Map();

    public constructor(name: string) {
        super();
        this.name = name;
    }
}

export class Entry extends Line {
    quantity: number = 0;
    unit: string = '';
    unitPrice: number = 0;

    public constructor(name: string) {
        super();
        this.name = name;
    }
}