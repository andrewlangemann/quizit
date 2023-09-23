set dotenv-load

default:
    bunx http-server

deploy:
    aws s3 sync ./src/ ${S3_LOCATION} --delete --acl "public-read"
