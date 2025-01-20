/* eslint-disable camelcase */

// export function up(pgm) {
//   pgm.createTable('notes', {
//     id: {
//       type: 'VARCHAR(50)',
//       primaryKey: true,
//     },
//     title: {
//       type: 'TEXT',
//       notNull: true,
//     },
//     body: {
//       type: 'TEXT',
//       notNull: true,
//     },
//     tags: {
//       type: 'TEXT[]',
//       notNull: true,
//     },
//     created_at: {
//       type: 'TEXT',
//       notNull: true,
//     },
//     updated_at: {
//       type: 'TEXT',
//       notNull: true,
//     },
//   });
// }

// export function down(pgm) {
//   pgm.dropTable('notes');
// }
module.exports = {
  up: (pgm) => {
    pgm.createTable('notes', {
      id: {
        type: 'VARCHAR(50)',
        primaryKey: true,
      },
      title: {
        type: 'TEXT',
        notNull: true,
      },
      body: {
        type: 'TEXT',
        notNull: true,
      },
      tags: {
        type: 'TEXT[]',
        notNull: true,
      },
      created_at: {
        type: 'TEXT',
        notNull: true,
      },
      updated_at: {
        type: 'TEXT',
        notNull: true,
      },
    });
  },
  down: (pgm) => {
    pgm.dropTable('notes');
  },
};