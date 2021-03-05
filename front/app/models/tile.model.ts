export class TileModel {
    private value: number;
    private canStepIn: boolean;

    constructor (values: Object = {}) {
        Object.assign(this, values);
    }

    getValue() {
        return this.value;
    }

    getCanStepIn() {
        return this.canStepIn;
    }

    setCanStepIn(value: boolean) {
        this.canStepIn = value;
    }
}