import { Box, Button, Link, Text } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import TagCloud from "../../../../components/TagCloud";
import DevicePreviews from "../../DevicePreviews";
import useMarkdownComponents from "../../hooks/useMarkdownComponents";
import ProjectPageButtonGroup from "../ProjectPageButtonGroup";
import ProjectPageFooter from "../ProjectPageFooter";
import ProjectPageHeader from "../ProjectPageHeader";
import ProjectPageMainContainer from "../ProjectPageMainContainer";
import after from "./after";
import Description from "./description.mdx";

const tags = [
  "React",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Stripe",
  "Brevo (Sendinblue)",
  "Node.js",
  "Koa",
  "Objection.js",
  "Knex",
  "SEO",
  "AWS",
  "AWS EC2",
  "AWS ALB",
  "AWS ECS",
  "AWS CloudFormation",
  "AWS Fargate",
  "AWS Lambda",
  "AWS S3",
  "AWS Route53",
  "AWS CloudFront",
  "AWS RDS",
  "AWS IAM",
  "AWS CloudWatch",
];

export default function AfterProjectPage() {
  const markdownComponents = useMarkdownComponents();

  return (
    <ProjectPageMainContainer>
      <ProjectPageHeader
        name={after.name}
        subheadline={
          "Collaborate with family and friends to create beautiful, emotional memorials for your loved ones in minutes"
        }
        logo={after.logoImage}
      />

      <DevicePreviews
        mb={10}
        mobileImage={after.mobileImage}
        desktopImage={after.desktopImage}
        mobileAppBarColor={after.mobileAppBarColor}
      />

      <Text mb={4} fontSize="md">
        {after.date}
      </Text>

      <MDXProvider components={markdownComponents}>
        <Box mb={{ base: 10, md: 16 }}>
          <Description />
        </Box>
      </MDXProvider>

      <ProjectPageButtonGroup>
        <Button as={Link} isExternal href="https://after.io" colorScheme="primary">
          Visit After
        </Button>
        <Button as={Link} isExternal href="https://after.io/snowy-de-torrelodones">
          View the memorial I use for tests
        </Button>
      </ProjectPageButtonGroup>

      <TagCloud
        tags={tags}
        mb={{ base: 12, md: 20 }}
        width={{ base: "100%", md: "80%" }}
        mx="auto"
      />

      <ProjectPageFooter currentSlug={after.slug} />
    </ProjectPageMainContainer>
  );
}
