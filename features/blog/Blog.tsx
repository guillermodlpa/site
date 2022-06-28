import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import MagicalDivider from "../../components/MagicalDivider";

const posts = [
  {
    title: "Hiring Manager Lessons Learned",
    date: "2022-03-17",
    excerpt:
      "This blog post is to share some lessons I’ve learned as a hiring manager: Participate in Sourcing, Always Be Planting Seeds, Build Trust with Recruiting, and Set the Bar High with Candidate Experience.",
    imageSrc:
      "https://guillermodelapuente.com/uploads/roger-bradshaw-miEWeTPYsFE-unsplash-medium.jpeg",
    path: "/blog/hiring-manager-lessons-learned/",
  },
  {
    title: "What do we lose if we don’t make this decision?",
    date: "2022-02-08",
    excerpt:
      "This question brought clarity and alignment to a hard-to-follow discussion. I was so surprised about the result that I wrote this blog post.",
    imageSrc:
      "https://guillermodelapuente.com/uploads/saffu-E4kKGI4oGaU-unsplash-cover.jpeg",
    path: "/blog/what-do-we-lose-if-we-dont-make-this-decision/",
  },
  {
    title: "No-Oriented Questions To Get Others To Act",
    date: "2022-01-06",
    excerpt:
      "Asking no-oriented questions has improved my ability to influence others. Also, applying this technique to myself has pushed me to get done tedious but meaningful tasks I felt lazy about.",
    imageSrc:
      "https://guillermodelapuente.com/uploads/jonas-stolle-6rhdGmD6wfw-unsplash-small.jpeg",
    path: "/blog/no-oriented-questions-to-get-others-to-act/",
  },
];

export default function Blog() {
  return (
    <Container py={4} maxWidth="container.md">
      {posts.map((post) => (
        <Box key={post.title} mb={24}>
          <Box my={8}>
            <Heading as="h2" size="lg" mb={2}>
              <NextLink href={post.path}>
                <Link variant="inheritColorKeepHover">{post.title}</Link>
              </NextLink>
            </Heading>
            <MagicalDivider height="2px" />
          </Box>

          <Flex gap={8}>
            <Box
              sx={{
                width: " 25%",
                backgroundImage: `url(${post.imageSrc})`,
                backgroundSize: "contain",
                backgroundPosition: "top center",
                flexShrink: 0,
              }}
            />
            <Box>
              <Text>
                <Text
                  as="span"
                  variant="secondaryText"
                >{`${post.date} / `}</Text>
                {post.excerpt}{" "}
                <NextLink href={post.path} passHref>
                  <Link>Read more</Link>
                </NextLink>
              </Text>
            </Box>
          </Flex>
        </Box>
      ))}
    </Container>
  );
}
