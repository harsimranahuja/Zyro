import { getAuth } from '@clerk/express';

export const protect = async (req, res, next) => {
    try{
        const {userId} = getAuth(req);
        if(!userId){
            return res.json({success: false, message: "not authenticated"})
        }
        next()
    }
    catch(error){
        res.json({success: false, message: error.message})
    }
}