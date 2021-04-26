hey, this is the readme.md file

### Contract used in this project  ###
https://ropsten.etherscan.io/address/0x548d1da3487a01c3bc6fa92c694fad44ecfe2e03
Transacitons associated with this contract can be viewed there

### Prerequisites  ###
Node.js installed

### Downloading the Code ###

To download this code, run 

```$git clone https://github.com/NeasaNiA/nci2021```


To install the dependencies

```$npm install```

Add in .env file that has been uploaded to Moodle. This includes
INFURA_KEY=<infura key>
OWNER_ADDRESS=<owner public key>
OWNER_PRIVATE_KEY=<owner private key>
CONTRACT_ADDRESS=<contract address>

### Web Server ###

we're using express (handlers.js)

To run locally
 ```node handlers.js```

 This will return with "listening on port 9000"


To access the routes using curl:

```curl -get 'http://localhost:9000/symbol```

To distribute 5% of the remaining tokens to the owner account evenly amongst a list of supplied accounts. The list of accounts is passed into /distribute URL using JSON as following curl command:


```curl -XPOST http://localhost:8080/distribute -H 'content-type: application/json' -d '{"addresses": ["0x9b14eeE99808BaB2a4C6492D37B4D771F75b7631", "0xe8a43eFC2CE385AbA7465101262b03B0d2489c43", "0x9ca3208d90Ce19f42F2e5FC435ADA5922cB34989", "0x1F4aB29bDe4fb3b29d40577c55a7Ae7c1F973351", "0x22aF8cf4dE24Cbb09D5D6DA6c6989E0e5315078a", "0xFcCE91F39E2C001ED59204A9f321Ce741975E7dd", "0x7A768244C32fB024B254acFbE2dFF59919b63898", "0x754c68d82DF83699aD2179927c3F9312FF5590e7", "0x40581B22EA850D3eC905A4D21f860A489b625d20", "0x3f4D34336a1357a19BeBb824166Ac12FAC5676B3"]}'```


### Docker Containers 

#### Build it

To build my docker container I ran the below command:

```docker build -t nciblockchain .```

To run the container I ran 

 ```docker run -p 9000:9000 --name nciblockchain -d neasania/nciblockchain ```

#### To push to Dockerhub 
```docker login --username=<username>``` and password

### I then Tagged image before pushing to Dockerhub
```docker tag nciblockchain:latest neasania/nciblockchain```

#### Pushed to Dockerhub 
```docker push neasania/nciblockchain```

#### To pull  my docker image from dockerhub you need to run this command 
```docker pull neasania/nciblockchain```

### To run the docker image 
```docker run -p 9000:9000 --name nciblockchain -d neasania/nciblockchain```

### To confirm image is working
```curl -get 'http://localhost:9000/symbol'```
This will return the token "Nessy"

To run the Distribute command
```curl -XPOST http://localhost:9000/distribute -H 'content-type: application/json' -d '{"addresses": ["0x9b14eeE99808BaB2a4C6492D37B4D771F75b7631", "0xe8a43eFC2CE385AbA7465101262b03B0d2489c43", "0x9ca3208d90Ce19f42F2e5FC435ADA5922cB34989", "0x1F4aB29bDe4fb3b29d40577c55a7Ae7c1F973351", "0x22aF8cf4dE24Cbb09D5D6DA6c6989E0e5315078a", "0xFcCE91F39E2C001ED59204A9f321Ce741975E7dd", "0x7A768244C32fB024B254acFbE2dFF59919b63898", "0x754c68d82DF83699aD2179927c3F9312FF5590e7", "0x40581B22EA850D3eC905A4D21f860A489b625d20", "0x3f4D34336a1357a19BeBb824166Ac12FAC5676B3"]}''```


This may take a long time to complete as it is interacting with the blockchain. If it appears that it didn't run, please run 
```docker logs nciblockchain``` to see the output


