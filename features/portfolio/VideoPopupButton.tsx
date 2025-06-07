import {
  Button,
  type ButtonProps,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export default function VideoPopupButton({
  videoSources,
  name,
  ...buttonProps
}: {
  videoSources: { type: string; src: string }[];
  name: string;
} & ButtonProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button {...buttonProps} onClick={() => onOpen()}>
        Ver demo video
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent my={0}>
          <ModalCloseButton />
          <ModalBody maxHeight="90vh" py={8}>
            <video controls autoPlay style={{ maxHeight: "65vh", margin: "0 auto" }}>
              {videoSources.map(({ src, type }) => (
                <source key={type} src={src} type={type} />
              ))}
              <track kind="captions" src="" label="English" />
            </video>

            <Text fontSize="sm" color="chakra-body-text-secondary" textAlign="center" mt={4}>
              {`This is a marketing video from ${name}'s website`}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
