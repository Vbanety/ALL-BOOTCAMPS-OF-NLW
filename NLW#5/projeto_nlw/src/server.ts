import { http } from "./http";
import "./websocket/client";

//SERVER 
http.listen(3333, () => console.log("Server is running on port 3333"));
