import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const post = {
  title: "Hiring Manager Lessons Learned",
  date: "2022-03-17",
  imageSrc:
    "https://guillermodelapuente.com/uploads/roger-bradshaw-miEWeTPYsFE-unsplash-medium.jpeg",
  imageAlt: "Owl",
  path: "/blog/hiring-manager-lessons-learned/",
  paragraphs: [
    "Photo by Roger Bradshaw on Unsplash",
    "This blog post is to share some lessons I’ve learned as a hiring manager.",
    "Back in 2017, when I started building a software engineering team in Madrid, I felt pretty much on my own. I did everything, like writing the job postings, publishing them in developer communities, sourcing via LinkedIn, sending hundreds of contact invitations, scheduling interviews, extending offers, and rejecting candidates. Some things were easy, others very hard, and I made a few mistakes too. I worked with external recruiting agencies. Some were fruitful, like Akuaro, and some weren’t. I learned what great candidate experience is, both by interviewing as a candidate with other companies to learn about their process, and by being part of the recruiting network Circular and joining their meetups. It was all so time-consuming, but I learned a lot, the effort paid off, and it helped me become a confident hiring manager and build a solid team.",
    "Nowadays, with such a strong recruiting team at Splash, I don’t do everything on my own anymore. They are experts, and they do it great. Still, the success of the previous years led me to believe that hiring managers should be actively involved in the process. This belief translates in the following principles:",
  ],
};

export default function Blog() {
  return (
    <Container py={4} maxWidth="container.md">
      <Heading as="h1" mb={4}>
        {post.title}
      </Heading>
      <Text variant="secondaryText" mb={4}>
        {post.date}
      </Text>
      <Box mb={4}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.imageSrc} alt={post.imageAlt} />
      </Box>

      {post.paragraphs.map((paragraph, key) => (
        <Text key={key} mb={4}>
          {paragraph}
        </Text>
      ))}

      <Text textAlign="center">
        <NextLink href="/blog" passHref>
          <Link>Back to all posts</Link>
        </NextLink>
      </Text>
    </Container>
  );
}
