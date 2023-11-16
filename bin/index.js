#! /usr/bin/env node

const { execSync } = require("child_process");

const args = process.argv.slice(2);
if (args.length === 0) return;

execSync(
  `npx react-native@latest init ${args[0]} --template @haris523/react-native-starter`
);
