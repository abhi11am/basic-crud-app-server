Server Setup
Create server folder
Go to server folder and run the following command to create package.json file
npm init -y

install nodemon to automatically restart app
npm install -g nodemon

Install following modules 
sequelize (ORM), mysql2 (required for sequelize) express (node framework), cors (to handle cors errors), dotenv (to create env files)
npm install sequelize mysql2 express cors dotenv

Install sequelize-cli
npm install -g sequelize-cli

Install path and file system package required by sequelize
npm install path fs

Create sequelize (models, config, migrations, and seeders) folders
sequelize init

Run server app
nodemon [app name]
