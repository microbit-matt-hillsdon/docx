import {P, Attributes, ParagraphProperties, Run} from "./xml-components/p";

class Style {
    private pStyle: Array<P>;

    constructor(type: string) {
        this.pStyle = new Array<P>();
        this.pStyle.push(new Attributes(type));
    }
}

class Alignment {
    private jc: Array<P>;

    constructor(type: string) {
        this.jc = new Array<P>();
        this.jc.push(new Attributes(type));
    }
}

export class Paragraph {
    private p: Array<P>;
    private properties: ParagraphProperties;

    constructor(text?: string) {
        this.p = new Array<P>();
        this.p.push(new Attributes());
        this.properties = new ParagraphProperties();
        this.p.push(this.properties);
        this.p.push(new Run(text));
    }

    addText(run: Run) {
        this.p.push(run);
        return this;
    }

    heading1() {
        this.properties.push(new Style("Heading1"));
        return this;
    }

    heading2() {
        this.properties.push(new Style("Heading2"));
        return this;
    }

    heading3() {
        this.properties.push(new Style("Heading3"));
        return this;
    }

    heading4() {
        this.properties.push(new Style("Heading4"));
        return this;
    }

    heading5() {
        this.properties.push(new Style("Heading5"));
        return this;
    }

    title() {
        this.properties.push(new Style("Title"));
        return this;
    }

    center() {
        this.properties.push(new Alignment("center"));
        return this;
    }

    left() {
        this.properties.push(new Alignment("left"));
        return this;
    }

    right() {
        this.properties.push(new Alignment("right"));
        return this;
    }

    justified() {
        this.properties.push(new Alignment("both"));
        return this;
    }
}