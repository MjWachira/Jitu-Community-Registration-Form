CREATE OR ALTER PROCEDURE newUserPROC(@id VARCHAR(200),
  @fname  VARCHAR(500),
  @email VARCHAR(200),
  @corhort VARCHAR(100),
  @graduationdate DATE)
AS
BEGIN
    INSERT INTO registrationTable(id, fname, email,corhort,graduationdate)
    VALUES (@id, @fname, @email,@corhort, @graduationdate)
END

SELECT * FROM registrationTable;

-- DROP TABLE registrationTable;