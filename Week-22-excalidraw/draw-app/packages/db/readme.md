1. pnpm install prisma
2. npx prisma init
3. define your shcmea in shema.prisma
4. Get yourself a DB url and paste it in .env file
5. npx prisma migrate dev --name init_schema
6. npx prisma generate (To generate the prisma client)