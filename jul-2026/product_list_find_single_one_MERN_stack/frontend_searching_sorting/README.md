User types "iphone"
        │
        ▼
React State

search = "iphone"

        │
        ▼
axios.get(
"/products?search=iphone&sort=price&order=asc"
)

        │
        ▼
Express

req.query.search
req.query.sort
req.query.order

        │
        ▼
SQLite Query

SELECT *
FROM products
WHERE name LIKE '%iphone%'
ORDER BY price ASC

        │
        ▼
JSON Response

        │
        ▼
React updates UI