// Crear una lista de contactos
// Crear una lista de contactos
let listaDeContactos = [
    { id: 1, nombres: "Juan Camilo", apellidos: "Camacho Barreto", telefono: "3156481684", ubicaciones: ['Bogota, carrera 8A']},
    { id: 2, nombres: "Maria Camila", apellidos: "Lopez Treviño", telefono: "2165814684", ubicaciones: ['cali, calle 14']},
    { id: 3, nombres: "Samuel", apellidos: "Paez Granja", telefono: "31897981465", ubicaciones: ['Medellin, Bello calle 19']},
  ];
  
  // Función para añadir un nuevo contacto
  function agregarContacto(id, nombres, apellidos, telefono, ubicaciones) {
    listaDeContactos.push({ id, nombres, apellidos, telefono, ubicaciones });
  }

  function borrarContacto(id) {
    if (id >= 1 && id <= listaDeContactos.length) {
      listaDeContactos.splice(id - 1, 1); // Elimina un elemento en el índice id - 1
      console.log("Contacto " + id + " eliminado.");
    } else {
      console.log("El contacto con ID " + id + " no existe.");
    }
  }

  function actualizarContacto(id, nuevosDatos) {
    const contacto = listaDeContactos.find((c) => c.id === id);
  
    if (contacto) {
      // Actualiza los campos especificados en nuevosDatos
      if (nuevosDatos.nombres) {
        contacto.nombres = nuevosDatos.nombres;
      }
      if (nuevosDatos.apellidos) {
        contacto.apellidos = nuevosDatos.apellidos;
      }
      if (nuevosDatos.telefono) {
        contacto.telefono = nuevosDatos.telefono;
      }
      if (nuevosDatos.ubicaciones) {
        contacto.ubicaciones = nuevosDatos.ubicaciones;
      }
  
      console.log("Contacto " + id + " actualizado.");
    } else {
      console.log("El contacto con ID " + id + " no existe.");
    }
  }
  
  // Función para imprimir en consola los contactos presentes en la lista
  function imprimirContactos() {
    console.log("Lista de Contactos:");
    listaDeContactos.forEach(function(contacto) {
      console.log(contacto.id + ". "  + contacto.nombres + " " + contacto.apellidos + " " + contacto.telefono + " " + contacto.ubicaciones);
    });
  }


imprimirContactos();

borrarContacto(1);
imprimirContactos();

actualizarContacto(2, { nombres: "Nuevo Nombre", apellidos: "Nuevos Apellidos", telefono: "nuevo número", ubicaciones: ['Bogota, carrera 8A'] });

// Imprimir la lista de contactos actualizada
imprimirContactos();