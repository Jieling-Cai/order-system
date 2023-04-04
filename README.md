# mealpal-server
### 1.database config
- find the file : mealpal-server/src/app.module.ts
- and then change database config 
```
 TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: '',
      password: '',
      database: '',
      entities: [Guestinfo,Restaurant],
      synchronize:true,
    }),
```
- you should know your mysql database "host", "port", "username", "password", and "database" to change it.
#### 2.dependencies
- cd to mealpal-server
- yarn or npm install
#### 3. start server 
- cd to mealpal-server
- yarn start or npm run start 
- then the server will run on http://localhost:3000
#### 4. write some restaurant records
becasue there is not any restaurant records initially in the newly created table `restaurant`, please find the table `restaurant` in mysql and write some data in it. In this case, before users enter their info, they should select the restaurants they are associated with first. This functionality is implemented to satisfy the requirement - "restaurant partners can record the full name and phone number for every MealPal guest that comes to their restaurant". 
```
//eg
    {
        "id": 1,
        "name": "kfc",
        "address": "1",
        "phone": "1",
        "menu_id": "2",
        "create_time": "2023-04-03"
    }
```
# mealpal-front 
#### 1.dependencies
- cd to mealpal-front
- yarn or npm install
#### 2. start front
- cd to mealpal-front
- yarn dev or npm run dev
- then the server will run on http://localhost:3001
