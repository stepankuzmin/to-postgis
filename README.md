# to-postgis

Loads files in different spatial formats into PostGIS using ogr2ogr.

## Install

**NOTE**: `to-postgis` depends on `ogr2ogr` from GDAL package.

```shell
npm i -g to-postgis
```

## Usage

```shell
to-postgis input.geojson postgres://postgres@localhost:5432/db
```
