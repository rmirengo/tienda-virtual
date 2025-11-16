import React from "react";
import { useForm, ValidationError } from '@formspree/react';

function ContactForm(){
    const [state, handleSubmit] = useForm("xeovapgl");
    if (state.succeeded) {
        return <p className="alert alert-success" role="alert">¡Gracias por contactarnos!</p>
    }
    return (
        <div className="container p-3">
            <h2 className="mb-3 text-center text-primary">Contáctanos:</h2>
            <form 
                onSubmit={handleSubmit} >
                {/*className="container p-4 border rounded shadow"*/}
            
                {/*Campo: Nombre y Apellido*/}
                <div className="mb-3">
                    <label htmlFor="full-name" className="form-label">
                        Nombre y Apellido:
                    </label>
                    <input 
                        id="full-name" 
                        type="name"
                        name="Nombre y Apellido"
                        className="form-control"
                        autoComplete="name"
                    />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />            
                </div>
                    {/*Campo: E-mail*/}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Correo Electrónico:
                    </label>
                    <input 
                        id="email" 
                        type="email"
                        name="Correo Electrónico"
                        className="form-control"
                        autoComplete="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                {/*Campo: Telefono*/}
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Teléfono:
                    </label>
                    <input 
                        id="phone" 
                        type="tel"
                        name="Teléfono"
                        className="form-control"
                        autoComplete="phone"
                    />
                    <ValidationError
                        prefix="Phone"
                        field="phone"
                        errors={state.errors}
                    />
                </div>
                {/*Campo: Mensaje*/}
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Mensaje:
                    </label>
                    <textarea 
                        id="Message"
                        field="message"
                        name="Mensaje"
                        className="form-control"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>
                {/* Boton de Enviar Mensaje */}
                <button 
                    type="submit" 
                    disabled={state.submitting}
                    className="btn btn-primary w-100"
                >
                    {state.submitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
            </form>
       </div>
    );
    

}

export default ContactForm;