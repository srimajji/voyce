const app = require('../../../server/api');
const env = process.env.NODE_ENV || 'development';

const dbConfig = app.get('datasource');
module.exports = {
	[env]: {
		host: dbConfig.host,
		username: dbConfig.username,
		password: dbConfig.password,
		database: dbConfig.database,
		migrationStorageTableName: dbConfig.migrationStorageTableName,
		seederStorageTableName: dbConfig.seederStorageTableName,
		dialect: dbConfig.dialect
	}
};
