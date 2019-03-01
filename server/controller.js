const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        try{
            const {username, password, profile_pic} = req.body
            const db =req.app.get('db')
            let takenUsername = await
            db.check_username({ username})
            takenUsername = +takenUsername[0].count
            if(takenUsername !== 0) {
                return res.sendStatus(409)
            }
            console.log(takenUsername)

            let salt = bcrypt.genSaltSync(10)
            let hash = bcrypt.hashSync(password, salt)
            let user = await db.create_user(
                {username, password: hash, profile_pic})
                user = user[0]
                console.log(user)

            res.status(200).send(user)
        }catch(err){

        }
    },
    login: async (req, res) => {
        const {username, password} = req.body
            const db = req.app.get('db')
            let user = await db.login({username})
            user = user[0]
            if (!user) {
                return res.sendStatus(401)
            }
            let authenticated = bcrypt.compareSync(password, user.password)
                if (authenticated) {
                    delete user.password
                    // user = user
                    res.status(200).send(user)
                }else{
                    res.sendStatus(401)
                }

    },


}