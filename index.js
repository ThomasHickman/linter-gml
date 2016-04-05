var gmlParser = require("gml-pegjs");

module.exports = {
    provideLinter: () => {
        return {
            name: "linter-gml",
            grammarScopes: ['source.gml'],
            scope: "file",
            lintOnFly: true,
            lint: (textEditor) => {
                try{
                    gmlParser.parse(atom.workspace.getActiveTextEditor().buffer.cachedText);
                }
                catch(e){
                    if(e.location == undefined)
                        throw e; //If it's not a parse error
                    return [{
                        type: "Error",
                        text: e.message,
                        range: [[e.location.start.line - 1, e.location.start.column - 1],
                                [e.location.end.line - 1, e.location.end.column - 1]],
                        filePath: textEditor.getPath()
                    }]
                }
                return [];
            }
        }
    }
}
