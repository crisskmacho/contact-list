// Crear una lista de contactos
// Crear una lista de contactos
let listaDeContactos = [
    { id: 1, nombres: "Juan Camilo", apellidos: "Camacho Barreto", telefono: "3156481684", ubicaciones: [{ ciudad: 'Bogota', direccion: 'carrera 8A' }]},
    { id: 2, nombres: "Maria Camila", apellidos: "Lopez Treviño", telefono: "2165814684", ubicaciones: [{ ciudad: 'Cali', direccion: 'calle 14' }]},
    { id: 3, nombres: "Samuel", apellidos: "Paez Granja", telefono: "31897981465", ubicaciones: [{ ciudad: 'Medellin', direccion: 'Bello calle 19' }]},
  ];
  
  // Función para añadir un nuevo contacto
  function agregarContacto(id, nombres, apellidos, telefono, ciudad, direccion) {
    listaDeContactos.push({ id, nombres, apellidos, telefono, ubicaciones: [{ ciudad, direccion }] });
  }

  function borrarContacto(id) {
    if (id >= 1 && id <= listaDeContactos.length) {
      listaDeContactos.splice(id - 1, 1); // Elimina un elemento en el índice id - 1
      console.log("Contacto " + id + " eliminado.");
    } else {
      console.log("El contacto con ID " + id + " no existe.");
    }
  }

  
  // Función para imprimir en consola los contactos presentes en la lista
  function imprimirContactos() {
    console.log("Lista de Contactos:");
    listaDeContactos.forEach(function(contacto) {
      console.log(contacto.id + ". "  + contacto.nombres + " " + contacto.apellidos + " " + contacto.telefono);
      contacto.ubicaciones.forEach(function (ubicacion) {
        console.log("   - Ciudad: " + ubicacion.ciudad + ", Dirección: " + ubicacion.direccion);
      });
    });
  }


imprimirContactos();

agregarContacto(4, "Ana", "Gomez", "3159876543", "Barranquilla", "Avenida 123");
imprimirContactos();

borrarContacto(1);
imprimirContactos();