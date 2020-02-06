import React,{Component} from 'react';
//import React. from 'react';


//class MiComponente extends React.Component{
class MiComponente extends Component{
    
    render(){


        let receta={
            nombre: 'Pizza',
            ingredientes: ["Tomate","Queso","Jamon Cocido"],
            calorias: 400
        };

        return(
            //etiqueta vacia en la que puedo meter mi codigo de html o JSX
            <React.Fragment>
                <h1> {receta.nombre} </h1>
                <h1> {'Calorias: '+receta.calorias}</h1>
                <ol>

                    {
                        receta.ingredientes.map((ingrediente,i) => {
                        console.log(ingrediente);
                        return (
                            <li key={i}>
                                {ingrediente}
                            </li>

                        );
                        })

                    }

                </ol>
               
                <h1> Hola, soy el componenete llamado MiComponente </h1>
                <h2> Hello there, soy un H2</h2>
                <hr></hr>
            </React.Fragment>
            
        );
    }

}

export default MiComponente;