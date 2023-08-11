BEGIN
    TRY 
        CREATE TABLE registrationTable(
            id VARCHAR(200) PRIMARY KEY,
            fname VARCHAR(500) NOT NULL,
            email VARCHAR(200) NOT NULL,
            corhort VARCHAR(100) NOT NULL,
            graduationdate DATE NOT NULL
        )
    END TRY
BEGIN 
    CATCH 
        THROW 50001,'Table already exists!',1;
    END CATCH

