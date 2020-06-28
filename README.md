#### masraff assignment - backend  
  
---  
  
##### Framework:  
 * NestJS (NodeJS Framework)
 * TypeORM
 * Swagger
 * JWT authentication
 * PostgreSQL
   
##### Structure:  
```
├── app.module.ts
├── boilerplate.polyfill.ts
├── common
├── decorators
├── exceptions
├── filters
├── guards
├── interceptors
├── middlewares
├── migrations
├── modules
│   ├── auth
│   ├── currency
│   ├── expense
│   ├── public
│   ├── user
│   └── vat-rate
├── providers
├── shared
├── snake-naming.strategy.ts
└── viveo-swagger.ts
```
  
##### Installation:  
```
 git clone https://github.com/avnigenc/masraff-backend
 cd masraff-backend
 yarn

 // masraff adında bir db olması gerekiyor
 psql sheel'inde -> create database "masraff";

 yarn migration:generate init
 yarn start:dev

 Currency ve VatRate datasını oluşturmak için:
 GET http://localhost:3000/seedVatRate
 GET http://localhost:3000/seedCurrency
 Bu data oluşmadan Expense eklenemez.
    
 API: http://localhost:3000
 Swagger: http://localhost:3000/documentation
```

  
##### Environment:  
```
[System Information]
OS Version     : Linux 5.3
NodeJS Version : v14.4.0
YARN Version    : 1.22.4 

[Nest CLI]
Nest CLI Version : 6.14.2 

[Nest Platform Information]
platform-express version : 7.0.8
microservices version    : 7.0.8
passport version         : 7.0.0
swagger version          : 4.5.7
typeorm version          : 7.0.0
common version           : 7.0.8
core version             : 7.0.8
jwt version              : 7.0.0
 
```
 
 - DB Diagram
 
 ![alt text](https://raw.githubusercontent.com/avnigenc/masraff-backend/354c1c06c24603a67d13effabbebe84705ebf6b5/assets/db-diagram.png?token=AFNAY26BELFGCZNQ3KTAYLS7AFGT6 "DB Diagram")
 
- Video eklendi. | https://youtu.be/owdCrKq3FNI

Proje kurulumunda sorun yaşanırsa, kendi bilgisayarımda sunum yapabilirim.
