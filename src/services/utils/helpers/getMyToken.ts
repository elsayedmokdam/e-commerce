export async function getMyToken() {
  const { cookies } = await import("next/headers");
  const { decode } = await import("next-auth/jwt");

  const cookieStore = await cookies();

  // Get the encrypted token from the cookie named "next-auth.session-token".
  const encryptedToken =
    cookieStore.get("next-auth.session-token")?.value ||
    cookieStore.get("__Secure-next-auth.session-token")?.value;

  if (!encryptedToken) return null;

  // Decode the token to get the real token stored in the "realToken" property of the JWT payload.
  const decoded = await decode({
    token: encryptedToken,
    secret: process.env.NEXTAUTH_SECRET!,
  });

  if (!decoded || !decoded.realToken) return null;

  return String(decoded.realToken);
}
