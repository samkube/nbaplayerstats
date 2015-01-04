# NBAplayerstats
==============

## Active Jobs

### Stat Grab

ESPN has stats from every NBA game.  This will be accessed and stored in a database.

### Nightly Leaders

The top 3 statistical leaders in the categories of points, rebounds and assists will be selected.  They will then be compiled into an email template and sent out.
## Contributing

Ensure the latest version of [Node.js](http://nodejs.org/) is installed before contributing. After cloning the repository run the `npm install` command in the local directory.

All contributors should follow the workflow stated in the [GitHub Flow](https://guides.github.com/introduction/flow/index.html) tutorial.

### Issues

Any potential code changes must have an associated issue. Issues should be broken down into the most simple description for a significant amount of work; no issue should be so trivial no work is required, but an issue should not be so complex that a contributor could not easily understand the steps towards resolution.

Each issue should be labled an enhancement or bug but not both. For the purposes of this project, an enhancement represents any net-new functionality or code. A bug is any change in existing code logic.

### Branching

Related features should be developed on a unique branch of `master`. Branch names should be short and descript.

Since each branch orginiates from `master`, existing code should be considered production ready.

### Committing

Each commit should relate to a specific scope.

All commit messages must follow the [conventional changelog](https://github.com/ajoslin/conventional-changelog/blob/master/CONVENTIONS.md) format. Close any issues in the commit body.

![Example Commit](example-commit.png)

### Pull Requests

Before submitting a pull request, add unit tests for any new or changed functionality. 

Add logging were appropriate using the convention:
- *trace*: beginning of all functions (specify if function is a callback)
- *debug*: important function parameter or local variable values
- *info*: intermediate steps within a function
- *warn*: unusual results
- *error*: hard errors (usually from callbacks)
- *fatal*: unrecoverable errors i.e. lost database connection

Use [grunt](http://gruntjs.com/) to lint and test the code. A code review should occur prior to merging commits into the `master` branch.

### Deploying

Commits merged into the `master` branch will be tested by [Travis CI](https://travis-ci.org/) and deployed immediately to [Heroku](https://www.heroku.com/).

## License

Copyright (c) 2014 David Caseria, Sam Kube

Licensed under the MIT license.
