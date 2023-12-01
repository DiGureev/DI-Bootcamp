import jwt from 'jsonwebtoken'

// jwt.sign()

const token = jwt.sign(
    {email: 'dianagureev@gmail.com', userid: 308}, 
    'qwerter12345', 
    {
        expiresIn: '60s'
    },
    );

console.log(token)

jwt.verify(token, 'qwerter12345', (err, decoded) => {
    if (err) return console.log(err.message);

    console.log(decoded)
})