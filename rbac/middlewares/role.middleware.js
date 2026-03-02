export const authorizeRole = (...isAllowedRoles)=>{
    return (req, res, next) => {
        if(!isAllowedRoles.includes(req.user.role)){
            return res.status(403).json({message:"forbidden access"})
        }
        next()
    }
}