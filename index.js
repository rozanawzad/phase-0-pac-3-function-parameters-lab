function introduction(name){
    return `Hi, my name is ${name}.`;
}
introduction(aki);
function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguage(Aki, Ember.js);
function introductionWithLanguageOptional(name, language= JavaScript){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguageOptional(Aki, React);
function introductionWithLanguageOptional(name, language= "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguageOptional(Aki, React);