Verify Users
Access the openldap container:
ldapsearch -x -LLL -D "cn=admin,dc=wbms,dc=dsn" -w admin -b "dc=wbms,dc=dsn" -s sub "(objectClass=*)"
docker-dsnpose exec openldap bash
openssl s_client -connect wbms.dsn:389 -starttls ldap -showcerts
You can use ldapsearch to verify our user:
ldapsearch -x -h openldap -D "uid=ruan,ou=people,dc=wbms,dc=org" -b "ou=people,dc=wbms,dc=org" -w "$PASSWORD" -s base 'uid=ruan'
Or we can use ldapwhoami:
ldapwhoami -vvv -h ldap://openldap:389 -p 389 -D 'uid=ruan,ou=people,dc=wbms,dc=org' -x -w "$PASSWORD"

ldapadd -W -H ldap://openldap -D 'cn=admin,dc=wbms,dc=dsn' <<LDIF
LDIF
ldapadd -x -D 'cn=admin,dc=wbms,dc=dsn' -w admin -h ldap://openldap:389 -p 389  -f  '/assets/openldap/custom/ldif/bootstrap.ldif'
ldapsearch -x -h ldap://openldap:389 -p 389  -D "cn=admin,dc=wbms,dc=dsn"  -w admin -s base 'dc=wbms,dc=dsn'

LDAP_HOST=192.168.202.24
LDAP_USERNAME=null
LDAP_PASSWORD=null
LDAP_BASE_DN="dc=hco,dc=dsngroup,dc=co,dc=id"

Yes, Redis can be used to handle Server-Sent Events (SSE) in a web application. SSE is a technology that allows a web server to push real-time updates to a web browser over a single HTTP connection. While SSE is typically used for simpler real-time scenarios compared to more advanced technologies like WebSockets, Redis can still play a role in implementing SSE.

Here's a basic outline of how you could use Redis to handle SSE:

1. **Setup SSE Endpoint**:
   In your NestJS application, set up an SSE endpoint that clients (browsers) can connect to. This endpoint will continuously send updates to connected clients.

   ```typescript
   // sse.controller.ts
   import { Controller, Get, Req, Res } from '@nestjs/common';
   import { Response } from 'express';
   import { RedisService } from 'nestjs-redis';

   @Controller('sse')
   export class SSEController {
     constructor(private readonly redisService: RedisService) {}

     @Get()
     async streamSSE(@Req() req, @Res() res: Response): Promise<void> {
       res.setHeader('Content-Type', 'text/event-stream');
       res.setHeader('Cache-Control', 'no-cache');
       res.setHeader('Connection', 'keep-alive');
       res.flushHeaders();

       const client = this.redisService.getClient();

       // Subscribe to Redis channel for updates
       client.subscribe('sse-channel');
       client.on('message', (channel, message) => {
         if (channel === 'sse-channel') {
           res.write(`data: ${message}\n\n`);
         }
       });

       // Send initial SSE message
       res.write('data: Initial SSE message\n\n');

       // Handle client disconnection
       req.on('close', () => {
         client.unsubscribe('sse-channel');
         res.end();
       });
     }
   }
   ```

2. **Publish Updates to Redis**:
   In your application's logic (controllers, services, etc.), publish updates to the Redis channel whenever you want to notify connected clients.

   ```typescript
   // some.service.ts
   import { Injectable } from '@nestjs/common';
   import { RedisService } from 'nestjs-redis';

   @Injectable()
   export class SomeService {
     constructor(private readonly redisService: RedisService) {}

     async publishUpdate(message: string): Promise<void> {
       const client = this.redisService.getClient();
       await client.publish('sse-channel', message);
     }
   }
   ```

3. **Client-Side Implementation**:
   On the client side (in your ReactJS application), establish a connection to the SSE endpoint and handle incoming updates.

   ```javascript
   // SSEClient.js
   const connectSSE = () => {
     const eventSource = new EventSource('/sse');
     eventSource.onmessage = (event) => {
       const message = event.data;
       // Handle the incoming message, e.g., update UI
     };
     eventSource.onerror = (error) => {
       console.error('SSE Error:', error);
       eventSource.close();
     };
   };

   connectSSE();
   ```

By combining Redis with SSE, you can achieve a basic form of real-time communication where updates published by your NestJS application are sent to connected clients in near real-time. Keep in mind that SSE is best suited for scenarios where real-time updates are important but not extremely time-sensitive, as SSE doesn't provide the same level of interactivity as WebSockets.

