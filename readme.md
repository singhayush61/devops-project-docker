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