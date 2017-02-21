# us-random-uuid

Nodejs application which display a randomly generated UUID for testing purpose

# Quick start

This application can be run either from node or using Docker.

## Running with node

These are the steps require to run the application using Node. In the cloned repository, from a terminal :

    # Install dependencies
    npm Install

    # Run application
    node index.js

## Running using Docker

### Run from Docker hub

From the terminal :

    docker run -p <port>:8080 -d joscelynjean/random-uuid

### Build the image

If you want to build the image, use the following command from terminal, inside your cloned repository :

    docker build -t <your username>/random-uuid .

### Run a container using the builded image

Now that your image has been built, you can run it using Docker. From a terminal :

    docker run -p <port>:8080 -d <your username>/random-uuid
