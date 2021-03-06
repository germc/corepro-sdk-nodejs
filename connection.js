/**
 * Created by socialmoneydev on 8/29/2014.
 */


var Connection = function() {
    var self = this;

    self.apiKey = null;
    self.apiSecret = null;
    self.domainName = null;
    self.proxyServer = null;
    self.proxyPort = null;

    self.createFromConfig = function(apiKeyOverride, apiSecretOverride, domainNameOverride, proxyServerOverride, proxyPortOverride){
        var config = require('./config.json');
        self.apiKey = apiKeyOverride || config.coreProApiKey || null;
        self.apiSecret = apiSecretOverride || config.coreProApiSecret || null;
        self.domainName = domainNameOverride || config.coreProDomainName ||  null;
        self.proxyServer = proxyServerOverride || config.coreProProxyServer ||  null;
        self.proxyPort = proxyPortOverride || config.coreProProxyPort||  null;
        return self;
    };

    self.getAuthHeader = function(){
        b64auth = new Buffer(self.apiKey + ":" + self.apiSecret).toString('base64');
        return b64auth;
    };

};
module.exports = Connection;