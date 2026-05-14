terraform {
  # 1. This block is for the tools/plugins
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # 2. This block is for your state storage (Moved outside required_providers)
  backend "s3" {
    bucket = "ayush-bucket-007"
    key    = "terraform.tfstate"
    region = "ap-south-1"
  }
}

provider "aws" {
  region = "ap-south-1"
}