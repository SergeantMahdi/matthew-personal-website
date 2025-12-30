# Authentication
`Express-session` is being used to store user's authentication session and `connect-mongo` is the main storage of the sessions.

## Sessions Configuration
| Property        | value                       |
| --------------- | --------------------------- |
| store           | MongoDB                     |
| collection name | logins                      |
| Encrypted       | using createKrupteinAdapter |
| expires at      | 7 days                      |

See the session configuration in [Session config](/server/configs/session.config.js)

`passport local strategy` is being used for authentication. and it serialize user based on user's id and updatedAt property in [User model](/server/models/user.model.js). then in deserializing function we check the user's existence and the updatedAt property in case the user changes his credentials like password and username.

`isAuthenticated` middleware is also implemented to check if the the user's session is valid otherwise it redirect user to the login page. see more in [isAuthenticate Middleware](/server//middlewares/authentication.middleware.js)

>[!NOTE]
> User's session will be invalid if they change their credentials so it force user logs in again through all devices

See more [Authentication](/server/configs/authentication.config.js).

Also see  in [Authentication Joi Schema](/server/schemas/authentication.schema.js) and [Credential Update Joi Schema](/server/schemas/credentialUpdate.schema.js) 