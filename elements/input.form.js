
let BaseElement = require("./base.element");

class InputForm extends BaseElement {
    constructor() {
        super();
    }
    async sendKeys() {
        console.log(`Entering data into '${this.elemName}'`);
        await this.protElement.sendKeys();
    }

}



module.exports = InputForm;