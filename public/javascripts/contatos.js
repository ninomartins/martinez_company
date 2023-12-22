

class FormSubmit {
    constructor(settings) {
        // this.db = require('../../routes/db')
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = 'https://formsubmit.co/ninomartins2013@gmail.com';
            
        }
        this.sendForm = this.sendForm.bind(this);
        console.log(this.db)

    }

    displaySuccess() {
        this.form.innerHTML = this.settings.success;
        this.form.style.fontSize = '2rem'
        this.form.style. alignItems='center'
        this.form.style. display='flex'
        this.form.style. justifycContent='center'
        this.form.style.color='black'
        this.form.style.padding='150px'
        // this.db.create({
        //     nome:dados.nome,
        //     telefone:dados.tel,
        //     email:dados.email,
        //     cidade:dados.cidade,
        //   }).then(()=>{
        //     console.log('mensagem enviada ')
        //   }).catch((erro)=>{
        //     console.log('falha no envio: '+erro)
        //   })

    }
    displayError() {
        this.form.innerHTML = this.settings.error;
        this.form.style. alignItems='center'
        this.form.style. justifycContent='center'
        this.form.style.color='black'
    }

    getFormObject() {
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value;
            
        });
        return formObject;
    }
   
   
    onSubmission(evento) {
        evento.preventDefault();
        evento.target.disabled = true;
        evento.target.innerText = "Enviando....";

    }


    async sendForm(evento) {
        try {
            this.onSubmission(evento)
            await fetch(this.url, {

                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(this.getFormObject()),
                
            });
            this.displaySuccess();
        } catch (error) {
            this.displayError();
        }

    }
    
    init() {
       
        if (this.form)
            this.formButton.addEventListener('click', this.sendForm);
        return this;
    }
}
const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'style='text-align: center;'>Mensagem enviada!</h1>",
    error: "<h1 class='error' style='text-align: center;'>Não foi possível enviar sua mensagem.</h1>",

});

formSubmit.init();




