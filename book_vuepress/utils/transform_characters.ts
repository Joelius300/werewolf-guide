import { basename, dirname, format } from "https://deno.land/std@0.106.0/path/mod.ts";

type Character = {
    id: string,
    name: string,
    team: string,
    special: string,
};

if (!Deno.args)
    throw new Error('No input file provided..');

const filename = Deno.args[0];

const chars: Character[] = JSON.parse(await Deno.readTextFile(filename));

let mdPath: string;
if (Deno.args.length > 1) {
    mdPath = Deno.args[1];
} else {
    const mdFilename = basename(filename) + ".md";
    mdPath = format({
        dir: dirname(filename),
        name: mdFilename
    });
}

let md = '';
for (const char of chars) {
    md += `## ${char.name}\n`;
    md += `**Team: ${char.team}**\n\n`
    md += char.special;
    md += '\n\n';
}

await Deno.writeTextFile(mdPath, md);