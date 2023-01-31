# Exercise Axios Http clinet dan jsonplaceholder

### Install Package
Instalasi semua package yang diperlukan dalam menjalankan miniapp
```bash
npm install
```


### Run
#### Note : server running pada port 3000 
```bash
nodemon index
```
---------


#### Endpoint
```bash
GET localhost:3000/users
POST localhost:3000/create
PATCH localhost:3000/updateData/1
PUT localhost:3000/userUpdate/1
DELETE localhost:3000/delete/1
```

#### Note :
Data yang di POST, PATCH, dan PUT sudah di inisiasi pada Controller 
Sehingga testing pada Request.res hanya menyertakan header saja
```bash
###
GET http://localhost:3000/users

###
POST  http://localhost:3000/create
Content-Type: application/json

###
PUT http://localhost:3000/updateUser/1
Content-Type: application/json

###
PATCH  http://localhost:3000/updateData/1
Content-Type: application/json

###
DELETE  http://localhost:3000/delete/1
```
---------



