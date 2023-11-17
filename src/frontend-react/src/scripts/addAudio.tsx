export function addAudioElement(blob: Blob, setBlob: (blob: Blob) => void) {
  const data: Blob[] = []

  data.push(blob)

  const blobvar = new Blob(data, {
    type: 'audio/x-flac',
  })

  setBlob(blobvar)
}
