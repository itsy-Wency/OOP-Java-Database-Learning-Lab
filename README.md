# BYTEWISE — Java & Database Learning Lab

A browser-based, interactive learning site built with **HTML, CSS, and vanilla JavaScript**. It is inspired by the learning-path, concept, and practice workflow of educational coding platforms; it is not a copy of Bitskwela/BitDev branding or source code.

## Run the website
1. Extract the ZIP file.
2. Open `index.html` in a modern browser (Chrome, Edge, or Firefox).
3. Select a topic from the left sidebar.
4. Read **Learning Concepts**, then open **Task Challenges**.
5. Write Java code in the editor and select **Run checks**.

No installation, database, server, or build step is required.

## What's included
- 28 topics organized into two course sections:
  - Database Foundations: database, data, DBMS, schema, tables, queries/SQL overview, and the five database types.
  - JDBC API Package: JDBC API, drivers, JDBC components, `java.sql`, Test Suite, JDBC-ODBC Bridge, SQL syntax, and the SQL statements covered in the slides.
- Four Filipino/Pinoy-context scenario challenges per topic (112 total).
- Concept explanations covering purpose, application, key ideas, examples, and learning outcomes.
- Java-style code editor with editable starter code, copy, reset, hints, challenge navigation, and progress tracking.
- Progress and code drafts stored locally in browser `localStorage`.

## Validation limitation
The built-in **Run checks** feature performs client-side requirement checks for expected Java/SQL keywords and code elements. It does **not** compile or execute Java code, because this project intentionally uses only front-end HTML, CSS, and JavaScript and has no Java runtime/backend. A passing check means the required code patterns were found; students should still compile and run the final Java program in a JDK-based IDE such as IntelliJ IDEA, Eclipse, or VS Code with Java extensions.

## Curriculum source and scope
The curriculum is based on the two supplied presentations:
- `Introduction to Database.pptx`
- `JDBC API Package.pptx`

The presentation sequence and named topics are preserved. Explanations and practical examples expand the slide concepts for instruction. Schema is listed as a key database component in the Introduction to Database presentation; the slides do not provide a dedicated schema definition, so the site labels its explanation as a structural interpretation of that listed component. The JDBC-ODBC Bridge is presented as a legacy/historical approach, not a recommended modern integration choice.

## Files
- `index.html` — page structure
- `styles.css` — responsive UI and presentation-inspired gradient palette
- `app.js` — topic content, challenges, validation, and local progress
- `README.md` — this guide

## Complete Answer Key

> **Exact-match rule:** The browser checker uses case-insensitive substring matching. For each task, include every exact text pattern shown below anywhere in the editor. The patterns are the text the system counts as correct; valid Java/SQL formatting around them is also recommended.

> The task entries below contain the exact text patterns required. Every item listed for a task must appear in the submitted Java/SQL code.

### 1. What is a Database?
- **Answer:** A database is an organized collection of data stored, managed, and accessed electronically.
- **Tasks:**
  1. `class Student`, `studentId`, `fullName`
  2. `class Product`, `String name`, `double price`, `int stock`
  3. `class Attendee`, `attendeeId`, `email`
  4. `class Member`, `memberId`, `//`

### 2. Data
- **Answer:** Data is raw stored information such as text, numbers, dates, prices, emails, and status values.
- **Tasks:**
  1. `String`, `double`, `int`
  2. `String name`, `String email`, `int age`
  3. `double price`, `boolean isPaid`
  4. `String routeName`, `double fare`

### 3. Database Management System (DBMS)
- **Answer:** A DBMS is software that manages database storage, retrieval, manipulation, and access.
- **Tasks:**
  1. `MySQL`, `DBMS`
  2. `Laragon`, `MySQL`
  3. `class DatabaseService`, `PostgreSQL`
  4. `String dbmsName`, `MySQL`

### 4. Database Schema
- **Answer:** A database schema is the structural blueprint for tables, columns, data types, keys, and relationships.
- **Tasks:**
  1. `CREATE TABLE Classmate`, `id INT`, `PRIMARY KEY`, `full_name VARCHAR`
  2. `CREATE TABLE MenuItem`, `item_id INT`, `PRIMARY KEY`, `item_name VARCHAR`, `price DECIMAL`
  3. `CREATE TABLE OrgMember`, `member_id INT`, `PRIMARY KEY`, `email VARCHAR`
  4. `CREATE TABLE Student`, `student_id INT`, `PRIMARY KEY`, `name VARCHAR`

### 5. Tables, Rows & Columns
- **Answer:** A table stores records; a row is one record; a column is an attribute; a primary key uniquely identifies rows.
- **Tasks:**
  1. `CREATE TABLE Merch`, `merch_id INT`, `PRIMARY KEY`, `merch_name VARCHAR`
  2. `CREATE TABLE Student`, `student_id`, `full_name`
  3. `CREATE TABLE Menu`, `menu_id`, `item_name`, `price`
  4. `//`, `record`, `attribute`

### 6. Queries & SQL Overview
- **Answer:** SQL is Structured Query Language. Queries use SELECT, INSERT, UPDATE, DELETE, CREATE, and DROP operations.
- **Tasks:**
  1. `String sql`, `SELECT`, `FROM Attendees`
  2. `String sql`, `INSERT INTO OrgMember`, `member_name`, `email`, `VALUES`
  3. `String sql`, `UPDATE Announcements`, `SET`, `status`
  4. `String sql`, `DELETE FROM Events`, `WHERE`

### 7. Types of Databases
- **Answer:** The five types are relational, NoSQL, hierarchical, network, and cloud databases.
- **Tasks:**
  1. `String model`, `Relational`
  2. `String model`, `NoSQL`
  3. `String model`, `Hierarchical`
  4. `String model`, `Cloud`

### 8. Relational Databases
- **Answer:** Relational databases organize structured data in connected tables using keys and SQL.
- **Tasks:**
  1. `String dbType`, `Relational`, `keys`
  2. `//`, `product_id`
  3. `String dbms`, `MySQL`
  4. `//`, `tables`, `structured`

### 9. NoSQL Databases
- **Answer:** NoSQL databases support flexible document, key-value, column-family, or graph data models.
- **Tasks:**
  1. `String dbType`, `NoSQL`, `flexible`
  2. `String dbName`, `MongoDB`
  3. `//`, `semi-structured`, `fields`
  4. `String example`, `Cassandra`

### 10. Hierarchical Databases
- **Answer:** Hierarchical databases use a tree with parent-child levels, for example University → College → Department.
- **Tasks:**
  1. `//`, `University`, `College`, `Department`
  2. `String model`, `Hierarchical`
  3. `//`, `Department`, `Employee`, `parent`, `child`
  4. `String example`, `IBM Information Management System`

### 11. Network Databases
- **Answer:** Network databases use graph-like structures supporting many-to-many relationships.
- **Tasks:**
  1. `//`, `many-to-many`, `Student`, `Organization`
  2. `String model`, `Network`
  3. `//`, `multiple`, `records`
  4. `String relationship`, `Many-to-Many`

### 12. Cloud Databases
- **Answer:** Cloud databases are hosted on cloud platforms and provide remote access, scalability, and managed services.
- **Tasks:**
  1. `String dbType`, `Cloud`, `remote access`
  2. `String service`, `Amazon RDS`
  3. `String service`, `Google Cloud Spanner`
  4. `//`, `scale`, `demand`

### 13. JDBC API
- **Answer:** JDBC is Java Database Connectivity: a standard API for connecting Java applications to databases, executing SQL, and reading results.
- **Tasks:**
  1. `import java.sql.Connection`, `import java.sql.DriverManager`, `Connection connection`
  2. `PreparedStatement`, `executeQuery()`
  3. `//`, `Java`, `database`, `JDBC`
  4. `ResultSet results`

### 14. JDBC Drivers
- **Answer:** A JDBC driver translates JDBC/API requests into database-compatible communication.
- **Tasks:**
  1. `String url`, `jdbc:mysql://localhost:3306/campus_db`
  2. `//`, `JDBC`, `database`, `communication`
  3. `String driverName`, `MySQL JDBC Driver`
  4. `//`, `requests`, `database`

### 15. JDBC Components Overview
- **Answer:** The components are the `java.sql` package, JDBC Test Suite, and JDBC-ODBC Bridge.
- **Tasks:**
  1. `import java.sql.Connection`, `import java.sql.ResultSet`
  2. `//`, `Test Suite`, `driver`, `functionality`
  3. `//`, `JDBC-ODBC Bridge`, `ODBC`
  4. `java.sql`, `Test Suite`, `JDBC-ODBC Bridge`

### 16. java.sql Package
- **Answer:** `java.sql` contains JDBC types such as `Connection`, `DriverManager`, `PreparedStatement`, `ResultSet`, and `SQLException`.
- **Tasks:**
  1. `import java.sql.Connection`, `import java.sql.DriverManager`, `import java.sql.SQLException`
  2. `import java.sql.PreparedStatement`, `import java.sql.ResultSet`
  3. `Connection conn`
  4. `catch (SQLException e)`

### 17. JDBC Test Suite
- **Answer:** The JDBC Test Suite checks driver functionality and implementation of JDBC API classes and methods.
- **Tasks:**
  1. `//`, `Test Suite`, `driver`, `functionality`
  2. `//`, `API`, `classes`, `methods`
  3. `String testTarget`, `JDBC Driver`
  4. `//`, `driver`, `compatibility`

### 18. JDBC-ODBC Bridge
- **Answer:** The bridge is a legacy Java-to-ODBC compatibility path; modern applications should use native JDBC drivers.
- **Tasks:**
  1. `//`, `Java application`, `JDBC-ODBC Bridge`, `ODBC driver`
  2. `//`, `native`, `driver`, `available`
  3. `String component`, `JDBC-ODBC Bridge`
  4. `//`, `native JDBC driver`, `modern`

### 19. SQL Basic Syntax
- **Answer:** SQL is Structured Query Language used to create, read, update, and delete database objects and records.
- **Tasks:**
  1. `//`, `Structured Query Language`
  2. `String sql`, `SELECT`, `FROM Products`
  3. `PreparedStatement ps`, `connection.prepareStatement(sql)`
  4. `executeQuery()`, `ResultSet`

### 20. CREATE DATABASE
- **Answer:** `CREATE DATABASE name;` creates a new database container.
- **Tasks:**
  1. `String sql`, `CREATE DATABASE tambay_tracker`
  2. `String sql`, `CREATE DATABASE org_attendance`
  3. `executeUpdate(sql)`
  4. `CREATE DATABASE campus_events`

### 21. DROP DATABASE
- **Answer:** `DROP DATABASE name;` is a destructive operation that removes the database and its contents.
- **Tasks:**
  1. `String sql`, `DROP DATABASE practice_db`
  2. `String sql`, `DROP DATABASE event_sandbox`
  3. `//`, `destructive`, `verify`
  4. `executeUpdate(sql)`

### 22. CREATE TABLE
- **Answer:** `CREATE TABLE table_name (...)` defines a table's columns, types, and constraints.
- **Tasks:**
  1. `String sql`, `CREATE TABLE ClassRoster`, `id INT`, `PRIMARY KEY`, `student_name VARCHAR`
  2. `CREATE TABLE Menu`, `menu_id INT`, `PRIMARY KEY`, `item_name VARCHAR`, `price DECIMAL`
  3. `CREATE TABLE Players`, `player_id INT`, `PRIMARY KEY`, `gamer_tag VARCHAR`
  4. `connection.prepareStatement(sql)`

### 23. DROP TABLE
- **Answer:** `DROP TABLE name;` removes the table and its records; `DELETE` removes rows while preserving the table.
- **Tasks:**
  1. `String sql`, `DROP TABLE practice_scores`
  2. `String sql`, `DROP TABLE old_menu`
  3. `//`, `DROP TABLE`, `structure`, `DELETE`, `rows`
  4. `executeUpdate(sql)`

### 24. INSERT INTO
- **Answer:** `INSERT INTO table (columns) VALUES (values);` adds a record. JDBC should use `?` placeholders.
- **Tasks:**
  1. `String sql`, `INSERT INTO Classmate`, `student_id`, `full_name`, `VALUES (?, ?)`
  2. `INSERT INTO MenuItem`, `item_name`, `price`, `VALUES (?, ?)`
  3. `ps.setString(2, studentName)`
  4. `executeUpdate()`

### 25. SELECT
- **Answer:** `SELECT columns FROM table;` retrieves records; `*` selects all columns.
- **Tasks:**
  1. `String sql`, `SELECT product_name, retail_price`, `FROM Products`
  2. `SELECT *`, `FROM Student`
  3. `ResultSet rs`, `executeQuery()`
  4. `while`, `rs.next()`

### 26. WHERE & Comparison Operators
- **Answer:** `WHERE` filters rows using `=`, `!=`, `<`, `>`, `<=`, `>=`, `BETWEEN`, and `LIKE`.
- **Tasks:**
  1. `String sql`, `SELECT`, `FROM Menu`, `WHERE`, `price <= 99`
  2. `SELECT`, `FROM Student`, `WHERE`, `LIKE`
  3. `SELECT`, `BETWEEN 50 AND 150`, `retail_price`
  4. `ps.setDouble(1, 99.00)`

### 27. UPDATE
- **Answer:** `UPDATE table SET column = value WHERE condition;` modifies selected existing records.
- **Tasks:**
  1. `String sql`, `UPDATE Products`, `SET retail_price`, `WHERE product_id`
  2. `UPDATE Student`, `SET email`, `WHERE student_id`
  3. `ps.setDouble(1, 79.50)`
  4. `//`, `UPDATE`, `WHERE`, `every row`

### 28. DELETE
- **Answer:** `DELETE FROM table WHERE condition;` removes selected rows while keeping the table structure.
- **Tasks:**
  1. `String sql`, `DELETE FROM Registration`, `WHERE registration_id`
  2. `DELETE FROM EventDraft`, `WHERE draft_id = 8`
  3. `ps.setInt(1, 25)`
  4. `//`, `DELETE`, `rows`, `table structure`
