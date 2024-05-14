const core = require('@actions/core');
const github = require('@actions/github');
const {frequencyCounterWithMap}  =  require('./techiques/counter-pattern')

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);

  frequencyCounterWithMap([1,2,2,3,4,5,7,7,8,4])
} catch (error) {
  core.setFailed(error.message);
}
