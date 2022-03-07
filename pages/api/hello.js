// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  body = await ky.post('http://localhost:3000/db/saveData', { json: { value: "hello world" } }).json();
  console.log(body);

}
