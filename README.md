# hipHerdToDo
This app allows users to create a basic todo-list to keep tabs on and refer back to.

## Technologies
- BootStrap
>Used to create a modal for editing todos
- React
>Used for everything else this app has to provide for you

## Testing
- Jest / Enzyme
>Unit testing for 'addTodo' and 'toDoList'
```sh
npm run test
```

## Database
- MySQL
>If you do not have MySQL, data will not persist, but will otherwise work. All information will be lost upon refresh.

>If you do not already have MySQL installed, run the following in your command line

```sh
brew install mysql
```

To configure the database/table for MySql

```sh
mysql -u root < database.schema.sql
```

Then to access your database

```sh
mysql.server start
mysql -u root;
use hipherdToDo;
```

## Installation

### Installing Dependencies
From within the root directory:

```sh
npm install
```
### Setting up your bundle.js

```sh
npm run react-dev
```

### Run server
```sh
npm run start
```

#### Lastly, go to http://localhost:3000 to view the app and start organizing your schedule! :) 


### Disclaimer
>Cannot run on IE. Did not test on Edge. Works fine on Chrome/Safari/Firefox.
>functionally works on all iPhones/Pixel Phones/iPads/Galaxy
>>Cannot visibly see buttons(text is visible)
