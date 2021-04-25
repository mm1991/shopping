import NodeRSA from 'node-rsa';
import {getByUsername} from '../app/Controllers/Database/Users';
import md5 from 'md5';

const privateJwk = `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQC4zFu9jGEQB24zsPJASoRzHShLGVmXDoVWetLZenjcjKUbJ0QM
l70fjv3mfMmHowOvHxF0VRoTvbaJQEJcT9UPrMWEOLrT4TTTd6IAq7ObnsWjL9rZ
VBul+yzIkxhdL5d+dA33fAA8YHINjO497FoBeKy41HjxsNxE2Q0npv/MRQIDAQAB
AoGAKs3LAiCd6uSNthNqSVH5U+CRELQSeFa4s8tHQ3CGxi8dnyh9Lp2HBOROEzEc
TPqJQ+riVBvSKnhq62ei91bWdqGSbkhlAPNgR8lkbytS2e2SFp82/yd1Df6KCKXO
FiEmln4u5XWQRT67BmvHa6UHtZfIBqTBYXE41w8pMLG9PIECQQD0MxIGa0N2GwFs
XTrz8IMg6MhK1f/vWDPxGkv2Q5RGExrsQWC6GbAFehYUX7P0afzmuhOXTwCMsgN+
DYBdJ6fpAkEAwbpzXPStN1cnNted/VgFH9O+vjQqB/BY875QXQm9Y84O29PQFpj+
GuE21VjJCIr9fuXJpxI6OJDrngwAJcoj/QJBALOnyvAMA/KlBZQKtu92l5IjkA92
hzc35ebQWOhRaYlwTtNXeekQMu6klg/hJMyBGT1J0lX0GkxoPqeDGVfvb9kCQAtp
A+pxrtIXnAOq529Ig+S///gL8n3NNjAFAY65SCJcvJtN+m+aSz0iDqy6Mf0C0rNq
rVndxPgX8Qi6BDg1k7ECQE1jXNhWuIPmBsDYvdVb8XwgIZRD2Sa4P/JnQw+FLQRz
Vx4KtVyJzpxaLArpKPXKj6sHqj7Tuu5rTD6T5L/mopM=
-----END RSA PRIVATE KEY-----`;

const publicJwk = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4zFu9jGEQB24zsPJASoRzHShL
GVmXDoVWetLZenjcjKUbJ0QMl70fjv3mfMmHowOvHxF0VRoTvbaJQEJcT9UPrMWE
OLrT4TTTd6IAq7ObnsWjL9rZVBul+yzIkxhdL5d+dA33fAA8YHINjO497FoBeKy4
1HjxsNxE2Q0npv/MRQIDAQAB
-----END PUBLIC KEY-----`;

function rsaVerify(encrypted: string) {
    const key = new NodeRSA(privateJwk);
    key.setOptions({encryptionScheme: 'pkcs1'});
    return key.decrypt(encrypted, 'utf8');
}

function rsaEncrypted(text: string) {
    const key = new NodeRSA(publicJwk);
    key.setOptions({encryptionScheme: 'pkcs1'});
    return key.encrypt(text, 'base64');
}

function md5Pwd(password: string, salt: string) {
    return md5(md5(password) + salt);
}

export async function verify(username: string, password: string) {
    let pwd = rsaVerify(password);
    let data = await getByUsername(username);
    if (data && data.salt && md5Pwd(pwd, data.salt) === data.password) {
        return true;
    } else {
        return false;
    }
}


export function setuss(username: string, session) {
    let encryptname = rsaEncrypted(username);
    session.put(encryptname, 1);
    return encryptname;
}