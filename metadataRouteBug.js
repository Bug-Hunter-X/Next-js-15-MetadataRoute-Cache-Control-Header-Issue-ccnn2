```javascript
import { MetadataRoute } from 'next/server'

export default function MetadataRouteHandler(): MetadataRoute {
  return {
    headers: {
      'Cache-Control': 'public, max-age=60',
    },
  }
}
```