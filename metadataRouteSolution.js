```javascript
import { NextResponse } from 'next/server'

export function middleware(req: Request) {
  // Check for specific conditions that lead to 404
  // ... (your condition check)

  if (/* your condition */) {
    return new NextResponse(null, {
      status: 404,
      headers: {
        'Cache-Control': 'public, max-age=60',
      },
    })
  } else {
    // other middleware logic
  }
} 

export const config = {
  matcher: ['/path/to/resource/:id'],
};
```