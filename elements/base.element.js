
class BaseElement {
    constructor(protElement, elemName) {
        this.protElement = protElement;
        this.elemName = elemName;
    }

    async click() {
        console.log(`Clicks on '${this.elemName}'`);
        await this.protElement.click();
    }

    

}

module.exports = BaseElement;