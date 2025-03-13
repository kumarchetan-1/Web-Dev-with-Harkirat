1. Initialized an empty turborepo 
2. Deleted the docs app 
3. Added http-server, ws-server 
4. Added package.json in both the places 
5. Added tsconfig.json in both the places, and imported it from @repo/typescript-config/base.json 
6. Added @repo/typescript-config as a dependency in both ws-server and http-server 
7. Added a build, dev and start script to both the projects 
8. Update the turbo-config in both the projects (optional) 
9. Initialize a http server, Initialize a websocket server 
10. Create an express server, add signup, signin. create-room 
11. Create middleware, gate the create-room point 
12. Gate the websocket server using the token. 
13. <span style="color:red">Create a db package</span>  
14. <span style="color:red">Using the db package in the http layer</span>  
15. Add a common package where we add the zod schema and the JWT_SECRET
16. Define the schema in schema.prisma (refer to the readme.md of ./packages/db directory)
17. Complete the HTTP backend