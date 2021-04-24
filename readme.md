hey, this is the readme.md file


### Downloading the Code ###

To download this code, run 

```$git clone https://github.com/NeasaNiA/nci2021```

This will create a folder called nci2021 and the code will be downloaded to that folder.

To install the dependencies, make sure you are in the nci2021 folder and run:

```$npm install```


### Web Server ###

we're using express (handlers.js)

To access the routes using curl:

```curl -get 'http://localhost:8080/transfer```

 - dockerise the project
 - load a file of accounts
 - run the distribution
 - run distro via handler (post)
 - do some fun crypto
 - 


### Docker Containers 

To run a docker container, you need to do the following steps:

#### Build it

To build the docker container:

```docker build -t nci/lab2021 .```

run it

#### Interact with it

View docker images

```docker image ls```

To remove all docker containers etc. (if something goes wrong)

```docker system prune```

Remove docker images
```docker image prune -a -f```

View running docker containers
``` docker ps```


Run the image in docker





