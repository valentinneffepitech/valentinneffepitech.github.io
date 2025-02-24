import { ChangeEvent, FormEvent, useState } from "react";
import { Toaster, toast } from "sonner";
import { Loader } from "../components/Loader/Loader.tsx";

interface contactFormData {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [contactInfos, setContact] = useState<contactFormData>({
    name: "",
    email: "",
    message: ""
  });
  const [isSending, setSending] = useState(false);

  const sendContactRequest = async (ev: FormEvent) => {
    ev.preventDefault();
    if (
      contactInfos.name.length == 0 ||
      contactInfos.message.length == 0 ||
      contactInfos.email.length == 0
    ) {
      alert(
        "Il manque quelques informations avant de pouvoir envoyer votre requête"
      );
      return;
    }
    setSending(true);
    let result;
    try {
      result = await fetch(
        "https://formsubmit.co/ajax/neffvalentin67@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(contactInfos)
        }
      )
        .then(response => response.json())
        .then(() => {
          setContact({
            name: "",
            email: "",
            message: ""
          });
          setSending(false);
          return true;
        });
    } catch (exception) {
      console.log(exception);
      setSending(false);
      result = false;
    }
    if (result) {
      toast.success(
        "Votre message m'est bien parvenu, je vous recontacterai dès que possible !"
      );
    } else {
      toast.error(
        "Une erreur est survenue, réessayez plus tard ou contactez-moi via les autres liens disponibles plus bas"
      );
    }
  };

  const manageInput = (
    ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = ev.target;
    setContact(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact">
      <h3>laisser un message</h3>

      <form onSubmit={sendContactRequest}>
        <div className="form-group">
          <input
            type="name"
            required
            placeholder="Votre nom"
            name="name"
            id="name"
            onChange={manageInput}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            required
            placeholder="Votre mail"
            name="email"
            id="email"
            onChange={manageInput}
          />
        </div>
        <div className="form-group">
          <textarea
            rows={8}
            cols={20}
            required
            placeholder="Votre message"
            name="message"
            id="message"
            onChange={manageInput}
          />
        </div>
        {isSending ? <Loader /> : <button type="submit">Envoyer</button>}
      </form>
      <Toaster richColors expand={true} />
    </section>
  );
};
