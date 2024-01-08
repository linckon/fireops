FROM ubuntu:22.04

RUN apt-get update && \
    apt-get -y install sudo
# curl
RUN sudo apt-get install curl -y
# azure cli
# RUN curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
# terraform
# RUN apt-get update && apt-get install -y gnupg software-properties-common curl
# RUN curl -fsSL https://apt.releases.hashicorp.com/gpg | apt-key add -
# RUN apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
# RUN apt-get update && apt-get install terraform -y
# vim
# Update the package list and install necessary dependencies
RUN apt-get update && \
    apt-get install -y wget unzip git make && \
    rm -rf /var/lib/apt/lists/*
# Download and install Terraform
RUN wget -q https://releases.hashicorp.com/terraform/1.3.9/terraform_1.3.9_linux_amd64.zip && \
    unzip terraform_1.3.9_linux_amd64.zip && \
    mv terraform /usr/local/bin/ && \
    rm terraform_1.3.9_linux_amd64.zip
    
# RUN sudo apt install vim -y 
# git
# Copy the Terraform files to the container's working directory
# Set the working directory to /terraform
WORKDIR /pipeline
COPY . /pipeline

# kubectl
