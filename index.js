/* eslint-disable no-console */

const ogr2ogr = require('ogr2ogr');
const ConnectionParameters = require('pg/lib/connection-parameters');

const [fileName, connectionString] = process.argv.slice(2);

if (!fileName || !connectionString) {
  console.error('Usage: to-postgis [fileName] [connectionString]');
  process.exit(-1);
}

const connectionParameters = new ConnectionParameters(connectionString);
connectionParameters.getLibpqConnectionString((error, libpqConnectionString) => {
  if (error) {
    console.error(error);
    process.exit(-1);
  }

  console.log(`Uploading ${fileName} to ${connectionString}`);

  ogr2ogr(fileName)
    .format('PostgreSQL')
    .destination(`PG:${libpqConnectionString}`)
    .project('EPSG:3857')
    .exec((error2) => {
      if (error2) {
        console.log(error2);
        process.exit(-1);
      }
      console.log('Done!');
    });
});
