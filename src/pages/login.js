import React, {useRef} from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function Login(){
    const mail = useRef('');
    const pw = useRef('');
    const vistaError = "esta va a ser una vista de error";

    const manejarDatos = new function (correo, pass){
        if (!correo || !pass){
            return vistaError;
        } else {
            let usuario = {id: 1, nom: 'dos'};
            if (usuario == null) return vistaError;
            // no sé cómo redirigirlo a la página principal, creo que tengo que armarme el routing en index
        } 
    }

    return (
            <Paper>
                <Typography color={'primary'}>¡Bienvenida a Invencible!</Typography>
                <TextField required id="correo" label="Correo" variant="outlined" color="primary" inputRef={mail}/>
                <TextField required id="pass" type="password" label="Contraseña" variant="outlined" color="primary" inputRef={pw} />
                <Button variant="contained" id="btnIngresar" onclick={manejarDatos(mail,pw)}>Ingresar</Button>
            </Paper>
        );

        /*
        para cuando los datos ingresados son incorrectos:
         <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
        
        
        */
}