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
                        range: [[e.location.start.line, e.location.start.column],
                                [e.location.end.line, e.location.end.column]],
                        filePath: textEditor.getPath()
                    }]
                }
                return [];
            }
        }
    }
}
