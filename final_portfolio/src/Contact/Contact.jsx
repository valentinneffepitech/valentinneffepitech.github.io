import React, { useState } from 'react'
import { Toaster, toast } from 'sonner';
import { Loader } from './Loader/Loader';
import { CloudUpload, Github, Linkedin } from 'lucide-react';

export const Contact = () => {

    const [contactInfos, setContact] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSending, setSending] = useState(false);

    const sendContactRequest = async (ev) => {
        ev.preventDefault();
        console.log(contactInfos)
        if (contactInfos.name.length == 0 || contactInfos.message.length == 0 || contactInfos.email == 0) {
            alert('Il manque quelques informations avant de pouvoir envoyer votre requête')
            return;
        }
        setSending(true);
        let result;
        try {
            result = await fetch("https://formsubmit.co/ajax/neffvalentin67@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(contactInfos)
            })
                .then(response => response.json())
                .then(data => {
                    let name = document.querySelector('#name'),
                        email = document.querySelector("#email"),
                        message = document.querySelector("#message")
                    name.value = "";
                    email.value = "";
                    message.value = "";
                    setSending(false)
                    return true;
                }
                )
        } catch (exception) {
            setSending(false)
            result = false
        }
        if (result) {
            toast.success("Votre message m'est bien parvenu, je vous recontacterai dès que possible!")
        } else {
            toast.error("Votre demande n'a pas pu aboutir, réessayez ultérieurement ")
        }
    }

    const manageInput = (ev) => {
        setContact(prev => ({
            ...prev,
            [ev.target.name]: ev.target.value
        }))
    }

    return (
        <section id="contact">
            <h2>Contactez-moi</h2>
            <form onSubmit={(ev) => sendContactRequest(ev)}>
                <h3>
                    Laisser un message
                </h3>
                <div id="contact_finders">
                    <div className='form-group'>
                        <input type="name" required placeholder="Votre nom" name="name" id="name" onChange={(ev) => manageInput(ev)} />
                    </div>
                    <div className="form-group">
                        <input type="email" required placeholder="Votre Email" name="email" id="email" onChange={(ev) => manageInput(ev)} />
                    </div>
                </div>
                <div className='form-group'>
                    <textarea rows={8} cols={20} required placeholder="Votre message" name="message" id="message" onChange={(ev) => manageInput(ev)}></textarea>
                </div>
                {
                    isSending ?
                        <Loader />
                        :
                        <button type="submit">Envoyer</button>
                }
            </form>
            <div id="links">
                <h3>
                    Envie d&apos;en savoir plus ?
                </h3>
                <ul id="socials">
                    <li id="github" title='En maintenance'>
                        <a href="https://github.com/ValentinNeff/Portfolio" className='disabled' target='_blank'>
                            <Github />
                            <p>Github</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/valentin-neff-10878a1a2/">
                            <Linkedin />
                            <p>Linkedin</p>
                        </a>
                    </li>
                    <li>
                        <a href="/Valentin_Neff.pdf">
                            <CloudUpload />
                            <p>Mon CV</p>
                        </a>
                    </li>
                </ul>
            </div>
            <Toaster richColors expand={true} />
        </section>
    )
}
