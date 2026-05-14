resource "aws_instance" "devops_server" {
  ami           = "ami-0f58b397bc5c1f2e8"
  instance_type = "t2.micro"

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