# Testing Pop Over component using PopperJS and React Portal API.

Some libraries (eg Popover component of BlueprintJS) which uses PopperJS and React Portal API are hard to test because of missing dependent functions used by PopperJS.
You can provide a mock implementation of the methods like I did in `setupTests.js`