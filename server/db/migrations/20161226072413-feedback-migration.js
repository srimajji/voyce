'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('feedback',
      {

        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.TEXT('long'),
          allowNull: false
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false
        },
        companyId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          key: 'id',
          field: 'company_id'
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
          field: 'created_at'

        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
          field: 'updated_at'
        }

      },
      {
        engine: 'InnoDB',
        charset: 'latin1'
      }
    );

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('feedback');
  }
};
