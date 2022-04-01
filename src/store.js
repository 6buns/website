import { readable } from "svelte/store";

export const FUNCTIONS_URL = readable(null, (set) => {
  if (!isProduction) {
    console.log("Developement Mode");
    set('http://localhost:5001/vide-336112/us-central1')
  } else {
    console.log("Production Mode");
    set('https://us-central1-vide-336112.cloudfunctions.net')
  }
  return () => { };
})
