// Dummy function to ensure Netlify Functions directory exists
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from KAIF" })
  };
};