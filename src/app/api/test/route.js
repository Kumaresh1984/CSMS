export async function GET() {
  const trustedHosts = process.env.TRUSTED_HOSTS || 'Undefined' // 👈 read from env

  return Response.json({
    message: `Trusted Hosts: ${trustedHosts}`
  })
}
