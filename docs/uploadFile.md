# Multer and ImageKit

To upload an image for each project I used multer to get and validate image files from client

## Multer
| Storage | size limit | allowed file type/format | Multiple Files | field name    |
| ------- | ---------- | ------------------------ | -------------- | ------------- |
| Memory  | 2MB        | JPEG - PNG - WEBP - JPG  | false          | uploadedImage |

All images are going to be uploaded to our CDN which is ImageKit so we don't need hard disk storage in our case.

## ImageKit

I used ImageKit as my main CDN, because it provides a generous free tier and its API is user-friendly.
Other CDNs like cloudinary are too expensive and their free tiers is highly limited.

## Upload Middleware
This middleware is created to validate uploaded images and send a user-friendly message to the client side. If everything is ok, the image will be uploaded.

## Validation

FileValidator is a class that includes a method which checks images signatures to prevent user upload malicious files (files that are not originally an image).

>For example: if you make `malicious.js` file and add some malicious code in it you can change the format to png and upload it to the website but `isSignatureValid` will check whether the file is an actual image by reading its buffer.

The reason I made a class for this single function is that I may add more methods to it later on.