# API

Each API divided into 4 layers `Repository` which handles database calls, `Services` that process the data and return proper response before saving data into database, `Controllers` layer that get the user's data, then pass them down to the service layer and send suitable response to users and `apis` which handles routing and validating different methods .

>[!NOTE]
> All API routes are inside `apis folder`

## Services

### Project Service

`uploadProjectImage` : this function the image file provided by multer and upload it into cdn. if the operation is a success it'll return an object with `filename` and `url` of the image otherwise it returns `null`

`createProject`: this class method pass down the data into repository and if the operation is successful it'll return an object contains `statusCode` and `message`

[Project service file](../server/services/project.service.js) <br>
[Project repository file](../server/repositories/project.repository.js)


### Stack Service
`createIfNotExists`: only creates new document inside database if the data doesn't exist.

[Stack service file](../server/services/stack.service.js) <br>
[Stack repositories file](../server/repositories/stack.repository.js)


## Validating User's Input

Beside mongoose validation I decided to add joi as an extra layer for more security <br>
[Schema folder](../server/schemas) <br>
[Input validator middleware](../server/middlewares/validator.middleware.js)
