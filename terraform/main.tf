resource "aws_instance" "devops_server" {
  ami = "ami-07a00cf47dbbc844c"

  instance_type = "t3.micro"

  key_name = "devops"

  vpc_security_group_ids = [aws_security_group.devops_sg.id]

  tags = {
    Name = "devops-project-server"
  }

  user_data = <<-EOF
              #!/bin/bash

              sudo apt update -y
              sudo apt install docker.io -y
              sudo apt install docker-compose -y

              sudo systemctl start docker
              sudo systemctl enable docker

              usermod -aG docker ubuntu
              EOF
}