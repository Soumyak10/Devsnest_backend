**INSTSLLING REDIS ON WINDOWS 10**

Turn on windows subsystem for linux

Install ubuntu

Add username and password then make a repository for redis

use follwing commands:-

- $ sudo apt-add-repository ppa:redislabs/redis
- $ sudo apt-get update
- $ sudo apt-get upgrade
- $ sudo apt-get install redis-server
- $ sudo redis server (to start sever)

open another ubuntu window and type redis-cli (ready to use)

#### Once redis is install we can start stop or restart server

- $ sudo service redis-server start
- $ sudo service redis-server stop
- $ sudo service redis-server restart

### COMMANDS IN REDIS

- SET key value (sets value to given key)
- GET key (shows value of given key)
- ttl key (shows lifetime of a key)
- KEYS \* (shows all keys)
- DEL key (delete a particular key)
- FLUSHALL (deletes all keys at a time)
- EXISTS key (return 1 if key exsits)
- expire key time (use to provide expiry time to key)
- setex key time value (sets expiry time while initalling key )

#### For Arrays

- LPUSH array value (pushes value at 1st index)
- RPUSH array value (pushes value at last index)
- LRANGE array start stop (to show all elements of array)
- LPOP array (pops from 1st index)
- RPOP array (pops from last index)

#### For Sets

- SADD myset value (adds value to set)
- SMEMBERS myset (shows all members of set)
- SREM myset value (used to remove the specified member from the set stored at the key)

#### For Object/Hash

- HSET key field value (set field in the hash stored at the key to value)
- HGET key field (Gets the value of a hash field stored at the specified key.)
- HGETALL key (Gets all the fields and values stored in a hash at the specified key)
- HDEL key field (Deletes one or more hash fields)
- HEXISTS key field (Determines whether a hash field exists or not)

---

**POSTGRES**

Install from offical website and then open SQL Shell (psql)

```
postgres=# CREATE DATABASE test;
postgres=# GRANT ALL PRIVILEGES ON DATABASE test TO username;
postgres=# GRANT SELECT PRIVILEGES ON DATABASE test TO username;
postgres=# GRANT INSERT PRIVILEGES ON DATABASE test TO username;
postgres=# GRANT DELETE PRIVILEGES ON DATABASE test TO username;
postgres=# GRANT UPDATE PRIVILEGES ON DATABASE test TO username;
postgres=# \c test (connect to database)

```

#### After connecting to database

```

test=# CREATE TABLE tablename(
test(# ColumnName  DATATYPE NOT NULL,
test(# ColumnName  DATATYPE ,
test(# );
test=# \d (to display list of tables )
test=# \d tablename (to display table properties)
test-# DROP TABLE tablename; (delete table)

postgres-# \l (all existing database can be seen)
postgres-# DROP DATABASE test; (delete database)
(first connect to different database then drop required database)
\q (to exit postgres)

```

#### Inserting into tables (Insert query)

```
INSERT INTO TABLE_NAME (column1, column2, column3,...columnN) VALUES (value1, value2, value3,...valueN);
```

#### Select query

For selecting all columns

```
SELECT * FROM TABLE_NAME;
```

For selecting particular columns

```
SELECT column1, column2, columnN FROM table_name;
```

For getting number of rows

```
SELECT COUNT(*) FROM Table_name;
```

```
ARITHMETIC , COMPARISION , LOGICAL , BITWISE OPERATORS CAN BE USED

Use to show current time
SELECT CURRENT_TIMESTAMP;
```

For boolean expressions

```
SELECT * FROM table_name WHERE SINGLE VALUE MATCHTING EXPRESSION;

Ex:- test=# SELECT * FROM COMPANY WHERE SALARY = 10000;
```

For numeric expression

```
SELECT numerical_expression as  OPERATION_NAME [FROM table_name WHERE CONDITION]

Ex:- test=# SELECT (15 + 6) AS ADDITION ;
```

Where cLause & And clause

```
SELECT column1, column2, columnN FROM table_name WHERE [search_condition]

Ex:- test=# SELECT * FROM COMPANY WHERE AGE >= 25 AND SALARY >= 65000; (produse result where both condition satisfy)
```

Where cLause & Or clause

```
SELECT column1, column2, columnN FROM table_name WHERE [search_condition]

Ex:- test=# SELECT * FROM COMPANY WHERE AGE >= 25 OR SALARY >= 65000; (produse result where any one condition satisfy)
```

Like clause

```
Select * FROM table_name LIKE 'a%';  (tooks all tha query who have 'a' as first alphabet)
Select * FROM table_name LIKE '%a';  (tooks all tha query who have 'a' as last alphabet)
Select * FROM table_name LIKE 'a_b%';  (tooks all tha query who have 'a' as first 'b' as third alphabet a and b have single alphabet b/w them and after b any letters)
```

Update Query

```
UPDATE table_name SET column1 = value1, column2 = value2...., columnN = valueN WHERE [condition];

Ex:- test=# UPDATE COMPANY SET SALARY = 15000 WHERE ID = 3;

For updating all queries:-

UPDATE table_name SET column1= values , column2='value' ;
```

Delete Query

```
DELETE FROM table_name WHERE [condition];

Ex:- test=# DELETE FROM COMPANY WHERE ID = 2;

For deleting all records of table

DELETE FROM table_name;
```

### Schema

- It is nothing but as similar to folders which contains other file (ie table here) and databease can be assumed as drive which contains scheme
- It is to be noted that any same file name can be given to the two diffrent files in stored database and scheme , for example company file can be exsist on both places inside schema and test database.
- All the qureis goes same for schema we have to use "schemaname.table" instead of only table name, other things goes same.
