const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  gcProjectId: process.env.GC_PROJECT_ID,
  gcBucketName: process.env.GC_BUCKET_NAME,
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbName: process.env.DB_NAME,
  dbPassword: process.env.DB_PASSWORD,
};
