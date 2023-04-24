# Serverless-Lambda-GithubActions

1. Create IAM user--> Add permissions policies

2. Create empty git repository

3. Add AWS credentials to git repository

3. Use any code editor and clone git repository.

4. Install serverless via npm

            npm install -g serverless
    
5. Create AWS Nodejs boilerplate project template using command

            serverless create --template aws-nodejs
      
    This will create three files gitignore, serverless.yml and handler.js files in project template 

6. Create src folder and move handler.js into src

7. Create folder struture .github folder --> workflows folder --> add main.yml file

8. commit and push code to remote repository. Github automatically deploy lambda and create CloudFormation Stack 


