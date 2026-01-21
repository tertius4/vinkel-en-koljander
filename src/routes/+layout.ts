import { FIREBASE_CONFIG, APP_NAME } from "$lib";
import { initializeApp } from "firebase/app";

export async function load() {
  const app = initializeApp(FIREBASE_CONFIG, APP_NAME);
}
