# USER API

## For Local installation
- Download the repository in your local machine
- Go to project root folder and run `npm i`
- Then to start server , run `npm start`
- Update .env with following values:
    - AWS_S3_Bucket = `<Your AWS S3 bucket name>`
    - AWS_Access_KEY = `<Your AWS Access key>`
    - AWS_Secret_KEY = `<Your AWS Secret key>`
    - AWS_S3_Region = `<Your AWS S3 bucket region code>`
- create a cert directory outside src folder , and in that folder add two files:
    - cert.pem
    - key.pem
    ```This is used for ssl connection```

## API end-points
- User
    - (POST) https://localhost:3000/api/v1/users/signup
        - request body should have {email,username,password}
    - (POST) https://localhost:3000/api/v1/users/signin
        - request body should have {email,password}
    - (PATCH) https://localhost:3000/api/v1/users/forgot-password
        - request body should have {email,newPassword}

- Post
    - (GET) https://localhost:3000/api/v1/posts/{id}
        - request header should have {x-access-token}
    - (POST) https://localhost:3000/api/v1/posts
        - request header should have {x-access-token}
        - request body should have content or images or both
    - (PUT) https://localhost:3000/api/v1/posts/{id}
        - request header should have {x-access-token}
        - request body can have data like content or images or empty
    - (DELETE) https://localhost:3000/api/v1/posts/{id}

- Comment
    - (POST) https://localhost:3000/api/v1/comments
        - request header should have {x-access-token}
        - request body should have (content,model->(Post/Comment),modelId,userId)

- Like
    - (POST) https://localhost:3000/api/v1/likes/toggle
        - request header should have {x-access-token}
        - request body should have (model->(Post/Comment),modelId,userId)


