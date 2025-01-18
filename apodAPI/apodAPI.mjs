// Docs on request and context https://docs.netlify.com/functions/build/#code-your-function-2
// export default (request, context) => {
//   try {
//     const url = new URL(request.url)
//     const subject = url.searchParams.get('name') || 'World'

//     return new Response(`Hello ${subject}`)
//   } catch (error) {
//     return new Response(error.toString(), {
//       status: 500,
//     })
//   }
// }

const handler = async(event) =>  {
  try {
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({message: `Hello ${subject}`}),
    }
  } catch(error) {
    return{statusCode: 500, body: error.toString()}
  }
}
