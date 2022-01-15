# POI和easyExcle

## 应用场景

- 数据导出工作
- 大大减少网站数据录入量（导入）

## 简介

### POI

> Apache POI是Apache软件基金会的开放源码函式库，POI提供API给Java程序对Microsoft Office格式档案读和写的功能。
>
> HSSF － 提供读写Microsoft Excel格式档案的功能。
> XSSF － 提供读写Microsoft Excel OOXML格式档案的功能。
> HWPF － 提供读写Microsoft Word格式档案的功能。
> HSLF － 提供读写Microsoft PowerPoint格式档案的功能。
> HDGF － 提供读写Microsoft Visio格式档案的功能。



### 导入

```xml
<dependency>
    <groupId>org.apache.poi</groupId>
    <artifactId>poi</artifactId>
    <version>5.0.0</version>
</dependency>
<dependency>
    <groupId>org.apache.poi</groupId>
    <artifactId>poi-ooxml</artifactId>
    <version>5.0.0</version>
</dependency>
```



## excel相关知识

**关于03版和07版excel区别**

1. 03版，以.xls结尾，07版以.xlsx。
2. 03版最多可以存储65536条数据，07版没有行数限制。

**excel中所包含的对象**

工作簿、工作表、行、列



## POI操作

### 写操作

#### 03版

```java
@Test
public void testWrite03() throws IOException {
    // 1.创建一个工作簿
    Workbook workbook = new HSSFWorkbook();
    // 2.创建一个工作表(参数sheetname可以给表起名字♥)
    Sheet sheet = workbook.createSheet("好名字😀");
    // 3.创建一个行(参数rownum:这是第几行)
    Row row1 = sheet.createRow(0);
    // 4.创建一个单元格(参数column：第几列的单元格）
    Cell cell1 = row1.createCell(0);
    cell1.setCellValue("一只小可爱😊");
    Cell cell2 = row1.createCell(1);
    cell2.setCellValue("一只暴龙兽😰");
    // ...
    // 第二行...以此类推
    // ...

    //生成一张表（IO流） 03版要使用xls结尾
    String PATH = "D:\\IdeaProjects\\POI\\src\\main\\resources\\";
    FileOutputStream fileOutputStream = new FileOutputStream(PATH + "测试表03.xls");
    workbook.write(fileOutputStream);
    //关闭流
    fileOutputStream.close();
    System.out.println(PATH + "测试表03.xls"+"生成完毕");
}
```

#### 07版

```java
@Test
public void testWrite07() throws IOException {
    // 1.创建一个工作簿 07 (注意接口一样对象不一样)
    Workbook workbook = new XSSFWorkbook();
    // 2.创建一个工作表(参数sheetname可以给表起名字♥)
    Sheet sheet = workbook.createSheet("好名字😀");
    // 3.创建一个行(参数rownum:这是第几行)
    Row row1 = sheet.createRow(0);
    // 4.创建一个单元格(参数column：第几列的单元格）
    Cell cell1 = row1.createCell(0);
    cell1.setCellValue("一只小可爱😊");
    Cell cell2 = row1.createCell(1);
    cell2.setCellValue("一只暴龙兽😰");
    // ...
    // 第二行...以此类推
    // ...

    //生成一张表（IO流） 07版要使用xlsx结尾
    String PATH = "D:\\IdeaProjects\\POI\\src\\main\\resources\\";
    FileOutputStream fileOutputStream = new FileOutputStream(PATH + "测试表07.xlsx");
    workbook.write(fileOutputStream);
    //关闭流
    fileOutputStream.close();
    // 如果是使用SXSSF，需要清理临时文件：((SXSSWorkbook)workbook).dispose();
    System.out.println(PATH + "测试表07.xlsx"+"生成完毕");
}
```

#### 操作对象区别

- HSSF：只能处理65536行。过程使用缓存，一次性写入，速度快！
- XSSF：速度慢，耗内存，有内存溢出风险，但可以写较多数据。
- SXSSF：可以写非常大数据量，速度快，占用内存小。

注意：

SXSSF可以大幅加快文件写入速度，但是会产生临时文件，所以需要代码清除：

```java
((SXSSWorkbook)workbook).dispose();
```



### 读操作

#### 03版

```java
@Test
public void testRead03() throws IOException {
    String PATH = "D:\\IdeaProjects\\POI\\src\\main\\resources\\";
    // 获取文件流
    FileInputStream inputStream = new FileInputStream(PATH+ "测试表03.xls");
    // 1.创建一个工作簿
    Workbook workbook = new HSSFWorkbook(inputStream);
    // 2.得到工作表(参数index：sheet号)
    Sheet sheet = workbook.getSheetAt(0);
    // 3.得到行
    Row row = sheet.getRow(0);
    // 4.得到单元格
    Cell cell = row.getCell(0);
    // 读取值（需要注意类型）
    System.out.println(cell.getStringCellValue());
    inputStream.close();
}
```

#### 07版

```java
@Test
public void testRead07() throws IOException {
    String PATH = "D:\\IdeaProjects\\POI\\src\\main\\resources\\";
    // 获取文件流
    FileInputStream inputStream = new FileInputStream(PATH+ "测试表07.xlsx");
    // 1.创建一个工作簿
    Workbook workbook = new XSSFWorkbook(inputStream);
    // 2.得到工作表(参数index：sheet号)
    Sheet sheet = workbook.getSheetAt(0);
    // 3.得到行
    Row row = sheet.getRow(0);
    // 4.得到单元格
    Cell cell = row.getCell(0);
    // 读取值（需要注意类型）
    System.out.println(cell.getStringCellValue());
    inputStream.close();
}
```

#### 注意点

 获取数据类型是一件巨麻烦的事情！

```java
cell.getStringCellValue()
```

####   读取不同的数据类型

```java
@Test
public void testCellType() throws Exception {

    //获取文件流
    FileInputStream fis = new FileInputStream(PATH +"课题信息表20190701.xlsx");

    //创建一个工作簿。使用 excel能操作的这边他都可以操作
    Workbook workbook = new XSSFWorkbook(fis);
    Sheet sheet = workbook.getSheetAt(0);

    //获取标题内容
    Row rowTitle = sheet.getRow(0);
    if (rowTitle != null) {
        //得到一行有多少列有数据
        int cellCount = rowTitle.getPhysicalNumberOfCells();
        for (int cellNum = 0; cellNum < cellCount; cellNum++) {
            Cell cell = rowTitle.getCell(cellNum);
            if (cell != null) {
                int cellType = cell.getCellType();
                String cellValue = cell.getStringCellValue();
                System.out.print(cellValue + "|");
            }
        }
        System.out.println();
    }

    //获取表中的内容
    //获取表中有多少行有数据
    int rowCount = sheet.getPhysicalNumberOfRows();
    for (int rowNum = 1; rowNum < rowCount; rowNum++) {
        Row rowData = sheet.getRow(rowNum);
        if (rowData != null) {
            //读取列
            int cellCount = rowTitle.getPhysicalNumberOfCells();
            for (int cellNum = 0; cellNum < cellCount; cellNum++) {
                System.out.println("[" + (rowNum + 1) + "-" + (cellNum + 1) + "]");

                Cell cell = rowData.getCell(cellNum);
                //匹配列的数据类型
                if (cell != null) {
                    int cellType = cell.getCellType();
                    String cellValue = "";

                    switch (cellType) {
                        case HSSFCell.CELL_TYPE_STRING://字符
                            System.out.print("【 String】");
                            cellValue = cell.getStringCellValue();
                            break;
                        case HSSFCell.CELL_TYPE_BOOLEAN://布尔
                            System.out.print("【 BOOLEAN】");
                            cellValue = String.valueOf(cell.getBooleanCellValue());
                            break;
                        case HSSFCell.CELL_TYPE_BLANK://空
                            System.out.print("【 BLANK】");
                            break;
                        case HSSFCell.CELL_TYPE_NUMERIC://数字(日期、普通数字)
                            System.out.print("【 NUMERIC】");
                            if (HSSFDateUtil.isCellDateFormatted(cell)) {// 日期
                                System.out.print("--【日期】");
                                Date date = cell.getDateCellValue();
                                cellValue = new DateTime(date).toString("yyyy-MM-dd");
                            } else {
                                //不是日期格式，防止数字过长！
                                System.out.print("--【转换为字符串输出】");
                                cell.setCellType(HSSFCell.CELL_TYPE_STRING);
                                cellValue = cell.toString();
                            }
                            break;
                        case HSSFCell.CELL_TYPE_ERROR://错误
                            System.out.print("【 数据类型错误】");
                            break;
                    }
                    System.out.println(cellValue);
                }
            }
        }
    }
    //关闭流
    fis.close();
}
```



#### 计算公式

```java
@Test
public void testFormula() throws Exception {
    FileInputStream fis = new FileInputStream(PATH+"公式.xls");
    //创建一个工作簿。使用 excel能操作的这边他都可以操作
    Workbook workbook = new HSSFWorkbook(fis);
    Sheet sheet = workbook.getSheetAt(0);

    Row row = sheet.getRow(4);
    Cell cell = row.getCell(0);

    //拿到计算公式 evaL
    FormulaEvaluator FormulaEvaluator = new HSSFFormulaEvaluator((HSSFWorkbook) workbook);

    //输出单元格的内容
    int cellType = cell.getCellType();
    switch (cellType) {
        case Cell.CELL_TYPE_FORMULA://公式
            String formula = cell.getCellFormula();
            System.out.println(formula);

            //计算
            CellValue evaluate = FormulaEvaluator.evaluate(cell);
            String cellValue = evaluate.formatAsString();
            System.out.println(cellValue);
            break;
    }
}
```



## easyExcle