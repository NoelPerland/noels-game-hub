import assert from 'node:assert/strict';
import http from 'node:http';
import { spawn } from 'node:child_process';
const child = spawn(process.execPath, ['server.js'], { env: { ...process.env, PORT: '18089' }, stdio: ['ignore', 'pipe', 'inherit'] });
const request = path => new Promise((resolve, reject) => { http.get({hostname:'127.0.0.1',port:18089,path}, response => { response.resume(); response.on('end',()=>resolve(response.statusCode)); }).on('error',reject); });
try {
  await new Promise((resolve,reject)=>{ child.stdout.once('data',resolve); child.once('error',reject); });
  assert.equal(await request('/%ZZ'),400);
  assert.equal(await request('/%00'),400);
  assert.equal(await request('/../dist-private/secret.txt'),403);
  assert.equal(await request('/'),200);
  assert.equal(await request('/missing.js'),404);
  console.log('Server rejects malformed URLs/traversal and remains available.');
} finally { child.kill(); }
