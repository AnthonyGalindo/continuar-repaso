

const Heroe = {

     batman : { 
          nombre: 'Brus algo',
          poder: 'volar como murcielago',
    },

    superMan :{
        nombre: 'Cristhoper algo',               
        poder: 'volar con calzones por fuera',                   
    },
   
}


// export const buscarHeroe = ( id, callback ) => {
//         const heroe = Heroe[id];
//         if (heroe) {
//              callback( null, heroe)
//         } else {
//             callback(`No esxite el héroe con el ${id}`)
//         }
// }

//practica 2 callbacks hecho por Anthony Galindo con funcion anonima que es almacenada en una variable constante

//  export const buscarSuperHeroe = ( id, callback ) => {
//         console.log( `el heroe es con id ${id} ` );
//         callback( Heroe[id] );
        
// }


// practica 3 callbacks con funcion con conmbre

//  export function ultraHumans(  id, callback) {
   
//     if ( Heroe[id] ) {
//         callback( null, Heroe[id] );
//     } else {
//         callback(`el error eres tu jajaj id = ${id}`);
//     }
// }