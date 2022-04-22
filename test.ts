import {
  assertEquals,
  assertInstanceOf,
} from "https://deno.land/std@0.136.0/testing/asserts.ts";

import { genRandomBlob } from "./genRandomBlob.ts";

Deno.test("It returns a Blob instance", () => {
  const blob = genRandomBlob(1024);
  assertInstanceOf(blob, Blob);
});

Deno.test("It returns a blob with the correct size", async () => {
  const blob = genRandomBlob(1024);
  const buff = await blob.arrayBuffer();
  assertEquals(buff.byteLength, 1024);
});

Deno.test("It returns a blob with the correct type", async () => {
  const blob = genRandomBlob(1024);
  assertEquals(blob.type, "application/octet-stream");
});
