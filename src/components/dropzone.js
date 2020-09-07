/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { useMutation } from "@apollo/client"
import gql from "graphql-tag"

const MUTATION = gql`
  mutation($image: String!) {
    uploadImage(image: $image)
  }
`

const DropZone = (props) => {
  const [mutate] = useMutation(MUTATION, {
    onCompleted(success) {
      console.log(success)
    },
  })

  const onDrop = useCallback(
    (files) => {
      files.forEach((file) => {
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
    <div
      sx={{
        cursor: "pointer",
        // p: 4,
        border: "2px dashed",
        borderColor: isDragActive ? "primary" : "text",
        color: isDragActive ? "primary" : "text",
        textAlign: "center",
      }}
      {...getRootProps()}
      {...props}
    >
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
