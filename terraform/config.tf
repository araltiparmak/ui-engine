terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.84.0"
    }
  }
  backend "s3" {
    bucket = "my-infra"
    key    = "ui-forge-engine.tfstate"
    region = "eu-central-1"
  }
  required_version = ">= 1.10.4"
}

provider "aws" {
  region = var.aws_region
  default_tags {
    tags = {
      ManagedBy = "terraform"
      Repo      = local.repo
    }
  }
}

locals {
  github_account = "araltiparmak"
  repo           = "ui-forge-engine"
  bucket         = "ui-forge-engine"
}