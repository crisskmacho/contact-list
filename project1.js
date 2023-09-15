// Crear una lista de contactos
let listaDeContactos = [
    { nombreCompleto: "Juan Pérez" },
    { nombreCompleto: "María González" },
    { nombreCompleto: "Luis Rodríguez" },
    { nombreCompleto: "Ana Martínez" },
    { nombreCompleto: "Carlos Sánchez" }
  ];
  
  // Función para añadir un nuevo contacto
  function agregarContacto(nombreCompleto) {
    listaDeContactos.push({ nombreCompleto });
  }
  
  // Función para borrar un contacto existente de la lista
  function borrarContacto(indice) {
    if (indice >= 0 && indice < listaDeContactos.length) {
      listaDeContactos.splice(indice, 1);
      console.log("Contacto " + (indice + 1)  + " eliminado: " );
    }
  }
  
  // Función para imprimir en consola los contactos presentes en la lista
  function imprimirContactos() {
    console.log("Lista de Contactos:");
    listaDeContactos.forEach(function(contacto, indice) {
      console.log(indice + 1 + ". " + contacto.nombreCompleto);
    });
  }

agregarContacto("Laura García");
imprimirContactos();

borrarContacto(2);
imprimirContactos();