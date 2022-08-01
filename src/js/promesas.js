
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


const funcionPromesa =  ( id ) => {
    const heroe = Heroe[id];

    return new Promise( ( resolve, reject ) => {
        if (heroe){
            resolve(heroe);
        }else{ 
           reject( `error el heroe con el id = ${id} no existe `);
        }
    });
}

export {
    funcionPromesa
}