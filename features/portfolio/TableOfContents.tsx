import { Container, Link, ListItem, OrderedList } from "@chakra-ui/react";
import professionalProjects from "./data/professionalProjects";

export default function TableOfContents() {
  return (
    <Container
      py={4}
      px={6}
      mt={5}
      mb={10}
      maxWidth="sm"
      borderWidth={1}
      borderColor="chakra-border-color"
    >
      <OrderedList styleType="none" p={0} m={0}>
        <ListItem>
          <Link href="#">Professional Projects</Link>

          <OrderedList
            styleType="none"
            p={0}
            m={0}
            pb={2}
            paddingInlineStart="2ch"
          >
            {professionalProjects.map((project) => (
              <ListItem key={project.name}>
                <Link href={`#${project.anchorId}`}>Splash</Link>
              </ListItem>
            ))}
          </OrderedList>
        </ListItem>

        <ListItem>
          <Link href="#">Personal Projects</Link>

          <OrderedList
            styleType="none"
            p={0}
            m={0}
            pb={2}
            paddingInlineStart="2ch"
          >
            <ListItem>
              <Link href="#">Quatro</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Travelmap</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Notion-powered blog</Link>
            </ListItem>
            <ListItem>
              <Link href="#">depor.travel</Link>
            </ListItem>
          </OrderedList>
        </ListItem>
      </OrderedList>
    </Container>
  );
}
