import Image from "next/image";
import styles from "./page.module.css";
import { auth } from "./_lib/auth";

export default async function Home() {
  const authInfo = await auth();
  console.log(authInfo);
  return (
    <div className={styles.page}>
      <h1>hello from Next JS</h1>
      {authInfo?.user && <h1> Ya {authInfo.user.name} </h1>}
    </div>
  );
}
