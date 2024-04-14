SELECT COUNT(*) AS total_count
From Product
WHERE YEAR(created_at) >= 2024 AND is_deleted = false
GROUP BY product_name, product_type, operator
ORDER BY total_count DESC