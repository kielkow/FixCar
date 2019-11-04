module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'fixcar',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
