import Users from '../../Models/User';

export async function getByUsername(username: string) {
    const result = await Users.findBy('username', username);
    return result;
}