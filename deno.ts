import { format, parse } from "https://deno.land/std@0.150.0/datetime/mod.ts";
// import { parse } from "https://deno.land/std/datetime/mod.ts";

/* ----------------------------- primer ejemplo ----------------------------- */

// function helloDeno(nombre: string) {
//   return `Hello ${nombre}`;
// }

// console.log(helloDeno("Coderhouse Deno"));

/* ------------------------------primera importacion------------------------- */
const myDate = parse("07-30-2022", "mm-dd-yyyy");
console.log(myDate);

console.log(format(new Date(2022, 7, 4), "dd-MM-yyyy"));
