# Don't Commit Conflicts [dot] hks

Its all in the title

## About

`dont-commit-conflicts.hks` is a [node-hooks](https://npmjs.org/package/node-hooks) pre-commit hooks that will stop you from ever commiting another conflict. It is simple to use and easy to add to your git projects.

## Usage

**If you don't have `hooks` installed**

1. `npm install node-hooks -g`
2. `hooks init`
3. `hooks install dont-commit-conflicts.hks`

**If `hooks` is installed, but not managing you're git-hooks yet**

1. `hooks init`
2. `hooks install dont-commit-conflicts.hks`

**Else**

`hooks install esprima.hks`