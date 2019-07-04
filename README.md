# _Tap Room_

#### __

#### By _**Mathew Akre**_

## Description

_This program is in the eyes of an employee. The employee will be able to hire a hair stylist. They will also be able to give the hair stylists clients. The information for the hair stylists and the clients will be stored and retrieved from a SQL database._

## Recreate SQL Database
```sql
CREATE DATABASE mathew_akre;
USE mathew_akre;
CREATE TABLE stylist (id serial PRIMARY KEY, name VARCHAR(255));
CREATE TABLE clients (id serial PRIMARY KEY, name VARCHAR(255));
CREATE TABLE specialties (id serial PRIMARY KEY, specialty_name VARCHAR(255));
CREATE TABLE stylists_clients (id serial PRIMARY KEY, stylist_id INT(11), client_id INT(11));
```

## Specs



## Setup/Installation Requirements



## Support and contact details

_mwakre29@gmail.com_

## Technologies Used



### License

*This project is under the MIT License*

Copyright (c) 2019 **_Mathew Akre_**