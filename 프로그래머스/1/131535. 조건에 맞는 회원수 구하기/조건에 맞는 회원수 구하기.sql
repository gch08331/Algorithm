SELECT COUNT(USER_ID) AS USERS
FROM USER_INFO
WHERE YEAR(JOINED) = '2021' AND age >= 20 AND age <= 29;