import { LightningElement, track } from 'lwc';

export default class ImcCalculator extends LightningElement {
    @track name = '';
    @track weight;
    @track height;
    @track imc;

    handleNameChange(event) {
        this.name = event.target.value;
    }

    handleWeightChange(event) {
        this.weight = event.target.value;
    }

    handleHeightChange(event) {
        this.height = event.target.value;
    }

    calculateIMC() {
        if (this.weight && this.height) {
            const imc = this.weight / (this.height * this.height);
            this.imc = imc.toFixed(2);
        }
    }
}
