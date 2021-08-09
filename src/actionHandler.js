const core = require('@actions/core');

const run = async () => {
  try {

    const callargs_json = core.getInput('callargs')
    console.log(`callargs: ${callargs_json}`)

    const callargs = JSON.parse(callargs_json)
    console.log(callargs)

    if(callargs.foo) console.log(callargs.foo)

  } catch (err) {
    console.log(err)
    core.setFailed(err.message);
  }
}

run();
