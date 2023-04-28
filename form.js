import { LightningElement, track } from 'lwc';

export default class ContactForm extends LightningElement {
    @track contact;
    @track inputFields = {};

    handleInputChange(event) {
        const field = event.target.dataset.field;
        const value = event.target.value;
        this.inputFields[field] = value;

        this.contact = {
            Name: this.inputFields.primeironome + ' ' + this.inputFields.sobrenome,
            Email: this.inputFields.email,
            Website: this.inputFields.website,
            Empresa: this.inputFields.empresa,
            ReceitaAnual: this.inputFields.receitaanual
        };
    }
}
