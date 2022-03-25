# gzip-server

Simple static asset server with gzip compression, so you can figure out what slows down production page load time.

(For example, JSON will be very large without compression, but shrinking it is not worth the trouble since it compresses so well.)

#### npx

```sh
npx gzip-server
```

#### global install

```sh
npm i -g gzip-server
gzip-server

# options:
DIR=./wherever/public PORT=3000 LEVEL=9 gzip-server
```

#### dev dependency

```sh
npm i --save-dev gzip-server
```

package.json:

```json
{
    "scripts": {
        "serve": "gzip-server"
    }
}
```
