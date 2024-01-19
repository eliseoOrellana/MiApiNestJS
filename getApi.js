function obtenerDatosDeUsuario(userId) {
   const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;

   return new Promise((resolve, reject) => {
      fetch(apiUrl)
         .then(response => {
            if (!response.ok) {
               throw new Error(`Error al obtener datos de usuario. Codigo: ${response.status}`);
            }
            return response.json();
         })
         .then(data => {
            resolve(data);
         })
         .catch(error => {
            reject(`Error en la solicitud ${error.message}`);
         });
   });
}

const userId = 1;
let datosDeUsuario = {};


obtenerDatosDeUsuario(userId)
   .then(usuario => {
      datosDeUsuario = { ...usuario }
   })
   .then(() => {
      console.log(datosDeUsuario);
   })
   .catch(error => {
      console.log(error);
   });


