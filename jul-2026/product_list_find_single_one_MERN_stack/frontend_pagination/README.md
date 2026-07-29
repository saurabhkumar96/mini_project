User opens page
      │
      ▼
React State

page = 1
limit = 5

      │
      ▼
GET /products?page=1&limit=5

      │
      ▼
Express

req.query.page
req.query.limit

      │
      ▼
SQLite

SELECT *
FROM products
LIMIT 5 OFFSET 0

      │
      ▼
Return JSON

      │
      ▼
React displays 5 products