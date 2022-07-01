import probe from "probe-image-size";

export default async function probeImageSize(url: string) {
  const dim = await probe(url);
  return { width: dim.width, height: dim.height };
}
