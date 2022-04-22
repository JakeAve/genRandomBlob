# GenRandomBlob

Generate a blob of random bits (psuedo random using `Crypto.getRandomValues`) given a number of bytes.

## Usage

```typescript
const blob = genRandomBlob(1024);
console.log(blob.size); // 1024
console.log(blob.type); // "application/octet-stream"
```

## Test

```
deno task test
```
