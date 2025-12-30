# API

Each API is divided into 4 layers `Repository` which handles database calls, `Service` that process the data before sending them to repository and returns a proper response or throw a custom error. `Controller` layer which get the user's input will pass data down to different service layers and then sends a suitable response to clients.

`api` layer is where all api routes are made and middlewares are used. To validate user's input and if needed, authenticate users. 

>[!NOTE]
> All `API` routes are inside [apis folder](../server/apis/v1/);

## Projects API Route

### Getting Projects | GET
This function take `skip` and `limit` queries from client then it skips and sends limited amount of projects.

| Label         | Skip | Limit |
| ------------- | ---- | ----- |
| Default Value | 0    | 10    |

### Validators

> [!IMPORTANT]
> All Joi schemas can be found in [Joi Schemas](../server/schemas/).
>
> All input validator middlewares are inside [Validator Middleware](../server/middlewares/validator.middleware.js)

### Creating a project | POST

After receiving user's inputs, they will first be validated by middlewares. `UploadSingleFile` validates file size and its format then uploads the image into memory which later on be uploaded in our cdn using [ImageKit Helper](../server//helpers/imageKit.helper.js).

1.  Validate user's input
2.  Upload the image. If it wasn't successful throw an error
3.  check if stacks is an array. if so, save each stack in the database unless they exist
4.  Send all data to project service


### Updating a project | PUT

In [updateProject](../server/controllers/v1/project.controller.js) function inside our controllers, the `updateProject` from service class is called. first it uploads the new image if it's provided . Then when the upload succeeds, delete operation starts to remove the old image from our cdn. if by any chance server couldn't remove the old image it logs an error to let us know there is an orphan file in our cdn.

After a successful upload, this function checks if all the available stacks exists inside database, if not then it saves it. At the end we convert our stacks into a set to remove duplicates.