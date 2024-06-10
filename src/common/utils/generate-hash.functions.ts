import * as bcrypt from 'bcrypt';

export async function generateHash(origin: string): Promise<string> {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(origin, salt);
}
