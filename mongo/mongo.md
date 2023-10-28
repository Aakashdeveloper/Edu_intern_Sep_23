SQl
Roll No | Hindi | English
  1     |   80  |        |
  2     |       |  75    |
  3     |  90   |        |

NoSQL

[
    {
        "RollNo":1,
        "Hindi":80
    },
    {
        "RollNo":3,
        "English":75
    },
    {
        "RollNo":3,
        "Hindi":90
    }
]

SQL       NoSql
Database  Database
Table     Collection
Row       Document
Select    Find
Insert    Insert
Update    Update
Delete    Remove


https://cloud.mongodb.com
> Signup Using gmail/github
> Create cluster
    > Shared
        > aws
            > Mumbai
                > M0 Sandbox
                    > create cluster


_id > objectId
Primary Key

///connect to app

Database Access 
    > Add New Database User
        > autogenerate password
            > Built-in Role
                > Atlas Admin
                    > Add User

Network Access
    > Add IP
        > 0.0.0.0/0   anything
            > confirm


Database
    > Connect
        > Driver
            > mongodb+srv://<username>:<password>@cluster0.f8vmc.mongodb.net/?retryWrites=true&w=majority


mongodb+srv://Test:ab4ewbd@cluster0.f8vmc.mongodb.net/?retryWrites=true&w=majority