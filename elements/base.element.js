
class BaseElement {
    constructor(protElement, elemName) {
        this.protElement = protElement;
        this.elemName = elemName;
    }

    getProtractorElement() {
        return this.protElement;
    };

    async click() {
        console.log(`Clicks on '${this.elemName}'`);
        await this.protElement.click();
    };

    async isDisplayed() {
        return await this.protElement.isDisplayed();
    };

    async isPresent() {
        return await this.protElement.isPresent();
    };

    

}

module.exports = BaseElement;