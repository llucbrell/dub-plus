# dub-plus

> Version counter for package.json and git tags

Dub take care about your project releases count. You don't have to remember or check at git to know the next version number. You'll never have again a mistaken version tag in your repository. And also, you don't have to open your "package.json" file to update it. All this things are made by dub in a very simple way. 

You only have to take care about the first git tag name. Go to the root directory of the project and then type dub. This software mantain the different name conventions you usually use in your projects and you don't have to remember each one if you use different naming for different repos.


## What it does?

* Dub is going to check your last git-tag release and copy the scheme. So if you like to name your versions vX.X.X dub write vX.X.X++ in git. If you like version-X.X.X dub write version-X.X.X, you don't have to change the way you dub things. It doesn't matter, the software take care about it.

* In the package.json file dub allways write the semServer readable way for you. So it allways work with npm and other json based package managers.


## Install

```
$ npm install -g dub-plus
```


## Usage

## Create the first git tag

Build your first tag, this is the layout or scheme for dub

```shell
$ git tag v1.0.0
```

### Make a commit
```shell
$ git add .
$ git commit -m "My first commit"
```

### Upgrade the git tag

```shell
$ dub +
```
update your version version xx.xx.xx  to xx.xx.(xx+1) in the example from 1.0.0 to 1.0.1                            


```shell
$ dub ++
```
update your version xx.xx.xx  to xx.(xx+1).xx in the example from 1.0.0 to 1.1.0 



```shell
$ dub +++
```
update your version xx.xx.xx  to (xx+1).xx.xx in the example from 1.0.0 to 2.0.0 



### Downgrade the git tag

```shell
$ dub -
```
delete the most recent version tag.

## Then you can run

```shell
$ git push --tags
```
or 

```shell 
$ npm publish
```



## Prerelease

### Counter

```shell
$ dub + -p alpha.1.0
```
create a prerelease version named X.X.(X+1)-alpha.1.0


```shell
$ dub -p +
```
upgrade to X.X.X-alpha.1.1


```shell
$ dub -p ++
```
upgrade to X.X.X-alpha.2.1


```shell
$ dub -p +++
```
upgrade to X.X.X-beta.2.1


```shell
$ dub + -r
```
create a tag release with the same version X.X.X of the last prerelease

### Support

At this moment the prerelease counter only work with this kind of prereleases tag.

> alpha.x.x -->beta.x.x -->rc.x.x -- Uppercase or lowercase.

> a.x.x -->b.x.x -->rc.x.x -- Uppercase or lowercase.

> x.x.x -->like the version counter -- only numbers.

It'll be updated soon.

## Package.json version control

If there is a package.json in the root directory it's updated when you type some upgrade/downgrade command 


## Aditional options and commands

```shell
$ dub + -v
```
Verbose mode, let you see the git tags you have.

```shell
$ dub .
```
Show the tags of your repository.

```shell
$ dub delete <name of tag>
```

Deletes specified tag.

## Version specifications

* v1.0.0 - first program release, version counter
* v1.2.0 - prerelease counter support

## Dependencies

Standing over shoulders of giants

[audrey-two](https://www.npmjs.com/package/audrey-two)

[json-format](https://www.npmjs.com/package/json-format)

[chalk](https://www.npmjs.com/package/chalk)

[commander](https://www.npmjs.com/package/commander)

## License

GPL-3.0 © [Lucas_C/llucbrell](https://github.com/llucbrell)