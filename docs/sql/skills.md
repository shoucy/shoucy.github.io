## 用sql生成数据库文档

如果数据库表字段有书写详细的备注，利用以下sql语句可以查询出相应的数据库文档：

```sql
SELECT COLUMN_NAME                     AS `列名`,
       COLUMN_TYPE                     AS `数据类型`,
       COLUMN_KEY                      AS `键`,
       IF(IS_NULLABLE = 'NO', '是', '') AS `非空`,
       COLUMN_COMMENT                  AS `注释说明`
FROM information_schema.`COLUMNS`
WHERE TABLE_SCHEMA = ? # 数据库名
  AND TABLE_NAME = ?; # 表名
```

JetBrains家的DataGrip工具可将输出结果复制为MarkDown表格。

