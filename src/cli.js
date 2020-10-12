#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
/**
 * This is the tiny CLI for jsx-readme
 * it has two functions Start() that activates the CLI when called with the handle 'jsx-readme'
 * and CreateReadmeJsx() creates the actual README.md.tsx file
 */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
var _require = require("child_process"), execSync = _require.execSync;
var Cli = /** @class */ (function () {
    function Cli() {
        this.clear = require('clear');
        this.figlet = require('figlet');
        this.path = require('path');
        this.chalk = require('chalk');
        this.commander = require('commander');
        this.pjson = require('../package.json');
        this.FileApi = require('fs');
    }
    Cli.prototype.Start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.clear();
                        console.log(this.chalk.red(this.figlet.textSync('jsx-readme', { horizontalLayout: 'full' })));
                        this.commander
                            .version(this.pjson.version)
                            .name('jsx-readme')
                            .description("Generate Readme files with a React-like syntax and package.json-aware helpers.")
                            .command('init [path]')
                            .description('Creates a README.jsx file template in the specified path')
                            .action(this.CreateReadmeJsx);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.commander.parse(process.argv)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     *
     * @param path the actual path for the README.md.tsx file to be output
     */
    Cli.prototype.CreateReadmeJsx = function (path) {
        console.log('Creating README.md.tsx file in with the following path' + path);
        //make sure the path is well written
        if (path.charAt(path.length - 1) !== '/') {
            path = path + '/';
        }
        // we check if the path given exists
        if (!this.FileApi.exists(path)) {
            throw new Error('Path specified does not exist');
        }
        var template_readme_file = "// We need to tell the JSX transpiler that in this file,\n   // instead of React we use the custom createElement and Fragment\n   // functions from jsx-readme\n   /* @jsx MD */\n   /* @jsxFrag Fragment */\n   import type { Component } from \"..\";\n   import MD, {\n     BadgesFromPkg,\n     CodecovBadge,\n     DescriptionFromPkg,\n     ExamplesFromPkg,\n     Fragment,\n     GithubWorkflowBadge,\n     HomepageFromPkg,\n     renderToFile,\n     TitleFromPkg,\n     DiscordBadge,\n     HacktoberfestBadge,\n   } from \"..\";\n   import { Heading, InlineCode, LineBreak } from \"jsx-md\";\n   import pkg from \"./package.json\";\n\n   const Readme: Component = () => (\n     <Fragment>\n       {/* Create a header with title, badges and description inferred from package.json */}\n       <TitleFromPkg pkg={pkg} />\n       <BadgesFromPkg pkg={pkg} />\n       {/* Add additional badges. */}\n       <CodecovBadge pkg={pkg} />\n       <GithubWorkflowBadge pkg={pkg} workflowName=\"Build and deploy\" />\n       <DiscordBadge\n         inviteLink=\"https://discord.com/invite/X9HRSK5\"\n         serverId=\"750063320614174871\"\n       />\n       <HacktoberfestBadge\n         pkg={pkg}\n         year={2020}\n         suggestionLabel=\"good first issue\"\n       />\n       <LineBreak />\n       <DescriptionFromPkg pkg={pkg} />\n       {/* You can use the components from jsx-md to build custom markdown. */}\n       <Heading level={2}>Installation</Heading>\n       Add <InlineCode>jsx-readme</InlineCode> to your{\" \"}\n       <InlineCode>devDependencies</InlineCode> and install it. I recommend using\n       it with <InlineCode>ts-node</InlineCode>. Then all you need to do is add a\n       file like in the example below and run it via{\" \"}\n       <InlineCode>ts-node</InlineCode> whenever you want to create a new version\n       of the <InlineCode>README</InlineCode>.\n       <LineBreak />\n       <LineBreak />\n       {/* Create an example section based on all files from the example directory set up in package.json */}\n       <ExamplesFromPkg pkg={pkg} />\n       {/* Create a section linking to the homepage from package.json */}\n       <HomepageFromPkg pkg={pkg} />\n     </Fragment>\n   );\n\n   void renderToFile(\"./README.md\", <Readme />);\n   ";
        this.FileApi.writeFile(path + 'README.md.tsx', template_readme_file, function (err) {
            if (err)
                throw new Error("jsx-readme couldn't create template file due to the next error:" + ' ' + err.message);
            console.log('Successfully created the file!');
        });
    };
    return Cli;
}());
exports["default"] = Cli;
/* eslint-enable @typescript-eslint/no-unsafe-assignment */
var cli = new Cli();
cli.Start();
process.exit(0);
