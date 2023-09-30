set windows-shell := ["C:\\Program Files\\Git\\git-bash.exe", "-c"]

set dotenv-load

default:
    cd src && npx http-server

deploy:
    aws s3 sync ./src/ ${S3_LOCATION} --delete --acl "public-read"
