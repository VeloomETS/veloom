## Run on localhost

run `npm install` to install all the requirements. Then run `npm run start`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
1. CTRL+c to terminate batch job
2. Run `git add .`
3. Run `git commit -m "tell us what changes where made"`
4. Run `git push`
5. Don't forget to add the dot "./" in the index.html folder line 9
6. Run `npm install -g angular-cli-ghpages`
7. Run `ng build --prod --base-href` to build the project
8. Run `ngh`

For first time use, configure git by doing `git config --global user.email "veloom@ens.etsmtl.ca"` 
and `git config --global user.name "VeloomETS"`

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
To add it to the github pages, add `--base-href https://veloomets.github.io/veloom/`. After that, run  `ngh`
