function UserModule() {
  this.users = [];
  this.addUsers = function(nombre,apellido,rol,cumpleanos) {
    var user = {
      nombre: nombre,
      apellido: apellido,
      rol: rol,
      cumpleanos: cumpleanos
    }
    this.users.push(user);
  }

  this.print = function() {
    var s = "";
    this.users.forEach(function(e) {
      s += "<div>" +
      "nombre: " + e.nombre + "<br>" +
      "Apellido: " + e.apellido + "<br>" +
      "Rol: " + e.rol + "<br>" +
      "Cumpleaños: " + e.cumpleanos +
      "</div>"
    });
    return s;
  }
}



if (exports != undefined) {
  exports.UserModule =  UserModule;
}
