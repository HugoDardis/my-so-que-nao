'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert(
        'usuarios', [
          {
            id: 1,
            nome: 'Moraes',
            email:'moraes@email.com',
            senha: bcrypt.hashSync('123456', 10),
            createdAt: new Date().toISOString().substring(0,19),
            updatedAt: new Date().toISOString().substring(0,19)
          },
          {
            id: 2,
            nome: 'mariana',
            email:'mariana@email.com',
            senha: bcrypt.hashSync('123456', 10),
            createdAt: new Date().toISOString().substring(0,19),
            updatedAt: new Date().toISOString().substring(0,19)
          }
        ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('usuarios', null, {});
  }
};
