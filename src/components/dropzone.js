import React, { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"

const MUTATION = gql`
  mutation($image: String!) {
    uploadImage(image: $image)
  }
`

const DropZone = () => {
  const [mutate] = useMutation(MUTATION, {
    onCompleted(success) {
      console.log(success)
    },
  })

  const onDrop = useCallback(
    files => {
      files.forEach(file => {
        const reader = new FileReader()
        reader.onabort = () => console.log("file reading was aborted")
        reader.onerror = () => console.log("file reading has failed")
        reader.onload = () => {
          const image = reader.result
          mutate({ variables: { image } })
        }
        reader.readAsDataURL(file)
      })
    },
    [mutate]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  )
}

export default DropZone
