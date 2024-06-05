import { useEffect,useState } from "react";
import * as MailComposer from "expo-mail-composer";

const SendMail = () =>{
    const [isAvailable, setIsAvailable ] = useState(false);
    
    useEffect (() => {
        async function checkAvailability(){
            const isMailAvailable = await MailComposer.isAvailableAsync();
            setIsAvailable(isMailAvailable);

        }
        checkAvailability();
    }, []);

    const Send_the_Mail = () => {
        MailComposer.composeAsync({
            
            subject: "Verificacion de correo",
            body: "Por favor verifique su correo para poder acceder a la aplicacion",
            recipients: ["tmp_jgonzalez@accitesz.com"]
            
        });
    }
        

}