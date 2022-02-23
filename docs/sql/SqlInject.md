### mybatis的防止sql注入机制

mybatis的 `#{}` 标签可以有效防止sql注入，传入参数后，打印出执行的SQL语句，会看到SQL是这样的：

```sql
select id, username, password, role from user where username=? and password=?
```

优点

1. 这是因为MyBatis启用了预编译功能，在SQL执行前，会先将上面的SQL发送给数据库进行编译；执行时，直接使用编译好的SQL，替换占位符“?”就可以了。因为SQL注入只能对编译过程起作用，所以这样的方式就很好地避免了SQL注入的问题。
2. 在框架底层，是JDBC中的PreparedStatement类在起作用，PreparedStatement是我们很熟悉的Statement的子类，它的对象包含了编译好的SQL语句。这种“准备好”的方式不仅能提高安全性，而且在多次执行同一个SQL时，能够提高效率。原因是SQL已编译好，再次执行时无需再编译。

### `${}` 的隐患

在MyBatis中，“${xxx}”这样格式的参数会直接参与SQL编译，从而不能避免注入攻击。所以，这样的参数需要我们在代码中手工进行处理来防止注入。

### 测试方式

`#{}` 的方式可以有效的规避sql注入的问题，所以寻找项目中可能出现sql注入的地方，全局搜索 `${` 即可进行初步筛查。

找到这些sql对应的功能项，在可输入项内（例如姓名搜索框）输入永真条件，例如：


```sql
-- 方式1
' OR '1' = '1
-- 方式2
' OR 'ab' = 'a''b
```

后台会拼接为类似：

```sql
WHERE username = '' OR 1 = 1 OR '1' = '1' AND password = ''
```

只要有返回结果，则可判定为sql注入。

或者也可以输入一个单引号：

```sql
'
```

后台会拼接为类似：

```sql
username like '%'%'
```

如果台会产生报错信息，则可判定为sql注入。

### 解决办法

能用 `#{}` 的地方就不要用 `${}` ，通常大家也是这么做的。

我在项目中找到的有sql注入的地方有：

#### 1、模糊查询

因为模糊查询时需要输入百分号，那左右又需要加单引号，变成：

```sql
'%#{userName}%'
```

单引号中间的所有部分会当作字符串处理，所以有人会将 `#{}` 替换为 `${}` 。但这样会造成sql注入风险。

解决方案：

1. 将service层将拼接过百分号的字符串当作参数直接传参给maper，而sql继续试用 `#{}` 不加引号和百分号。

2. 如果用的mysql数据库，可以考虑使用函数进行拼接，例如：

   ```sql
   <if test="userName != null and userName != ''">
       and e.USER_NAME like concat('%', #{userName}, '%')
   </if>
   ```

#### 2、IN 语句

IN 关键字后试用 `${}` 传入手动拼接的字符串，类似 `('a','b','c')` 这样，而拼接数据的来源是前端传来的列表，所以可以进行sql注入。

解决方法，是mybatis的for循环，举例：

反例：

```sql
empl_id IN (${emplIds})
```

正例：

```sql
empl_id IN
<foreach collection="emplIds" item="emplId" index="index" open="(" close=")" separator=",">
	#{emplId}
</foreach>
```

这样写会进行预编译，编译成以下形式：

```
empl_id IN (?,?,?)
```

这样写给mapper进行的传参需要是数组或列表，而不是字符串。





