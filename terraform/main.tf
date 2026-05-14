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

              apt update -y
              sudo apt install docker.io docker-compose-plugin -y

              systemctl start docker
              systemctl enable docker

              usermod -aG docker ubuntu
              EOF
}