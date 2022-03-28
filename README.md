## Server Setup

Run the following command to create package.json file

```bash 
npm init -y
```

install nodemon to automatically restart app

```bash
npm install -g nodemon
```

Install following modules 
sequelize (ORM), mysql2 (required for sequelize) express (node framework), cors (to handle cors errors), dotenv (to create env files)

```bash
npm install sequelize mysql2 express cors dotenv
```

Install sequelize-cli

```bash
npm install -g sequelize-cli
```

Install path and file system package required by sequelize

```bash
npm install path fs
```

Create sequelize (models, config, migrations, and seeders) folders

```bash
sequelize init
```

Run server app

```bash
nodemon [app name]
```
