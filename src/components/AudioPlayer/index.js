const AudioPlayer = props => {
  const {previewUrl} = props

  console.log('preview', previewUrl)

  return (
    <audio controls>
      <source src={previewUrl} type="audio/mp3" />
      <track kind="captions" label="English captions" />
    </audio>
  )
}

export default AudioPlayer
