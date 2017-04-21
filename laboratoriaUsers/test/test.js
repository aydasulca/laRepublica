var assert = require('assert');
var app = require('../app.js');

describe("Modulo de Usuarios",function() {

  var userModule;
  beforeEach(function() {
      userModule = new app.UserModule();
  });

  it("addUsers permite agregar usuarios al conjunto users",function() {
    var countUsers = userModule.users.length;
    userModule.addUsers("Gian","Corzo","Teacher","9 Abril");
    assert.equal(countUsers + 1,userModule.users.length);
  });

  it("Dada una lista de usuarios debe poder imprimirse",function() {
    //data de prueba
    userModule.users = [];
    userModule.addUsers("Gian","Corzo","Teacher","9 Abril");
    // Como deberia verse
    var expected = "<div>nombre: Gian<br>Apellido: Corzo<br>Rol: Teacher<br>Cumpleaños: 9 Abril</div>";
    assert.equal(expected,userModule.print());
  });
});
