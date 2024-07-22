echo "[Docker Compose] Building app ..."
docker compose up --build -d

echo "\n[Docker] Containers createds"
docker ps --format "table {{.Names}}\t{{.Ports}}" | sort -k 3 | grep app-trainning

echo "\n[Application] Server running in http://localhost:3000"
echo "[Application] Postgres server running in http://localhost:5433"