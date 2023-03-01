# PackageBased

This is a repo was created to demonstrate an issue with npm link protocol on nx.

## Steps to reproduce

```bash
cd samples/sample-a
npm install
```

This will crash with the following error:

```bash
npm ERR! code ENOENT
npm ERR! syscall open
npm ERR! path package-based/samples/sample-a/node_modules/core-lib/package.json
npm ERR! errno -2
npm ERR! enoent ENOENT: no such file or directory, open 'package-based/samples/sample-a/node_modules/core-lib/package.json'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent

npm ERR! A complete log of this run can be found in:
npm ERR!     USER/.npm/_logs/2023-03-01T21_10_38_426Z-debug-0.log
```

To work around this issue, you can add the core-lib dependency to the package.json file:

```json
{
  "dependencies": {
    "@package-based/core-lib": "file:../../dist/packages/core-lib",
    "@package-based/lib-a": "file:../../dist/packages/lib-a"
  }
}
```

Then run:

```bash
npm install
```

This will work as expected but it's not ideal because it requires the developer to manually add the sub-dependency to the package.json file.

It increases as you have more sub-dependencies like with sample-b:

```bash
cd samples/sample-b
npm install
```

Now you will see the same error as sample-a, but this time to solve you will need to add both packages to the package.json file:

```json
{
  "dependencies": {
    "@package-based/core-lib": "file:../../dist/packages/core-lib",
    "@package-based/lib-a": "file:../../dist/packages/lib-a",
    "@package-based/lib-b": "file:../../dist/packages/lib-b"
  }
}
```
