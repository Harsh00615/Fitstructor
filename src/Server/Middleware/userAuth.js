import jwt from "jsonwebtoken";

const userAuth = (req,res,next) => {
     const {token} = req.cookies;

     if(!token) {
        return res.json({succes : false , message : "Not authorized. Login again"});
     }

     try {
        const tokenDecoded = jwt.verify(token , process.env.JWT_SECRET);

        if(tokenDecoded.id) {
            if (!req.body) req.body = {};
            req.body.userID = tokenDecoded.id;
        } else {
            return res.json({success:false , message : "not authorized. Login again"});
        }
        next();
     } catch(error) {
         console.log(error);
        return res.json({success : false , message : error.message});
     }
}

export default userAuth;