import path from 'path';
import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUIDirectory = project.getDirectory(uiPath);
const componentsDirs = sharedUIDirectory?.getDirectories();

function isAbsolutePath(value: string) {
    const layers = [
        'app',
        'shared',
        'entities',
        'features',
        'pages',
        'widgets',
    ];

    return layers.some((layer) => value.startsWith(layer));
}

componentsDirs?.forEach((dir) => {
    const indexFilePath = dir.getPath() + '/index.ts';

    const indexFile = dir.getSourceFile(indexFilePath);
    if (!indexFile?.getBaseName()) {
        const sourceCode = `export * from './${dir.getBaseName()}'`;
        const file = dir.createSourceFile(indexFilePath, sourceCode);
        file.save();
    }
});

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();

    importDeclarations.forEach((el) => {
        const value = el.getModuleSpecifierValue();
        const valueWithoutAlias = value.replace('@/', '');

        const segments = valueWithoutAlias.split('/');

        const isSharedLayer = segments[0] === 'shared';
        const isUISlice = segments[1] === 'ui';
        if (isAbsolutePath(valueWithoutAlias) && isSharedLayer && isUISlice) {
            const result = valueWithoutAlias.split('/').slice(0, 3).join('/');
            el.setModuleSpecifier(`@/${result}`);
        }
    });
});

project.save();
