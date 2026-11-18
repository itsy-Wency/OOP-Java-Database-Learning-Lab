const groups = [
  {
    label: "01 · DATABASE FOUNDATIONS",
    items: [
      {
        id: "database",
        title: "What is a Database?",
        sub: "The organized home of application data",
        kicker: "DATABASE FOUNDATIONS",
        summary:
          "A database is an organized collection of data that is stored, managed, and accessed electronically. It helps applications retrieve, update, and analyze information efficiently.",
        purpose:
          "Provide a reliable, structured place to keep information so that applications and people can work with consistent records.",
        application:
          "A campus enrollment portal stores student profiles, subjects, and grades. A sari-sari store app stores product names, prices, and stock quantities. Instead of keeping scattered notes or separate files, the application works with a managed collection.",
        points: [
          "Organizes related information in one place.",
          "Supports retrieval, insertion, updating, and deletion.",
          "Makes information available to authorized applications and users.",
          "Can be designed for different data models and workloads.",
        ],
        example:
          "A simple student database might contain student records with an ID, name, course, and year level.",
        code: "// Conceptual example: records stored in a database\\nStudent: 2026-001 | Ana Reyes | BSIT | 2",
        outcomes: [
          "Explain what a database is.",
          "Identify why applications use databases.",
          "Give a practical database use case.",
        ],
        tasks: [
          [
            "The Registrar's Plot Twist",
            "The registrar's office has student details scattered across screenshots, chat messages, and notebooks. Propose a database-backed solution. In Java, create a clear database-purpose comment and a Student record class with fields for studentId and fullName.",
            "class Student",
            "studentId",
            "fullName",
          ],
          [
            "Sari-Sari Store Inventory Arc",
            "A store owner wants product names, prices, and stock in one organized place. Create a Product class that represents one product record.",
            "class Product",
            "String name",
            "double price",
            "int stock",
          ],
          [
            "Org Event Attendance",
            "Your org has 300 attendees and needs searchable attendance records. Write a Java class named Attendee with attendeeId and email fields.",
            "class Attendee",
            "attendeeId",
            "email",
          ],
          [
            "No More Spreadsheet Chaos",
            "A student council needs a central place for officer and member records. Write a short Java comment explaining the database's role and declare a Member class with memberId.",
            "class Member",
            "memberId",
            "//",
          ],
        ],
      },
      {
        id: "data",
        title: "Data",
        sub: "The raw facts stored in a database",
        kicker: "DATABASE FOUNDATIONS",
        summary:
          "Data refers to the raw facts or information stored in a database. Examples include names, dates, quantities, prices, email addresses, and status values.",
        purpose:
          "Represent the facts an application needs to remember, process, retrieve, or analyze.",
        application:
          "For a food delivery app, a customer's name, delivery address, order total, and order status are data values. The application stores values in suitable fields and types.",
        points: [
          "A single value can be a number, text, date, or other supported type.",
          "Related values can be grouped into a record.",
          "Data becomes useful information when it is organized and interpreted.",
          "Choose data types that match the values being represented.",
        ],
        example:
          'studentId = 2026; fullName = "Mika Santos"; yearLevel = 2; isEnrolled = true;',
        code: 'String productName = "Iced Coffee";\\ndouble price = 49.50;\\nint quantity = 12;',
        outcomes: [
          "Distinguish data from a database.",
          "Identify common data values.",
          "Choose appropriate Java data types.",
        ],
        tasks: [
          [
            "Milk Tea Order Receipt",
            "A milk tea kiosk needs to store drink name, price, and quantity. Declare Java variables using String, double, and int respectively.",
            "String",
            "double",
            "int",
          ],
          [
            "Class GC Directory",
            "Store a classmate's name, email address, and age in Java variables with appropriate types.",
            "String name",
            "String email",
            "int age",
          ],
          [
            "Concert Ticket Status",
            "A ticketing app stores ticket price and whether a ticket is paid. Declare a double price and boolean isPaid.",
            "double price",
            "boolean isPaid",
          ],
          [
            "Jeepney Fare Tracker",
            "Store a route label and fare amount. Declare a String routeName and double fare.",
            "String routeName",
            "double fare",
          ],
        ],
      },
      {
        id: "dbms",
        title: "Database Management System (DBMS)",
        sub: "Software that manages database interaction",
        kicker: "DATABASE FOUNDATIONS",
        summary:
          "A Database Management System is software that allows users and applications to interact with a database. It provides tools for storing, retrieving, and manipulating data.",
        purpose:
          "Act as the management layer between applications or users and stored data. It helps control access and provides mechanisms for data operations.",
        application:
          "MySQL, PostgreSQL, and SQL Server are examples of database management systems. Local development stacks such as Laragon and XAMPP can bundle database services and tools.",
        points: [
          "Accepts database commands and processes them.",
          "Manages storage and retrieval.",
          "Provides mechanisms for access control and administration.",
          "A DBMS is software; the database is the organized collection being managed.",
        ],
        example:
          "Java application → JDBC driver → MySQL DBMS → database tables.",
        code: "// Example DBMS product names\\n// MySQL, PostgreSQL, Microsoft SQL Server",
        outcomes: [
          "Differentiate a database from a DBMS.",
          "Explain the DBMS role in an application.",
          "Recognize common DBMS products.",
        ],
        tasks: [
          [
            "The Cafe Owner's Tech Choice",
            "A cafe needs software to manage its stored data. In a Java comment, identify MySQL as the DBMS and explain that it manages database operations.",
            "MySQL",
            "DBMS",
          ],
          [
            "Laragon Setup Day",
            "Your lab PC runs MySQL through Laragon. Write a Java comment that correctly identifies Laragon as a local development environment and MySQL as the DBMS.",
            "Laragon",
            "MySQL",
          ],
          [
            "Backend Bestie",
            "A Java app needs to connect to PostgreSQL. Create a class named DatabaseService and include a comment that PostgreSQL is the DBMS.",
            "class DatabaseService",
            "PostgreSQL",
          ],
          [
            "Pick the Manager",
            'Declare a String variable named dbmsName and assign it the value "MySQL".',
            "String dbmsName",
            "MySQL",
          ],
        ],
      },
      {
        id: "schema",
        title: "Database Schema",
        sub: "The blueprint that defines database structure",
        kicker: "DATABASE FOUNDATIONS",
        summary:
          "The presentation lists schema as one of the key database components. A schema can be understood as the structural blueprint describing how database objects are organized, such as tables and their columns.",
        purpose:
          "Give the database a defined structure so data can be stored consistently and relationships between records can be represented.",
        application:
          "A campus system may define a Student table with student_id, full_name, course_code, and year_level columns. The schema describes the structure before records are inserted.",
        points: [
          "Defines database objects and their structure.",
          "Specifies tables and columns and their data types.",
          "Can define keys and relationships between tables.",
          "A well-planned schema reduces inconsistent and duplicated data.",
        ],
        example:
          "Student(student_id INT, full_name VARCHAR(100), course_code VARCHAR(20))",
        code: "CREATE TABLE Student (\\n  student_id INT PRIMARY KEY,\\n  full_name VARCHAR(100),\\n  course_code VARCHAR(20)\\n);",
        outcomes: [
          "Explain schema as a database blueprint.",
          "Identify table and column definitions.",
          "Read a basic table structure.",
        ],
        tasks: [
          [
            "Section List Blueprint",
            "Design a table structure for a class list. Write a CREATE TABLE statement for Classmate with id as INT primary key and full_name as VARCHAR(100).",
            "CREATE TABLE Classmate",
            "id INT",
            "PRIMARY KEY",
            "full_name VARCHAR",
          ],
          [
            "Food Park Menu Schema",
            "Create a MenuItem table with item_id INT primary key, item_name VARCHAR(80), and price DECIMAL(8,2).",
            "CREATE TABLE MenuItem",
            "item_id INT",
            "PRIMARY KEY",
            "item_name VARCHAR",
            "price DECIMAL",
          ],
          [
            "Org Membership Blueprint",
            "Create an OrgMember table with member_id INT primary key and email VARCHAR(120).",
            "CREATE TABLE OrgMember",
            "member_id INT",
            "PRIMARY KEY",
            "email VARCHAR",
          ],
          [
            "No Duplicate IDs",
            "Create a Student table with student_id as the primary key and name as VARCHAR(100).",
            "CREATE TABLE Student",
            "student_id INT",
            "PRIMARY KEY",
            "name VARCHAR",
          ],
        ],
      },
      {
        id: "tables",
        title: "Tables, Rows & Columns",
        sub: "The tabular structure for related records",
        kicker: "DATABASE FOUNDATIONS",
        summary:
          "Tables hold data in rows and columns. A row represents one record, while a column represents an attribute or field shared by the records in that table.",
        purpose:
          "Store similar records in a consistent structure that can be queried and maintained.",
        application:
          "A Products table may contain one row per item. Columns can include product_id, product_name, cost_price, retail_price, and stock_quantity.",
        points: [
          "Table: a named structure for a particular subject or entity.",
          "Row: one complete record in the table.",
          "Column: one attribute shared by records.",
          "A primary key uniquely identifies each row.",
        ],
        example:
          "| student_id | full_name | year_level |\\n| 2026-01 | Kai Dela Cruz | 2 |",
        code: "CREATE TABLE Products (\\n  product_id INT PRIMARY KEY,\\n  product_name VARCHAR(80),\\n  retail_price DECIMAL(8,2)\\n);",
        outcomes: [
          "Identify a row, column, and table.",
          "Explain the role of a primary key.",
          "Design a simple table.",
        ],
        tasks: [
          [
            "K-pop Merch Inventory",
            "Create a Merch table with merch_id INT primary key and merch_name VARCHAR(80).",
            "CREATE TABLE Merch",
            "merch_id INT",
            "PRIMARY KEY",
            "merch_name VARCHAR",
          ],
          [
            "Class President's List",
            "Create a Student table with student_id and full_name columns.",
            "CREATE TABLE Student",
            "student_id",
            "full_name",
          ],
          [
            "Tapsilog Menu",
            "Create a Menu table with menu_id, item_name, and price columns.",
            "CREATE TABLE Menu",
            "menu_id",
            "item_name",
            "price",
          ],
          [
            "One Row, One Order",
            "Write a Java comment that identifies a row as one record and a column as one attribute.",
            "//",
            "record",
            "attribute",
          ],
        ],
      },
      {
        id: "queries",
        title: "Queries & SQL Overview",
        sub: "Commands that retrieve or manipulate data",
        kicker: "DATABASE FOUNDATIONS",
        summary:
          "A query is a command or request to retrieve or manipulate data. SQL (Structured Query Language) is a standardized language used to create database objects and perform operations such as inserting, reading, updating, and deleting records.",
        purpose:
          "Let users and applications communicate what data they need or what change should be made to the database.",
        application:
          "A student portal can retrieve a student's grades, add a new enrollment record, update a contact number, or remove an obsolete record through SQL statements.",
        points: [
          "SELECT retrieves records.",
          "INSERT adds records.",
          "UPDATE changes existing records.",
          "DELETE removes records.",
          "CREATE and DROP manage database objects.",
        ],
        example: "SELECT full_name FROM Student WHERE year_level = 2;",
        code: '// SQL is sent through JDBC from Java\\nString sql = "SELECT * FROM Student";',
        outcomes: [
          "Define SQL and query.",
          "Recognize common SQL operations.",
          "Match a query to its purpose.",
        ],
        tasks: [
          [
            "Find the Concert Buddies",
            "Write a Java String named sql containing a SELECT query that retrieves all columns from Attendees.",
            "String sql",
            "SELECT",
            "FROM Attendees",
          ],
          [
            "Add a New Org Member",
            "Create a Java String named sql containing an INSERT INTO query for OrgMember with member_name and email columns.",
            "String sql",
            "INSERT INTO OrgMember",
            "member_name",
            "email",
            "VALUES",
          ],
          [
            "Update the GC Announcement",
            "Create a Java String named sql containing an UPDATE query that changes the status in Announcements.",
            "String sql",
            "UPDATE Announcements",
            "SET",
            "status",
          ],
          [
            "Remove the Cancelled Event",
            "Create a Java String named sql containing a DELETE FROM query for Events with a WHERE condition.",
            "String sql",
            "DELETE FROM Events",
            "WHERE",
          ],
        ],
      },
      {
        id: "dbtypes",
        title: "Types of Databases",
        sub: "Different models for organizing information",
        kicker: "DATABASE FOUNDATIONS",
        summary:
          "The presentation identifies five database types: relational, NoSQL, hierarchical, network, and cloud databases. They organize and host data in different ways.",
        purpose:
          "Choose an appropriate data model and deployment approach based on how an application stores, relates, and accesses information.",
        application:
          "A banking ledger commonly uses relational tables; a content platform may use a document database; a cloud-hosted database can support users connecting from different locations.",
        points: [
          "Relational: tables with relationships between them.",
          "NoSQL: flexible models for unstructured or semi-structured data.",
          "Hierarchical: tree-like parent-child structure.",
          "Network: graph-like structure supporting many-to-many relationships.",
          "Cloud: hosted on cloud platforms for scalability and remote access.",
        ],
        example:
          "MySQL is relational; MongoDB is a document-oriented NoSQL database; Amazon RDS is a cloud database service.",
        code: '// Match the model to the use case\\nString model = "Relational"; // structured tables',
        outcomes: [
          "Name the five types shown in the presentation.",
          "Compare their basic organization.",
          "Match a database type to a use case.",
        ],
        tasks: [
          [
            "Choose for the Enrollment Portal",
            'The portal has structured Students, Courses, and Enrollments tables. Set a String variable model to "Relational".',
            "String model",
            "Relational",
          ],
          [
            "Flexible Meme Metadata",
            'A meme app stores flexible JSON-like documents with varying fields. Set model to "NoSQL".',
            "String model",
            "NoSQL",
          ],
          [
            "Family Tree App",
            'A family-tree app naturally stores parent-child levels. Set model to "Hierarchical".',
            "String model",
            "Hierarchical",
          ],
          [
            "Cloud Campus Access",
            'A campus app needs a remotely hosted database service. Set model to "Cloud".',
            "String model",
            "Cloud",
          ],
        ],
      },
      {
        id: "relational",
        title: "Relational Databases",
        sub: "Tables connected through defined relationships",
        kicker: "DATABASE TYPES",
        summary:
          "Relational databases use tables to store data, with relationships between tables. The presentation gives MySQL, PostgreSQL, and SQL Server as examples.",
        purpose:
          "Represent structured data while reducing unnecessary duplication and enabling related records to be queried together.",
        application:
          "A school system can keep students in one table and courses in another, then connect them through enrollment records and keys.",
        points: [
          "Data is organized into tables made of rows and columns.",
          "Keys identify records and connect related tables.",
          "SQL is commonly used to define and query relational data.",
          "Examples in the presentation: MySQL, PostgreSQL, SQL Server.",
        ],
        example:
          "Student(student_id, name) and Enrollment(enrollment_id, student_id, course_id).",
        code: "SELECT Student.name, Enrollment.course_id\\nFROM Student\\nJOIN Enrollment ON Student.student_id = Enrollment.student_id;",
        outcomes: [
          "Describe the table-based relational model.",
          "Identify common relational DBMS products.",
          "Explain why keys matter.",
        ],
        tasks: [
          [
            "DWCC Enrollment Records",
            'A student can enroll in several subjects. Declare a String dbType with value "Relational" and comment that tables are linked by keys.',
            "String dbType",
            "Relational",
            "keys",
          ],
          [
            "Store Sales Report",
            "Products and Sales are separate tables linked by product_id. Write a Java comment mentioning the shared key product_id.",
            "//",
            "product_id",
          ],
          [
            "MySQL Setup",
            'Declare a String dbms variable and assign "MySQL".',
            "String dbms",
            "MySQL",
          ],
          [
            "Course Registration",
            "Write a Java comment explaining that a relational database stores structured records in tables.",
            "//",
            "tables",
            "structured",
          ],
        ],
      },
      {
        id: "nosql",
        title: "NoSQL Databases",
        sub: "Flexible models for semi-structured data",
        kicker: "DATABASE TYPES",
        summary:
          "The presentation describes NoSQL databases as designed for unstructured or semi-structured data, offering flexibility. It names MongoDB and Cassandra as examples.",
        purpose:
          "Support data that does not always fit a fixed relational table structure, depending on the database model and workload.",
        application:
          "A social platform may store profile preferences or varied post metadata as documents. A document database can allow records to contain different fields.",
        points: [
          "Can support document, key-value, column-family, or graph models.",
          "Often useful when data structure varies or changes frequently.",
          "MongoDB and Cassandra are examples named in the presentation.",
          "NoSQL is not one single storage model; products differ.",
        ],
        example:
          "A document may store username, bio, interests, and optional profile links.",
        code: '// Example JSON-like document concept\\n{ username: "Mika", interests: ["music", "coding"] }',
        outcomes: [
          "Explain the flexibility associated with NoSQL.",
          "Recognize MongoDB and Cassandra.",
          "Identify a suitable flexible-data scenario.",
        ],
        tasks: [
          [
            "Profile Customization Era",
            'A profile may have optional fields such as favorite artist or game. Set dbType to "NoSQL" and include a comment about flexible fields.',
            "String dbType",
            "NoSQL",
            "flexible",
          ],
          [
            "MongoDB Fan Page",
            'Declare a String dbName with value "MongoDB".',
            "String dbName",
            "MongoDB",
          ],
          [
            "Changing Meme Metadata",
            "Write a Java comment explaining that semi-structured data can have varying fields.",
            "//",
            "semi-structured",
            "fields",
          ],
          [
            "Cassandra Mention",
            'Declare a String example with value "Cassandra".',
            "String example",
            "Cassandra",
          ],
        ],
      },
      {
        id: "hierarchical",
        title: "Hierarchical Databases",
        sub: "A tree-like parent-child organization",
        kicker: "DATABASE TYPES",
        summary:
          "Hierarchical databases organize data in a tree-like structure. The presentation gives IBM Information Management System as an example.",
        purpose:
          "Represent information where records naturally follow parent-child levels.",
        application:
          "A company directory can have a company at the top, departments below it, and employees under each department.",
        points: [
          "Uses a tree-like structure.",
          "A parent can have child records.",
          "The model is suited to naturally hierarchical data.",
          "The presentation names IBM Information Management System (IMS).",
        ],
        example: "University → College → Department → Program.",
        code: "// Hierarchy example\\n// University (parent) -> College -> Department",
        outcomes: [
          "Describe a tree-like data structure.",
          "Identify parent-child relationships.",
          "Recognize the IMS example.",
        ],
        tasks: [
          [
            "University Org Chart",
            "Write a Java comment showing University → College → Department as a hierarchy.",
            "//",
            "University",
            "College",
            "Department",
          ],
          [
            "Barangay Directory",
            'Declare a String model and assign "Hierarchical".',
            "String model",
            "Hierarchical",
          ],
          [
            "Parent and Child",
            "Write a Java comment that identifies Department as a parent and Employee as its child.",
            "//",
            "Department",
            "Employee",
            "parent",
            "child",
          ],
          [
            "IMS Recall",
            'Declare a String example and assign "IBM Information Management System".',
            "String example",
            "IBM Information Management System",
          ],
        ],
      },
      {
        id: "networkdb",
        title: "Network Databases",
        sub: "Graph-like relationships between records",
        kicker: "DATABASE TYPES",
        summary:
          "Network databases use graph-like structures with many-to-many relationships, according to the presentation.",
        purpose:
          "Represent records that can be connected through multiple relationship paths rather than a strict single-parent tree.",
        application:
          "A collaboration platform may represent users connected to multiple teams, projects, and collaborators.",
        points: [
          "Uses graph-like structures.",
          "Supports many-to-many relationships.",
          "A record may participate in multiple connections.",
          "Useful when relationships are complex and interconnected.",
        ],
        example:
          "One student can join many organizations, and one organization can have many students.",
        code: "// Many-to-many concept\\n// Student <-> Organization",
        outcomes: [
          "Describe a network database structure.",
          "Explain many-to-many relationships.",
          "Give an interconnected-data example.",
        ],
        tasks: [
          [
            "Campus Org Membership",
            "Write a Java comment describing students and organizations as a many-to-many relationship.",
            "//",
            "many-to-many",
            "Student",
            "Organization",
          ],
          [
            "Collab App Model",
            'Set a String model variable to "Network".',
            "String model",
            "Network",
          ],
          [
            "Multiple Connections",
            "Write a comment explaining that one record can connect to multiple related records.",
            "//",
            "multiple",
            "records",
          ],
          [
            "Project Team Graph",
            'Declare a String relationship and assign "Many-to-Many".',
            "String relationship",
            "Many-to-Many",
          ],
        ],
      },
      {
        id: "cloud",
        title: "Cloud Databases",
        sub: "Databases hosted on cloud platforms",
        kicker: "DATABASE TYPES",
        summary:
          "The presentation describes cloud databases as hosted on cloud platforms, offering scalability and remote access. It gives Amazon RDS and Google Cloud Spanner as examples.",
        purpose:
          "Make database services available over a network and support capacity changes and access from different locations.",
        application:
          "A student portal hosted online can connect to a cloud database so authorized users can access the service from campus or off-campus.",
        points: [
          "Hosted on cloud infrastructure.",
          "Can provide remote access over a network.",
          "Offers scalability as application demand changes.",
          "Examples in the presentation: Amazon RDS and Google Cloud Spanner.",
        ],
        example:
          "A Java web application connects to a managed cloud database using a secure connection string.",
        code: '// Cloud database examples\\nString service = "Amazon RDS";',
        outcomes: [
          "Describe cloud database hosting.",
          "Explain remote access and scalability.",
          "Recognize the listed cloud services.",
        ],
        tasks: [
          [
            "Campus Portal Anywhere",
            'Set a String dbType variable to "Cloud" and add a comment about remote access.',
            "String dbType",
            "Cloud",
            "remote access",
          ],
          [
            "AWS Database Day",
            'Declare a String service with value "Amazon RDS".',
            "String service",
            "Amazon RDS",
          ],
          [
            "Google Cloud Mention",
            'Declare a String service with value "Google Cloud Spanner".',
            "String service",
            "Google Cloud Spanner",
          ],
          [
            "Scale for Enrollment Week",
            "Write a Java comment explaining that cloud databases can scale with demand.",
            "//",
            "scale",
            "demand",
          ],
        ],
      },
    ],
  },
  {
    label: "02 · JDBC API PACKAGE",
    items: [
      {
        id: "jdbcapi",
        title: "JDBC API",
        sub: "Java Database Connectivity",
        kicker: "JDBC API PACKAGE",
        summary:
          "JDBC stands for Java Database Connectivity. The JDBC API is a set of specifications that defines how a Java program communicates with a database. It describes how an application opens a connection, communicates with the database, executes SQL statements, and retrieves results.",
        purpose:
          "Provide a standard Java programming interface for database access so Java applications can work with supported databases through JDBC drivers.",
        application:
          "A Java enrollment application can connect to MySQL, execute a query for student records, and process the returned rows using JDBC.",
        points: [
          "Establishes a database connection.",
          "Sends SQL statements to the database.",
          "Retrieves and processes query results.",
          "Uses JDBC interfaces and classes, commonly from java.sql.",
        ],
        example: "Java application ↔ JDBC API/driver ↔ relational database.",
        code: 'Connection connection = DriverManager.getConnection(url, user, password);\\nPreparedStatement ps = connection.prepareStatement("SELECT * FROM Student");\\nResultSet rs = ps.executeQuery();',
        outcomes: [
          "Expand the JDBC acronym.",
          "Explain the API's role between Java and a database.",
          "Identify connection, SQL execution, and result retrieval.",
        ],
        tasks: [
          [
            "Enrollment App Connection",
            "Import java.sql.Connection and java.sql.DriverManager. Declare a Connection variable named connection.",
            "import java.sql.Connection",
            "import java.sql.DriverManager",
            "Connection connection",
          ],
          [
            "Grades Retrieval",
            "Create a PreparedStatement variable named statement and call executeQuery() to retrieve rows.",
            "PreparedStatement",
            "executeQuery()",
          ],
          [
            "Java Meets MySQL",
            "Write a Java comment explaining JDBC connects a Java application to a database.",
            "//",
            "Java",
            "database",
            "JDBC",
          ],
          [
            "Result Processing",
            "Declare a ResultSet variable named results.",
            "ResultSet results",
          ],
        ],
      },
      {
        id: "drivers",
        title: "JDBC Drivers",
        sub: "Translate JDBC calls for a database",
        kicker: "JDBC API PACKAGE",
        summary:
          "A JDBC driver enables an application to interact with a database in a standard and uniform manner. It receives requests from the client, converts them into a format understood by the database, and presents them to the database.",
        purpose:
          "Bridge the JDBC API calls made by a Java application and the database-specific communication protocol.",
        application:
          "A Java application using MySQL needs a compatible MySQL JDBC driver (Connector/J) on its classpath or dependency configuration.",
        points: [
          "Receives JDBC requests from the Java application.",
          "Translates or handles communication in a database-compatible way.",
          "Allows a common API to work with different database products.",
          "The correct driver and connection configuration must be available.",
        ],
        example: "Java code → JDBC API → MySQL JDBC driver → MySQL server.",
        code: '// Driver dependency must be available to the project\\nString url = "jdbc:mysql://localhost:3306/campus_db";',
        outcomes: [
          "Explain why a JDBC driver is needed.",
          "Describe its translation/communication role.",
          "Identify the driver in a connection flow.",
        ],
        tasks: [
          [
            "MySQL Driver Setup",
            "Declare a String url containing the MySQL JDBC URL jdbc:mysql://localhost:3306/campus_db.",
            "String url",
            "jdbc:mysql://localhost:3306/campus_db",
          ],
          [
            "Driver's Job Interview",
            "Write a Java comment explaining that a JDBC driver handles communication between JDBC and the database.",
            "//",
            "JDBC",
            "database",
            "communication",
          ],
          [
            "Database Compatibility",
            'Declare a String driverName with value "MySQL JDBC Driver".',
            "String driverName",
            "MySQL JDBC Driver",
          ],
          [
            "Request Translator",
            "Write a comment explaining that a driver converts or handles requests in a database-understood format.",
            "//",
            "requests",
            "database",
          ],
        ],
      },
      {
        id: "components",
        title: "JDBC Components Overview",
        sub: "The components listed in the presentation",
        kicker: "JDBC API PACKAGE",
        summary:
          "The presentation identifies three JDBC components: the java.sql package, the Test Suite, and the JDBC-ODBC Bridge. Each has a different role in the JDBC ecosystem described in the slides.",
        purpose:
          "Understand the package interfaces, driver conformance testing, and the historical bridge approach as distinct parts of the JDBC topic.",
        application:
          "When studying a JDBC project, identify java.sql imports in source code, understand that drivers are tested for API behavior, and recognize the JDBC-ODBC Bridge as a legacy compatibility approach.",
        points: [
          "java.sql package: interfaces and classes used for database communication.",
          "Test Suite: tests JDBC driver functionality and implementation of API classes and methods.",
          "JDBC-ODBC Bridge: allows Java applications to communicate using an ODBC driver; presented as an approach for environments without a native driver.",
        ],
        example:
          "JDBC components → java.sql package | Test Suite | JDBC-ODBC Bridge.",
        code: "import java.sql.Connection;\\nimport java.sql.DriverManager;\\nimport java.sql.PreparedStatement;\\nimport java.sql.ResultSet;",
        outcomes: [
          "Name the three components in the slides.",
          "Distinguish each component's role.",
          "Recognize the bridge as a legacy approach.",
        ],
        tasks: [
          [
            "Name the Package",
            "Import java.sql.Connection and java.sql.ResultSet in a Java source file.",
            "import java.sql.Connection",
            "import java.sql.ResultSet",
          ],
          [
            "Driver Quality Check",
            "Write a Java comment stating that the JDBC Test Suite checks driver functionality and API implementation.",
            "//",
            "Test Suite",
            "driver",
            "functionality",
          ],
          [
            "Legacy Bridge Recall",
            "Write a Java comment explaining that JDBC-ODBC Bridge lets Java communicate through an ODBC driver.",
            "//",
            "JDBC-ODBC Bridge",
            "ODBC",
          ],
          [
            "Component Roll Call",
            "Declare three String variables naming java.sql package, Test Suite, and JDBC-ODBC Bridge.",
            "java.sql",
            "Test Suite",
            "JDBC-ODBC Bridge",
          ],
        ],
      },
      {
        id: "javasql",
        title: "java.sql Package",
        sub: "Interfaces and classes used by JDBC",
        kicker: "JDBC COMPONENTS",
        summary:
          "The java.sql package contains interfaces and classes defined by the JDBC API that are used for communicating with a database. Common types include Connection, DriverManager, PreparedStatement, ResultSet, and SQLException.",
        purpose:
          "Provide the Java types through which application code creates connections, executes SQL, reads results, and handles database errors.",
        application:
          "A Java desktop or web application imports java.sql.Connection to represent an active connection and PreparedStatement to execute parameterized SQL.",
        points: [
          "Connection represents a connection/session with a database.",
          "DriverManager helps obtain a connection using a JDBC URL and credentials.",
          "PreparedStatement represents a precompiled/parameterized SQL statement.",
          "ResultSet represents data returned by a query.",
          "SQLException represents database access errors.",
        ],
        example:
          "import java.sql.Connection;\\nimport java.sql.DriverManager;\\nimport java.sql.PreparedStatement;\\nimport java.sql.ResultSet;\\nimport java.sql.SQLException;",
        code: "import java.sql.Connection;\\nimport java.sql.DriverManager;\\nimport java.sql.PreparedStatement;\\nimport java.sql.ResultSet;\\nimport java.sql.SQLException;",
        outcomes: [
          "Identify common java.sql types.",
          "Match each type to its role.",
          "Write correct import statements.",
        ],
        tasks: [
          [
            "Import the JDBC Squad",
            "Write imports for Connection, DriverManager, and SQLException from java.sql.",
            "import java.sql.Connection",
            "import java.sql.DriverManager",
            "import java.sql.SQLException",
          ],
          [
            "Prepared Statement Era",
            "Import PreparedStatement and ResultSet from java.sql.",
            "import java.sql.PreparedStatement",
            "import java.sql.ResultSet",
          ],
          [
            "Connection Variable",
            "Declare a Connection variable named conn.",
            "Connection conn",
          ],
          [
            "Catch the SQL Error",
            "Write a catch clause for SQLException named e.",
            "catch (SQLException e)",
          ],
        ],
      },
      {
        id: "testsuite",
        title: "JDBC Test Suite",
        sub: "Checks JDBC driver functionality and API implementation",
        kicker: "JDBC COMPONENTS",
        summary:
          "The Test Suite tests the functionality of a JDBC Driver and ensures that the classes and methods defined in the JDBC API are implemented.",
        purpose:
          "Check whether a JDBC driver behaves according to the JDBC API requirements.",
        application:
          "A driver vendor can use conformance tests to detect missing or incorrect API behavior before distributing a driver.",
        points: [
          "Tests the functionality of a JDBC driver.",
          "Checks implementation of JDBC API classes and methods.",
          "Supports driver reliability and compatibility.",
          "It is not the same as testing an application's business logic.",
        ],
        example: "JDBC driver → Test Suite → implementation checks.",
        code: "// Conceptual test purpose\\n// Verify driver API behavior and required methods",
        outcomes: [
          "Explain what the Test Suite tests.",
          "Identify API implementation as its concern.",
          "Distinguish driver testing from app feature testing.",
        ],
        tasks: [
          [
            "Driver QA Checklist",
            "Write a Java comment explaining that the Test Suite verifies JDBC driver functionality.",
            "//",
            "Test Suite",
            "driver",
            "functionality",
          ],
          [
            "API Method Coverage",
            "Write a Java comment mentioning that JDBC API classes and methods must be implemented.",
            "//",
            "API",
            "classes",
            "methods",
          ],
          [
            "Not a UI Test",
            'Declare a String testTarget and assign "JDBC Driver".',
            "String testTarget",
            "JDBC Driver",
          ],
          [
            "Compatibility Check",
            "Write a comment explaining that driver tests help check JDBC compatibility.",
            "//",
            "driver",
            "compatibility",
          ],
        ],
      },
      {
        id: "bridge",
        title: "JDBC-ODBC Bridge",
        sub: "The ODBC-based bridge described in the slides",
        kicker: "JDBC COMPONENTS",
        summary:
          "The JDBC-ODBC Bridge was designed to allow Java applications to communicate with a database using an ODBC driver. The presentation notes that it allowed developers to begin writing JDBC applications without waiting for a native driver.",
        purpose:
          "Provide a compatibility path between JDBC calls and an ODBC driver in the historical context described by the presentation.",
        application:
          "This bridge is mainly a historical/legacy concept for understanding JDBC architecture. Modern Java applications generally use database-specific JDBC drivers instead.",
        points: [
          "Connects Java JDBC applications through an ODBC driver.",
          "Was intended as a compatibility option when a native driver was unavailable.",
          "It is a legacy approach and should not be assumed to be the recommended modern setup.",
          "Use a suitable native JDBC driver for modern project work.",
        ],
        example:
          "Java application → JDBC-ODBC Bridge → ODBC driver → database.",
        code: "// Legacy architecture concept only\\n// JDBC application -> JDBC-ODBC Bridge -> ODBC driver",
        outcomes: [
          "Explain the bridge's purpose in the slides.",
          "Trace its place in the communication path.",
          "Recognize its legacy status.",
        ],
        tasks: [
          [
            "Legacy Architecture Map",
            "Write a Java comment showing the path Java application -> JDBC-ODBC Bridge -> ODBC driver.",
            "//",
            "Java application",
            "JDBC-ODBC Bridge",
            "ODBC driver",
          ],
          [
            "Why It Existed",
            "Write a comment explaining that the bridge helped when a native JDBC driver was not yet available.",
            "//",
            "native",
            "driver",
            "available",
          ],
          [
            "Historical Recall",
            'Declare a String component and assign "JDBC-ODBC Bridge".',
            "String component",
            "JDBC-ODBC Bridge",
          ],
          [
            "Modern Driver Choice",
            "Write a Java comment recommending a native JDBC driver for a modern Java application.",
            "//",
            "native JDBC driver",
            "modern",
          ],
        ],
      },
      {
        id: "sql",
        title: "SQL Basic Syntax",
        sub: "Structured Query Language and statement structure",
        kicker: "SQL BASIC SYNTAX",
        summary:
          "SQL stands for Structured Query Language. It is a standardized language used to perform operations on a database, including creating entries, reading content, updating content, and deleting entries.",
        purpose:
          "Express database operations in a form that a DBMS can interpret. In JDBC, SQL is supplied to statement objects and executed through a database connection.",
        application:
          "A Java app can keep an SQL statement in a String, pass it to PreparedStatement, and execute it against the connected database.",
        points: [
          "SQL statements use keywords such as CREATE, SELECT, INSERT, UPDATE, and DELETE.",
          "A statement targets a database or table as required.",
          "Use WHERE to restrict which rows are affected by supported statements.",
          "In Java, SQL text is commonly stored in a String and executed using JDBC.",
        ],
        example: 'String sql = "SELECT * FROM Products WHERE stock_quantity > 0";',
        code: 'String sql = "SELECT * FROM Products";\\nPreparedStatement statement = connection.prepareStatement(sql);\\nResultSet results = statement.executeQuery();',
        outcomes: [
          "Expand SQL correctly.",
          "Identify common statement categories.",
          "Connect SQL text to JDBC execution.",
        ],
        tasks: [
          [
            "SQL Meaning Check",
            "Write a Java comment expanding SQL as Structured Query Language.",
            "//",
            "Structured Query Language",
          ],
          [
            "Java SQL String",
            "Declare a String variable named sql and assign a SELECT statement for Products.",
            "String sql",
            "SELECT",
            "FROM Products",
          ],
          [
            "Prepare the Statement",
            "Create a PreparedStatement named ps using connection.prepareStatement(sql).",
            "PreparedStatement ps",
            "connection.prepareStatement(sql)",
          ],
          [
            "Execute a Read Query",
            "Call executeQuery() on a PreparedStatement and store the returned rows in a ResultSet.",
            "executeQuery()",
            "ResultSet",
          ],
        ],
      },
      {
        id: "createdb",
        title: "CREATE DATABASE",
        sub: "Create a new database",
        kicker: "SQL STATEMENTS",
        summary:
          "The CREATE DATABASE statement is used to create a new database. It establishes the database container in which tables and other database objects can be created.",
        purpose:
          "Create a named database before defining its tables and storing application records.",
        application:
          "For a campus attendance project, create a database named campus_attendance, then create tables for students and attendance sessions.",
        points: [
          "Use CREATE DATABASE followed by the database name.",
          "Run the command with an account that has permission to create databases.",
          "Choose a clear, consistent database name.",
          "After creation, connect to or select the database before creating its tables.",
        ],
        example: "CREATE DATABASE campus_attendance;",
        code: 'String sql = "CREATE DATABASE campus_attendance";\\nStatement statement = connection.createStatement();\\nstatement.executeUpdate(sql);',
        outcomes: [
          "Write CREATE DATABASE syntax.",
          "Explain why a database is created first.",
          "Execute a DDL statement through JDBC.",
        ],
        tasks: [
          [
            "Create the Tambay Tracker DB",
            "Declare a Java String sql containing CREATE DATABASE tambay_tracker.",
            "String sql",
            "CREATE DATABASE tambay_tracker",
          ],
          [
            "Org Attendance Database",
            "Create a Java String named sql for CREATE DATABASE org_attendance.",
            "String sql",
            "CREATE DATABASE org_attendance",
          ],
          [
            "Execute the DDL",
            "Use statement.executeUpdate(sql) to execute the database creation statement.",
            "executeUpdate(sql)",
          ],
          [
            "Name It Properly",
            "Write a CREATE DATABASE statement for campus_events.",
            "CREATE DATABASE campus_events",
          ],
        ],
      },
      {
        id: "dropdb",
        title: "DROP DATABASE",
        sub: "Delete an existing database",
        kicker: "SQL STATEMENTS",
        summary:
          "The DROP DATABASE statement is used to delete an existing database. This is a destructive operation: the database and its contained objects/data are removed.",
        purpose:
          "Remove a database that is no longer needed, such as a disposable practice database.",
        application:
          "A developer may remove a temporary test database after a lab exercise. Production databases require safeguards, authorization, and verified backups before destructive changes.",
        points: [
          "Use DROP DATABASE followed by the database name.",
          "The operation is destructive and may remove all contained tables and records.",
          "Confirm the target name and environment before execution.",
          "Do not run destructive statements casually against production data.",
        ],
        example: "DROP DATABASE old_practice_db;",
        code: '// Destructive operation — verify the target first\\nString sql = "DROP DATABASE old_practice_db";',
        outcomes: [
          "Write DROP DATABASE syntax.",
          "Recognize its destructive effect.",
          "Apply a safety check before execution.",
        ],
        tasks: [
          [
            "Delete the Test Database",
            "Write a Java String sql containing DROP DATABASE practice_db.",
            "String sql",
            "DROP DATABASE practice_db",
          ],
          [
            "Old Event Sandbox",
            "Write DROP DATABASE event_sandbox as a Java String.",
            "String sql",
            "DROP DATABASE event_sandbox",
          ],
          [
            "Safety First",
            "Add a Java comment warning that DROP DATABASE is destructive and the target must be verified.",
            "//",
            "destructive",
            "verify",
          ],
          [
            "Execute Carefully",
            "Call executeUpdate(sql) to execute the DDL statement after verification.",
            "executeUpdate(sql)",
          ],
        ],
      },
      {
        id: "createtable",
        title: "CREATE TABLE",
        sub: "Define a table and its columns",
        kicker: "SQL STATEMENTS",
        summary:
          "The CREATE TABLE statement is used to create a new table. It defines the table name, its columns, and the data types or constraints for those columns.",
        purpose:
          "Create a structured place to store a particular type of record in a database.",
        application:
          "A store inventory database can define Products with product_id, product_name, cost_price, retail_price, and stock_quantity.",
        points: [
          "Start with CREATE TABLE and a table name.",
          "List each column and its data type inside parentheses.",
          "Use constraints such as PRIMARY KEY where appropriate.",
          "Choose data types that fit the information being stored.",
        ],
        example:
          "CREATE TABLE Products (product_id INT PRIMARY KEY, product_name VARCHAR(100), price DECIMAL(10,2));",
        code: 'String sql = "CREATE TABLE Products (" +\\n "product_id INT PRIMARY KEY, " +\\n "product_name VARCHAR(100), " +\\n "price DECIMAL(10,2))";',
        outcomes: [
          "Write basic CREATE TABLE syntax.",
          "Define columns and data types.",
          "Use a primary key.",
        ],
        tasks: [
          [
            "Create a Class Roster",
            "Write a Java String sql containing CREATE TABLE ClassRoster with id INT PRIMARY KEY and student_name VARCHAR(100).",
            "String sql",
            "CREATE TABLE ClassRoster",
            "id INT",
            "PRIMARY KEY",
            "student_name VARCHAR",
          ],
          [
            "Food Trip Menu Table",
            "Create a Menu table with menu_id INT PRIMARY KEY, item_name VARCHAR(80), and price DECIMAL(8,2).",
            "CREATE TABLE Menu",
            "menu_id INT",
            "PRIMARY KEY",
            "item_name VARCHAR",
            "price DECIMAL",
          ],
          [
            "Gaming Tournament Table",
            "Create a Players table with player_id INT PRIMARY KEY and gamer_tag VARCHAR(50).",
            "CREATE TABLE Players",
            "player_id INT",
            "PRIMARY KEY",
            "gamer_tag VARCHAR",
          ],
          [
            "JDBC DDL Execution",
            "Prepare the CREATE TABLE SQL using connection.prepareStatement(sql).",
            "connection.prepareStatement(sql)",
          ],
        ],
      },
      {
        id: "droptable",
        title: "DROP TABLE",
        sub: "Delete an existing table",
        kicker: "SQL STATEMENTS",
        summary:
          "The DROP TABLE statement is used to delete an existing table. It removes the table structure and its stored records.",
        purpose:
          "Remove a table that is no longer needed, typically in a controlled development or maintenance task.",
        application:
          "A developer may drop a temporary table created for a practice activity. In a real system, check dependencies and confirm the correct table before dropping it.",
        points: [
          "Use DROP TABLE followed by the table name.",
          "The table and its records are removed.",
          "It is different from DELETE, which removes rows while keeping the table.",
          "Confirm the target and dependencies before execution.",
        ],
        example: "DROP TABLE temporary_scores;",
        code: 'String sql = "DROP TABLE temporary_scores";\\nstatement.executeUpdate(sql);',
        outcomes: [
          "Write DROP TABLE syntax.",
          "Differentiate DROP TABLE from DELETE.",
          "Recognize the destructive impact.",
        ],
        tasks: [
          [
            "Remove the Practice Table",
            "Write a Java String sql containing DROP TABLE practice_scores.",
            "String sql",
            "DROP TABLE practice_scores",
          ],
          [
            "Old Menu Version",
            "Write DROP TABLE old_menu as a Java String.",
            "String sql",
            "DROP TABLE old_menu",
          ],
          [
            "Drop vs Delete",
            "Write a comment stating DROP TABLE removes the table structure, while DELETE removes rows.",
            "//",
            "DROP TABLE",
            "structure",
            "DELETE",
            "rows",
          ],
          [
            "Run the DDL",
            "Use statement.executeUpdate(sql) to run the DROP TABLE statement.",
            "executeUpdate(sql)",
          ],
        ],
      },
      {
        id: "insert",
        title: "INSERT INTO",
        sub: "Add new records to a table",
        kicker: "SQL STATEMENTS",
        summary:
          "The INSERT INTO statement is used to add values into a table. The presentation shows the pattern INSERT INTO tablename (columns) VALUES(values).",
        purpose: "Create new records in an existing table.",
        application:
          "A registration form can insert a new student record after validating the submitted student ID and name.",
        points: [
          "Specify the target table after INSERT INTO.",
          "List the columns receiving values.",
          "Provide corresponding values after VALUES.",
          "Use PreparedStatement placeholders for user-supplied values in JDBC.",
        ],
        example: "INSERT INTO Student (student_id, full_name) VALUES (?, ?);",
        code: 'String sql = "INSERT INTO Student (student_id, full_name) VALUES (?, ?)";\\nPreparedStatement ps = connection.prepareStatement(sql);\\nps.setInt(1, 2026001);\\nps.setString(2, "Mika Santos");\\nps.executeUpdate();',
        outcomes: [
          "Write INSERT INTO syntax.",
          "Match columns with values.",
          "Use parameterized JDBC insertion.",
        ],
        tasks: [
          [
            "Add a New Classmate",
            "Create a Java String sql for INSERT INTO Classmate (student_id, full_name) VALUES (?, ?).",
            "String sql",
            "INSERT INTO Classmate",
            "student_id",
            "full_name",
            "VALUES (?, ?)",
          ],
          [
            "Add a Milk Tea Menu Item",
            "Create a parameterized INSERT for MenuItem with item_name and price columns.",
            "INSERT INTO MenuItem",
            "item_name",
            "price",
            "VALUES (?, ?)",
          ],
          [
            "Bind the Student Name",
            "Use ps.setString(2, studentName) to bind the second parameter.",
            "ps.setString(2, studentName)",
          ],
          [
            "Save the New Record",
            "Call executeUpdate() on the PreparedStatement after binding values.",
            "executeUpdate()",
          ],
        ],
      },
      {
        id: "select",
        title: "SELECT",
        sub: "Retrieve records from a table",
        kicker: "SQL STATEMENTS",
        summary:
          "The SELECT statement is used to retrieve data from a database. The basic pattern is SELECT columns FROM tablename. Use * to request all columns.",
        purpose:
          "Read records for display, reporting, searching, or further application processing.",
        application:
          "A student dashboard can retrieve a student's profile or a store app can list available products.",
        points: [
          "SELECT specifies the columns to retrieve.",
          "FROM identifies the source table.",
          "Use * for all columns or list specific columns.",
          "In JDBC, executeQuery() is used for a query that returns a ResultSet.",
        ],
        example: "SELECT product_name, retail_price FROM Products;",
        code: 'String sql = "SELECT product_name, retail_price FROM Products";\\nPreparedStatement ps = connection.prepareStatement(sql);\\nResultSet rs = ps.executeQuery();\\nwhile (rs.next()) {\\n  System.out.println(rs.getString("product_name"));\\n}',
        outcomes: [
          "Write SELECT and FROM syntax.",
          "Choose specific columns or all columns.",
          "Retrieve and iterate through a ResultSet.",
        ],
        tasks: [
          [
            "Show the Product Catalog",
            "Create a Java String sql selecting product_name and retail_price from Products.",
            "String sql",
            "SELECT product_name, retail_price",
            "FROM Products",
          ],
          [
            "Class List Display",
            "Create a query selecting all columns from Student.",
            "SELECT *",
            "FROM Student",
          ],
          [
            "Read the Query Results",
            "Call executeQuery() and assign the result to ResultSet rs.",
            "ResultSet rs",
            "executeQuery()",
          ],
          [
            "Loop Through the Results",
            "Write a while loop that uses rs.next() to iterate through query results.",
            "while",
            "rs.next()",
          ],
        ],
      },
      {
        id: "where",
        title: "WHERE & Comparison Operators",
        sub: "Filter rows using conditions",
        kicker: "SQL STATEMENTS",
        summary:
          "The presentation explains that WHERE can use comparison operators such as =, !=, <, >, <=, and >=, as well as BETWEEN and LIKE. WHERE restricts the rows returned or affected by a statement.",
        purpose:
          "Target only records that meet a condition rather than applying an operation to every row.",
        application:
          "A store app can retrieve products priced below ₱100, search names beginning with a term, or update one student's record by ID.",
        points: [
          "= means equal; != means not equal.",
          "<, >, <=, and >= compare values.",
          "BETWEEN checks whether a value is within a range.",
          "LIKE supports pattern matching.",
          "Always check the WHERE condition on UPDATE and DELETE statements.",
        ],
        example:
          "SELECT * FROM Products WHERE retail_price BETWEEN 20 AND 100;\\nSELECT * FROM Student WHERE full_name LIKE 'A%';",
        code: 'String sql = "SELECT * FROM Products WHERE retail_price >= ?";\\nPreparedStatement ps = connection.prepareStatement(sql);\\nps.setDouble(1, 50.00);',
        outcomes: [
          "Use WHERE to filter rows.",
          "Recognize the listed comparison operators.",
          "Use BETWEEN and LIKE.",
        ],
        tasks: [
          [
            "Budget Meal Filter",
            "Create a Java String sql selecting Menu items with price <= 99 using WHERE.",
            "String sql",
            "SELECT",
            "FROM Menu",
            "WHERE",
            "price <= 99",
          ],
          [
            "Find the Mika Records",
            "Create a query that searches Student names using LIKE and a WHERE clause.",
            "SELECT",
            "FROM Student",
            "WHERE",
            "LIKE",
          ],
          [
            "Price Range Challenge",
            "Create a query using BETWEEN 50 AND 150 for retail_price.",
            "SELECT",
            "BETWEEN 50 AND 150",
            "retail_price",
          ],
          [
            "Bind a Threshold",
            "Use ps.setDouble(1, 99.00) to bind a price condition.",
            "ps.setDouble(1, 99.00)",
          ],
        ],
      },
      {
        id: "update",
        title: "UPDATE",
        sub: "Modify existing records",
        kicker: "SQL STATEMENTS",
        summary:
          "The UPDATE statement is used to update data in a table. It uses SET to specify new column values and WHERE to identify which rows should change.",
        purpose:
          "Correct or modify existing records without recreating the entire row.",
        application:
          "A store manager changes a product's retail price. A student updates their email address. A WHERE condition should identify the intended record.",
        points: [
          "Use UPDATE followed by the table name.",
          "Use SET to assign new values to columns.",
          "Use WHERE to target the intended row(s).",
          "Without a suitable WHERE clause, all rows may be updated.",
          "Use PreparedStatement parameters for user input.",
        ],
        example: "UPDATE Products SET retail_price = ? WHERE product_id = ?;",
        code: 'String sql = "UPDATE Products SET retail_price = ? WHERE product_id = ?";\\nPreparedStatement ps = connection.prepareStatement(sql);\\nps.setDouble(1, 89.50);\\nps.setInt(2, 10);\\nps.executeUpdate();',
        outcomes: [
          "Write UPDATE and SET syntax.",
          "Use WHERE to target records.",
          "Execute an update through JDBC.",
        ],
        tasks: [
          [
            "Price Drop Announcement",
            "Create a Java String sql updating Products retail_price and filtering by product_id.",
            "String sql",
            "UPDATE Products",
            "SET retail_price",
            "WHERE product_id",
          ],
          [
            "Fix a Student Email",
            "Create an UPDATE query for Student that sets email and filters by student_id.",
            "UPDATE Student",
            "SET email",
            "WHERE student_id",
          ],
          [
            "Bind the New Price",
            "Use ps.setDouble(1, 79.50) to bind a new retail price.",
            "ps.setDouble(1, 79.50)",
          ],
          [
            "Avoid Updating Everyone",
            "Write a comment warning that UPDATE without WHERE may affect every row.",
            "//",
            "UPDATE",
            "WHERE",
            "every row",
          ],
        ],
      },
      {
        id: "delete",
        title: "DELETE",
        sub: "Remove selected records",
        kicker: "SQL STATEMENTS",
        summary:
          "The DELETE statement is used to delete data from tables. DELETE FROM identifies the table, while WHERE specifies which records should be removed.",
        purpose:
          "Remove records that are no longer required while keeping the table itself.",
        application:
          "An administrator may remove a cancelled draft registration by its registration ID. Verify the condition before executing the command.",
        points: [
          "Use DELETE FROM followed by the table name.",
          "Use WHERE to identify the rows to delete.",
          "Without WHERE, all rows in the table may be deleted.",
          "DELETE removes rows; DROP TABLE removes the table structure as well.",
        ],
        example: "DELETE FROM Registration WHERE registration_id = ?;",
        code: 'String sql = "DELETE FROM Registration WHERE registration_id = ?";\\nPreparedStatement ps = connection.prepareStatement(sql);\\nps.setInt(1, 25);\\nps.executeUpdate();',
        outcomes: [
          "Write DELETE FROM syntax.",
          "Target rows using WHERE.",
          "Differentiate DELETE from DROP TABLE.",
        ],
        tasks: [
          [
            "Remove Cancelled Registration",
            "Create a Java String sql deleting from Registration where registration_id = ?.",
            "String sql",
            "DELETE FROM Registration",
            "WHERE registration_id",
          ],
          [
            "Clean the Old Draft",
            "Create a DELETE query for EventDraft where draft_id = 8.",
            "DELETE FROM EventDraft",
            "WHERE draft_id = 8",
          ],
          [
            "Bind the Target ID",
            "Use ps.setInt(1, 25) to bind the record identifier.",
            "ps.setInt(1, 25)",
          ],
          [
            "Keep the Table",
            "Write a comment explaining that DELETE removes rows but keeps the table structure.",
            "//",
            "DELETE",
            "rows",
            "table structure",
          ],
        ],
      },
    ],
  },
];

const allTopics = groups.flatMap((g) => g.items);
const state = {
  topic: allTopics[0].id,
  tab: "learn",
  challenge: 0,
  completed: JSON.parse(localStorage.getItem("bytewise-completed") || "{}"),
  drafts: JSON.parse(localStorage.getItem("bytewise-drafts") || "{}"),
};
const $ = (s) => document.querySelector(s);
const escapeHTML = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
function current() {
  return allTopics.find((t) => t.id === state.topic);
}
function renderNav() {
  const nav = $("#topicNav");
  nav.innerHTML = "";
  groups.forEach((g) => {
    const h = document.createElement("div");
    h.className = "nav-group";
    h.textContent = g.label;
    nav.append(h);
    g.items.forEach((t) => {
      const b = document.createElement("button");
      b.className = "nav-item" + (t.id === state.topic ? " active" : "");
      const n = String(allTopics.indexOf(t) + 1).padStart(2, "0");
      b.innerHTML = `<span class="nav-num">${n}</span><span>${escapeHTML(t.title)}</span>`;
      b.addEventListener("click", () => {
        state.topic = t.id;
        state.challenge = 0;
        render();
        $("#sidebar").classList.remove("open");
      });
      nav.append(b);
    });
  });
}
function renderProgress() {
  const total = allTopics.reduce((n, t) => n + t.tasks.length, 0),
    done = Object.keys(state.completed).filter(
      (k) => state.completed[k],
    ).length;
  const pct = Math.round((done / total) * 100);
  $("#progressText").textContent = pct + "%";
  $("#progressBar").style.width = pct + "%";
  $("#progressMeta").textContent = `${done} of ${total} challenges completed`;
  $("#doneCount").textContent = done;
}
function renderLearn(t) {
  $("#learnPanel").innerHTML =
    `<div class="concept-grid"><article class="concept-main">
 <h3>Concept overview</h3><p>${escapeHTML(t.summary)}</p>
 <h4>Purpose — why this matters</h4><p>${escapeHTML(t.purpose)}</p>
 <h4>How it works / key ideas</h4><ul>${t.points.map((x) => `<li>${escapeHTML(x)}</li>`).join("")}</ul>
 <h4>Application in real projects</h4><p>${escapeHTML(t.application)}</p>
 <h4>Example</h4><div class="code-sample">${escapeHTML(t.example)}</div>
 <h4>Java / SQL reference</h4><div class="code-sample">${escapeHTML(t.code.replace(/\\n/g, "\n"))}</div>
 <div class="callout"><b>Remember:</b> ${escapeHTML(t.outcomes.join(" · "))}</div>
 </article><aside class="side-stack">
 <div class="side-card"><div class="mini-label">LEARNING OBJECTIVES</div><h4>By the end, you can…</h4><div class="outcome-list">${t.outcomes.map((x, i) => `<div class="outcome"><b>${i + 1}</b><span>${escapeHTML(x)}</span></div>`).join("")}</div></div>
 <div class="side-card"><div class="mini-label">REAL-WORLD CONNECTION</div><h4>Where you'll see it</h4><p>${escapeHTML(t.application)}</p></div>
 <div class="side-card"><div class="mini-label">UP NEXT</div><h4>Put the concept to work</h4><p>${t.tasks.length} scenario-based challenges are ready. Each task has a Java code editor, automatic checks, and hints.</p><button class="btn btn-light" style="margin-top:12px" onclick="switchTab('tasks')">Go to challenges →</button></div>
 </aside></div>`;
}
function taskKey(t, i) {
  return t.id + "-" + i;
}
function starter(t, i) {
  const k = taskKey(t, i);
  return (
    state.drafts[k] ||
    `// Your solution for: ${t.tasks[i][0]}\npublic class Main {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}`
  );
}
function renderTasks(t) {
  const task = t.tasks[state.challenge],
    k = taskKey(t, state.challenge),
    done = !!state.completed[k];
  $("#tasksPanel").innerHTML =
    `<div class="challenge-layout"><div><div class="challenge-list">${t.tasks.map((x, i) => `<button class="challenge-pick ${i === state.challenge ? "active" : ""}" data-ch="${i}"><small>CHALLENGE ${String(i + 1).padStart(2, "0")} ${state.completed[taskKey(t, i)] ? " · ✓ DONE" : ""}</small><b>${escapeHTML(x[0])}</b><span>${i === 0 ? "Warm-up" : i === 1 ? "Apply the concept" : i === 2 ? "Build confidence" : "Challenge mode"} · ${state.completed[taskKey(t, i)] ? "Completed" : "Not completed"}</span></button>`).join("")}</div><div class="side-card" style="margin-top:12px"><div class="mini-label">HOW TO COMPLETE</div><p style="margin-top:8px">Read the scenario, write Java code in the editor, then select <b>Run checks</b>. The checker looks for the required code elements. Use Help if you need a nudge.</p></div></div>
 <div><article class="challenge-card"><div class="challenge-meta"><span class="difficulty">${state.challenge < 2 ? "FOUNDATION" : "PRACTICE"}</span><span class="xp">+25 XP · ${state.challenge + 1} of 4</span></div><h3>${escapeHTML(task[0])}</h3><p>${escapeHTML(task[1])}</p><div class="task-box"><b>YOUR TASK</b><p>Write a Java solution that addresses the scenario. Include the required class, statement, or JDBC element described. Keep the code readable and use the exact SQL/JDBC concepts from this topic.</p></div><div class="task-foot"><span>${done ? "✓ This challenge is marked complete" : "Not yet completed"}</span><button id="resetTask">Reset code</button></div></article>
 <section class="editor-card"><div class="editor-head"><b>◉ JAVA PLAYGROUND</b><span>Java · Main.java</span></div><div class="editor-toolbar"><i class="editor-dot"></i><i class="editor-dot"></i><i class="editor-dot"></i></div><div class="editor-body"><div class="line-numbers" id="lineNumbers">1<br>2<br>3<br>4<br>5<br>6</div><textarea class="code-input" id="codeEditor" spellcheck="false" aria-label="Java code editor">${escapeHTML(starter(t, state.challenge))}</textarea></div><div class="editor-actions"><button class="btn btn-primary" id="checkCode">▶ Run checks</button><button class="btn btn-ghost" id="helpBtn">? Help</button><button class="btn btn-ghost" id="copyCode">Copy code</button></div><div class="feedback" id="feedback"></div><div class="help-panel" id="helpPanel"><b>Hint:</b> ${escapeHTML(hintFor(task))}<br><span>Checker note: this browser-only lab checks for required Java/SQL text patterns. It does not compile or execute Java bytecode.</span></div></section>
 <div class="task-foot"><button id="prevTask" ${state.challenge === 0 ? "disabled" : ""}>← Previous</button><button id="nextTask">${state.challenge === 3 ? "Finish topic" : "Next challenge →"}</button></div></div></div>`;
  document.querySelectorAll("[data-ch]").forEach((b) =>
    b.addEventListener("click", () => {
      state.challenge = Number(b.dataset.ch);
      renderTasks(current());
    }),
  );
  const editor = $("#codeEditor");
  editor.addEventListener("input", () => {
    state.drafts[k] = editor.value;
    localStorage.setItem("bytewise-drafts", JSON.stringify(state.drafts));
    updateLines();
  });
  $("#checkCode").addEventListener("click", () =>
    checkAnswer(t, state.challenge),
  );
  $("#helpBtn").addEventListener("click", () =>
    $("#helpPanel").classList.toggle("open"),
  );
  $("#copyCode").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(editor.value);
      toast("Code copied to clipboard.");
    } catch (e) {
      toast("Clipboard access is unavailable in this browser.");
    }
  });
  $("#resetTask").addEventListener("click", () => {
    delete state.drafts[k];
    editor.value = `// Your solution for: ${task[0]}\npublic class Main {\n    public static void main(String[] args) {\n        // Write your Java solution here\n    }\n}`;
    localStorage.setItem("bytewise-drafts", JSON.stringify(state.drafts));
    updateLines();
    $("#feedback").className = "feedback";
  });
  $("#prevTask").addEventListener("click", () => {
    state.challenge = Math.max(0, state.challenge - 1);
    renderTasks(current());
  });
  $("#nextTask").addEventListener("click", () => {
    if (state.challenge < 3) {
      state.challenge++;
      renderTasks(current());
    } else {
      switchTab("learn");
      toast(
        "Topic challenge set reviewed. Choose another topic from the sidebar.",
      );
    }
  });
  updateLines();
}
function hintFor(task) {
  return "Look for the exact Java class, SQL keyword, table name, method, or condition mentioned in the task. Use imports from java.sql when a JDBC type is required. For user-provided values, prefer PreparedStatement placeholders.";
}
function updateLines() {
  const e = $("#codeEditor");
  if (!e) return;
  const count = e.value.split("\n").length;
  $("#lineNumbers").innerHTML = Array.from(
    { length: Math.max(count, 6) },
    (_, i) => i + 1,
  ).join("<br>");
}
function checkAnswer(t, i) {
  const editor = $("#codeEditor"),
    code = editor.value,
    req = t.tasks[i].slice(2),
    missing = req.filter(
      (token) => !code.toLowerCase().includes(token.toLowerCase()),
    );
  const fb = $("#feedback");
  fb.className = "feedback show";
  if (!code.trim() || missing.length) {
    fb.classList.add("error");
    fb.innerHTML = `<b>Not quite yet.</b> Your code is missing: ${missing.map(escapeHTML).join(", ") || "a solution"}. Recheck the task requirements and try again.`;
    return;
  }
  state.completed[taskKey(t, i)] = true;
  localStorage.setItem("bytewise-completed", JSON.stringify(state.completed));
  fb.classList.add("success");
  fb.innerHTML =
    "<b>Checks passed.</b> The required code elements were found. Review your syntax and logic, then continue to the next challenge.";
  renderProgress();
  renderTasks(t);
  toast("Challenge completed · +25 XP");
}
function switchTab(tab) {
  state.tab = tab;
  document
    .querySelectorAll(".tab")
    .forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
  $("#learnPanel").classList.toggle("hidden", tab !== "learn");
  $("#tasksPanel").classList.toggle("hidden", tab !== "tasks");
  if (tab === "tasks") {
    renderTasks(current());
    requireChallengeFullscreen();
  } else {
    $("#fullscreenGate")?.classList.remove("show");
  }
}

function requireChallengeFullscreen() {
  if (document.fullscreenElement) {
    $("#fullscreenGate")?.classList.remove("show");
    return;
  }

  showFullscreenGate();
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen().catch(() => showFullscreenGate());
  }
}

function showFullscreenGate() {
  let gate = $("#fullscreenGate");
  if (!gate) {
    gate = document.createElement("div");
    gate.id = "fullscreenGate";
    gate.className = "fullscreen-gate";
    gate.innerHTML = `
      <div class="fullscreen-card">
        <span class="fullscreen-icon">⛶</span>
        <h2>Fullscreen required</h2>
        <p>Enter fullscreen mode before continuing with the challenge.</p>
        <button class="btn btn-primary" id="enterFullscreen">Enter Fullscreen</button>
      </div>`;
    document.body.append(gate);
    $("#enterFullscreen").addEventListener("click", requireChallengeFullscreen);
  }
  gate.classList.add("show");
}

// Prevent the inspection menu and common developer-tool shortcuts.
document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  const blocked =
    key === "f12" ||
    ((event.ctrlKey || event.metaKey) &&
      (key === "u" ||
        (event.shiftKey && ["i", "j", "c", "k"].includes(key)) ||
        (!event.shiftKey && key === "j")));
  if (blocked) {
    event.preventDefault();
    event.stopPropagation();
  }
});

document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    $("#fullscreenGate")?.classList.remove("show");
  } else if (state.tab === "tasks") {
    showFullscreenGate();
  }
});

function render() {
  const t = current();
  renderNav();
  renderProgress();
  $("#topicKicker").textContent = t.kicker;
  $("#topicTitle").textContent = t.title;
  $("#topicSubtitle").textContent = t.sub;
  $("#topicCount").textContent =
    String(allTopics.indexOf(t) + 1).padStart(2, "0") +
    " / " +
    allTopics.length;
  $("#taskTotal").textContent = t.tasks.length;
  renderLearn(t);
  switchTab(state.tab);
}
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2300);
}
document
  .querySelectorAll(".tab")
  .forEach((b) => b.addEventListener("click", () => switchTab(b.dataset.tab)));
$("#menuToggle")?.addEventListener("click", () =>
  $("#sidebar").classList.toggle("open"),
);
render();
