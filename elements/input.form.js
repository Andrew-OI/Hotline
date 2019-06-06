
let BaseElement = require("./base.element");

class InputForm extends BaseElement {
    
    async sendKeys(value) {
        console.log(`Entering data into '${this.elemName}'`);
        await this.protElement.sendKeys(value);
    }

}



module.exports = InputForm;