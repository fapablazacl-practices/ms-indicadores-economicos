
FROM node:14.9.0-alpine3.10
MAINTAINER Felipe Apablaza (ing.apablaza@gmail.com)

ADD node_modules 

CMD ["date"]
