// import axios from "axios"
// import { useState, useEffect } from "react"
// import Information from "./Information"

// const NewAritcle = () => {
//   const [imageURLS, setImageURLS] = useState([])
//   const [test, setTest] = useState("")
//   const [isSuccess, setIsSuccess] = useState(false)

//   const handleImage = (e) => {
//     const images = Array.from(e.target.files).map((file) =>
//       URL.createObjectURL(file),
//     )
//     setImageURLS(images)
//   }

//   useEffect(() => {
//     setImageURLS([])
//   }, [isSuccess])

//   return (
//     <Information />
//     <div style={{ display: "flex", flexDirection: "column" }}>
//       <form
//         action="http://localhost:5000/api/upload"
//         method="post"
//         encType="multipart/form-data"
//       >
//         <input
//           type="file"
//           name="images"
//           multiple
//           onChange={handleImage}
//         ></input>
//         <input type="submit" value="Submit"></input>
//       </form>
//       {imageURLS &&
//         imageURLS.map((imageURL, index) => {
//           console.log(imageURL)
//           return (
//             <img
//               key={index}
//               src={imageURL}
//               alt="update"
//               style={{ height: "100px", width: "100px" }}
//             ></img>
//           )
//         })}
//     </div>
//   )
// }

// export default NewAritcle
