# Production-Ready DevOps CI/CD Pipeline Project

# Project Architecture

```text
Developer Push
      ↓
GitHub Repository
      ↓
GitHub Actions CI/CD Pipeline
      ↓
Run Tests (npm test)
      ↓
Terraform Provisioning
      ↓
AWS EC2 Infrastructure
      ↓
Docker Image Build
      ↓
Push Image to Docker Hub
      ↓
SSH Deployment via GitHub Actions
      ↓
Docker Compose Deployment on EC2
      ↓
Live Node.js Application
```

---

# Recommended Final Architecture

```text
┌───────────────────────────┐
│        Developer          │
│  VS Code + Git + Docker   │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│          GitHub           │
│      Source Control       │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│     GitHub Actions CI     │
│ npm test + Docker Build   │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│        Docker Hub         │
│      Container Images     │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│         Terraform         │
│  Infrastructure as Code   │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│          AWS EC2          │
│ Ubuntu + Docker Compose   │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│      Node.js Container    │
│      Running on Port      │
└───────────────────────────┘
```

---

# Suggested Repository Structure

```text
project-root/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── terraform/
│   ├── main.tf
│   ├── provider.tf
│   ├── outputs.tf
│   └── variables.tf
│
├── app/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── Dockerfile
├── docker-compose.yml
├── README.md
├── SETUP.md
└── .gitignore
```

---

# README.md

````md
# Full CI/CD Pipeline using GitHub Actions, Docker, Terraform and AWS EC2

## Overview

This project demonstrates a complete DevOps CI/CD pipeline for a Node.js application using:

- GitHub Actions
- Docker
- Docker Hub
- Terraform
- AWS EC2
- Docker Compose

The pipeline automatically:

1. Runs tests
2. Builds Docker image
3. Pushes image to Docker Hub
4. Creates infrastructure using Terraform
5. Deploys containerized application to AWS EC2

---

## Tech Stack

- Node.js
- Docker
- Docker Compose
- GitHub Actions
- Terraform
- AWS EC2
- Ubuntu Server

---

## CI/CD Workflow

```text
GitHub Push
    ↓
GitHub Actions
    ↓
Run Tests
    ↓
Terraform Apply
    ↓
Docker Build
    ↓
Docker Hub Push
    ↓
Deploy to EC2
````

---

## Features

* Automated CI/CD pipeline
* Infrastructure as Code using Terraform
* Containerized Node.js application
* Docker Compose deployment
* Auto deployment on push to main branch
* AWS EC2 provisioning
* Docker Hub integration

---

## Docker Hub

Docker Image:

```text
ayushsingh0/devops-project:v1
```

---

## GitHub Actions Workflow

Workflow File:

```text
.github/workflows/deploy.yml
```

---

## Terraform Commands

### Initialize Terraform

```bash
terraform init
```

### Apply Infrastructure

```bash
terraform apply -auto-approve
```

### Destroy Infrastructure

```bash
terraform destroy -auto-approve
```

---

## Run Docker Locally

### Build Image

```bash
docker build -t devops-project .
```

### Run Container

```bash
docker run -p 3000:3000 devops-project
```

---

## Future Improvements

* NGINX Reverse Proxy
* HTTPS with Certbot
* Monitoring using Prometheus & Grafana
* Kubernetes Deployment
* AWS ECS Migration
* Terraform Remote Backend

---

## Author

Ayush Singh

````

---

# SETUP.md

```md
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

---

# Screenshot Suggestions

## Screenshot 1 — GitHub Repository

Capture:
- Repository structure
- README visible
- workflow folder visible

---

## Screenshot 2 — GitHub Actions Success

Capture:
- Green successful pipeline
- All stages visible:
  - npm test
  - terraform apply
  - docker build
  - deploy

---

## Screenshot 3 — Docker Hub Image

Capture:
- Repository name
- Latest image tag
- Push timestamp

---

## Screenshot 4 — Terraform Apply Output

Capture:
- EC2 creation logs
- terraform apply success

---

## Screenshot 5 — EC2 Running Container

Command:

```bash
docker ps
````

Capture:

* Running container
* Port mapping

---

## Screenshot 6 — Live Application

Browser screenshot:

```text
http://EC2_IP:3000
```

---

## Screenshot 7 — AWS EC2 Dashboard

Capture:

* Running EC2 instance
* Public IP
* Security group

---

## Screenshot 8 — Architecture Diagram

Use:

* Excalidraw
* Draw.io
* Figma
* Canva

Suggested flow:

```text
GitHub → GitHub Actions → Terraform → AWS EC2 → Docker Compose → Node.js App
```

---

# Resume Project Description

## Resume Version

Production-ready CI/CD pipeline project using GitHub Actions, Docker, Terraform, Docker Compose, and AWS EC2. Automated infrastructure provisioning, Docker image deployment, and application delivery pipeline for a containerized Node.js application.

---

# Suggested LinkedIn Project Title

Full CI/CD Pipeline using GitHub Actions, Docker, Terraform and AWS EC2
