# Learn_node.js

This repo is for i Learned the node.js important concept [events,path.http]
with these help i created the new http server.

### To run my node.js Project 

1. you need to open your **Terminal/CLI** write the command below i given here

Some basic NPM commands are:
```
npm init -y
npm install
npx eslint server/nodeserver.js
```

### Here some basic commands of the install husky 

```
# Install commitlint cli and conventional config
npm install --save-dev @commitlint/{config-conventional,cli}
# For Windows:
npm install --save-dev @commitlint/config-conventional @commitlint/cli

# Configure commitlint to use conventional config
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

### To lint commits before they are created you can use Husky's commit-msg hook:

```
# Install Husky v6
npm install husky --save-dev
# or
yarn add husky --dev

# Activate hooks
npx husky install
# or
yarn husky install
```

### Add hook --> it's very important to add in hooks

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

```
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```

## For more Details about Commitlint use this repo

The git repo i used for ref is [Ref Repo]("https://github.com/conventional-changelog/commitlint/?tab=readme-ov-file#what-is-commitlint").



    



