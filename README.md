# nodejs-hello-team
Hello World sample

The purpose of this repo is to demonstrate how easy it is begin instrumentation with New Relic and Node js.  

# Usage
node indexNodeAgentInstall.js

# Requirements

Operating systems

* Linux
* SmartOS
* macOS 10.7 and higher
* Windows Server 2008 and higher

# Installation

npm install newrelic --save

From node_modules/newrelic, copy newrelic.js into the root directory of your app.

In newrelic.js, add an application name that will appear on the New Relic console and the New Relic license key for access.  See [Locate New Relic license key](https://docs.newrelic.com/docs/accounts/install-new-relic/account-setup/license-key) for instructions.

Add require('newrelic'); as the first line of your app's main module.

# Run agent sample

node indexNodeAgentInstall.js

Please note that the application will display in New Relic.  No statistics will be captured due to zero load from the sample application.

# Detailed Agent Installation Instructions
See [Install Node.js on New Relic](https://docs.newrelic.com/docs/agents/nodejs-agent/installation-configuration/install-nodejs-agent) for detailed installation instructions.

# Run custom attributes sample

node indexCustomAttributes.js

Please note that the same application will display in New Relic.  No statistics will be captured due to zero load from the sample application.  Its purpose is to give you an indication of how to make the call.

# Detailed API calls
See [Add custom attributes to objects](https://docs.newrelic.com/docs/agents/nodejs-agent/api-guides/nodejs-agent-api#add-custom-attribute) for detailed instructions.
