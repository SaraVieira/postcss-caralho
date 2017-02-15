# watch-run(1)

> **Note:** Check out [wait-run](https://github.com/RickWong/wait-run) or [just-wait](https://github.com/download/just-wait) for better and more recent approaches.

Re-execute a given command everytime something changes in a specific directory. Build upon [gaze](https://github.com/shama/gaze).

## Installation

    $ npm install -g watch-run

## Usage

Via `--help`:

```
Usage: watch-run <cmd>

Options:

  -h, --help               output usage information
  -p, --pattern <pattern>  glob pattern. "," separates multiple patterns.
                           More info: https://github.com/isaacs/minimatch
  -i, --initial            run <cmd> on initial startup
  -d, --delay <n>          delay execution of <cmd> for a number of milliseconds
  -s, --stop-on-error      stop watching and exit when errors occur in <cmd>

Examples:

  # watch dir and execute cmd
  $ watch-run -p 'lib/**' cat package.json

  # watch dir "lib" and "src" and execute cmd
  $ watch-run -p 'lib/**,src/**' cat package.json
```

## Example

    $ watch-run -p 'js/modules/**/*.js' browserify main.js -o public/build.js

## License

MIT
