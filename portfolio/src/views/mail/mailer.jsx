import { useEffect, useState } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Mailer() {
    const [hasSend, setHasSend] = useState(false);
    const [isSending, setSending] = useState(false);
    const [contact, setContact] = useState(null);

    useEffect(() => console.log(isSending), [isSending]);

    const handleChangeForm = (e) => {
        setContact(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    if (!hasSend) {
        return (
            <div id="mailBox" className={isSending ? "modal shown" : "modal"}>
                <button id="mailicon" onClick={() => setSending(prev => !prev)}>
                    <FontAwesomeIcon icon={faEnvelope} size="2x" id="enveloppe" />
                </button>
                <div id="mailer_body">
                    <form
                        id="form_contact"
                        onSubmit={(e) => {
                            e.preventDefault();
                            let children = Array.from(e.target.children);
                            axios.defaults.headers.post['Content-Type'] = 'application/json';
                            axios.post('https://formsubmit.co/ajax/neffvalentin67@gmail.com', {
                                name: contact.name,
                                email: contact.mail,
                                message: contact.message
                            })
                                .then(() => {
                                    setSending(false);
                                    alert('Votre message a bien été transmis !')
                                    children.forEach(child => {
                                        if (child.value) {
                                            child.value = "";
                                        }
                                    });
                                    setHasSend(true);
                                })
                                .catch(() => alert('Une erreur est survenue veuillez réessayer ultérieurement!'));
                        }}>
                        <label htmlFor="name">Obtenir plus d&apos;indices (Me contacter) :</label>
                        <input required type='text' id="name" name="name" placeholder="Votre Nom" onChange={handleChangeForm} />
                        <input required type='email' id="mail" name="mail" placeholder="Votre E-mail" onChange={handleChangeForm} />
                        <textarea required id="message" name="message" placeholder="Votre Message" onChange={handleChangeForm}></textarea>
                        <button>Envoyer</button>
                    </form>
                </div>
            </div>
        )
    }
}
