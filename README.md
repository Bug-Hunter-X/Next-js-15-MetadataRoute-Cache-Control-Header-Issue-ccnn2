# Next.js 15 MetadataRoute Cache-Control Header Issue

This repository demonstrates an unexpected behavior in Next.js 15's `MetadataRoute` when using the `Cache-Control` header.  The issue is that the cache directives specified in the `Cache-Control` header are not being respected, leading to inconsistent caching behavior.

## Bug Description

The `MetadataRoute` handler is designed to return metadata for a route.  We expect that setting `Cache-Control: public, max-age=60` would cache the response for 60 seconds. However, even when a route returns a 404 status code, the cached response (200 status code) is served. 

## Reproduction Steps

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe inconsistent behavior and unexpected responses.

## Solution

The provided solution explores alternative approaches to achieving the desired caching behavior within the constraints of Next.js 15.
