module "website" {
  source              = "github.com/araltiparmak/terraform-modules//static-site?ref=v1.1.1"
  domain_name         = local.bucket
  with_cloudfront     = true
  cloudfront_aliases  = ["formsmith.araltiparmak.com"]
  acm_certificate_arn = local.acm_certificate_arn
  error_document      = "index.html"
}

data "aws_secretsmanager_secret" "acm_cert" {
  name = "cloudfront_cert"
}

data "aws_secretsmanager_secret_version" "acm_cert_version" {
  secret_id = data.aws_secretsmanager_secret.acm_cert.id
}

locals {
  acm_certificate_arn = jsondecode(data.aws_secretsmanager_secret_version.acm_cert_version.secret_string)["cloudfront_cert"]
}
