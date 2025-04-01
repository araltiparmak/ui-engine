module "website" {
  source          = "github.com/araltiparmak/terraform-modules//static-site?ref=v1.1.0"
  domain_name     = local.bucket
  with_cloudfront = true
}
