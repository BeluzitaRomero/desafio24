// import * as mod from "https://deno.land/std@0.95.0/examples/colors.ts";
import {
  bgBlue,
  bold,
  italic,
  green,
} from "https://deno.land/std/fmt/colors.ts";

console.log(bgBlue(italic(green(bold("Hello world")))));
