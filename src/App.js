import Button from "@mui/material/Button";
import { useContext } from "react";

import FirebaseContext from "./context/firebase";
export default function App() {
  const { firebaseApp } = useContext(FirebaseContext);

  console.log("FirebaseApp", firebaseApp);

  return <Button variant="contained">Hello World</Button>;
}
