function returnParamUrl(objectParam: object) {
    const paramKeys = Object.keys(objectParam);
    const len = paramKeys.length;
    let count = 0;
    let paramString = '?';

    paramKeys.forEach((pk) => {
        count++;
        paramString += pk + '=' + objectParam[pk];
        if (count !== len) {
            paramString += '&';
        }

    });

    return paramString;
}