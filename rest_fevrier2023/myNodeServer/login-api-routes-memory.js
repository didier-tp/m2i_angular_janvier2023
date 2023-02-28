import express from 'express';
const apiRouter = express.Router();


//submitting authRequest (login) via post
//response = authResponse with token:
// http://localhost:8282/login-api/public/auth en mode post
// avec { "username" : "admin1" , "password" : "pwdadmin1" , "roles" : "admin" } dans req.body
apiRouter.route('/login-api/public/auth')
.post(function(req , res  , next ) {
	let  authReq  =  req.body;
	let  authResponse  = {username : authReq.username ,
        status : null , message : null, 
        token : null , roles : null };
	console.log("POST,authReq="+JSON.stringify(authReq));
	
	if(authReq.password == ("pwd" + authReq.username)){
				authResponse.message="successful login";
				authResponse.roles=authReq.roles;
				authResponse.status=true;
				authResponse.token="tok-tok-token";
				res.send(authResponse);
		}else{
			authResponse.message="login failed (wrong password)";
			authResponse.status=false;
			res.status(401).send(authResponse);
		}
});



export  default { apiRouter };