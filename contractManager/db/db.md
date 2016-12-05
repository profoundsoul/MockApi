# mongodb 

1. 超级管理员登录 

```shell
use admin
db.auth("root","12345678") #认证，返回1表示成功

#或
mongo -u root -p 12345678 --authenticationDatabase admin
```

2. 创建数据库 apiContract数据库

```shell
use apiContract
db.createUser({
    {
       user: "apiadmin",
       pwd: "password",
       roles: [
          { role: "dbAdmin", db: "apiadmin" }
       ]
    }
});
```

3. 登录apiContract数据库，创建第一张表

```shell
mongo
use apiContract
db.auth('apiadmin', 'password');  #如果返回1表示认证成功

db.firsttable.insert({name:'第一张表', code: 'table'});
```


4. 查询数据
```shell
db.firsttable.find().pretty();
```
