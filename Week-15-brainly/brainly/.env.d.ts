declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    MONGODB_CONNECTION_STRING : string;
    USER_JWT_SECRET: string;
  }
}


# another way

# declare global{
#   namespace Express{
#    export interface Request{
#     userId?: string
#    }
#   }
# } 


    # [key: string]: string | undefined;
