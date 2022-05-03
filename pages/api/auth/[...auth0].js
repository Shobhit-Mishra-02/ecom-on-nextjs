// Route: /api/auth/[...auth0]
//This dynamic route will the the request for the login and logout
import { handleAuth } from "@auth0/nextjs-auth0";

export default handleAuth();
