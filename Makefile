deploy:
        npm run build
        aws s3 sync out s3://www.hyperionnft.art