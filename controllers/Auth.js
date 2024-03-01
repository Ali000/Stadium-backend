import { User } from "../models/User"
import middleware from "../middleware"

const signUp = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        let passwordDigest = await middleware.hashPassword(password);
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send("A user with that email has already been registered!");
        } else {
            const user = await User.create({ name, email, passwordDigest });
            res.send(user);
        }
    } catch (error) {
        throw error;
    }
}