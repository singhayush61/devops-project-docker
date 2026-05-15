# Project Setup Guide

## Prerequisites

Install:

- Git
- Docker
- Node.js
- Terraform
- AWS CLI

---

# 1. Clone Repository

```bash
git clone <your-repository-url>
cd project-name
````

---

# 2. Install Node Dependencies

```bash
npm install
```

---

# 3. Run Tests

```bash
npm test
```

---

# 4. Build Docker Image

```bash
docker build -t ayushsingh0/devops-project:v1 .
```

---

# 5. Push Docker Image

```bash
docker push ayushsingh0/devops-project:v1
```

---

# 6. Configure AWS Credentials

```bash
aws configure
```

Provide:

* AWS Access Key
* AWS Secret Key
* Region

---

# 7. Deploy Infrastructure using Terraform

```bash
cd terraform
terraform init
terraform apply -auto-approve
```

---

# 8. Verify EC2 Instance

```bash
ssh -i devops.pem ubuntu@<EC2_PUBLIC_IP>
```

---

# 9. Verify Docker

```bash
docker --version
docker compose version
```

---

# 10. GitHub Secrets Required

Repository → Settings → Secrets and Variables → Actions

Required Secrets:

```text
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
DOCKER_USERNAME
DOCKER_PASSWORD
EC2_SSH_KEY
```

---

# 11. Trigger CI/CD Pipeline

```bash
git add .
git commit -m "deployment update"
git push origin main
```

---

# 12. Access Application

```text
http://<EC2_PUBLIC_IP>:3000
```

````