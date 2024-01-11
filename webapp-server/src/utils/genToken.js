import jwt from 'jsonwebtoken';

export const genToken = async (res, userId) => {
    try {
        const token  = jwt.sign({userId}, process.env.PRIVATE_KEY, {
            expiresIn: '1d'
        });

        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 24*60*60*1000
        });
    } catch (error) {
        console.log(error);
    }
}