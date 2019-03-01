module.exports = {
    register: async (req, res) => {
        try{
            const {username, password, profile_pic} = req.body
            const db =req.app.get('db')
            let takenUsername = await
            db.auth.check_username({ username})
            takenUsername = +takenUsername[0].count
            if(takenUsername !==0) {
                return res.sendStatus(409)
            }

            let user = await db.auth.register(
                {username, password, profile_pic})
                user = user[0]

            res.status(200).send(user)



        }catch(err){

        }
    }
}