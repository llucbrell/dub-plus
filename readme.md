# dub-plus

> Version counter for git tagging

Dub-plus help you with the count of your releases. You don't have to remember or check at git to know the next version number. You'll never have a mistaken version-tag in your repository. And also, you don't have to open your "package.json" file to update the version. All is made by dub, with one simple command. 

Only have to take care about the first git tag name release. Then you can call dub with no worries. You can use different naming convention in different projects and you don't have to remember each.


## Install

```
$ npm install -g dub-plus
```


## Usage

### Upgrade the git tag

```shell
dub +
```
update your tag ??.??.xx  to ??.??.(xx+1)



```shell
dub ++
```
update your tag ??.xx.??  to ??.(xx+1).??



```shell
dub +++
```
update your tag xx.??.??  to (xx*+1).??.??


### Downgrade the git tag

```shell
dub -
```
delete the most recent version tag.

## Package version control

If there is a package.json in the root directory update when you type some update/downgrade command - 

## Different name conventions support

* Dub is going to check your last git-tag release and copy the scheme. So if you like to name your versions vX.X.X dub write vX.X.X++ in git. If you like version-X.X.X dub write version-X.X.X, you don't have to change the way you dub things. It doesn't matter, the software take care about it.

* In the package.json file dub allways write the semServer readable way for you.  So it allways work with npm and other package managers.  

## Dependencies

Standing over shoulders of giants

[audrey-two](https://www.npmjs.com/package/audrey-two)

[json-format](https://www.npmjs.com/package/json-format)

[chalk](https://www.npmjs.com/package/chalk)

[commander](https://www.npmjs.com/package/commander)

## License

GPL-3.0 © [Lucas_C/llucbrell](https://github.com/llucbrell)